//   step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
//   step-2
    const dipositFild = document.getElementById('deposit-field');
    const newDepositAmountString = dipositFild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // for check type of input console.log(typeof newDepositAmount);

//   step-3
     const dipositTotalElement = document.getElementById('deposit-display');
     const previousdipositTotalString =dipositTotalElement.innerText;
     const previousdipositTotal = parseFloat(previousdipositTotalString);
     const currentDepositTotal = previousdipositTotal + newDepositAmount;
//   step -4 
      dipositTotalElement.innerText = currentDepositTotal;
// step -5  get total balance 
   const totalBalance = document.getElementById('total-deposit');
   const previousTotalBalanceString = totalBalance.innerText;
   const previousTotalBalance =parseFloat(previousTotalBalanceString);


//    step-6
    const newBalance = previousTotalBalance + newDepositAmount;
    totalBalance.innerText = newBalance;

 //   step -7
   dipositFild.value ='';

    

})