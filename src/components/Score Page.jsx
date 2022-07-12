// import { useParams } from "react-router-dom";
import TableRow from "./Table Row";

function ScorePage(props) {
    return (
        <div className="container-all">
            <div className="score-tabulation">
                <div className="score-title">How did you do?</div>
                <div className="header-row">
                    <div className="question-header">Question Number</div>
                    <div className="choice-header">Choice</div>
                    <div className="answer-header">Answer</div>
                </div>
                {props.answer().map((el, idx) => <TableRow key={idx + el.selected + el.state} question={idx + 1} choice={el.selected} answer={el.answer} state={el.state} />)}
                <div className="total-row">Final Score: {props.currScore()}</div>
            </div>
        </div>

    )
}

export default ScorePage;