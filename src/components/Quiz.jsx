import { useState } from "react";
import Choices from "./Choices";
import Confetti from "react-dom-confetti";
import Question from "./Question";
import list from "./QList";
import { useEffect } from "react";
import Timer from "./Timer"
import { Link } from "react-router-dom"

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

let record, tally;

function recordFunc() {
    return record;
}

function tallyFunc() {
    return tally;
}

function Quiz(props) {
    let [idx, setIdx] = useState(0);
    let [currScore, setCurrScore] = useState(0);
    let [currQuestion, setCurrQuestion] = useState(list[idx]);
    let [selectedChoice, setSelectedChoice] = useState(null);
    let [popConfetti, setPopConfetti] = useState(false);
    let [clicked, setClicked] = useState(false);
    let [restart, setRestart] = useState(true);
    let [answers, setAnswers] = useState([]);
    let [finished, setFinished] = useState(false);

    async function handleClick(input) {
        if (input === undefined) return;
        if (input !== 'unclicked') {
            let selected = currQuestion.options[input].text;
            let correct = currQuestion.options[currQuestion.options.findIndex(el => el.isCorrect)].text;
            answers.push({ selected: selected, answer: correct, state: selected === correct });
            clearTimeout(timer);
        }
        else {
            let correct = currQuestion.options[currQuestion.options.findIndex(el => el.isCorrect)].text;
            answers.push({ selected: '', answer: correct, state: false });
        }
        let newAnswers = answers;
        // console.log(newAnswers);
        setAnswers(newAnswers);
        setSelectedChoice(input);
        setClicked(true);
        if (input !== 'unclicked') await wait(3000);
        else await wait(100);
        if (idx + 1 < list.length) {
            setIdx(++idx);
            setCurrQuestion(list[idx]);
            setPopConfetti(null);
            setSelectedChoice(null);
            setClicked(false);
            setRestart(`timer-fade 5s`);
        }
        else {
            setFinished(true);
            record = answers;
            tally = currScore;
        }
    }

    let timer = setTimeout(() => {
        if (!clicked) {
            handleClick('unclicked');
        }
    }, 5000)

    useEffect(() => {
        if (clicked) {
            setRestart(false);
        }
    }, [clicked]);

    let checkPop = (input) => {
        if (input === true) {
            setPopConfetti(true);
            setCurrScore(++currScore);
        }
        else setPopConfetti(false);
    }

    return (
        <div className="container-all">
            <h1 className="header-score">Score: {currScore}</h1>
            <Question text={currQuestion.question} idx={idx + 1} />
            <div className="container-choices">
                {currQuestion.options.map((el, idx) => <Choices key={idx + el.text + el.isCorrect} checkPop={checkPop} isAnswer={el.isCorrect} bgColor={selectedChoice === idx ? (el.isCorrect ? 'green' : 'red') : null} fontColor={selectedChoice === idx ? 'white' : null} fontWeight={selectedChoice === idx ? '600' : null} isClicked={handleClick} idx={idx} text={el.text} active={clicked} />)}
            </div>
            <Confetti active={popConfetti} config={{ spread: 120, elementCount: 300 }} />
            <Timer restart={restart ? `timer-fade 5s` : null} />
            <Link to="/score-table"><button style={{display: finished ? 'block' : 'none'}} className="tally">See Score Table</button></Link>
        </div>
    )
}

export { Quiz, recordFunc, tallyFunc };