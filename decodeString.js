// Write your code below this line
const stringDecoder = (str) => {
    let decipher = Number(str[0]);
    let newStr = '';
    for (i = 1; i < str.length; i++) {
        let strValue = str[i].charCodeAt() + decipher
        newStr += String.fromCharCode(strValue);
    }
    console.log(newStr);
}

stringDecoder("1a");