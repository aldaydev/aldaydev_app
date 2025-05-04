import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";

function Videos () {
    return (
        <div className="pageContainer videos">
            <AnimatedTitle
                initialText='V'
                finalText='ídeos'
                id='page__animatedTitle'
            />
        </div>
    )
}

export default Videos;