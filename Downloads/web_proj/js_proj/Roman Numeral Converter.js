function convertToRoman(num) {
   if (isNaN(num)) {
    return 'Not a Number!';
  }
var digits = num.toString().split('').reverse();
var realDigits = digits.map(Number);

var val = "";
var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],  ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], ["","M","MM","MMM"]]; 

for (var i = 0; i < realDigits.length; i++) {
  val = numeralCodes[i][realDigits[i]]+val;
  console.log(val)
   }
console.log(val);
 return val.toUpperCase();
}
