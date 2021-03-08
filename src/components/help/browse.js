import React from "react"

import styles from "./browse.module.scss"

import Card from "./card"
import IconGettingStarted from "../icons/configure"
import CreditCard from "../icons/credit-card"
import Cog from "../icons/cog"

import GettingStarted from "./queries/gettingStarted"
import HowTos from "./queries/how-tos"
import PowerUser from "./queries/power-user"
import SubscriptionsBilling from "./queries/subscriptions-billing"
import TechnicalQuestions from "./queries/technical-questions"
import ContentLayout from "../content-layout"

const Browse = () => (
	<div>
		<h2>Browse all topics</h2>
		<div className={styles.cards}>
			<a href="#GettingStarted">
				<Card>
					<span>
						<IconGettingStarted/>
					</span>
					<h5>Getting Started</h5>
					<p>Welcome to Diarly! Get started faster by learning some basics.</p>
				</Card>
			</a>
			<a href="#SubscriptionsBilling">
				<Card>
					<span>
						<CreditCard/>
					</span>
					<h5>Subscriptions & Billing</h5>
					<p>Have questions about our plans or billing? Find Answers here.</p>
				</Card>
			</a>
			<a href="#TechnicalQuestions">
				<Card>
					<span>
						<Cog/>
					</span>
					<h5>Technical Questions</h5>
					<p>More technical documentation and answers to most common issues.</p>
				</Card>
			</a>
		</div>
		<ContentLayout>
			<div id="GettingStarted">
				<GettingStarted />
			</div>
			<div id="HowTos">
				<HowTos />
			</div>
			<div id="PowerUser">
				<PowerUser />
			</div>
			<div id="SubscriptionsBilling">
				<SubscriptionsBilling />
			</div>
			<div id="TechnicalQuestions">
				<TechnicalQuestions />
			</div>
		</ContentLayout>
	</div>
)

export default Browse