/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        className="flex flex-col items-center bg-no-repeat bg-contain min-h-screen"
        style={{
          backgroundImage: "url(/images/header-bg.jpg)",
          backgroundPositionY: "-7rem",
        }}
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="max-w-screen-md w-full bg-gray-50 bg-opacity-95 px-5 md:px-10 py-3 pb-8 md:rounded-lg relative lg:top-16 xl:top-28">
          <main>{children}</main>
        </div>
        <footer className="text-white font-thin text-sm my-3 relative lg:top-20 xl:top-32">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
