import React from "react"
import Styles from "./review.module.scss"
import Star from "../icons/star"

const Review = (props) => {
   let stars = []
   for (let i = 0; i < props.rating; i++) {
      stars.push(<Star />)
   }
   return (
      <div className={Styles.container}>
         <div className={Styles.header}>
            {/* <h3>{props.title}</h3> */}
            <div className={Styles.stars}>
               {stars}
            </div>
         </div>
         <p>{props.contents}</p>
         <span>by {props.username} – {props.date}</span>
      </div>
   )
}

export default Review