const balanceParens = (str) => {
    let regexOne = /[^A-Z0-9)(]/gi;
    let regexTwo = /[)(]/
    let answerArr = [];
    str = str.replace(regexOne, "");
    let leftCount = 0;
    let rightCount = 0;
    
  if (str.includes("(") === true && str.includes(")") === true) {

    for (let i =0; i<str.length; i++) {
      if ((str[i] === "(") && rightCount == leftCount) {
        answerArr.push(str[i]);
        leftCount++;
      } else if (str[i] === ")") {
        rightCount++;
         if (answerArr.includes("(") && (rightCount == leftCount))
        answerArr.push(str[i])
          rightCount++;
        } else {
          answerArr.push(str[i]);
        }
      }
  }else {
  
return answerArr;
}
}



console.log(balanceParens("a(b)c)"))

// module.exports = { balanceParens }