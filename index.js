const facts = require('./facts.json')
const factsFamily = require('./factsFamily.json')

console.log('facts.length', facts.length)

exports.handler = async (event, context, callback) => {

  // detect familymode from queryString
  const familymode = event['pathParameters']['familymode']

  // choose random fact from either familymode or normal facts list
  const randomFact = familymode
    ? factsFamily[Math.floor(Math.random() * factsFamily.length)]
    : facts[Math.floor(Math.random() * facts.length)]

  // show if familymode is on
  randomFact.familymode = familymode

  // build response
  const response = {
    statusCode: 200,
    body: JSON.stringify(randomFact),
  };

  // return response to handler
  return callback(null, response);
};

// test handler locally
// exports.handler({ pathParameters: { 'familymode': true } }, null, (err, res) => console.log(err, res))