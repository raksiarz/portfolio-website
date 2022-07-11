import './styles.scss'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const header = useRef()
  const about = useRef()
  const projects = useRef()

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Parallax pages = {3}>
        <ParallaxLayer
          offset={0} 
          speed={1}
          factor = {2.5}
          style = {{
            backgroundColor: "#2C3639"
          }}
        >
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          factor = {2}
          style = {{
            backgroundColor: "#abb8c3"
          }}
        />

        <ParallaxLayer 
          offset = {1} 
          speed = {0.5}
          factor = {2}
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor = {2}
          style = {{
            backgroundColor: "#2C3639"
          }}
        />

        <ParallaxLayer
          offset = {2}
          speed = {1.25}
        >
          <Projects />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
