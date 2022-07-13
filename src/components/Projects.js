import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/fontawesome-free-solid'

function Projects(props) {
    return (
        <section className = 'projects'>
            <h4>Projects</h4>
            <div className = "projects__section">
                <a href = 'https://github.com/raksiarz/forms' target = 'blank'>
                    <motion.div 
                        initial = {{ opacity: 0 }}
                        whileInView = {{ opacity: 1 }}
                        whileHover = {{ 
                            scale: 1.04,
                            boxShadow: "5px 10px 10px rgba(0, 0, 0, .3)"
                        }}
                        className = "project auth"
                    >
                        <h5>Auth</h5>
                    </motion.div>
                </a>

                <a href = 'https://github.com/raksiarz/Olimbic' target = 'blank'>
                    <motion.div
                        initial = {{ opacity: 0 }}
                        whileInView = {{ opacity: 1 }}
                        whileHover = {{ 
                            scale: 1.04,
                            boxShadow: "5px 10px 10px rgba(0, 0, 0, .3)",
                        }}
                        className = "project olimbic"
                    >
                        <h5>Olimbic</h5>
                    </motion.div>
                </a>

                <a href = 'https://github.com/raksiarz/quzzical-trivia' target = 'blank'>
                    <motion.div 
                        initial = {{ opacity: 0 }}
                        whileInView = {{ opacity: 1 }}
                        whileHover = {{ 
                            scale: 1.04,
                            boxShadow: "5px 10px 10px rgba(0, 0, 0, .3)"
                        }}
                        className = "project quiz"
                    >
                        <h5>Quiz</h5>
                    </motion.div>
                </a>
            </div>
            <div className = "project__arrows-up-box" onClick = {props.handleClick}>
                <FontAwesomeIcon icon={ faAngleDoubleUp } className = 'project__arrows-up'/>
            </div>
        </section>
    )
}

export default Projects