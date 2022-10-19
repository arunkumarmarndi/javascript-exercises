const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  total = 0;
	for(let i=0;i<arr.length;i++){
    total = total + arr[i];
  }
  return total;
};

const multiply = function(arr) {
  product = 1;
	for(let i=0;i<arr.length;i++){
    product = product * arr[i];
  }
  return product;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if(n === 1){
    return 1;
  }
  else{
    let fact = 1;
    for(let i=1;i<=n;i++){
      fact = fact * i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
