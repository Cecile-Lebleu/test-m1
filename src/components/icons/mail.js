import React from "react"
import styles from "./icons.module.scss"

const Mail = () => (
   <div className={styles.icon}>
      <a href="mailto:hello@diarly.app" data-uk-icon="icon: mail" target="_blank" rel="noreferrer noopener">
         <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="mail">
            <polyline fill="none" points="1.4,6.5 10,11 18.6,6.5" />
            <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z" />
         </svg>
      </a>
   </div>
)

export default Mail