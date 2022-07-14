import '../styles/about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/fontawesome-free-solid'
import { 
    faReact, 
    faJsSquare, 
    faHtml5, 
    faSass, 
    faGitAlt 
} from '@fortawesome/free-brands-svg-icons'

function About(props) {
    return (
        <section className = 'about'>
            <div className = "about__div">
                <h4>About me</h4>
                <div className = 'info'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia sapien sit amet lectus viverra eleifend. Maecenas tellus enim, varius sed elementum id, vehicula et ipsum. Sed vel lectus ac nunc rutrum varius in eget sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum pharetra metus purus, in ullamcorper dolor gravida eu. Morbi pharetra vehicula magna in eleifend. Etiam et placerat eros. Mauris malesuada, lectus vel convallis maximus, elit enim tincidunt turpis, et rhoncus urna enim sit amet magna. Aliquam placerat nunc tortor, nec aliquam nulla aliquam et. Curabitur nibh lacus, fringilla non semper vitae, sollicitudin eu odio. Maecenas purus felis, varius non gravida eget, auctor non metus.

                    Aenean facilisis lobortis sem, eget maximus tortor. Maecenas porta arcu id risus vulputate, eget fermentum lacus laoreet. Nam orci velit, consequat sed blandit a, varius in magna. Nullam posuere est mattis nisi suscipit porta. Phasellus fermentum eu neque nec dapibus. Sed suscipit in est et volutpat. Aenean eleifend sed magna non fermentum. Aliquam interdum massa non bibendum malesuada. Nunc consectetur bibendum lacus, ut luctus enim sollicitudin ac.</p>
                    <img src = 'https://via.placeholder.com/320'></img>
                </div>
            </div>

            <div className = "skills">
                <h4>Skills</h4>
                <div className = "skills__icons">
                    <FontAwesomeIcon icon={ faHtml5 } className = 'icon html'/>
                    <FontAwesomeIcon icon={ faSass } className = 'icon sass'/>
                    <FontAwesomeIcon icon={ faJsSquare } className = 'icon js'/>
                    <FontAwesomeIcon icon={ faReact } className = 'icon react'/>
                    <FontAwesomeIcon icon={ faGitAlt } className = 'icon git'/>
                </div>
            </div>

            <div className = 'about__arrow-box' onClick={props.handleClick}>
                <FontAwesomeIcon icon={ faAngleDown } className = 'about__arrow' />
            </div>
        </section>
    )
}

export default About