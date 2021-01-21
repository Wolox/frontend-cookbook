import {expect, test} from '@oclif/test'

describe('install', () => {
  test
  .stdout()
  .command(['install', 'react', 'buttons', 'button-1'])
  .it('runs install and shows the tech, category and recipe', ctx => {
    expect(ctx.stdout).to.contain('react')
    expect(ctx.stdout).to.contain('buttons')
    expect(ctx.stdout).to.contain('button-1')
  })
})
