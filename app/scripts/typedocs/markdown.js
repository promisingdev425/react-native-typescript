const path = require('path');
const { readFileSync } = require('fs');
const Handlebars = require('handlebars');

module.exports = {
  generate: (package, repository) => {
    /**
     * Get or compile a Handlebars partial.
     */
    const getPartial = (name) => {
      let partial = Handlebars.partials[name];
      if (typeof partial !== 'function') {
        partial = Handlebars.compile(partial);
      }
      return partial;
    }

    /**
     * Add padding to the front of a string.
     */
    const pad = (count, text = '  ') => {
      let out = '';
      for (let i = 0; i < count; i++) {
        out += text;
      }
      return out;
    }

    /**
     * Load a partial file and register it with Handlebars.
     * You can also replace any content in the file with custom
     * variables by using the replacement parameter.
     */
    const registerPartial = (name, file, replacements) => {
      const data = readFileSync(path.resolve(__dirname, 'templates', file));
      let template = `${data}`;

      if (replacements) {
        if (!Array.isArray(replacements)) replacements = [replacements];
        replacements.forEach(({search, replacement}) => {
          const exp = new RegExp(search, 'g');
          template = template.replace(exp, replacement);
        });
      }

      Handlebars.registerPartial(name, template);
    };

    registerPartial('toc-item', 'toc-item.hbs');
    registerPartial('signatures', 'signatures.hbs');
    registerPartial('description', 'description.hbs');
    registerPartial('parameters', 'parameters.hbs');
    registerPartial('return', 'return.hbs');
    registerPartial('files', 'files.hbs', [{search: '{{repository}}', replacement: repository}]);
    registerPartial('doc-function', 'doc-function.hbs');
    registerPartial('main', 'main.hbs');

    // TODO Create these templates
    Handlebars.registerPartial('doc-module', '');
    Handlebars.registerPartial('doc-class', '');
    Handlebars.registerPartial('doc-constructor', '');

    Handlebars.registerHelper('pad', (count, text = ' ') => pad(count, text));
    Handlebars.registerHelper('lowercase', function(options) {
      return options.fn(this).toLowerCase();
    });
    Handlebars.registerHelper("raw-helper", function (options) {
      return new Handlebars.SafeString( options.fn(this) );
    });
    Handlebars.registerHelper('hasDocs', (m) =>
      m.kindString === 'Function' ||
      m.kindString === 'Constructor'
    );

    Handlebars.registerHelper('toc', (package) => {
      const partial = getPartial('toc-item');

      const renderModule = (m, indent = '') => {
        let out = indent + partial(m);
        if (m.children?.length > 0) {
          out += m.children.map(c => renderModule(c, indent + '  '))
            .join('');
        }
        return new Handlebars.SafeString(out);
      }

      const result = package.map(m => {
        return renderModule(m);
      }).join('');
      return new Handlebars.SafeString(result);
    });

    // Keep this custom partial here because it's tied to the
    // `module-docs` helper.
    Handlebars.registerPartial('doc-item', '{{> (partialName)}}');

    Handlebars.registerHelper('module-docs', (package) => {
      const partial = getPartial('doc-item');

      const renderModule = (m, level = 1) => {
        const context = {
          item: m,
          level: level + 1,
          partialName: () => `doc-${m.kindString.toLowerCase()}`,
        };

        let out = partial(context);
        if (m.children?.length > 0) {
          out += m.children.map(c => renderModule(c, level + 1)).join('');
        }
        return out;
      };

      return new Handlebars.SafeString(
        package.map(m => renderModule(m, 1)).join('')
      );
    });

    const render = Handlebars.compile('{{> main}}');
    return render({package});
  },
};
