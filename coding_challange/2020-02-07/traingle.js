function displayPyramid(n) {
  for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 1; j < n-i; j++) {
      str +=  '_';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str += '*';
    }
    console.log(str);
  }
}
displayPyramid(5);
