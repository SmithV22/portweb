import '../../components/header/header.css' ;

const Spinner = () => {
    return (
        <div className="loadingSpinnerContainer">
            <h1 className='spinnerText'> Please Wait...</h1>
            <div className="loadingSpinner"> </div>
        </div>
    )
}

export default Spinner ;