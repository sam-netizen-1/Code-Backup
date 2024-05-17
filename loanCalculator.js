const createLoanCalculator  = rateOfInterest=>{
    return {
        installmentCalculate(principleamount,noOfinstallments){
            return (principleamount*noOfinstallments*rateOfInterest/100);
        },
        changeRateOfInterest(newRate) {
            rateOfInterest =newRate;
        },
      };
}

const homeLoanCalculator = createLoanCalculator(8);
console.log(homeLoanCalculator.installmentCalculate(2000,5));
homeLoanCalculator.changeRateOfInterest(10);
console.log(homeLoanCalculator.installmentCalculate(2000,5));
homeLoanCalculator.changeRateOfInterest(7);
console.log(homeLoanCalculator.installmentCalculate(2000,5));