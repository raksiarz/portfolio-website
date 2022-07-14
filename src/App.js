import './styles/main.scss'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const ref = useRef()

  return (
    <div>
      <Parallax pages = {3} ref = {ref}>
        <ParallaxLayer
          offset={0} 
          speed={1}
          factor = {2.5}
          style = {{
            backgroundColor: "#2C3639"
          }}
        >
          <Header 
            handleClick = {() => ref.current.scrollTo(1)}
          />
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
          speed = {1.5}
          factor = {2.5}
        >
          <About 
            handleClick = {() => ref.current.scrollTo(2)}
          />
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
          <Projects 
            handleClick = {() => ref.current.scrollTo(0)}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
