function Question(props) {
    return (
        <div className="header-question">
            {`Q${props.idx}: ${props.text}`}
        </div>
    )
}

export default Question;