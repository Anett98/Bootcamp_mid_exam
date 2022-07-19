//1. Use array methods to turn data into result

let data = [
    ["The","red", "horse"],
    ["Plane","over","the","ocean"],
    ["Chocolate","ice","cream","is","awesome"], 
    ["this","is","a","long","sentence"]
  ]
  
  function groupeWords(arr) {
      let result = []
     for(let i = 0; i<arr.length; i++) {
         result.push(arr[i].join(' '))
     } 
      return result 
  }
  groupeWords(data)


//2. Create a constructor function to produce calculator instances (+,-,*,/ operations).

function Calculator() {
    this.myCalc = (a,b,c) => {
        if(c === '+') {
            return a+b
        } else if(c === '-') {
            return a-b
        } else if(c === '*') {           //it works, but still....there is a better soltion 
            return a*b
        } else if(c === '/') {
            return a/b
        }
    }
}
let calc = new Calculator().myCalc
calc(2,3,'-')

//3. Remove duplicates in an array.
let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];

function removeDups(arr) {
    let result = []
	for(let i = 0;i<arr.length;i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i])
        }
        }
    return result
};

removeDups(dupes)

//result => [1,2,3,’a’, ‘f’, 4, ‘d’];


//4. Groupe by property

let arr = [
  {name: 'Alice', job: 'Data Analyst', country: 'AU'},
  {name: 'Bob', job: 'Pilot', country: 'US'},
  {name: 'Lewis', job: 'Pilot', country: 'US'},
  {name: 'Karen', job: 'Software Eng', country: 'CA'},
  {name: 'Jona', job: 'Painter', country: 'CA'},
  {name: 'Jeremy', job: 'Artist', country: 'SP'},
];
let myObj = {};
function groupe(arr, prop) {
	let AU = arr.filter(el => el.country === 'AU')
    let US = arr.filter(el => el.country === 'US')
    let CA = arr.filter(el => el.country === 'CA')
    let SP = arr.filter(el => el.country === 'SP')          //P.S I believe that there is a better solution but I dont hav a time 
    myObj.AU = AU
    myObj.US = US
    myObj.CA = CA
    myObj.SP = SP
    return myObj
} 
groupe(arr)
// //result => {
// 	AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
// 	US: [{name: 'Bob', job: 'Pilot', country: 'US'},
//   {name: 'Lewis', job: 'Pilot', country: 'US'}],
// …… 
// }

//5. Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
let str = 'i.like.this.program.very.much'
function reversedStr (str) {
    return str.split('.').reverse().join('.')
}
reversedStr(str)