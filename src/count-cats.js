module.exports = function countCats(matrix) {
    return matrix.reduce((acc1, cur1) => acc1 + cur1.reduce((acc2, cur2) => acc2 + (cur2 == "^^" ? 1 : 0), 0), 0);
};