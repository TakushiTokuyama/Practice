var sum = (a, b) => a + b;

sum(1, 2);

var sumTrueOrFauls = (a, b) => {

    var result = a + b;
    if (result % 2 === 0) {
        console.log("偶数です");
        console.log(sum(1, 2));
    } else if (result % 2 === 1) {
        console.log("奇数です");
    } else if (result === 0) {
        console.log("偶数です");
    }
}

sumTrueOrFauls(0, 0);