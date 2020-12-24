function calcBill() {
  //Input bill amount
  var billAmount = document.getElementById('bill-amount').value;

  //Input Cash Given
  var cashGiven = document.getElementById('cash-given').value;

  //Calculate balance to be returned
  var cashReturn = cashGiven - billAmount;

  //Display cash to be returned
  document.getElementById('cash-return').innerHTML = cashReturn;

  //Calculate return of change with minimum number of notes
  var notes2000 = Math.floor(cashReturn / 2000);
  document.getElementById('note2000').innerHTML = notes2000;

  cashReturn = cashReturn - notes2000 * 2000;
  var notes500 = Math.floor(cashReturn / 500);
  document.getElementById('note500').innerHTML = notes500;

  cashReturn = cashReturn - notes500 * 500;
  var notes100 = Math.floor(cashReturn / 100);
  document.getElementById('note100').innerHTML = notes100;

  cashReturn = cashReturn - notes100 * 100;
  var notes20 = Math.floor(cashReturn / 20);
  document.getElementById('note20').innerHTML = notes20;

  cashReturn = cashReturn - notes20 * 20;
  var notes10 = Math.floor(cashReturn / 10);
  document.getElementById('note10').innerHTML = notes10;

  cashReturn = cashReturn - notes10 * 10;
  var notes5 = Math.floor(cashReturn / 5);
  document.getElementById('note5').innerHTML = notes5;

  cashReturn = cashReturn - notes5 * 5;
  var notes1 = Math.floor(cashReturn / 1);
  document.getElementById('note1').innerHTML = notes1;
}
