import { useEffect, useRef, useState } from 'react';
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
    const [width, setWidth] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        if (finalTextRef.current) {
            const el = finalTextRef.current;
            setWidth(el.scrollWidth);
            // pequeña espera para permitir que el pop-in termine
            setTimeout(() => setHasMounted(true), 900); 
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
                    style={{width: hasMounted ? `${width}px` : '0px'}}
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