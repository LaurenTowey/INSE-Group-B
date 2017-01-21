var url = require('underscore');

function add(a,b)
{
  return a+b;
}

//example compare function layout
function compare(arrayVar1, arrayVar2)
{
  var isTrue = true;
  var l = arrayVar1.length;

  if (arrayVar1.length!=arrayVar2.length) {
    return false;
  }

  if (isTrue) {
    for (var i=0; i<l;i++) {
        if (arrayVar1[i]!==arrayVar2[i]) {
          isTrue=false;
        }
     }
   }

  return isTrue;
}

//example function layout
function range(nums){
  var min = url.min(nums);
  var max = url.max(nums);

  var result = max-min;
  return result;
}



module.exports.add = add;
module.exports.compare = compare;
module.exports.range = range;
