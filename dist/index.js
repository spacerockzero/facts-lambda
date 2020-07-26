const facts = require('facts/data/facts.json')

console.log('facts.length', facts.length)

exports.handler = async (event) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(randomFact),
  };
  return response;
};
