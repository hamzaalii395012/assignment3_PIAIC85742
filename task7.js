var a = [10,20,40,4,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c = [...new Set(b.concat(a))];
console.log(c);