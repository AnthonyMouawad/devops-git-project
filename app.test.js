// app.test.js
const { sum } = require('./app');
function runTests() {
if (sum(2, 3) !== 5) {
throw new Error('Test échoué : sum(2, 3) devrait valoir 5');
}
console.log('Tous les tests sont passés');
}
runTests();
