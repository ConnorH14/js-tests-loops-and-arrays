// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let strArrayNum = 0
  let strArray = []
  let alphabetArray = []
  let keyNum
  let keyLetter

  for(let i = 0; i < alphabet.length; i++){
    alphabetArray.push(alphabet.charCodeAt(i))
  }
  
  for(let i = 0; i < str.length; i++){
    strArray.push(str.charCodeAt(i))
  }

  for(let i = 0; i < 26; i++){
    
    if(alphabetArray[i] == strArray[strArrayNum]){
      //console.log(alphabetArray[i] + " " + strArray[strArrayNum])
      strArrayNum++
    }else if(alphabetArray[i - 1] == strArray[strArrayNum - 1] && alphabetArray[i + 1] == strArray[strArrayNum]){
      //console.log(alphabetArray[i])
      keyNum = alphabetArray[i]
    }else{
      //console.log(alphabetArray[i])
    }
  }

  if(keyNum == undefined){
    return "no missing letters"
  }else{
    //console.log(keyNum)
    keyLetter = String.fromCharCode(keyNum)
    //console.log(keyLetter)
    return keyLetter
  }

}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  let arrNum
  let canAdd
  for(i = 0; i < arr.length; i++){
    for(b = 0; b < arr.length; b++){
      arrNum = arr[i] + arr[b]
      if(arrNum == target){
        canAdd = true
        return canAdd
      }else{
        canAdd = false
      }
    }
  }
  console.log("break")
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  let oddNums = []
  let oddNumPush = 0
  for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      //console.log(arr[i] + " even")
    }else{
      //console.log(arr[i] + " odd")
      oddNums.push(arr[i])
    }
  }
  oddNums.sort()
  console.log(arr)
  console.log(oddNums)
  for(i = 0; i < arr.length; i++){
    // if(arr[i] % 2 == 0){
    //   //console.log(arr[i] + " even")
    // }
    if(arr[i] % 2 !== 0){
      //console.log(arr[i] + " odd")
      arr.splice(arr[i], 1, oddNums[oddNumPush])
      console.log(oddNumPush)
      console.log(oddNums[oddNumPush])
      if(oddNumPush < oddNums.length ){
        oddNumPush++
      }
      
    }
  }
  console.log(arr)
  return arr

}