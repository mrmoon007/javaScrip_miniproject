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