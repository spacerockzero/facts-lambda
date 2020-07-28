const { expect } = require('chai')
const { handler } = require('./index')

describe('test lambda', () => {
  it('should respond with random fact when no params are used', () => {
    // no param
    handler(null, null, (err, res) => {
      console.log(err, res)
      expect(err).to.equal(null)
      expect(res).to.exist
    })
  })
  it('should respond with random familymode fact when param is used', () => {
    // familymode param
    handler({ queryStringParameters: { 'familymode': true } }, null, (err, res) => {
      console.log(err, res)
      expect(err).to.equal(null)
      expect(res).to.exist
    })
  })
})