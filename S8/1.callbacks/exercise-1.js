const numbersList = [];

function sum(a, b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function father(a,b,cb) {
   return  cb(a,b);
}

numbersList.push(father(1,2,sum));
numbersList.push(father(1,3,sum));
numbersList.push(father(2,1,substract));
numbersList.push(father(3,1,substract));

console.log(numbersList);