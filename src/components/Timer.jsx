function Timer(props) {
    return (
        <div className="timer-bar" style={{ animation: props.restart }}></div>
    )
}

export default Timer;