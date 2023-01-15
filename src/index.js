const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let str = '';
    let char = [];
    for (let i =  0; i < expr.length; i += 10) {
      let str = expr.slice(i, (i + 10));
        if (str == '**********') {
          str = ' ';
        }
      arr.push(str);
    }
    for (let i = 0; i < arr.length; i++) {
      let text = '';
      if (arr[i] == ' ') {
        char.push(arr[i]);
      }
      else {
        for (let j = 0; j < arr[i].length - 1; j += 2) {
          str = arr[i].substr(j, 2);
            if (str == '11') {
              str = '-';
            }
           else if (str == '10') {
               str = '.';
            }
           else {
             str = '';
            }
         text +=str;
        }
      char.push(MORSE_TABLE[text]);
    }
  }
  return char.join('');
  }

module.exports = {
    decode
}