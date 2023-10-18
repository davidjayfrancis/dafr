import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to my slice of the internet.</p>
      <StaticImage 
        alt="David, in a suit and tie taking a picture in the mirror"
        src="../images/david.jpeg" />

    </Layout>
  )
}

export const Head = () => <Seo title="Home page" />

export default IndexPage

