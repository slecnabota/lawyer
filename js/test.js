const quizData = [
    {
        question: "1. Укажите  размер вашей задолженности",
        a: "до 5 520 000",
        b: "свыше 5 520 000",
    },
    {
        question: "2. Какое имущество у вас в собственности?",
        a: "Единственное жилье",
        b: "Дополнительное жилье",
        c: "Автомобиль",
        d: "Ничего нет",
    },
    {
        question: "3. Имеется ли у вас задолженность по автокредиту или ипотеке?",
        a: "Есть ипотека",
        b: "Есть автокредит",
        c: "Ничего нет",
    },
    {
        question: "4. Имеется ли у вас официальный доход?",
        a: "Нет",
        b: "Да, до 200 000 тенге",
        c: "Да, более 200 000 тенге",
    },
    {
        question: "5. Продавали ли вы за последние 3 года свое имущество?",
        a: "Нет не продавал",
        b: "Продавал до 2 000 000 тенге",
        c: "Продавал более 2 000 000 тенге",
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
