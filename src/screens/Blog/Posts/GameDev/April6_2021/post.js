import { Link } from "react-router-dom";

export const post = {
	id:2,
	url:'april_6_2021',
	metadata:{
		umbrella:'gamedev',
		post_date:"April 6, 2021",
		description:"Originally from a wordpress website called \"SimpleDevs\", I've migrated it to this personal blogging platform."
	},
	title:"SimpleDevs: What We Hope to Accomplish While We're Here",
	content:[
		{
			type:"jsx",
			content:(
				<>
					<span>Hello everyone! We're back for another blog post. Because SimpleDevs is basically starting out as a one-man operation, things will get dicey from the onset. Before we manage to start making good headway on our next projects, </span>
					<strong>we need to really define what it is that SimpleDevs is trying to do and what we're hoping to accomplish while we're still here.</strong>
				</>
			)
		},
		{
			type:'header',
			level:'3',
			content:'The "Mission Statement" of SimpleDevs'
		},
		{
			type:"jsx",
			content:(
				<>
					<span>In our </span>
					<Link to="/blog/march_25_2021">previous post</Link>
					<span>, I mentioned that I wished for this blog to be an outlet for my personal thoughts and feelings about two topics: Video Game Development, and Video Game Reviews. That is only part of the picture here - a smaller part of a grander whole, let's say.</span>
				</>
			)
		},
		{
			type:"jsx",
			content: (
				<>
					<span>As an entity, </span>
					<strong>SimpleDevs is a greater endeavor to really get deep into understanding how games are developed and what it takes to not just talk about games but also develop them</strong>
					<span>. SimpleDevs is small now, contained to a one-man team and a blog, but </span>
					<strong>I wish to eventually transform it into an indie team able to create new games for ourselves and all the fans we meet along the way</strong>
					<span>.</span>
				</>
			)
		},
		"That means that I'll be taking this opportunity to try to make games of my own, learning with every fumble and accomplishment and hopefully getting closer to my dream of working in the video game industry. I unfortunately do not have a definite, full-proof roadmap that I can show for everyone to see at the moment. However, what I can say with certainty is that I'll be tackling each task as they come, be it hell or high water.",
		"All in all, I am just thankful that I'm in this position to begin with, and I hope that to anyone who follows me that I'll live up to your expectations. Thank you from the bottom of my heart.",
		{
			type:'header',
			level:'3',
			content:'The Eternal Question: "What do Video Games Mean to You?"'
		},
		"Everyone has a different response to this question, and rightfully so - no one single answer exists to a question as personal as this one. Some see video games as an outlet for frustration, others see them time killers, and a few even see games as works of art.  If you were to ask me this question, I would answer with this statement:",
		{
			type:'quote',
			content:"I care about video games because I appreciate their unique ability to cater to our inner child while simultaneously encouraging us to think and act beyond our limits."
		},
		"This answer can be divided into two significant portions:",
		{
			type:'jsx',
			content: (
				<ul>
					<li>"Cater to our inner child" - <strong>games are meant to be fun and functional</strong>; they allow us to us to escape from the hardships of reality and appeal to either our sense of imagination or our sensibilities (sometimes both).</li>
					<li>"Encouraging us to think and act beyond our limits" - they often challenge our observation skills, critical thinking, reflexes, or outlook on real-world phenomena, <strong>giving us the leg room to experiment and learn from our muck-ups.</strong></li>
				</ul>
			)
		},
		"On that first point, something being \"fun\" is clearly purely subjective to each person, and that's completely okay - what really matters is that even if some people may look at our ideas and say \"this isn't fun\", we are able to come out of it by releasing games that don't skimp on quality nor functionality - our games being playable is the bare minimum requirement, in other words.",
		{
			type:"jsx",
			content:(
				<>
					<span>The second point is a bit more abstruse in its meaning, because it can be interpreted differently. "Challenge" in video games comes in both physical (i.e. requiring sharp senses, good reflexes, and deep knowledge on one or more topics) and psychological (i.e. encouraging discussion on real-world phenomena or self-introspection) forms. </span>
					<strong>I tend to lean towards more the latter interpretation, but I think both interpretations in general are equally valid.</strong>
				</>
			)
		},
		{
			type:"jsx",
			content: (
				<>
					<span>These are the kinds of games that I wish to create - </span>
					<strong>games that are not just fun to experience but also can leave an impact in the way they challenge us either physically or psychologically.</strong>
				</>
			)
		},
		{
			type:'header',
			level:'3',
			content:"SimpleDev's Next Step"
		},
		"In our next post, we'll be covering the various ideas for video games that I've brainstormed already, and we'll be narrowing down our list of ideas into a more cohesive list of possible directions. It's typically better to establish a foundation for our projects first before we jump right into the thick of it, at least as far as my anecdotal experience has taught me.",
		"That's it for this blog post. Thank you for reading! This is Ryan, signing off. Good night, everyone and may you be blessed with good luck and happy thoughts."
	]
}