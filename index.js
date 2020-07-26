const facts = require('facts/data/facts.json')

console.log('facts.length', facts.length)

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
