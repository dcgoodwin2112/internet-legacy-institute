import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = () => {
  const items = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___menuOrder }
        filter: { fields: {}, frontmatter: { menu: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              menu
              menuTitle
              menuOrder
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <nav>
      <ul className="m-3 flex flex-col flex-wrap items-center sm:flex-row lg:flex-nowrap list-none text-white font-sans font-thin">
        {items.allMarkdownRemark.edges.map(edge => {
          console.log(edge)
          const {
            node: {
              frontmatter: { menuTitle },
              fields: { slug }
            },
          } = edge
          const linkTitle =
            slug == `/` ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 fill-current"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            ) : (
              menuTitle
            )
          return (
            <li key={slug} className="my-1 py-1 mx-2 w-full sm:w-auto sm:my-1 sm:py-0 border-b border-gray-700 sm:border-0">
              <Link to={`${slug}`}>{linkTitle}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
