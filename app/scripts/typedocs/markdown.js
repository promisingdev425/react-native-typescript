const path = require('path')
const { readFileSync } = require('fs')
const Handlebars = require('handlebars')
const objectGet = require('lodash/get')

module.exports = {
  generate: (package, repository) => {
    /**
     * Get or compile a Handlebars partial.
     */
    const getPartial = (name) => {
      let partial = Handlebars.partials[name]
      if (typeof partial !== 'function') {
        partial = Handlebars.compile(partial)
      }
      return partial
    }

    /**
     * Add padding to the front of a string.
     */
    const pad = (count, text = '  ') => {
      let out = ''
      for (let i = 0; i < count; i++) {
        out += text
      }
      return out
    }

    /**
     * Load a partial file and register it with Handlebars.
     * You can also replace any content in the file with custom
     * variables by using the replacement parameter.
     */
    const registerPartial = (name, file, replacements) => {
      const data = readFileSync(path.resolve(__dirname, 'templates', file))
      let template = `${data}`.trim()

      if (replacements) {
        if (!Array.isArray(replacements)) replacements = [replacements]
        replacements.forEach(({ search, replacement }) => {
          const exp = new RegExp(search, 'g')
          template = template.replace(exp, replacement)
        })
      }

      Handlebars.registerPartial(name, template)
    }

    // TODO Auto register all templates in the folder
    registerPartial('toc-item', 'toc-item.hbs')
    registerPartial('signatures', 'signatures.hbs')
    registerPartial('description', 'description.hbs')
    registerPartial('parameters', 'parameters.hbs')
    registerPartial('return', 'return.hbs')
    registerPartial('type', 'type.hbs')
    registerPartial('callback', 'callback.hbs')
    registerPartial('files', 'files.hbs', [
      { search: '{{repository}}', replacement: repository },
    ])
    registerPartial('doc-function', 'doc-function.hbs')
    registerPartial('doc-class', 'doc-class.hbs')
    registerPartial('doc-constructor', 'doc-constructor.hbs')
    registerPartial('doc-variable', 'doc-variable.hbs')
    registerPartial('doc-module', 'doc-module.hbs')
    registerPartial('main', 'main.hbs')

    // HELPERS
    Handlebars.registerHelper('pad', (count, text = ' ') => pad(count, text))
    Handlebars.registerHelper('lowercase', function (options) {
      return options.fn(this).toLowerCase()
    })
    Handlebars.registerHelper('raw-helper', function (options) {
      return new Handlebars.SafeString(options.fn(this))
    })
    Handlebars.registerHelper(
      'hasDocs',
      (m) =>
        m.kindString === 'Function' ||
        m.kindString === 'Constructor' ||
        m.kindString === 'Variable',
    )
    Handlebars.registerHelper('log', (...variables) =>
      console.log('>', ...variables.slice(0, -1)),
    )
    Handlebars.registerHelper('logJSON', (variable) =>
      console.log('>', JSON.stringify(variable, null, 2)),
    )
    Handlebars.registerHelper('eq', (a, b) => a === b)
    Handlebars.registerHelper('ifEqual', function (a, b, options) {
      if (a === b) options.fn(this)
    })
    Handlebars.registerHelper('array-index', (list, index) => list[index])
    Handlebars.registerHelper('with', function (path) {
      return objectGet(this, path)
    })
    Handlebars.registerHelper('context', function (path, options) {
      const context = objectGet(this, path)
      if (context) return options.fn(context)
      else return undefined
    })

    Handlebars.registerHelper('toc', (package) => {
      const partial = getPartial('toc-item')

      const renderModule = (m, indent = '') => {
        let out = '';

        // If the module has a name, output an item for the current
        // module depth. Otherwise, this is the root module and we
        // don't need its name in the list.
        if (m.name) {
          out = indent + partial(m)
          indent += ' '
        }

        if (m.children?.length > 0) {
          out += m.children.map((c) => renderModule(c, indent)).join('')
        }
        return new Handlebars.SafeString(out)
      }

      const result = package
        .map((m) => {
          return renderModule(m)
        })
        .join('')
      return new Handlebars.SafeString(result)
    })

    Handlebars.registerHelper('module-docs', (package) => {
      const renderModule = (m, level = 1) => {
        const partialName = `doc-${m.kindString.toLowerCase()}`
        try {
          const partial = getPartial(partialName)

          let out = partial({ ...m, leve: level + 1 })
          if (m.children?.length > 0) {
            out += m.children.map((c) => renderModule(c, level + 1)).join('')
          }
          return out
        } catch (e) {
          console.warn(`Failed to load partial ${partialName}`)
        }
      }

      return new Handlebars.SafeString(
        package.map((m) => renderModule(m, 1)).join(''),
      )
    })

    const render = Handlebars.compile('{{> main}}')
    return render({ package })
  },
}
