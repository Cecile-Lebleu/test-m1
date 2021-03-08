import React from "react"

import SEO from "../components/seo"
import CTA from "../components/cta"
import Layout from "../components/layout"
import ContentLayout from "../components/content-layout"
import CoverImage from "../images/diary-app-for-iphone.jpg"

const LandingPage = () => (
	<Layout>
		<ContentLayout>
			<SEO
				title="Diary App for iPhone" 
				description=""
			/>
			<h1>Diary app for iPhone</h1>
			<img 
				src={CoverImage}
				alt="Diary App for iPhone"
				style={{
					margin: "1rem 0",
					borderRadius: "0.5rem"
				}}>
			</img>
			<p>Let's face it: in today's day and age, we have our technology — mainly our phones — with us at all times. This has caused shifts both in our capacity to access productivity and creativity practices on the go, as well as shifts in our expectations about what we should be able to do portably.</p>
			<p>One area that these shifts have manifested themselves is in the world of journaling. Apple users who are looking to start or maintain a journaling practice find that they have more success by using a diary app for iPhone. Using an app for journaling is helpful in a number of ways, including promoting regular journaling and making one's journal easily accessible.</p>
			<CTA
				loc="external"
				text="Download Diarly for iPhone for free!"
				url="https://apps.apple.com/app/id1387167765"
				button="Get the App!"
			/>
			<h2>Create a Habit</h2>
			<p>It is a truism that in order to create a habit, one must engage in a new behavior repeatedly and often. This is no different from developing a habit to keep a journal.</p>
			<p>Journaling takes different shapes for different people. Some do it once a day, some like to do it whenever a new thought occurs to them, or whenever they feel they have something new to reflect upon.</p>
			<h3>A new way to journal</h3>
			<p>There was a time when the best way to write journal entries was to sit down with a notebook. This is something that has been done by stalwart writers for centuries. We all have an image of a poet sitting in a café scribbling furiously into a notebook. But the truth is that, as our lives become more interconnected through technology, even for writers, it is less common to carry old-fashioned writing implements (pen and notebook) at all times. This is even less common for people who don't consider themselves "writers'', but would nevertheless benefit from a regular journaling practice, which many people, regardless of their occupation, find therapeutic. For a long time, not having a proper journal to write in, or not having it readily available, was a hindrance to those seeking to establish a journaling practice.</p>
			<h3>Practical and easy</h3>
			<p>Using a diary app for iPhone takes down some of those barriers and makes a beginning journaling practice easier to tap into, even for a novice. Because most iPhone users have access to their phones at all times, if someone seeking to build a journaling habit uses a diary app for iPhone, journaling can become something they can do throughout the day, no matter where they are. This means that, for example, while waiting to drink a cup of coffee in a museum café, someone could create a journal entry with their thoughts about their museum visit, or could make observations about the surrounding people.</p>
			<h3>Take your journal with you</h3>
			<p>An iPhone diary app is also beneficial to the established journal writer, because it makes writing in a journal something one can do anywhere and at any time. This convenience is in line with what we expect from our technology-driven lives.</p>
			<p>Gone are the days when we are willing to wait for the evening news to find out what the weather will be tomorrow, or wait until we can get to an encyclopedia to look something up. We have computers in our palms at all times, and we have the expectation that almost any action we might want to take is possible with that computer. Therefore, even people who have been journaling in a notebook for decades are experiencing shifts in mentality.</p>
			<h3>Always available</h3>
			<p>The regular availability of our technology makes us crave all forms of expression and productivity to be available within it. A diary app for iPhone makes it possible for seasoned practicers of journaling to tap into their practice anytime and anywhere. With an app available at one's fingertips at anytime, writing becomes a practice that can happen on the train, in bed, or in a café. It's unobtrusive and discreet — everyone is always looking at their phones; no one even needs to know you're in the middle of journaling.</p>
			<p>For veterans and novice journal keepers alike, a diary app for iPhone is the best way to create and keep a journaling habit and making the creation of journal entries accessible from anywhere. If you have been considering starting a journal, or if you're curious about how your existing journaling practice could benefit from technology, download Diarly, our journaling app for iPhone today.</p>
			<CTA
				loc="external"
				text="Download Diarly for iPhone for free!"
				url="https://apps.apple.com/app/id1387167765"
				button="Get the App!"
			/>
		</ContentLayout>
	</Layout>
)

export default LandingPage
