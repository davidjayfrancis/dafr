import * as React from "react"
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Essay = ({data, children}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt} />
                <p>Photo credit: {data.mdx.frontmatter.hero_image_credit_text}</p>
            {children}
        </Layout>
    )
}

export const query = graphql` 
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default Essay