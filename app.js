// app.js
function sum(a, b) {
return a + b;
}
// Exécution directe pour vérification manuelle
if (require.main === module) {
console.log("2 + 3 =", sum(2, 3));
}

module.exports = { sum };
