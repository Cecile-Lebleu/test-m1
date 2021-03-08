import React from "react"
import { Link } from "gatsby"
import Logo from "./icons/diarly"
import Styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
   <header className={Styles.header}>
      <Logo />
      <div>
         <Link to="/help/"><h4>Help</h4></Link>
         <Link to="/blog/"><h4>Blog</h4></Link>
      </div>
   </header>
)

export default Header
