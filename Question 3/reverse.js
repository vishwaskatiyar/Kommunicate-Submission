function reverseNumber(num) {
    const nunStr = num.toString();
    let reversedStr = "";

    for (let i = nunStr.length - 1; i >= 0; i--) {
        reversedStr += nunStr[i];
    }
    return parseInt(reversedStr);


}

reverseNo = reverseNumber(1463);


console.log(reverseNo); 