import React from "react"
import Styles from "./personal.module.scss"

const Personal = ({ children }) => (
   <div className={Styles.personal}>
      <div className={Styles.content} style={{zIndex: 2}}>
         <h2>Express yourself</h2>
         <p>Customize your journals and entries with themes, fonts and templates, and enrich them with links, photos, emojis and map locations.</p>
      </div>
      <div className={Styles.graphic}>
			{ children }
      </div>
   </div>
)

export default Personal