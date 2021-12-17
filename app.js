var readLineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var que1 = readLineSync.question(chalk.green.bold('Enter your name to start\n'));
console.log('Hi! '+chalk.green(que1)+' Welcome to the Quiz\n');



console.log(chalk.yellow('Where do i live ? '));
quizAns1 = ['NRT','CPT','SAP'];
Que2 = readLineSync.keyInSelect(quizAns1,'');
if( quizAns1[Que2] === 'NRT')
{
  console.log(chalk.green.bold("Correct!!!"));
  score++;
} 



console.log(chalk.yellow('I am from which college ? '));
quizAns2 = ['NEC','TEC','Eswar'];
Que3 = readLineSync.keyInSelect(quizAns2,'');
if( quizAns2[Que3] === 'TEC')
{
  console.log(chalk.green.bold("Correct!!"));
  score++;
} 



console.log(chalk.yellow('Where is my house ? '));
quizAns3 = ['Ravipadu road','Reddy nagar','kakathiya nagar'];
Que4 = readLineSync.keyInSelect(quizAns3,'');
if( quizAns3[Que4] === 'kakathiya nagar')
{
  console.log(chalk.green.bold("Correct!!!"));
  score++;
}

console.log(chalk.red.bold("-------------------------"));
console.log(chalk.green.bold("Great you have scored: "+score));