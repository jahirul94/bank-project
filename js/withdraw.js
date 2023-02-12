// ---------step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
//-------   step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

// --------step-3
  const withdrawDisplay = document.getElementById('withdraw-display');
  const withdrawDisplayValueString = withdrawDisplay.innerText;
  const withdrawDisplayValue = parseFloat(withdrawDisplayValueString);

//-------- step-5
 const totalDipositField = document.getElementById('total-deposit');
 const totalDipositString = totalDipositField.innerText;
 const totalDiposit = parseFloat(totalDipositString);


 // -------laststep

withdrawField.value ='';



 if(newWithdrawAmount>totalDiposit){
  alert(" You haven't enough money");
  return ;
 }

// ------- step-4

const newWithDrawDisplay = withdrawDisplayValue + newWithdrawAmount;
withdrawDisplay.innerText = newWithDrawDisplay;



// ------step --6
const totalDipositDisplay = totalDiposit - newWithdrawAmount;
totalDipositField.innerText =totalDipositDisplay;



})