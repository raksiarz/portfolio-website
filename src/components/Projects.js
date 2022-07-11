import { motion } from "framer-motion"

function Projects() {
    return (
        <section className = 'projects'>
            <h4>Projects</h4>
            <div className = "projects__section">
                <motion.div 
                    whileHover = {{ 
                        scale: 1.04,
                        boxShadow: "5px 10px 10px rgba(0, 0, 0, .3)"
                    }}
                    className = "project auth"
                >
                    <h5>Auth</h5>
                </motion.div>
                <motion.div 
                    whileHover = {{ 
                        scale: 1.04,
                        boxShadow: "5px 10px 10px rgba(0, 0, 0, .3)",
                    }}
                    className = "project olimbic"
                >
                    <h5>Olimbic</h5>
                </motion.div>
                <motion.div 
                    whileHover = {{ 
                        scale: 1.04,
                        boxShadow: "5px 10px 10px rgba(0, 0, 0, .3)"
                    }}
                    className = "project quiz"
                >
                    <h5>Quiz</h5>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects