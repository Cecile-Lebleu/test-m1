import React from "react"
import styles from "./cta.module.scss"
import Button from "./buttons/button"

const CTA = ({ text, loc, url, button }) => (
   <div className={styles.cta}>
      <p>{text}</p>
      <Button loc={loc} url={url} text={button} />
   </div>
)

export default CTA