function getLetter(s: string) {
    let letter;

    const setA = ['a', 'e', 'i', 'o', 'u'];
    const setB = ['b', 'c', 'd', 'f', 'g'];
    const setC = ['h', 'j', 'k', 'l', 'm'];
    const setD = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    switch (true) {
        case setA.indexOf(s) > -1:
            letter = 'A';
            break;
        case setB.indexOf(s) > -1:
            letter = 'B';
            break;
        case setC.indexOf(s) > -1:
            letter = 'C';
            break;
        case setD.indexOf(s) > -1:
            letter = 'D';
            break;
    }

    return letter;
}