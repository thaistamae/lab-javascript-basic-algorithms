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

//Bonus 1:
//Go to lorem ipsum generator and:

//Generate 3 paragraphs. Store the text in a variable type of string.
//Make your program count the number of words in the string.
//Make your program count the number of times the Latin word et appears.

let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lacus nec lacinia imperdiet. Duis eget ornare nisl. Proin vestibulum tortor ut justo cursus, sit amet porta eros sollicitudin. Nam tincidunt nisi pulvinar egestas commodo. Fusce et ipsum nisi. Ut rutrum ornare congue. Nam fermentum est eu egestas vehicula. Integer et ligula sed felis iaculis placerat. Vivamus nec ante nunc. Maecenas cursus quam sed purus ullamcorper, nec ornare enim porttitor. Aenean eu sagittis tortor. Cras vitae lacus euismod, rhoncus nibh quis, fringilla libero. Donec et leo quis augue fringilla viverra. Sed porta imperdiet leo pretium sagittis. In vel posuere leo. Ut id eros ligula. Sed sollicitudin vel augue nec dictum. Nullam non bibendum magna, sed pulvinar odio. Curabitur in pharetra lacus, vitae varius nunc. Praesent mi risus, ultrices vitae lacus eu, dictum ullamcorper risus. Morbi at scelerisque orci. Nam ultricies et dui et finibus. Vivamus sed massa ac elit vestibulum consequat. Nulla bibendum nibh quam, ut vehicula odio malesuada id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sodales porttitor nisi, nec suscipit libero congue at. Aenean eu velit tincidunt, egestas nibh consectetur, tempor dui. Fusce egestas lacus eget vehicula placerat. Quisque erat mi, dictum sit amet ante ut, lacinia tincidunt risus. Suspendisse potenti. Suspendisse vel pulvinar magna, vestibulum sagittis ex. Mauris quis lorem vel sapien commodo suscipit non ac velit. Sed turpis leo, gravida eget porttitor ac, aliquam at quam. Morbi quis aliquam orci, sit amet tincidunt nisl. "

let counter = 0

for(let i = 0; i < paragraphs.length; i++){
  const caract = paragraphs[i];
  if(paragraphs[i] === " "){
    counter++;
  }
}

console.log(counter);

/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃*/

let phraseToCheck =  "No 'x' in Nixon";
let phrase = phraseToCheck.split("");
console.log(phrase)

let newPhrase = "";
for(let i = 0; i < phrase.length; i++){
  if(phrase[i] === " " || phrase[i] === "," || phrase[i] === "!" || phrase[i] === "?" || phrase[i] === "'"){
    continue;
  } else{
  newPhrase += phrase[i];
  } 
}

let phraseReverse = "";

for(let i = newPhrase.length; i > 0;i--){
  phraseReverse += newPhrase[i-1] 
}

if(newPhrase.toLowerCase === phraseReverse.toLowerCase){
  console.log("It is a Palindrome")
}else{
  console.log("It is not a Palindrome")
}
