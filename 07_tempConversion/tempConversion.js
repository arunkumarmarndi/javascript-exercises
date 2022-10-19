const ftoc = function(f) {
  let c = 5/9*(f-32);
  c = parseFloat(c.toFixed(1));
  return c;
};

const ctof = function(c) {
  let f = (9/5*c) + 32;
  f = parseFloat(f.toFixed(1));
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
