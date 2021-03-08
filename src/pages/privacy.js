import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ContentLayout from "../components/content-layout"
import SEO from "../components/seo"

const Privacy = () => (
   <Layout>
		<ContentLayout>
			<SEO title="Privacy Policy" />
			<h1>Privacy Policy</h1>
			<p>Last updated 1st November 2019</p>
			<p><Link to="/terms_conditions/">Terms & Conditions</Link></p>
			<h2>Why do we collect information</h2>
			<p>We collect the data to provide you the best experiences with our products. We can also use analytics for our ads campaigns to be able to decide which ads are successull.</p>
			<h2>What information do we collect?</h2>
			<h3>Analytics & Crash Reports</h3>
			<p>We collect statistical information on how you use the application so we know what features are being using and based on that to modify application to better match your needs. Analytics data is stored in <a href="http://mixpanel.com" target="_blank" rel="noopener noreferrer">Mixpanel</a>.</p>
			<p>In iOS App version 1.2.9 and newer we use <a href="https://www.facebook.com/help/analytics/1710582659188030"  target="_blank" rel="noopener noreferrer">Facebook Analytics</a> to monitor efficiency of Facebook ads.</p>
			<p>Crash reports are sent only if application crashes. They help us to identify problems and release fixes early. Crash Logs are stored on <a href="https://appcenter.ms/" target="_blank" rel="noopener noreferrer">AppCenter</a> — a Microsoft company.</p>
			<h3>Email</h3>
			<p>We use Mailchimp for newsletter and marketing emails. You can unsubscribe from emails at any point using the unsubscribe link at the bottom of all emails.</p>
			<h3>Cookies</h3>
			<p>We use Google Analytics on website to know how many page views we have and which websites reference our website.</p>
			<h2>Information we do not collect</h2>
			<p>We do not collect any personally identifiable information, or any of the contents of your entries.</p>
			<p>If you have any questions about this privacy policy, please contact us as hello@pureformstudio.com</p>
		</ContentLayout>
	</Layout>
)

export default Privacy
