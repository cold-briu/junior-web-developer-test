import React from 'react'
import { Link } from 'react-router-dom';
import TutorialCard from '../components/tutorialCard.component';
import styled from 'styled-components';




const Tutorial = () => {

    const handleTutorial = ()=>{
        document.querySelector('#tutorial_overlay').classList.toggle('hideThis')
    }

    return(
    <main className="splash_container animated fadeInRight text-center 
    d-flex flex-column justify-content-center align-items-center align-content-center">

        <div className="header_container mt-3">
            <h1>
                ¿Want to see <br/> a quick tutorial?
            </h1>

            <button onClick={handleTutorial}
            className="btn btn-primary my-5 animated tada delay-1s">
                See tutorial
            </button>
        </div>

        <small>
            This front end client was made using:
            <ul className="text-left text-dark mt-2 pl-4" >
                <li>React Js <span role="img" aria-label="emoji"> 👾</span></li>
                <li>Styled Components <span role="img" aria-label="emoji"> 💅</span></li>
                <li>Bootstrap Material Design <span role="img" aria-label="emoji"> 💎</span></li>
                <li>React Github Btn <span role="img" aria-label="emoji"> 🐱</span></li>
            </ul>
        </small>

      
        <Link className="btn btn-success mt-5 
        d-flex justify-content-between align-items-center
        animated bounceIn delay-2s " to="/index">
            Continue
            <i className="material-icons ml-2">navigate_next</i>
        </Link>


        <div id="tutorial_overlay"
        className="d-flex align-items-center p-5 dark_overlay animated zoomIn faster hideThis">
            <TutorialCard hideMe={handleTutorial} />
        </div> 
    </main>
)
}
export default Tutorial