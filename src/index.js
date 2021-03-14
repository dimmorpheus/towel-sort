
// You should implement your task here.

module.exports = function towelSort (matrix) {

	var tmp = 0;

	if (matrix == undefined)
		return new Array();

	if (matrix.length == 0)
		return new Array();

	for (var i = 0; i < matrix.length; ++i)
		tmp += matrix[i].length;

	var arr = new Array(tmp);
	tmp = 0;

	for (var i = 0; i < matrix.length; ++i) 
		for (var j = 0; j < matrix[i].length; ++j) {
			arr[tmp++] = ((i % 2) ? matrix[i][matrix[i].length - 1 -j] : matrix[i][j]);
		}
		
  return arr;
}
