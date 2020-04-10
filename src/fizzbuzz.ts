
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        switch (true) {
            case isMultiple(i, 15):
                output = "FizzBuzz";
                break;
            case isMultiple(i, 3):
                output = "Fizz";
                break;
            case isMultiple(i, 5):
                output = "Buzz";
                break;
            default:
                output = i.toString();
                break;
        }
        console.log(output);
    }
}


function isMultiple(num: number, mod: number) {
    return num % mod === 0
}