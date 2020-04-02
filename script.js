function submitAnswers(){
var total=5;
var score=0;
//Get User Input
var q1 =document.format["quizForm"]["q1"].value;
var q2 =document.format["quizForm"]["q2"].value;
var q3 =document.format["quizForm"]["q3"].value;
var q4 =document.format["quizForm"]["q4"].value;
var q5 =document.format["quizForm"]["q5"].value;
//Validation
for(i=1;i<=total;i++)
{
if(eval('q'+i)==null || eval('q'+i=='')   {
alert("YOu missed question" +i);
return false;

}
}
//Set correct answers


return false;
}
}
//Set correct answers 
var answers=["b","a","d","b","d"];

//Check answers
if(q1==answers[0]){
score++;
}

if(q2==answers[1]){
score++;
}

if(q3==answers[2]){
score++;
}
if(q4==answers[3]){
score++;
}
if(q5==answers[4]){
score++;
}
alert ("You scored" + score + out of +total);
}

return false;
}













}
