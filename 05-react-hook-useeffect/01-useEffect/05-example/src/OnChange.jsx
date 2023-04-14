
const OnChange = () => {

    const Logging = (event) => {
        console.log("Logggggggggggg สาธุ 99")
    }

    return (
        <>
            <button onClick={Logging}>Logging</button>
            <button onClick={() => Logging()}>() => Logging())</button>
        </>
    )
}

export default OnChange