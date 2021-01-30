import React from "react"
import "../components/layout.css"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found"/>
    <div style={{placeItems: "center", display: "grid", height: '100vh'}}>
      <div>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </>
)

export default NotFoundPage
