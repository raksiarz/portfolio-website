import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/fontawesome-free-solid'

function Header(props) {
    return (
        <header className = 'header'>
            <div className = 'text'>
                <h3>Oskar Ostrowski</h3>
                <p>Front end</p>
            </div>
            <div className = 'header__arrow-box' onClick={props.handleClick}>
                <FontAwesomeIcon icon={ faAngleDown } className = 'header__arrow' />
            </div>
        </header>
    )
}

export default Header