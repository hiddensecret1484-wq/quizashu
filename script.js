const quizData = [

{
question:"Capital of India?",
options:["Delhi","Mumbai","Kolkata","Chennai"],
answer:0
},

{
question:"2 + 2 = ?",
options:["2","3","4","5"],
answer:2
},

{
question:"Largest planet?",
options:["Earth","Mars","Jupiter","Venus"],
answer:2
}

]

const quiz = document.getElementById("quiz")

quizData.forEach((q,i)=>{

let div=document.createElement("div")
div.classList.add("question")

let html=`<p>${i+1}. ${q.question}</p>`

q.options.forEach((opt,j)=>{

html+=`

<label>
<input type="radio" name="q${i}" value="${j}">
${opt}
</label><br>

`

})

div.innerHTML=html
quiz.appendChild(div)

})

function submitQuiz(){

let score=0

quizData.forEach((q,i)=>{

let ans=document.querySelector(`input[name=q${i}]:checked`)

if(ans && ans.value==q.answer){

score++

}

})

document.getElementById("result").innerText =
"Your Score: "+score+"/"+quizData.length

}