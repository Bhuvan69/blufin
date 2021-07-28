export default function Custom404() {
    return (
        <div className="d-lg-flex d-md-block justify-content-center not-found align-items-center">
            <div>
                <img
                    src="/videos/diving.gif"
                    alt="diving"
                    className="diving-gif"
                />
            </div>
            <div>
                <h3 className="highlight">OOPS!</h3>
                <div>Looked like you dived into a wrong page.</div>
            </div>
        </div>
    )
}