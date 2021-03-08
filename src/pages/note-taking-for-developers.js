import React from "react"

import SEO from "../components/seo"
import CTA from "../components/cta"
import Layout from "../components/layout"
import ContentLayout from "../components/content-layout"

import Devices from "../images/note-taking-for-developers-devices.png"
import Simplicity from "../images/note-taking-for-developers-simplicity.png"
import Routine from "../images/note-taking-for-developers-routine.png"

const LandingPage = () => (
	<Layout>
		<ContentLayout>
			<SEO
				title="Note Taking App for Developers | Diarly" 
				description="Need an app for taking development notes? Targets, highlighting, scheduling & easy to use. Diarly is the perfect solution for iPhone, iPad and Mac!"
			/>
			<h1>Note Taking App for Developers — Why You Need One!</h1>
			<p>Developers are busy people — it’s never possible to keep every thought or idea in your head. There are also plenty of thoughts that need to be written down, but definitely not in the middle of the code!</p>
			<p>The answer is to use a custom note taking app for developers. After all, you need a solution that fits into your workstation set-up, as well as your lifestyle. Diarly is our answer.</p>
			<h2>iOS: Any Platform, Any Device, Anywhere</h2>
			<img src={Devices} alt="Diarly on Mac, iPad, and iPhone" />
			<p>If you’re a developer, you’re likely fussy about your choice of tech. Diarly is fully supported on the iOS platform, so whether it's your MacBook, iPad or iPhone, Diarly is synced up and ready to go.</p>
			<p>Run it on your main workstation, or have it on a secondary device — however you want to work!</p>
			<CTA
				loc="external"
				text="Want to get started? Download and never worry about note taking again!"
				url="https://itunes.apple.com/us/app/diarly-daily-journal/id1387167765"
				button="Get the App!"
			/>
			<h3>Simplicity is Key</h3>
			<img src={Simplicity} alt="Minimalist Diarly user interface" />
			<p>Note taking shouldn’t be difficult. A note taking app for developers shouldn’t act like code. You’re not trying to recall a thought on line 32… Diarly offers a simple yet elegant solution. No overly complicated features, just straight forward note taking and writing.</p>
			<p>This isn’t just about good and efficient writing either; it’s also important for reading back!</p>
			<h3>Create A Routine</h3>
			<img src={Routine} alt="Diarly Word Count Statistics" />
			<p>Okay, so you’re likely not going to have target word counts, but as note taking apps for developers, targets are still important. Want to set regular targets for writing down thoughts on each project? Set your targets to work with your Sprint cycles, progress reports and more! Set it your way, so you’re always prepared for any reporting session.</p>
			<h3>Perfect For Meetings</h3>
			<p>Need to report in a Scrum meeting with 4 other developers, a Scrum Master and Product Owner? You need an app that doesn’t get in the way. Diarly is easy and intuitive to use. Pick your favorite device, load the app up and start taking notes on all the essential details.</p>
			<h2>What Else Can Diarly Do?</h2>
			<ul>
				<li><b>Highlighting</b> — get the most important points across with an easy-to-use highlighting tool.</li>
				<li><b>Hashtags and lists</b> — group your posts together by common theme, whether through hashtags or custom lists. Never get confused between different projects ever again!</li>
				<li><b>Synced backups</b> — Diarly uses iCloud to back up everything you write.</li>
				<li><b>Security</b> — worried about your notes? Thanks to encryption, Diarly is one of the most secure note taking apps for developers.</li>
				<li><b>Copy and paste</b> — add code snippets directly into Diarly. Trust us — it makes it so much easier to recall what you’re talking about!</li>
			</ul>
			<CTA
				loc="external"
				text="Want to get started? Download and never worry about note taking again!"
				url="https://itunes.apple.com/us/app/diarly-daily-journal/id1387167765"
				button="Get the App!"
			/>

		</ContentLayout>
	</Layout>
)

export default LandingPage
