
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || !matrix) {
    return [];
  }

  return matrix.reduce((a, b, i) => a.concat(i % 2 === 0 ? b : b.reverse()), []);
}
