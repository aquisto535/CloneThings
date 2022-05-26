const quizData = [
    {
        question: 'How old are you?',
        a: '10',
        b: '20',
        c: '24',
        d: '26',
        correct: 'd'
    },{
        question: 'what is the best programming language?',
        a: 'Java',
        b: 'C',
        C: 'Go',
        d: 'Javascript',
        correct: 'a'
    }, {
        question: 'who is the president of US?',
        a: 'Biden',
        b: 'Trump',
        c: 'Obama',
        d: 'clinton',
        correct:'a'
    }, {
        question:'what does HTML stands for?',
        a:'Markup language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programing Interface',
        correct: 'a'
    }, {
        question: 'what year was Javascript launch?',
        a: '2020',
        b: '2021',
        c: '2022',
        d: '1994',
        correct: 'd'
    }
]

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d


    
}



function getselected(){
    const answerEls = document.querySelectorAll('.answer')

    let answer = undefined

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id
        
           }
        
        })
       
     return answer
    }


submitBtn.addEventListener('click', () =>{

    const answer = getselected();

    console.log(answer)

    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
    } else{
            // show results
        alert('you are finished!')
    }
    }
    

    


    
    
    

  
    
}
)