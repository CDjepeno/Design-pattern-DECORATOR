import { RunCofee } from '../src/RunCofee';
describe('RunCofee class', () => {
  it('Should be return right description',() => {
    expect(RunCofee.main1()).toBe(`
      Votre commande : expresso, chocolat, noisette
      Le prix : 2.65
    `)
  })
  it('Should be return right description',() => {
    expect(RunCofee.main2()).toBe(`
      Votre commande : sumatra, lait, noisette
      Le prix : 2.75
    `)
  })
})
