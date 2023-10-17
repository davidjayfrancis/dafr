import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to my slice of the internet.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

