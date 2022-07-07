function Choices(props) {

    return (
        <div style={{backgroundColor: props.bgColor, color: props.fontColor, fontWeight: props.fontWeight}} className="choice-button" onClick={() => {
            if (props.active) return;
            props.isClicked(props.idx);
            props.checkPop(props.isAnswer);
            }}>
            {props.text}
        </div>
    )
}

export default Choices;