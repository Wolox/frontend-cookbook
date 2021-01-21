import {Command, flags} from '@oclif/command'
import fetch from 'node-fetch'

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
    const {args} = this.parse(Install)

    this.log(`Installing ${args.tech} ${args.category}/${args.recipe}...`)
    this.log()
    this.log('-index.tsx-\n')
    const file = await fetch(`https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-${args.tech}/${args.tech === 'react' ? 'src/' : ''}recipes/${args.category}/${args.recipe}/index.tsx`)
    this.log(await file.text())
  }
}
