import './animatedTitle.css';

function AnimatedTitle ({
    headingLevel = "h2", 
    initialText, 
    finalText, 
    isFilled = false, 
    fontSize,
    braceSize,
    color
}) {

    const Heading = headingLevel;

    const animatedTitleClass = {
        braceLeft: !isFilled ? "animatedTitle__braceLeft" : "animatedTitle__braceLeft animatedTitle__braceLeft--filled",
        braceRight: !isFilled ? "animatedTitle__braceRight" : "animatedTitle__braceRight headerLogo__braceRight--filled"
    }

    return (
        <div 
            className={`animatedTitle ${isFilled && "animatedTitle--isFilled"}`} 
            style={{fontSize: fontSize, color: color}}
        >
            <span 
                className={animatedTitleClass.braceLeft}
                style={{fontSize: braceSize, color: color}}
            >{"{"}</span>
            <Heading className="animatedTitle__heading">
                <span className="animatedTitle__initialText">{initialText}</span>
                <span className="animatedTitle__finalText">{finalText}</span>
            </Heading>
            <span 
                className={animatedTitleClass.braceRight}
                style={{fontSize: braceSize, color: color}}
            >{"}"}</span>
        </div>
    )
}

export default AnimatedTitle;