let first = 'bbccddfweEg';
let second = 'tttjkkdseeeeeeeeeeg';

function getLetters(str){
  let tempArr = str.split('');
  let letterObj = {};

  //create object with all letters
  for (let i=0; i<tempArr.length; i++){
    if (letterObj.hasOwnProperty(tempArr[i])){
    } else {
      letterObj[tempArr[i]] = true;
    }
  }

  let letters = Object.keys(letterObj);


  console.log(letters.sort())
}

getLetters(first)
