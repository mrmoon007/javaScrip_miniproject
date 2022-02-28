function feetToMile( feet ){
    let result = feet/5280;
    return result;
}

let mile = feetToMile(70000);
console.log(mile);

function tinyFriend( friends ) {
    let result = friends[0];
    for(let i =0; i< friends.length ; i++) {
        let y = friends[i];
        if (y.length < result.length) {
            result= friends[i];
        }
    }
    return result;
}

console.log(tinyFriend(['moon0','mostafijur','hemal']))


//check odd even number 

function checkOddEvenNumber (items) {
    let values = [];
    let odd= [];
    let even = [];
    items.forEach(item => {
        console.log(item);
        if (item%2 == 0) {
            odd.push(item);
            
        } else {
            even.push(item);
            
        }
    });
    // values.push(odd);
    values[odd]=odd;
    values[even]=even;
    // values.push(even);
    return values;
}

let m = checkOddEvenNumber([1,5,90,45]);
console.log('result ',m);