const quizData = [
    {
        question: "1. Қарызыңыздың мөлшерін көрсетіңіз",
        a: "5 520 000 дейін",
        b: "5 520 000 астам",
    },
    {
        question: "2. Сіздің меншігіңізде қандай мүлік бар?",
        a: "Жалғыз тұрғын үй",
        b: "Қосымша тұрғын үй",
        c: "Көлік",
        d: "Ештеңе жоқ",
    },
    {
        question: "3. Сізде автонесие немесе ипотека бойынша қарызыңыз бар ма?",
        a: "Ипотека бар",
        b: "Автокөлік несиесі бар",
        c: "Ештеңе жоқ",
    },
    {
        question: "4. Сізде ресми табыс бар ма?",
        a: "Жоқ",
        b: "Иә, 200 000 теңгеге дейін",
        c: "Иә, 200 000 теңгеге астам",
    },
    {
        question: "5. Сіз соңғы 3 жылда мүлкіңізді саттыңыз ба?",
        a: "Жоқ, сатқан жоқпын",
        b: "Мен 2 000 000 теңгеге дейін саттым",
        c: "Мен 2 000 000 теңгеден астам саттым",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const check = document.querySelectorAll('.check');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    if(c_text.innerText=="undefined"){
        document.getElementById("c_li").style.display='none';
    }
    if(d_text.innerText=="undefined"){
        document.getElementById("d_li").style.display='none';
    }
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
    document.getElementById("c_li").style.display='flex';
    document.getElementById("d_li").style.display='flex';

}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            document.getElementById("quiz-wrapper").style.display='none';
            document.getElementById("test-form").style.display='block'
        }
    }
});
