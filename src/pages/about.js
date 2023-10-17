import * as React from "react"
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Thoughts and analysis for the deranged.</p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <title>About</title>
        <meta name="description" content="A description of the website." />
    </>
)   

export default AboutPage
