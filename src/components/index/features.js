import React from "react"
import Styles from "./features.module.scss"

const Features = () => (
   <div className={Styles.features}>
      <h2>Features at a glance</h2>
      <div className={Styles.left}>
         <ul>
            <li>Write in plain text using the <strong>advanced Markdown editor.</strong></li>
            <li>Compose your diary entries on <strong>Mac, iPhone and iPad apps.</strong></li>
            <li>Powerful <strong>encryption</strong> and <strong>password protection.</strong></li>
            <li><strong>Sync seamlessly</strong> and securely via iCloud.</li>
            <li><strong>Import entries</strong> from other journaling apps.</li>
            <li>Add in-line <strong>rich media</strong> with photos, videos, emojis, files, and links. </li>
            <li>Find your entries using <strong>star favourites</strong> and <strong>hashtags.</strong></li>
            <li>Keep your <strong>diary and notes</strong> in one place.</li>
         </ul>
      </div>
      <div className={Styles.right}>
         <ul>
            <li>Set <strong>writing goals</strong> and check your <strong>statistics over time.</strong></li>
            <li><strong>Import and export to Markdown</strong> to back up your entries.</li>
            <li><strong>Multiple journals</strong> allow multiple entries for the same day.</li>
            <li>Set <strong>custom themes</strong>, text sizes and fonts.</li>
            <li><strong>Type writing mode</strong> keeps you centered on the screen while writing.</li>
            <li>Find a specific date, place or topic with <strong>in-built calendar</strong>, lists and <strong>map.</strong></li>
            <li>Add and play <strong>audio and video</strong> directly in your journals.</li>
         </ul>
      </div>
   </div>
)

export default Features