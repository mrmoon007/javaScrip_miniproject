function woodCalculator (chair, table , bed){
    let resultChair = chair*1;
    let resultTable = table*3;
    let resultBed = bed*5;

    let result = resultBed + resultChair + resultTable;
    return result;
}

let result = woodCalculator(1,3,1);
console.log('wood calculator : '+ result + ' cubic feet');
