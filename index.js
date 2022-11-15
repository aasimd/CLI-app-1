var readlineSync = require('readline-sync');
var introduction = readlineSync.question("Hello user! Can we know your name?  ");
console.log("Welcome, " + introduction);
console.log("Hope you're having a great day :)") ;

function invite(Q1,A1){
  var UserAnswer = readlineSync.question(Q1);
  if (UserAnswer === A1){
  console.log("Let's start with a game of quiz!")
  } else {
     console.log('thank you and have a great day ahead :)')
  }
}

invite("would you like to play a game? ","yes");
var topic = readlineSync.question("choose your topic:  " +
            "a. Maths  " + 
            "b. history  " );

score = 0;
function game(Question, Answer) {
  userAnswer = readlineSync.question(Question);
  if(userAnswer=== Answer){
    console.log("you're right");
    score = score + 1;
    console.log("your score is " + score);
    console.log("your overall score is " + score)
  } else {
    console.log("you're wrong");
    console.log("your score is " + score);
  }
  
}

if (topic==="a"){
  console.log("So you like Maths, " +
               "Let's start with your quiz");
  game("whats the sum of 5 and 8?  ",'13');
  game("whats the product of 5 and 10?  ",'50');
  game("whats the sum of 5 and 200?  ",'205');
  game("whats the product of 2 and 16?  ",'32');
  game("whats the product of 15 and 10?  ",'150')
  console.log('thank you and have a great day ahead :)')
} if (topic==="b"){
  console.log("So you like history, " +
               "Let's start with your quiz");
  game("who was the first prime minister of India? a. pandit Jawaharlal Nehru  b. Mahatma Gandhi  c. Narendra Modi ", 'a');
  game("who is known as the father of our nation a. pandit Jawaharlal Nehru  b. Mahatma Gandhi  c. Narendra Modi ", 'b');
  game('When did India get its INDEPENDENCE? a. 15th August, 1947  b. 26th january, 1950,  c. 2th october, 1947  ', "a");
  game('who was the first ruling party of democratic India? a. Indian National Congress  b. BJP  c.AAP  ', "a" );
console.log('thank you and have a great day ahead :)')
} 
