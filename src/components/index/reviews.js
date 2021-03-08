import React from "react"
import Styles from "./reviews.module.scss"
import Review from "./review"

const Reviews = () => (
   <div className={Styles.reviews}>
      <h2>Users love Diarly</h2>
      <div className={Styles.container}>
         <Review
            rating = "5"
            username = "bcnbutty"
            date = "Feb 16, 2021"
            contents = "This app is bursting with functionality and is also easy to use - quite an achievement. I use it for pretty much all my note taking and journaling and over a year of use I’ve had no problems. The paid for edition is very good value too."
         />
         <Review
            rating = "5"
            username = "De'Aujanae"
            date = "Feb 23, 2021"
            contents = "I am an avid writer and journaling helped me to get out of a dark place. I have so many notebooks for the many types of writing that I do, so when I found this app it was like destiny. I am able to create many types of ‘Journals’ without the need for multiple notebooks. I can backup my writing, and have the ability to also view/edit/create them on my Mac. At first I didn’t know if I wanted to pay for a journal app, but it has been months and this is probably the best money spend in 2020!"
         />
			<Review
				rating = "5"
				username = "trivlink"
				date = "Dec 24, 2020"
				contents = "Simple. Elegant. This app gets the job done with the right balance of features. Keeping all of my data in iCloud and not on someone else’s servers is a big deal. Having everything sync across devices gives me the flexibility I need. If you want a solid app for recording thoughts and experiences, this one does an excellent job. The developer was super responsive to an idea suggestion and implemented it right away."
			/>
         <Review
            rating = "5"
            username = "AMWF"
            date = "Dec 4, 2020"
            contents = "This is a great app that does so much without getting in the way. Too many of these journaling apps get bloated and cluttered with features. So far they have developed it in a way that keeps the focus where it belows. Great Job!"
         />
      </div>
   </div>
)

export default Reviews