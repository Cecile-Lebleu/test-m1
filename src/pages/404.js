import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
   <Layout>
      <SEO title="404: Not found" />
      <h1>Nothing Found</h1>
      <br />
      <p>We couldn't find that page. Go back to the <Link to="/">homepage</Link>, or check out Diarly App in the <a href="https://apps.apple.com/app/id1387167765" target="_blank" rel="noopener noreferrer">iOS App Store</a> or <a href="https://apps.apple.com/app/id1387167765" target="_blank" rel="noopener noreferrer">Mac App Store</a>.</p>
      <div style={{height: 200}}></div>
   </Layout>
)

export default NotFoundPage
