import React from "react"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
   return (
      <div>
         <div className={styles.content}>
            <Header />
            <main>{children}</main>
         </div>
         <Footer />
      </div>
   )
}

export default Layout
