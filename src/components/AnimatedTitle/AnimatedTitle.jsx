import { useLayoutEffect, useRef, useState } from 'react';
import './animatedTitle.css';

function AnimatedTitle ({
    headingLevel = "h2",
    initialText,
    finalText,
    isFilled = false,
    id
}) {

    const Heading = headingLevel;
    const finalTextRef = useRef(null);
    const [finalWidth, setFinalWidth] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useLayoutEffect(() => {
        if (finalTextRef.current) {
            setTimeout(() => {
                const width = finalTextRef.current.scrollWidth;
                setFinalWidth(width);
            }, 200)
            
            setTimeout(() => setHasMounted(true), 700); 
        }
    }, [finalText]);

    const animatedTitleClass = {
        braceLeft: !isFilled ? "animatedTitle__braceLeft" : "animatedTitle__braceLeft animatedTitle__braceLeft--filled",
        braceRight: !isFilled ? "animatedTitle__braceRight" : "animatedTitle__braceRight headerLogo__braceRight--filled"
    }



    return (
        <div 
            className={`animatedTitle ${isFilled ? "animatedTitle--isFilled" : ""}`}
            id={id}
        >
            <span 
                className={animatedTitleClass.braceLeft}
                id={`${id}__braceLeft`}
            >{"{"}</span>
            <Heading className="animatedTitle__heading">
                <span className="animatedTitle__initialText">{initialText}</span>
                <span 
                    ref={finalTextRef}
                    className="animatedTitle__finalText"
                    style={{width: hasMounted ? `${finalWidth}px` : '0px'}}
                >

                        {finalText}
                </span>
            </Heading>
            <span 
                className={animatedTitleClass.braceRight}
                id={`${id}__braceRight`}
            >{"}"}</span>
        </div>
    )
}

export default AnimatedTitle;