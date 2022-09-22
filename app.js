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
const headQuestion = document.getElementById('hQuestion');
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
let nextBtn;
// let allProgressB = document.getElementById('file');
// console.log(startQuiz)





const loadQuestion = () => {

    if (quizIndex == totalQuiz) {
        return endQuiz();
    }

    headQuestion.innerHTML = `<h1 id="hQuestion">Question: ${quizIndex + 1} into ${totalQuiz}</h1>`

    const data = allQuiz[quizIndex]
    questionBox.innerHTML = `${data.question}`

    allOptions[0].nextElementSibling.innerHTML = data.a;
    allOptions[1].nextElementSibling.innerHTML = data.b;
    allOptions[2].nextElementSibling.innerHTML = data.c;
    allOptions[3].nextElementSibling.innerHTML = data.d;
    quizIndex++
    console.log('datacorrec:', data.correct);
}
// console.log("quizIndex", quizIndex)


loadQuestion()


// const disAble = () => {
//     allOptions.forEach(
//         (option) => {
//             if (!option.checked) {
//                 option.setAttribute("disabled", true)
//             }
//         }
//     )
// }

// const enAble = () => {
//     allOptions.forEach(
//         (option) => {
//             if (option) {
//                 option.setAttribute("editable", true)
//                 // option.setAttribute("disabled", false)

//                 console.log(option)
//             }
//         }
//     )
// }
// enAble()


const submitQuestion = () => {

    const data = allQuiz[index];
    const answer = getAnswer();

    if (answer == data.correct) {
        correct++
        selectedQuizResult = document.getElementById('selectedQuizResult').innerHTML = `<p>Correct &#127881; !!</p>`
    }
    else {
        selectedQuizResult = document.getElementById('selectedQuizResult').innerHTML = `<p>Wrong &#128148; !!</p>`
        incorrect++
    }
    // console.log('answer:', answer, 'datacorrec:', data.correct);

    allProgressB = document.getElementById('progressBar').value = `${(totalPercent / totalQuiz) * quizIndex}`;
    // console.log('percetage of progress', allProgressB)


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

    loadQuestion()
    reset()
}

// const nextQuestion = () => {
//     nextBtn = document.getElementById('nextBtn').addEventListener(click, nextQuestion)
// }


const getAnswer = () => {
    let ans;
    allOptions.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
                // console.log('inputEl.checked:', inputEl.checked);
                // console.log('allOptions:', allOptions);


            }
        }
    )
    // console.log('ans:', ans);
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
    result.innerHTML = `<h2 style="background-color:rgb(177, 204, 255)" > You have complete the Quiz your Score is ${progressB} into 100% </h2> <hr/>
    <h2 style="background-color:aquamarine" > Your Correct Answer is ${correct} <span style='font-size:50px;'>&#128150;</span>  </h2>  <hr/>
    <h2 style="background-color:red" > Your Correct Answer is ${incorrect} <span style='font-size:50px;'>&#128533;</span>  </h2>  <hr/> `
}
