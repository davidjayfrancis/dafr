import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to my slice of the internet.</p>
      <StaticImage 
        alt="David, in a suit and tie taking a picture in the mirror"
        src="https://shorturl.at/eovWX" />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

