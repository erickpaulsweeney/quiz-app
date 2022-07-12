function TableRow(props) {
    return (
        <div className="score-row">
            <div className="question-number">{props.question}</div>
            <div className="selected-choice" style={{ backgroundColor: props.state ? 'green' : 'red'}}>{props.choice.length === 0 ? 'No answer' : props.choice}</div>
            <div className="answer-number">{props.answer}</div>
        </div>
    )
}

export default TableRow;