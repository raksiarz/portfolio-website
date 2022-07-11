import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faReact, 
    faJsSquare, 
    faHtml5, 
    faSass, 
    faGit 
} from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <section className = 'about'>
            <div className = "about__div">
                <h4>About</h4>
            </div>

            <div className = "skills">
                <h4>Skills</h4>
                <div className = "skills__icons">
                    <FontAwesomeIcon icon={ faHtml5 } className = 'icon html'/>
                    <FontAwesomeIcon icon={ faSass } className = 'icon sass'/>
                    <FontAwesomeIcon icon={ faJsSquare } className = 'icon js'/>
                    <FontAwesomeIcon icon={ faReact } className = 'icon react'/>
                    <FontAwesomeIcon icon={ faGit } className = 'icon git'/>
                </div>
            </div>
        </section>
    )
}

export default About