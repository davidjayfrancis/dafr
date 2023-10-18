import * as React from "react"
import Layout from '../components/layout'
import Seo from "../components/seo"

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Thoughts and analysis for the deranged.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About me" />

export default AboutPage
