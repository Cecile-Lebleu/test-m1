import React from "react"

import Styles from "./badges.module.scss"
import ButtonMac from "../buttons/button-mac"
import ButtoniOS from "../buttons/button-ios"

const Badges = () => (
   <div className={Styles.badges}>
      <ButtonMac />
      <ButtoniOS />
   </div>
)

export default Badges