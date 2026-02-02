let currentQuestion=0,score=0,timer,timeLeft=15;

const quizData=[
{question:"What is JavaScript primarily used for?",options:["Styling","Structuring","Interactivity","Database"],correct:"Interactivity"},
{question:"Which keyword declares a variable?",options:["var","int","define","string"],correct:"var"},
{question:"DOM stands for?",options:["Document Object Model","Data Object Method","Display Mode","Digital Model"],correct:"Document Object Model"},
{question:"Single-line comment symbol?",options:["//","/* */","#","<!-- -->"],correct:"//"},
{question:"Select element by ID?",options:["getElementById()","querySelectorAll()","getClass()","selectId()"],correct:"getElementById()"},
{question:"Unsupported data type?",options:["Number","Boolean","Float","Object"],correct:"Float"},
{question:"typeof [] returns?",options:["array","object","list","undefined"],correct:"object"},
{question:"Best loop for arrays?",options:["forEach()","while","switch","if"],correct:"forEach()"},
{question:"Decision making statement?",options:["if...else","for","break","continue"],correct:"if...else"},
{question:"Button click event?",options:["onclick","onpress","onhover","onload"],correct:"onclick"}
];

function openInstructions(){
 document.getElementById("welcomePopup").style.display="none";
 document.getElementById("instructionPopup").style.display="flex";
}
function openLogin(){
 document.getElementById("instructionPopup").style.display="none";
 document.getElementById("loginPopup").style.display="flex";
}
function login(){
 let email=document.getElementById("email").value;
 if(email===""){document.getElementById("loginMsg").innerText="Please enter email ID";return;}
 document.getElementById("loginMsg").innerText="You started your quiz successfully!";
 setTimeout(startCountdown,1500);
}
function startCountdown(){
 document.getElementById("loginPopup").style.display="none";
 let c=3,screen=document.getElementById("countdownScreen");
 screen.style.display="flex";screen.innerText=c;
 let cd=setInterval(()=>{
  c--;screen.innerText=c;
  if(c===0){clearInterval(cd);screen.style.display="none";startQuiz();}
 },1000);
}
function startQuiz(){document.getElementById("quizBox").style.display="block";showQuestion();}
function showQuestion(){
 clearInterval(timer);timeLeft=15;
 document.getElementById("timer").innerText=timeLeft;
 document.getElementById("count").innerText=`Question ${currentQuestion+1} of ${quizData.length}`;
 let q=quizData[currentQuestion];
 document.getElementById("question").innerText=q.question;
 let html="";q.options.forEach(o=>html+=`<div class="option" onclick="checkAnswer(this,'${o}')">${o}</div>`);
 document.getElementById("options").innerHTML=html;
 timer=setInterval(()=>{
  timeLeft--;document.getElementById("timer").innerText=timeLeft;
  if(timeLeft===0){clearInterval(timer);nextQuestion();}
 },1000);
}
function checkAnswer(el,ans){
 clearInterval(timer);
 let correct=quizData[currentQuestion].correct;
 document.querySelectorAll(".option").forEach(o=>o.onclick=null);
 if(ans===correct){el.classList.add("correct");score++;}
 else{el.classList.add("wrong");
  document.querySelectorAll(".option").forEach(o=>{if(o.innerText===correct)o.classList.add("correct");});
 }
 setTimeout(nextQuestion,1000);
}
function nextQuestion(){
 currentQuestion++;
 if(currentQuestion<quizData.length)showQuestion();
 else showResult();
}
function showResult(){
 document.getElementById("quizBox").style.display="none";
 document.getElementById("resultBox").style.display="block";
 let percent=(score/quizData.length)*100;
 let grade=percent>=90?"A":percent>=75?"B":percent>=60?"C":"F";
 document.getElementById("scoreText").innerText=`Score: ${score}/${quizData.length} (${percent.toFixed(2)}%)`;
 document.getElementById("gradeText").innerText=`Grade: ${grade}`;
 document.getElementById("certificate").innerHTML=
  grade!=="F"?"🎉 <b>Certificate of Completion</b><br>You have passed the quiz."
  :"📘 Keep practicing and try again.";
}
function restartQuiz(){location.reload();}
function endQuiz(){
 document.getElementById("resultBox").innerHTML=
 "<h2>Thank You</h2><p>You have successfully completed the quiz.</p>";
}