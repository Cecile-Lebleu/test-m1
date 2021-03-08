import React from "react"

import Layout from "../components/layout"
import ContentLayout from "../components/content-layout"
import SEO from "../components/seo"
import styles from "./pricing.module.scss"
import Feature from "../components/pricing/feature"

const Pricing = () => (
   <Layout>
		<ContentLayout>
			<SEO
				title="Pricing"
				description="Diarly is free to download and use for iPhone, iPad, and Mac."
			/>
			<h1>Pricing</h1>
			<p>Diarly is free to download and use for iPhone, iPad, and Mac.</p>
			<div className={styles.features}>
				<div className={styles.titles}>
					<div></div>
					<div className={styles.center}>
						<h5>Free</h5>
					</div>
					<div className={styles.center}>
						<h5>Premium</h5>
					</div>
				</div>

				<Feature
					title = "Basic Themes"
					description = "Light and Dark"
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Media"
					description = "Add your own images, drawings, emoji's, heading labels and website links. Add and play videos and voice messages."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Checklists"
					description = "Check off your accomplished goals with useful Checklists."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Templates"
					description = "Create thought-cue templates to kickstart your writing entries or use or pre-sets."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Styling"
					description = "Customize and resize the font to suit your needs and save to favorites."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Spellcheck"
					description = "Customize the built-in spelling and grammar checker to your preferences."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Dictation"
					description = "Dictate your written entries for quick, handsfree journaling."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Markdown"
					description = "Export to Markdown for minimalist writing without formatting."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Hashtags"
					description = "Filter and find your ideas with your own hashtags, lists or tags."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Import"
					description = "Import entries from other journaling apps to make Diarly your new home."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Basic Export"
					description = "Export your entries to plain text format. This allows you to backup and edit them easily."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Calendar"
					description = "Jump between past entries with ease using the Calendar tool."
					free = {true}
					premium = {true}
				/>


				<Feature
					title = "Map"
					description = "Pinpoint your memories by location with Map View."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "File Import"
					description = "Keep your important files in one place by importing them directly into your entries."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Word Finder"
					description = "Locate untagged thoughts in a list using the handy Word Finder tool."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Text Enhancement"
					description = "Sort your ideas with bullet points, line separators, symbols, and highlighted text."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Drawings"
					description = "Use built-in sketch tool to make your own drawings"
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Time Separators"
					description = "Use Time Separators to create a distinction between multiple daily entries."
					free = {false}
					premium = {true}
				/>

				<Feature
					title = "Weather and Location in Templates"
					description = "Use the automatic weather and location feature in your template."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Goal Tracking"
					description = "Track your daily writing goals with word and character counts and targets."
					free = {true}
					premium = {true}
				/>

				<Feature
					title = "Encryption and Password Protection"
					description = "Secure your ideas with encryption and password protection."
					free = {false}
					premium = {true}
				/>

				<Feature
					title = "Sync"
					description = "Access your notes on multiple devices, with seamless, secure sync via iCloud."
					free = {false}
					premium = {true}
				/>

				<Feature
					title = "Advanced Themes"
					description = "Personalize your journaling experience with over 100 beautiful custom themes."
					free = {false}
					premium = {true}
				/>

				<Feature
					title = "Stats"
					description = "View statistics on your writing achievements over the last 90 days or more."
					free = {false}
					premium = {true}
				/>


				<Feature
					title = "Unlimited Journals"
					description = "Create and categorize unlimited journals that open in separate interfaces."
					free = {false}
					premium = {true}
				/>

				<Feature
					title = "Custom Themes"
					description = "Create and import your own design themes (tutorial available)"
					free = {false}
					premium = {true}
				/>

				<Feature
					title = "Export"
					description = "Export your journals to PDF, RichText or Print"
					free = {false}
					premium = {true}
				/>
				
			</div>
		</ContentLayout>
	</Layout>
)

export default Pricing
