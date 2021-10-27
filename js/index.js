//bài 1
const ten = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];


function allLongestString(inputArray) {
  if(Array.isArray(inputArray) == true) {
    let long1 = inputArray[0].length,
    arrlong1 = []
  for(let i in inputArray) {
    if (inputArray[i].length >= long1)
    long1 = inputArray[i].length
  }
  inputArray.map(str => {
    if(str.length >= long1)
    arrlong1.push(str)
  })
  return arrlong1
  }
}
console.log(allLongestString(ten));
// bài 2
const height = [60, 40, 55, 75, 64]

function alternatingSums(array) {
  let sumCanNang = []
  let sumCanNangLe = 0;
  let sumCanNangChan = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      sumCanNangChan += array[i]
    } else {
      sumCanNangLe += array[i]
    }

  }
  sumCanNang.push(sumCanNangChan)
  sumCanNang.push(sumCanNangLe)
  return sumCanNang;
}
console.log(alternatingSums(height))
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}






