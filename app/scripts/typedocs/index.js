#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const colors = require('colors');

const { parse } = require('./typedocs');
const { format } = require('./format');
const { generate } = require('./markdown');

yargs(hideBin(process.argv))
  .command(
    'build entry',
    'Generate markdown documentation for the given entry point file.',
    yargs => yargs
      .positional('entry', {
        describe: 'The entry file to parse for code to document. Usually this would be the index file of a module in your source folder. It could also be a single source file.',
        demandOption: 'You must specify a js/ts entry point file to document.',
        type: 'string'
      })
      .options({
        'repo': {
          describe: 'The web URL of the root directory of your repo (used to create file links in your documentation). If you use GitHub, this should be something like "https://github.com/Organization/repo-name/tree/branch-name". If not specified, source file locations will not be linked to your repository.',
          type: 'string',
          default: undefined,
        },
        'out': {
          describe: 'The name and location of the markdown file to output (ex. docs/foo.md). If not specified, the markdown file will be placed next to the entry point with the name of the entry point.',
          type: 'string',
          default: undefined,
        },
        // TODO Allow overriding templates
        // 'templates': {
        //   describe: 'A folder containing templates to override the default templates provided by this project.',
        //   type: 'string',
        //   default: undefined,
        // }
      }),
    async ({entry, out, repo}) => {
      const file = path.parse(entry);

      // Determine the output file.
      if (!out) {
        out = path.join(file.dir, file.name);
      }

      // Add .md to the file name
      const parts = out.split('.');
      if (parts.length > 1 && parts[parts.length - 1] === 'md') {
        out = parts.slice(0, parts.length - 1).join('.');
      }
      out += '.md';

      try {
        console.log(`Parsing documentation from ${entry.white}...`.green);

        const temp = path.resolve('./temp.json');
        // Generate JSON docs from the given source file.
        await parse(entry, temp, false);

        // Format the typedoc JSON to our desired shape.
        const docs = format(temp);

        // Generate the output markdown
        const repositoryPath = `${repo}/${file.dir}`;
        const md = generate(docs, repositoryPath);

        console.log(`Writing markdown to ${out.white}...`.green);

        // Save the markdown to file.
        fs.writeFileSync(out, md);

        // Delete the temporary file
        fs.rmSync(temp);

        console.log(`Done! 🙌`.green);
      } catch(e) {
        console.error(e);
        process.exit(1);
      }
    }
  )
  .demandCommand()
  .argv;

