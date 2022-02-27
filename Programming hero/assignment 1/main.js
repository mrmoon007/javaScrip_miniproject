function feetToMile( feet ){
    let result = feet/5280;
    return result;
}

let mile = feetToMile(70000);
console.log(mile);