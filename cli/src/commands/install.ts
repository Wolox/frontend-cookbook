import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import * as inquirer from 'inquirer';
import * as fs from 'fs';
import { fetchRecipe } from '../fetch-recipe';

export default class Install extends Command {
  static description = 'Installs a recipe from the cookbook';

  static examples = ['$ cookbook install react buttons button-1'];

  static flags = {
    help: flags.help({ char: 'h' }),
    directory: flags.string({
      char: 'd',
      description: 'Directory to install the recipe into'
    })
  };

  static args = [
    { name: 'tech', required: true },
    { name: 'category', required: true },
    { name: 'recipe', required: true }
  ];

  async run() {
    const {
      args: { tech, category, recipe },
      flags: parsedFlags
    } = this.parse(Install);

    let { directory } = parsedFlags;
    if (!directory) {
      const responses: any = await inquirer.prompt([
        {
          name: 'directory',
          message:
            'Directory to install recipe into (leave empty to install in the current directory)',
          type: 'input',
          default: recipe
        }
      ]);
      ({ directory } = responses);
    }

    const rootDirectory: string = directory?.replace(/\/$/, '') || '';

    cli.action.start(
      `Installing recipe ${tech} ${category}/${recipe} in ${
        rootDirectory || 'current directory'
      }`
    );

    if (!fs.existsSync(rootDirectory)) {
      await fs.promises.mkdir(`.${rootDirectory}`, { recursive: true });
    }

    await fetchRecipe({ tech, category, name: recipe }, rootDirectory);
    cli.action.stop();
  }
}
