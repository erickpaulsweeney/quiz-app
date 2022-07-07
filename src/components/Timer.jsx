function Timer(props) {
    return (
        <div className="timer-bar" style={{animation: props.restart}}>
            {setTimeout(() => {
                // if (!clicked) {
                //     props.timeOver(true);
                // }
            }, 5000)}
        </div>
    )
}

export default Timer;