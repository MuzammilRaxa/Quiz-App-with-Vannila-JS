const allQuiz = [
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
]
// console.log(que[0].question)


let index = 0;
let quizIndex = 0;
let totalQuiz = allQuiz.length;
let correct = 0;
let incorrect = 0;
let totalPercent = 100;

let progressNum = '100px';
const questionBox = document.getElementById('questionB');
const allOptions = document.querySelectorAll("input[type='radio']");
const startQuiz = document.getElementById('endResult');
let allProgressB;
let progressB;
let progressBarRed;
let progressScore;
let lessProgressScore;
let progressMaxScore;
let maxScore;
let topScore;
let topMaxScore;
let selectedQuizResult;
// let allProgressB = document.getElementById('file');
// console.log(startQuiz)





const loadQuestion = () => {

    if (quizIndex == totalQuiz) {
        return endQuiz();
    }

    const data = allQuiz[quizIndex]
    questionBox.innerHTML = `${data.question}`

    allOptions[0].nextElementSibling.innerHTML = data.a;
    allOptions[1].nextElementSibling.innerHTML = data.b;
    allOptions[2].nextElementSibling.innerHTML = data.c;
    allOptions[3].nextElementSibling.innerHTML = data.d;
    quizIndex++
    console.log('datacorrec:', data.correct);
}
console.log("quizIndex", quizIndex)


loadQuestion()



const submitQuestion = () => {

    const data = allQuiz[index];
    const answer = getAnswer();

    if (answer == data.correct) {
        correct++
        selectedQuizResult = document.getElementById('selectedQuizResult').innerHTML = `<h1>Correct</h1>`
    }
    else {
        incorrect++
    }
    console.log('answer:', answer, 'datacorrec:', data.correct);

    allProgressB = document.getElementById('progressBar').value = `${(totalPercent / totalQuiz) * quizIndex}`;
    console.log('percetage of progress', allProgressB)


    topMaxScore = document.getElementById('topMaxScore').innerHTML = `Max Score ${(totalPercent - (totalPercent / totalQuiz) * incorrect)}%`;

    // console.log("totalPercent", totalPercent, "lessProgressScore", lessProgressScore, "and:", progressBarRed)

    progressB = document.getElementById('progressB').style.width = `${(totalPercent / totalQuiz) * correct}%`;
    progressScore = document.getElementById('progressB').innerHTML = `score${progressB}`;
    topScore = document.getElementById('topScore').innerHTML = `Score ${progressB}`;



    progressBarRed = document.getElementById('progressBarRed').style.width = `${(totalPercent / totalQuiz) * incorrect}%`;
    lessProgressScore = document.getElementById('progressBarRed').innerHTML = `less${progressBarRed}`;


    maxScore = document.getElementById('progressMaxScore').style.width = `${(totalPercent / totalQuiz) * (0.4)}%`;
    progressMaxScore = document.getElementById('progressMaxScore').innerHTML = `${(totalPercent - (totalPercent / totalQuiz) * incorrect)}%Max`;

    // console.log("quizIndex", quizIndex)

    index++
    // nextQuestion()
    reset()
}

const nextQuestion = () => {
    loadQuestion()
}


const getAnswer = () => {
    let ans;
    allOptions.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
                console.log('inputEl.checked:', inputEl.checked);
                // console.log('allOptions:', allOptions);

            }
        }
    )
    console.log('ans:', ans);
    return ans;
}

const reset = () => {
    allOptions.forEach(
        (inputEl) => {
            inputEl.checked = false
        }
    )
}

// const allProgressBar = () => {
//     let progress = document.getElementById('progressBar');
//     let value = 10;
//     console.log(value);
//     function scene() {
//         if (value >= 100) {
//             console.log('You compeleted sucessfully')
//         } else {
//             value++;
//             progress.style.width = value;
//         }
//     }
//     scene()
//     console.log(value);

// }

const endQuiz = () => {
    const result = document.getElementById('endResult');
    result.innerHTML = `<h2> You have complete the Quiz your Score is ${correct} into ${allOptions.length} </h2>`
}
