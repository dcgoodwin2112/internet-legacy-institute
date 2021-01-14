import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function Page({ data }) {
  const page = data.markdownRemark
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
