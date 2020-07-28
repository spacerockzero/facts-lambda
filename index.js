const facts = require('./facts.json')
const factsFamily = require('./factsFamily.json')

console.log('facts.length', facts.length)

exports.handler = async (event, context, callback) => {
  const familymode = event['pathParameters']['familymode']

  const randomFact = familymode
    ? factsFamily[Math.floor(Math.random() * factsFamily.length)]
    : facts[Math.floor(Math.random() * facts.length)]

  const response = {
    statusCode: 200,
    body: JSON.stringify(randomFact),
  };
  return callback(null, response);
};