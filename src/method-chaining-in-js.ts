
//HOW TO CALCUALTE SUM(1)(2)(3)(4)()
function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        else {
            return a;
        }
    }
}

sum(1)(2)(4)(5)()
