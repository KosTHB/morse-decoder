const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const BLOCK_SIZE = 10;
    let res = '';

    for (let i = 0; i < expr.length; i += BLOCK_SIZE) {
        if (expr[i] == '*') {
            res += ' ';
            continue;
        }
        let symbolCode = '';
        let j = i + BLOCK_SIZE - 1;
        while (j > i && expr[j - 1] == '1') {
            if (expr[j] == '0') symbolCode = '.' + symbolCode;
            else symbolCode = '-' + symbolCode;
            j -= 2;
        }
        res += MORSE_TABLE[symbolCode];
    }
    return res;
}

module.exports = {
    decode
}