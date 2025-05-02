import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";

function Videos () {
    return (
        <div className="pageContainer videos">
            <AnimatedTitle
                initialText='A'
                finalText='ldayDev'
                isFilled={true}
                id='videos__animatedTitle'
            />
        </div>
    )
}

export default Videos;