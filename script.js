const quizData =[
    {
        question:'How old is florin?',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'c'
    },{
        question:'what was the most used programming language in 2019?',
        a:'java',
        b:'c',
        c:'phython',
        d:'Javascript',
        correct:'d'
    },{
        question:'who is the president of USA?',
        a:'Florin Pop',
        b:'Donald Trump',
        c:'Ivan Saldano',
        d:'Joe Bieden',
        correct:'d'
    },{
       question:'what does html stands for?',
       a:'Hypertext Markup language',
       b:'HyperText make-up Languge',
       c:'HighTest Markup Language',
       d:'hyperTest MarkDown Language',
       correct:'a'
    },{
        question:'what year was Javascript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'d'
    }
]

const quiz = document.getElementById('quiz')
const answerELs = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn = document.getElementById('submit')   

let currentQuestion = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion]
    questionEl.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
    
}

function getSelected(){
    let answer= undefined
    answerELs.forEach(answerEl =>{
          if(answerEl.checked){
             answer = answerEl.id
          } 
    })
    return answer
}
 
function deselectAnswer(){
    answerELs.forEach(answerEl =>{
        if(answerEl.checked){
           answerEl.checked = false
        } 
  })
}

submitBtn.addEventListener('click', () =>{
    //check to see the answer
       const answer = getSelected()
       deselectAnswer()
       console.log(answer)
        if( answer ){
            if(answer === quizData[currentQuestion].correct){
                score++
            }
            currentQuestion++ 
            if(currentQuestion < quizData.length){
                loadQuiz()
           }
           else{
               //TODO show result
               quiz.innerHTML=`<h2>you answered correctly ${score}/${quizData.length} question</h2><button onclick="location.reload()">reload</button`
           }
        }
    
})
