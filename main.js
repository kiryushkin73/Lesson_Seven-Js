// 1
let arr = [1, 2, 3];
function arrPrint(a) {
  a.shift();
  if (a.length !== 0) arrPrint(a);
}
arrPrint(arr);

// 2
//version 1
let result = 0;
let arrSum = [1, 2, 3];
function getSum(a) {
  result += a.pop();
  if (a.length !== 0) getSum(a);
  return result;
}
console.log('Result recursion function v1 = ' + getSum(arrSum));
//version 2
function getSum2(a) {
  let result = 0;
  let tempMass = [];
  Object.assign(tempMass, a);
  function sum(mass) {
    result += mass.pop();
    if (mass.length !== 0) sum(mass);
  }
  sum(tempMass);
  return result;
}
let arrSum2 = [10, 20, 30];
console.log('Result recursion function v2 = ' + getSum2(arrSum2));
console.log('arrSum2 = ' + arrSum2.map((i) => i).join(', '));
//version 3
let getSumMethod = {
  result: 0,
  sum: function sum(mass) {
    this.result += mass.pop();
    if (mass.length !== 0) this.sum(mass);
    return this.result;
  },
};
let arrSum3 = [100, 200, 300];
console.log('Result recursion method v3 = ' + getSumMethod.sum(arrSum3));
console.log('arrSum3 = ' + arrSum2.map((i) => i).join(', '));

//3
console.log([1, 2, 3].concat([4, 5, 6])); //concat
console.log([1, 2, 3].reverse()); //reverse
//push and unshift start
function pushUnshiftArr(arrIn, arrOut, pushUnshift) {
  if (pushUnshift === 'push') {
    for (let i of arrOut) arrIn.push(i);
    arrOut.map((e) => arrIn.push(e)); //push
  } else {
    for (let i of arrOut.reverse()) arrIn.unshift(i); //unshift

    arrOut.reverse().map((e) => arrIn.unshift(e));
  }
  return arrIn;
}
console.log(pushUnshiftArr([1, 2, 3], [4, 5, 6], 'push')); //push
console.log(pushUnshiftArr([1, 2, 3], [4, 5, 6], 'unshift')); //unshift
function pushUnshiftArrRecursion(arrIn, arrOut, pushUnshift) {
  if (pushUnshift === 'push') {
    arrIn.push(arrOut.shift()); //push
  } else {
    arrIn.unshift(arrOut.pop()); //unshift
  }
  if (arrOut.length !== 0) pushUnshiftArrRecursion(arrIn, arrOut, pushUnshift);
  return arrIn;
}
console.log(pushUnshiftArrRecursion([10, 20, 30], [40, 50, 60], 'push')); //push recursion function
console.log(pushUnshiftArrRecursion([10, 20, 30], [40, 50, 60], 'unshift')); //unshift recursion function
//push and unshift end
console.log(['js', 'css', 'jq'].shift()); //shift
console.log(['js', 'css', 'jq'].pop()); //pop
//slice start
let massToSlice = [1, 2, 3, 4, 5];
let massToSliceStart = massToSlice.slice(0, 3);
console.log(massToSliceStart);
let massToSliceEnd = massToSlice.slice(3);
console.log(massToSliceEnd);
//slice end
console.log([3, 4, 1, 2, 7].sort()); //sort
console.log(Object.keys({ js: 'test', jq: 'hello', css: 'world' })); //Object.keys
//task 3 end ---------------------
