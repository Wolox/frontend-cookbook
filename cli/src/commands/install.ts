import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import { fetchRecipe } from '../fetch-recipe';

export default class Install extends Command {
  static description = 'Installs a recipe from the cookbook';

  static examples = ['$ cookbook install react buttons button-1'];

  static flags = {
    help: flags.help({ char: 'h' })
  };

  static args = [
    { name: 'tech', required: true },
    { name: 'category', required: true },
    { name: 'recipe', required: true }
  ];

  async run() {
    const {
      args: { tech, category, recipe }
    } = this.parse(Install);

    cli.action.start(`Installing recipe ${tech} ${category}/${recipe}`);
    await fetchRecipe({ tech, category, name: recipe });
    cli.action.stop();
  }
}
