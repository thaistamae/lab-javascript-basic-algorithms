//Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Paul";

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`);


//1.3 Create a variable `hacker2` with the navigator's name.

const hacker2 = "John";

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

let hacker1NameLength = hacker1.length;
let hacker2NameLength = hacker2.length;

if(hacker1NameLength > hacker2NameLength){
  console.log(`The driver has the longest name, it has ${hacker1NameLength} characters`);
} else if (hacker1NameLength < hacker2NameLength){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2NameLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1NameLength} characters!.`);
}


//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let hacker1NameChanged = ""; 

for(let i = 0; i < hacker1NameLength;i++){
  let hacker1Letter = hacker1[i].toUpperCase();
    if(i === 0){
    hacker1NameChanged += hacker1Letter  
    }else{
     hacker1NameChanged += " " + hacker1Letter 
    }
}

console.log(hacker1NameChanged);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let hacker2NameChanged = ""; 

for(let i = hacker2NameLength-1; i >= 0;i--){
  let hacker2Letter = hacker2[i];
  hacker2NameChanged += hacker2Letter;
}

console.log(hacker2NameChanged);

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

const alphabetics = "abcdefghijklmnopqrstuvxyz";

if (hacker1 === hacker2){
  console.log("What?! You both have the same name?");
}else{
  for(let i = 0; i < Math.max(hacker1.length, hacker2.length); i++){
    if(hacker1.slice(0,i+1) === hacker2.slice(0,i+1)){
      continue;
    }else{
      if(hacker1[i] === undefined){
        console.log("The driver's name goes first.");
        break;
      }else if(hacker2[i] === undefined){
        console.log("Yo, the navigator goes first definitely");
        break;
      }else if(alphabetics.indexOf(hacker1[i].toLowerCase()) < alphabetics.indexOf(hacker2[i].toLowerCase())){
        console.log("The driver's name goes first.");
        break;
      }else{
        console.log("Yo, the navigator goes first definitely");
        break;
      }
    }
  }
} 