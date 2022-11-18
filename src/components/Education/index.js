import Widecard from "./Widecard";
import './index.css'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'


const Education = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() =>{
          setLetterClass('text-animate-hover')
      },3000)
    },[])

    return(
        <div className="container about-page">
            <div className="text">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['E','d','u','c','a','t','i','o','n']}
                        idx={15}
                    />
                </h1>
                <Widecard title="University" where="King Mongkut's University of Technology North Bangkok" from="2019" to="Present" />
                <Widecard title="High School" where="Chonradsadornumrung School" from="2013" to="2018" />
            </div>
            
            <Loader type="pacman" />
        </div>
        
    );
}

export default Education;