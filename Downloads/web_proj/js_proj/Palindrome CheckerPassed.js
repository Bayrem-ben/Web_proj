function palindrome(str) {
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
  var lowStr = str.toLowerCase().replace(re, '');

  var reverseStr = lowStr.split('').reverse().join(''); 

if (reverseStr === lowStr){
  return true;
}
else 
return false;
}