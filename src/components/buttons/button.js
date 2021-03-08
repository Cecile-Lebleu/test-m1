import { Link } from "gatsby"
import React from "react"
import styles from "./button.module.scss"

const Button = ( props ) => (
   <div className={styles.button}>
      {props.loc === "external" ?
         <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.text}
         </a>
         :
         <Link to={props.url}>
            {props.text}
         </Link>
      }
   </div>
)

export default Button