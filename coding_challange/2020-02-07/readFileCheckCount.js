const fs = require('fs');
var file = '/Users/prajwal/workspace/coding_challange/problems/test.txt'
var content;
var counts = {};
fs.readFile(file, "utf8", function readData(err, data) {
  if (err){
    throw err;
  }
  //console.log("Data of the file is ", data);
  content = data;
  console.log("Data of the file is ", content);
  console.log("Length of the data is ", content.length);
  for (var i = 0; i < content.length; i++)
  {
    char_count = content.charAt(i);
    var count = counts[char_count];
     counts[char_count] = count ? count + 1 : 1;
  }
  for (char_count in counts) {
  console.log(char_count + " charcter count is " + counts[char_count]);
}
});
