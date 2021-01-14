import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header className="w-full bg-wblack bg-opacity-95 shadow-2xl">
    <div className="flex flex-wrap flex-row sm:flex-col lg:flex-nowrap lg:flex-row justify-around items-center">
      <h1 className="text-white w-1/3 sm:w-auto text-3xl m-2 font-sans font-thin tracking-widest">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
