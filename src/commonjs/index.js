const arr = [1, 2, 3];
const arr2 = [1];

//只能有一个导出，否则之后最后一个生效
// module.exports = arr;

exports.arr = arr;
exports.arr2 = arr2;