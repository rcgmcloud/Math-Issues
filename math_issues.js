Math.round = function(number) {
  var dot = number.toString().indexOf(".");
  var tenth = number.toString().indexOf(".") + 1;

  if(dot === -1){
    return number;
  }

  if (number.toString()[tenth] >= 5){
    return parseInt(number.toString().slice(0,dot)) + 1;
  } else {
    return parseInt(number.toString().slice(0,dot));
  }
};

Math.ceil = function(number) {
  var dot = number.toString().indexOf(".");
  var tenth = number.toString().indexOf(".") + 1;
  if(dot === -1){
    return number;
  }
  return parseInt(number.toString().slice(0,dot)) + 1;
};

Math.floor = function(number) {
  var dot = number.toString().indexOf(".");
  var tenth = number.toString().indexOf(".") + 1;
  if(dot === -1){
    return number;
  }
  return parseInt(number.toString().slice(0,dot));
};