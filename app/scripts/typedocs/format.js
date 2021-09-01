
/**
 * This module outputs markdown from the given
 * Typedoc JSON.
 */
module.exports = {
  format: (json) => {
    const docs = require(json);

    const modulePackage = (m) => {
      let name = '';
      if (m.sources) {
        name = m.sources[0].fileName
          .split('/')
          .slice(0, -1)
          .join('.');
      }
      return name;
    }

    /**
     * Given a package name like foo.bar.baz, add
     * the given module to that deeply nested object
     * while creating any nodes that don't exist yet.
     */
    const addToPackage = (name, m, package, path, debug = false) => {
      const parts = name.split('.');
      const currentName = parts[0];
      const next = parts.slice(1).join('.');

      if (currentName) {
        let current = package.find(n => n.name === currentName);

        if (!current) {
          current = {
            name: currentName,
            kind: 1,
            kindString: "Module",
            children: [],
          };
          package.push(current);
        }

        if (next) {
          addToPackage(next, m, current.children, path, debug);
        }
        else {
          current.children.push(debug ? m.name : m);
        }
      }
    }

    const parseModule = (m, package, debug = false) => {
      const name = modulePackage(m);

      const recurse = () => {
        if (m.children?.length > 0) {
          m.children.forEach(child => parseModule(child, package, debug));
        }
      }

      const add = () => {
        addToPackage(name, m, package, name, debug);
      }


      switch(m.kindString) {
        case 'Module':
        case undefined:
          recurse();
        break;
        case 'Class':
          add();
        break;
        default:
          add();
          recurse();
        break;
      }

      return package;
    }

    return parseModule(docs, []);
  },
};

