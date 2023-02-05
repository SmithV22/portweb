
import React from 'react' ;
import './footer.css' ;

const Footer = () => {
    return (
        <div id='footer'>
            <footer>
                <div className='footer__valedictions'>
                    <h3 className='thanks'>** THANK YOU FOR VISITING **</h3>
                    <h3 className='come'>** COME AGAIN TO SEE WHAT'S NEW **</h3>
                </div>
                <div className="footer__copy">
                    <small>
                        &copy; Neia Software Design
                    </small>
                    <small>  All Rights Reserved</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer ;