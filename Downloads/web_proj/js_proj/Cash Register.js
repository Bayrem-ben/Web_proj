function checkCashRegister(price, cash, cid) {
  var chang_to_give = cash - price;
  chang_to_give = chang_to_give.toFixed(2)
  let cidf = 0;
  var mxelem = [];

  const UNIT_AMOUNT = {
    "PENNY": .01, "NICKEL": .05, "DIME": .10, "QUARTER": .25, "ONE": 1.00, "FIVE": 5.00, "TEN": 10.00, "TWENTY": 20.00, "ONE HUNDRED": 100.00
  }

  for (let element of cid) {
    cidf += element [1];
    mxelem.push(element[1]);    
  } 
  cidf = cidf.toFixed(2);
  var maxelem = Math.max.apply(Math, mxelem).toFixed(2);
  const changeArray = [];

  console.log(chang_to_give);
  console.log(cidf);
  //console.log(mxelem);
  //console.log(maxelem);
 
  if (0>(cidf - chang_to_give)) {
    return {status: "INSUFFICIENT_FUNDS", change: []}}
  else if (chang_to_give == cidf) {
    return {status: "CLOSED", change: cid}}
  else if (0<(cidf - chang_to_give)) {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (chang_to_give >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        temp[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];
        chang_to_give -= UNIT_AMOUNT[elem[0]];
        chang_to_give = chang_to_give.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  /*if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }*/
if (maxelem > (cidf - chang_to_give)) {return {status: "INSUFFICIENT_FUNDS", change: []}}
  return { status: "OPEN", change: changeArray};
    };
}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));