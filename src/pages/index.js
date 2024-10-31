import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { useState} from "react"
import { useEffect } from 'react'
 
// use this to store keystrokes so we can check against a cypher (the 'Konami code')
let l = [];
// hides the image

const IndexPage = () => {
  const [isVisible, setIsVisible] = useState(false);

// This is the Konami code
const cypher = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// Track keystrokes 
function logKeystroke(event) {

  // Checks the current list against the cypher
  if (l.every(item => cypher.includes(item)) && cypher.every(item => l.includes(item))) {
    setIsVisible(true);
  } 
  // cypher is less than ten so just add the keystroke
  if (l.length <10) {
    l.push(event.key);
    if (l.every(item => cypher.includes(item)) && cypher.every(item => l.includes(item))) {
      setIsVisible(true);
    } 
  } else {
    // get rid of first element and push event.key to last element, check again
    l.shift();
    l.push(event.key)
    if (l.every(item => cypher.includes(item)) && cypher.every(item => l.includes(item))) {
      setIsVisible(true);
    } 
  }
}

  useEffect(() => {
    document.addEventListener('keydown', logKeystroke);
    return () => {
      document.removeEventListener('keydown', logKeystroke);
    };
  }, [logKeystroke]);
  
  return (

      <Layout pageTitle="Home" id="layout"  >
        <p>My name is David Francis. Welcome to my slice of the internet.</p>
        <p>I'm currently building the world's best work tech research business, you can learn more about that <a href="https://www.talenttechlabs.com">here</a>. </p>
        
        {isVisible && (
          <>
            <p>Congrats! You unlocked this incredible picture. (Took it after I bought the hat, which I later lost getting mugged -- a story for another day).</p>
            <StaticImage 
            alt="David, in a suit and tie taking a picture in the mirror"
            src="../images/david.jpeg"
            id="secret-image"
            />
          </>
)}
      </Layout>

  )
}

export const Head = () => <Seo title="Home page" />

export default IndexPage

