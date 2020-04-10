
function hackerrankInString(s: string) {
    let hackerrank = "hackerrank";
    if (s.length <= 0) {
        return "NO"
    }
    for (let i = 0; i < hackerrank.length; i++) {
        let indexOfChar = s.indexOf(hackerrank[i]);
        if (indexOfChar < 0) {
            return "NO";
        }
        else {
            s = s.substr(indexOfChar + 1);
        }
    }
    return "YES"
}
console.log(hackerrankInString("hacakaeararanaka"));
console.log(hackerrankInString("hackerworld"));
console.log(hackerrankInString(""));
console.log(hackerrankInString("hackerank"));
console.log(hackerrankInString("knarrekcah"));
console.log(hackerrankInString("hackerrank"));
console.log(hackerrankInString("hackeronek"));
console.log(hackerrankInString("abcdefghijklmnopqrstuvwxyz"));
console.log(hackerrankInString("rhackerank"));
console.log(hackerrankInString("ahankercka"));
console.log(hackerrankInString("hacakaeararanaka"));
console.log(hackerrankInString("hhhhaaaaackkkkerrrrrrrrank"));
console.log(hackerrankInString("crackerhackerknar"));
console.log(hackerrankInString("hhhackkerbanker"));