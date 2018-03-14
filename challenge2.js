//given a number, find the smallest combination of factors that add up to that
//ex: 100 should be 20 (cuz of 10 + 10)
//Given A = B*C, find the smallest combination of B+C.

function getSmall(num){
  //find if the number is even or odd, if even go to num/2, if odd go to (num-1)/2
  //find the factors of num

  let half;
  let combos = {};

  if (num%2 === 0){ //even num
    half = num/2;
  } else { //odd num
    half = (num-1)/2;
  }

  //get all combos
  for (let i=1; i<half; i++){
    let val = num%i;

    if (val === 0){
      combos[i+(num/i)] = [i, num/i]
    }
  }

  console.log(combos)


}

getSmall(5556)
