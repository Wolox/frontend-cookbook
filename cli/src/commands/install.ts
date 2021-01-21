import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import fetch from 'node-fetch'
import {query} from '../query'

export default class Install extends Command {
  static description = 'install a recipe from the cookbook'

  static examples = [
    '$ cookbook install react buttons button-1',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    token: flags.string({char: 't'}),
  }

  static args = [
    {name: 'tech', required: true},
    {name: 'category', required: true},
    {name: 'recipe', required: true},
  ]

  async run() {
    const {args, flags} = this.parse(Install)

    this.log(`Installing recipe ${args.tech} ${args.category}/${args.recipe}...`)
    this.log()
    const data = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        authorization: `Bearer ${flags.token}`,
      },
      body: JSON.stringify({query: query(args.tech, args.category, args.recipe)}),
    })
    .then(r => r.json())

    data.data.repository.object.entries.forEach((entry: { name: string; object: string; isBinary: boolean  }) => {
      if (entry.isBinary) {
        this.log(`Binary file ${entry.name} not installed.`)
        return
      }

      fs.writeFile(`${entry.name}`, entry.object, err => {
        if (err) {
          this.log(err.message)
          return
        }

        this.log(`File ${entry.name} installed.`)
      })
    })

    // TODO: this isn't waiting for the files to be installed
    this.log()
    this.log(`Recipe ${args.tech} ${args.category}/${args.recipe} installed successfully!`)
  }
}
