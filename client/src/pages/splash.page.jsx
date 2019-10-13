import React from 'react'
import { Link } from 'react-router-dom';
import GitHubButton from 'react-github-btn'

const Splash = () => (
    <main className="splash_container animated fadeIn text-center 
    d-flex flex-column justify-content-center align-items-center align-content-center">

    <img className="img-fluid mb-5" alt="e-volution-logo"
    src="http://e-volution.co/wp-content/uploads/2017/09/evolution-desktop.png" />

        <div className="header_container mt-3">
            <h2>
                Junior-developer-test 
            </h2>
            <small>
                by: Andrés Fernández
            </small>

            <br/>

            <div className="github_container my-3 text-center 
            d-flex flex-row aligin-contenet-center
            animated tada delay-1s">


                <span>
                    SEE ON GITHUB
                </span>
                <GitHubButton href="https://github.com/cold-briu/junior-web-developer-test" 
                aria-label="Star cold-briu/junior-web-developer-test on GitHub"
                data-icon="octicon-star" data-size="large" className="my-5">
                    Star
                </GitHubButton>

            </div>
        </div>



        <Link to="/tutorial"
        className="btn btn-success mt-5 
        d-flex align-items-center justify-content-between
        animated bounceIn delay-2s">

            Continue

            <i className="material-icons ml-2">navigate_next</i>
        </Link>

    </main>
)

export default Splash