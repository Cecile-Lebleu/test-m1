import React from "react"

import SEO from "../components/seo"
import CTA from "../components/cta"
import ContentLayout from "../components/content-layout"
import Layout from "../components/layout"

import Doodle from "../images/mindfulness-journal-doodle.svg"
import Cat from "../images/mindfulness-journal-cat.jpg"
import Type from "../images/mindfulness-journal-type.jpg"
import Window from "../images/mindfulness-journal-window.jpg"

const LandingPage = () => (
	<Layout>
		<ContentLayout>
			<SEO
				title = "Mindfulness Journal | Diarly" 
				description = "In a world where everyone and everything constantly requires our attention, it can be hard to find focus. Endless task lists, unread notifications, unfortunate news, and non-stop obligations can all take a toll on our capacity to look after ourselves."
			/>
			<h1>Mindfulness Journal</h1>
			<p>In a world where everyone and everything constantly requires our attention, it can be hard to find focus. Endless task lists, unread notifications, unfortunate news, and non-stop obligations can all take a toll on our capacity to look after ourselves.</p>
			<img src={Doodle} alt="Task list" />
			<h2>Mindfulness</h2>
			<p>Mindfulness is the act of purposefully switching from the grand picture into the present moment and the current environment, and taking it all in. It's the practice of experiencing the surroundings without judgment and without opinion.</p>
			<p>According to <a href="https://www.psychologytoday.com/us/basics/mindfulness" target="_blank" rel="noopener noreferrer">Psychology Today</a>, mindfulness can help by lowering stress levels, reducing harmful ruminating, and protecting against depression and anxiety — it can even help people better cope with rejection and social isolation.</p>
			<h2>Journaling</h2>
			<p>Journaling, or writing in a diary, has been used for millennia by countless people — from Roman emperors like Marcus Aurelius, all the way to celebrities and thinkers of today, like Emma Watson — because it's an extremely helpful tool to become more self-aware, to reflect on our choices, for daily improvement and growth. Journaling, just like mindfulness, brings plenty of benefits to the body and mind. It can help with managing anxiety, reducing stress, and coping with depression, says the <a href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentID=4552&ContentTypeID=1"  target="_blank" rel="noopener noreferrer">University of Rochester Medical Center</a>. They also mention that journaling can help you prioritize problems, fears, and concerns, track any symptoms day-to-day so that you can recognize triggers and learn ways to better control them, and provides an opportunity for positive self-talk, while identifying negative thoughts and behaviors.</p>
			<h2>Mindfulness Journaling</h2>
			<p>While you may be tempted to think of journaling and mindfulness as very different practices — mindfulness is generally regarded as a very passive, meditative state, while journaling includes actively processing thoughts, writing, and formulating sentences — in reality, they can both be joined into the same practice.</p>
			<p>Now that we know the benefits of mindfulness and journaling, let's dive into how we can use them both together to help us grow, improve, and cope with what's troubling us.</p>
			<img src={Cat} alt="Tabby cat meditating. By Michael Sum on Unsplash" />
			<p>Meditation, mindfulness, journaling, and so many other practices don't have to be mutually exclusive or fit into their predefined or stereotypical molds. And especially if you're just getting started, it might be more comfortable and inviting to enter into the habit of mindfulness if you do it while journaling, or into the habit of journaling by beginning with writing down sensations, from your body and your surroundings.</p>
			<h3>How to combine mindfulness and journaling</h3>
			<p>Instead of writing what's on your mind in your journal, try describing what you are feeling, right here and right now. Write down what sensations you can feel, like smells, sounds, or touch — describe the feeling of what you're sitting or standing on, or the textures and temperatures of any objects you're in contact with right now.</p>
			<img src={Type} alt="person sitting front of laptop. By Christin Hume on Unsplash" />
			<p>Mindfulness isn't about fixing anything that's causing negative feelings, like a loud fan, but instead, about acknowledging their existence, being with them for a bit, and understanding your feelings and responses. For example, if there's an annoying sound, you could try to turn off the device that's making it, or shut the window — but instead of doing that, just feel the sensation of it, and describe what it causes in your body. Maybe your chest is tensing up, or your jaw clenches as a response to that annoying sound. Take note of what's happening around you and to you, and note what your reaction is, voluntary or not.</p>
			<h3>When to journal mindfully</h3>
			<p>Some people like to journal at a specific time each day, like in the morning or evening. That's a fantastic way to get a habit started and to get used to the routine of it. But it's not the only way to do it. Mindfulness journaling can also be used as a tool to cope with frustration or to cherish a beautiful moment, right then, and right there.</p>
			<p>Having a digital journal that you can always securely have with you, like Diarly, can make it easier to journal and practice mindfulness wherever you are. You can journal from your iPhone, iPad, or on your Mac, and all your notes will be automatically saved and synced. And with password-protection and powerful encryption, you can be assured that your journal will be as secure as it can possibly be.</p>
			<CTA
				loc="external"
				text = "Download Diarly for free and start your journey into mindfulness and journaling"
				url="https://itunes.apple.com/us/app/diarly-daily-journal/id1387167765"
				button="Get the App!"
			/>
			<p>When you find adversity during the day, and you feel tension building up, take a few minutes to be mindful and journal about it. For example, a dropped or broken glass, a missed order, dreadful paperwork, or a confrontation. Soon after it happens, take 5–10 minutes to express your feelings about it, to yourself. Maybe your heart is racing, or your muscles are tense. Write about it as a third person looking at yourself, without judgment and without opinion.</p>
			<p>Or, on the other side of the spectrum, if you find yourself in a particularly enjoyable moment of peace — for example, with a cup of your favorite tea by the window, feeling the fresh air coming in, or having sunshine filter through, or when petting a fluffy pet, journal about it! Describe the moment, the details, how it feels. Take a moment to be grateful for the beautiful things around you as well.</p>
			<img src={Window} alt="computer showing Diarly app next to window and tea" />
			<p>Now it's your turn. Open up your journal and just start writing. If you don't yet have a digital journal, or even if you already have one, consider downloading Diarly. It's available for free for iPhone, iPad, and Mac, with unlimited days and unlimited entries, so you can write to your heart's content.</p>
		</ContentLayout>
	</Layout>
)

export default LandingPage
