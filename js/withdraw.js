// step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawType = document.getElementById('withdraw-type');
    const newWithdrawAmountString = withdrawType.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 2
    const withdrawBalance = document.getElementById('withdraw-balance');
    const previousWithdrawBalanceString = withdrawBalance.innerText;
    const previousWithdrawBalance = parseFloat(previousWithdrawBalanceString);
    

    // step 3
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);
    withdrawType.value = '';
    if(newWithdrawAmount > previousBalanceTotal){
        alert('bank a taka nai');
        return;
    }
    const currentWithdrawBalance = previousWithdrawBalance + newWithdrawAmount;
    withdrawBalance.innerText = currentWithdrawBalance;

    const currentBalanceTotal = previousBalanceTotal - currentWithdrawBalance;
    balanceTotalElement.innerText = currentBalanceTotal;

    
})