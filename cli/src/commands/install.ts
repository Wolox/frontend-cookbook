import {Command, flags} from '@oclif/command'
import {fetchRecipe} from '../fetch-recipe'
import cli from 'cli-ux'

export default class Install extends Command {
  static description = 'install a recipe from the cookbook'

  static examples = [
    '$ cookbook install react buttons button-1',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'tech', required: true},
    {name: 'category', required: true},
    {name: 'recipe', required: true},
  ]

  async run() {
    const {args: {tech, category, recipe}} = this.parse(Install)

    cli.action.start(`Installing recipe ${tech} ${category}/${recipe}`)

    await fetchRecipe({tech, category, name: recipe})
    // const data = await fetch('https://api.github.com/graphql', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     authorization: `Bearer ${flags.token}`,
    //   },
    //   body: JSON.stringify({query: query(args.tech, args.category, args.recipe)}),
    // })
    // .then(r => r.json())

    // data.data.repository.object.entries.forEach((entry: { name: string; object: { text: string; isBinary: boolean}  }) => {
    //   if (entry.object.isBinary) {
    //     this.log(`Binary file ${entry.name} not installed.`)
    //     return
    //   }
    //   fs.writeFile(`${entry.name}`, entry.object.text, err => {
    //     if (err) {
    //       this.log(err.message)
    //       return
    //     }

    //     this.log(`File ${entry.name} installed.`)
    //   })
    // })

    // TODO: this isn't waiting for the files to be installed
    cli.action.stop()
  }
}
