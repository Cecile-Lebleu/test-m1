import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.scss"

import Twitter from "./icons/twitter"
import Facebook from "./icons/facebook"
import Instagram from "./icons/instagram"
import Mail from "./icons/mail"

import ButtonMac from "./buttons/button-mac"
import ButtoniOs from "./buttons/button-ios"

const Footer = () => (
   <footer>
      <div className={styles.container}>
         <div>
            <h5>Diarly</h5>
            <ul>
               <li>
                  <Link to="/blog/">Blog</Link>
               </li>
               <li>
                  <Link to="/privacy/">Privacy Policy</Link>
               </li>
               <li>
                  <Link to="/terms_conditions/">Terms</Link>
               </li>
					<li>
						<Link to="/pricing/">Pricing</Link>
					</li>
               <li>
                  <a href="https://www.dropbox.com/sh/222w0fb8mbltlxf/AAC5MSFc3Km3wjBF15PZ42SXa?dl=0" target="_blank" rel="noopener noreferrer">Press Kit</a>
               </li>
            </ul>
         </div>
         <div>
            <h5>Journals</h5>
            <ul>
               <li>
                  <Link to="/note-taking-for-developers/">
                     Note Taking App for Developers
                  </Link>
               </li>
               <li>
                  <Link to="/diary-app-for-iphone/">
                     Diary App for iPhone
                  </Link>
               </li>
               <li>
                  <Link to="/mindfulness-journal/">
                     Mindfulness Journal
                  </Link>
               </li>
            </ul>
         </div>
         <div>
            <h5>Get the App</h5>
            <ul>
               <li>
                  <ButtoniOs />
               </li>
               <li>
                  <ButtonMac />
               </li>
            </ul>
         </div>
      </div>
      <p className={styles.footnote}>©2018-2020 <a href="https://pureformstudio.com" target="_blank" rel="noopener noreferrer">PureForm Studio</a> - All&nbsp;Rights&nbsp;Reserved</p>

      <div className={styles.icons}>
         <Twitter />
         <Facebook />
         <Instagram />
         <Mail />
      </div>
   </footer>
)

export default Footer