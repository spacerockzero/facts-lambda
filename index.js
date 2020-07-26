const facts = require('./facts.json')

console.log('facts.length', facts.length)

exports.handler = async (event, context, callback) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const response = {
    statusCode: 200,
    body: JSON.stringify(randomFact),
  };
  return callback(null, response);
};