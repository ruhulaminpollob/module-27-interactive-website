// bank statement page script

document.getElementById('deposit-btn').addEventListener('click', function(){
            
    const depositValueString = document.getElementById('deposit-filed');
    const depositValue = parseFloat(depositValueString.value);
    depositValueString.value = '';
    if (isNaN(depositValue)) {
        alert('Please Input Number')

        return;
    }
    const depositTotalString =document.getElementById('deposit-total');
    const depositTotal = parseFloat(depositTotalString.innerText);
    const balanceTotalString =document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalString.innerText)
    
    
    const finalDeposit = depositTotal + depositValue;
    const finalBalance = balanceTotal + depositValue;
    
    depositTotalString.innerText = finalDeposit;
    balanceTotalString.innerText = finalBalance;

    
})

// withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
            
    const withdrawValueString = document.getElementById('withdraw-filed');
    const withdrawValue = parseFloat(withdrawValueString.value);
    const withdrawTotalString =document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalString.innerText);
    const balanceTotalString =document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalString.innerText)
    
    
    withdrawValueString.value = '';
    if (withdrawValue > balanceTotal) {
        alert('baper taka nai')
        return;
    }

    if (isNaN(withdrawValue)) {
        alert('Please Input Number')

        return;
    }
    
    
    
    const finalDeposit = withdrawTotal + withdrawValue;
    const finalBalance = balanceTotal - withdrawValue;
    
    withdrawTotalString.innerText = finalDeposit;
    balanceTotalString.innerText = finalBalance;            
})