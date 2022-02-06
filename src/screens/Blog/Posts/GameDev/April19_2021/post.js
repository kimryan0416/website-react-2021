import { Link } from "react-router-dom";

import { ExtURL } from "../../../../../components";

import embarkment from "./assets/embarkment.jpg";
import room from "./assets/room.png";
import orbit from "./assets/orbit.png";
import prdream from "./assets/prdream.jpg";
import journey from "./assets/journey.jpg";
import novel from "./assets/novel.jpg";

export const post = {
	id:3,
	url:'april_19_2021',
	metadata:{
		umbrella:'gamedev',
		post_date:"April 19, 2021",
		description:"Originally from a wordpress website called \"SimpleDevs\", I've migrated it to this personal blogging platform."
	},
	title:"The Idea Bonanza - Brainstorming and Determining our First Game!",
	content:[
		"Hello everyone! We’re back for another blog post.",
		{
			type:"jsx",
			content:(
				<>
					<span>In my </span>
					<Link to='/blog/april_6_2021'>previous post</Link>
					<span>, I clarified what my mission statement for game development was and what I'll be doing going forward. To summarize, I wish to adhere to the following code:</span>
				</>
			)
		},
		{
			type:'quote',
			content:'As an entity, SimpleDevs is a greater endeavor to really get deep into understanding how games are developed and what it takes to not just talk about games but also develop them. SimpleDevs is small now, contained to a one-man team and a blog, but I wish to eventually transform it into an indie team able to create new games for ourselves and all the fans we meet along the way.'
		},
		"Alongside this mission statement, I also clarified my direction and mentality towards game design:",
		{
			type:"quote",
			content:"I care about video games because I appreciate their unique ability to cater to our inner child while simultaneously encouraging us to think and act beyond our limits."
		},
		{
			type:"jsx",
			content: (
				<>
					<span>In essence, I want to create games that are fun and functional while challenging the player in either skill or outlook on life. If you're curious, please read my previous post for the full context: </span>
					<Link to='/blog/2'>SimpleDevs: What We Hope to Accomplish While We’re Here.</Link>
				</>
			)
		},
		"With that being said though, now is the time to brainstorm and formulate several ideas (concepts) that I'll be pursuing for our first game (as SimpleDevs)!",
		{
			type:'header',
			level:'3',
			content:'Concept Ideas: The List'
		},
		"In truth, my list of ideas is kind of... expansive. Too expansive to put into a single blog post. In lieu of a raw idea list, I'll be displaying full game concepts that represent the congregation of various ideas I've had in the past. In short, these concepts are ones that had enough thought put into them to have a pitch, napkin description, and ideas for game mechanics.",
		"(Note: The names for these concepts are placeholders.)",
		"There are 7 big concepts in this list. They are:",
		{
			type:'jsx',
			content: (
				<ol>
					<li>[Embarkment 2.0] - RTS-Shooter Hybrid, PC</li>
					<li>[SimpleRPG] - Tactical RPG, PC</li>
					<li>[My Room] - Immersive VR, Oculus Quest/Rift</li>
					<li>[Orbit 2.0] - Survival VR, Oculus Quest/Rift</li>
					<li>[PRDream-VRified] - VR, Oculus Quest/Rift</li>
					<li>[Journey VR] - Exploration Immersive VR, Oculus Quest/Rift</li>
					<li>[Simple Visual Novel] - Visual Novel, PC</li>
				</ol>
			)
		},
		{
			type:"jsx",
			content:(
				<>
					<span>The second point is a bit more abstruse in its meaning, because it can be interpreted differently. "Challenge" in video games comes in both physical (i.e. requiring sharp senses, good reflexes, and deep knowledge on one or more topics) and psychological (i.e. encouraging discussion on real-world phenomena or self-introspection) forms. </span>
					<strong>I tend to lean towards more the latter interpretation, but I think both interpretations in general are equally valid.</strong>
				</>
			)
		},
		{ type:"header", level:'3', content:"Concept #1: [Embarkment 2.0]" },
		{
			type:"jsx",
			content: (
				<>
					<strong>Platforms: </strong>
					<span>PC</span>
					<br />
					<strong>Full Concept Document: </strong>
					<ExtURL href="https://docs.google.com/document/d/1SRNsQaPG3RRhu0k9zOhhgcmErn8AZyUCrvCFnVjQzi4/edit?usp=sharing">Google Document</ExtURL>
				</>
			)
		},
		{
			type:'image',
			content:embarkment,
			alt:"Embarkment concept diagram"
		},
		"[Embarkment 2.0] is an RTS-Shooter Hybrid that tests the limits of players' ability to multitask and think two steps ahead of the action. Set in the mystical Forest of Light, the player controls the Cloaked One as he travels across the Forest to combat a volatile infection called the \"Withering\" that threatens the peace. Divided across 12 levels that encompass different types of terrain and obstacles, the player is responsible for navigating each level and defeating the levels' infected Elder Trees; meanwhile, they must take care and use their abilities and allied plants to evade enemy attacks and protect their allied Elder Trees. [Embarkment 2.0]'s two significant gameplay elements, RTS and 3rd-person shooters, are combined together to form an experience that challenges players on both their quick reflexes and their strategic capabilities.",
		{
			type:"jsx",
			content: (
				<>
					<strong>Premise:</strong><br />
					<span>"You are the Cloaked One, a member of the Forest of Light. Light shines from the sky, showering the forest with energy and life. However, in the deepest recesses of a faraway set of ruins lies the Withering, a mysterious infection that suddenly erupts and starts destroying massive parts of the Forest. If not contained, the Withering will envelop and destroy the Forest forever. As the Cloaked One, you must remove the Withering from the Forest and find a way to save your home from decay and destruction."</span>
				</>
			)
		},
		{ type:"header", level:'3', content:"Concept #2: [Simple RPG]" },
		{
			type:"jsx",
			content: (
				<>
					<strong>Platforms: </strong>
					<span>PC</span>
					<br />
					<strong>Full Concept Document: </strong>
					<ExtURL href="https://docs.google.com/document/d/1myLFGDfqmRiON58_W1EjJeyhufS9MpdC0HrkFbXJhMA/edit?usp=sharing">Google Document</ExtURL>
				</>
			)
		},
		"[SimpleRPG] is a light tactical role-player title that combines turn-based combat levels with decision-based storytelling to tell a tale constantly affected by the choices the player makes both in combat and in key moments of the title’s story. Based in the fictional world of the Hills, you take control of a soldier from the Central Hills sent into combat with the forces of the Eastern Hills, with the end goal of making it back safely to the Central Hills after a disastrous start to the war. Along the way, you meet other soldiers and compatriots who decide to join your group, but conflicting goals and responsibilities pull you in different directions, forcing you to make choices that can drastically change the direction of the story. [SimpleRPG] takes the idea of ‘decision-based storytelling’ to its full extent, with whole entire segments of the game’s story affected by the smallest of choices the player has made in the past.",
		{
			type:"jsx",
			content: (
				<>
					<strong>Premise:</strong><br />
					<span>"You're a young man from the Central Hills country who was sent to fight in war, but in your first battle you fell unconscious and woke up in the aftermath of the bloody struggle. It seems that the enemy, invaders from the Eastern Hills, had broken through and have conquered the surrounding land. You must evade the Eastern Hills’ forces and make your way back home, where your family is waiting for you to return. However, the journey back isn’t easy - not only are Eastern Hill soldiers stationed everywhere, but even the allies you’ve met along the way have places to be and things to do. What kinds of decisions will you be forced to make, and how will your story play out as a result?"</span>
				</>
			)
		},
		{ type:"header", level:'3', content:"Concept #3: [My Room]" },
		{
			type:"jsx",
			content: (
				<>
					<strong>Platforms: </strong>
					<span>VR (Oculus)</span>
					<br />
					<strong>Full Concept Document: </strong>
					<ExtURL href="https://docs.google.com/document/d/1PWG7lsNpNaeH_SdRBlV3pgeuRoGAISCu2fuAsJmZXiw/edit?usp=sharing">Google Document</ExtURL>
				</>
			)
		},
		{
			type:'image',
			content:room,
			alt:"My Room concept diagram"
		},
		"[My Room] is a immersive/social Virtual Reality (VR) experience that simulates the feeling of taking photographs within a visually distinct 3D world. Set in your empty room, the player must take pictures of events going on outside of their room; depending on the subject of the photograph, the world outside will change, leading to a different (or slightly modified) world each day. [My Room] increases the immersion factor by having the photo-taking experience intrinsically tied to basic conventions of photo-taking in the real world - manipulating ISO/Aperture/Shutter Speed, adjusting zoom by rotating the lens, and the feeling of holding a camera in one’s hands as they take the picture. Furthermore, [My Room] is also meant to be escapist in nature, encouraging players to look out their windows and enjoy the world outside during a time when people cannot go outside as freely as they could in the past.",
		{
			type:"jsx",
			content: (
				<>
					<strong>Premise:</strong><br />
					<span>"You are a person stuck inside of your apartment room. To compensate, you've taken to a hobby of photography. With your camera, tripod, and computer, you upload an image online once a day - like a daily challenge of some kind. Outside lies a world that is full of macro and micro details that you can only capture with your camera. Take the time to observe the world and take it all in, one day at a time."</span>
				</>
			)
		},
		{ type:"header", level:'3', content:"Concept #4: [Orbit 2.0]" },
		{
			type:"jsx",
			content: (
				<>
					<strong>Platforms: </strong>
					<span>VR (Oculus)</span>
					<br />
					<strong>Full Concept Document: </strong>
					<ExtURL href="https://docs.google.com/document/d/1tyGu2iZHmeQhptT-xYq6nMwh8z4cI6eztb01_7Bta7g/edit?usp=sharing">Google Document</ExtURL>
				</>
			)
		},
		{
			type:'image',
			content:orbit,
			alt:"Orbit 2.0 concept diagram"
		},
		"[Orbit 2.0] is a VR survival game that brings the explorative gameplay elements of traditional survival games into the world of VR. Players control a lost Astronaut who has crash-landed onto a watery world due to a fault in their spaceship and who only has a certain amount of resources at their disposal. Struggling against dwindling resources, the player must harvest resources from the watery planet and discover the secrets lying within. VR is the intended platform of choice for [Orbit 2.0] and will take full advantage of the affordances of VR such as grabbing and gestures to create a greater sense of immersion with the game's world and interactive elements.",
		{
			type:"jsx",
			content: (
				<>
					<strong>Premise:</strong><br />
					<span>"You suddenly awaken to find yourself in a desperate situation: your spaceship has crash-landed, your communications systems aren't working, and you only have limited amount of supplies to survive. Outside lies a mysterious world, dominated by a waist-height watery expanse of an ocean. Your remaining computer systems tell you that it's safe to go out, but what lies out there? You only have so long to live... maybe there is something out there that can help you escape from this world."</span>
				</>
			)
		},
		{ type:"header", level:'3', content:"Concept #5: [PRDream-VRified]" },
		{
			type:"jsx",
			content: (
				<>
					<strong>Platforms: </strong>
					<span>VR (Oculus)</span>
					<br />
					<strong>Concept Document: </strong>
					<ExtURL href="https://docs.google.com/document/d/1Fxb5Uyx8sxw23B-fDy78_p4DxKdopnxrosaDqK6t6ww/edit?usp=sharing">Google Document</ExtURL>
					<br />
					<strong>Raw Notes: </strong>
					<ExtURL href="https://docs.google.com/document/d/1MEh2QN1tHNvPcLRd7TqW-DXNQLoxOjzEQuqpp_1Xqr0/edit?usp=sharing">Google Document</ExtURL>
				</>
			)
		},
		{
			type:'image',
			content:prdream,
			alt:"PRDream-VRified concept diagram"
		},
		{
			type:"jsx",
			content: (
				<>
					<strong>Premise:</strong><br />
					<span>"You're stuck in a glass box with nothing but a tablet, a pen, and your bed. What else is there to do but pick up the tablet and draw something?"</span>
				</>
			)
		},
		{ type:"header", level:'3', content:"Concept #6: [Journey VR]" },
		{
			type:"jsx",
			content: (
				<>
					<strong>Platforms: </strong>
					<span>VR (Oculus)</span>
					<br />
					<strong>Full Concept Document: </strong>
					<ExtURL href="https://docs.google.com/document/d/1OhA9XQrIYa8S1vrZEl3Sg0aVQMfy5KrMb9qgEFpNHiA/edit?usp=sharing">Google Document</ExtURL>
				</>
			)
		},
		{
			type:'image',
			content:journey,
			alt:"Journey VR concept diagram"
		},
		"[Journey VR] is a first-person VR experience that explores media's ability to engender emotional and meaningful interactions between players and virtual worlds. Set in a desolate mountain valley, the player takes the role of a mysterious traveler who seems to be carrying a special package deeper into the mountain's valley for unknown reasons. Inspired by games like \"Journey\" and \"Abzu\", [Journey VR] will be both minimalist and efficient in its interactive elements, focusing on creating a world that feels realistic and immersive.",
		{
			type:"jsx",
			content: (
				<>
					<strong>Premise:</strong><br />
					<span>"When did you get here? Where did you come from? Who are you? These questions do not matter. All that matters is the road in front of you and the special package you are holding onto. All you know is that you must hold onto that package for as long as you can, until you reach the end."</span>
				</>
			)
		},
		{ type:"header", level:'3', content:"Concept #7: [Simple Visual Novel]" },
		{
			type:"jsx",
			content: (
				<>
					<strong>Platforms: </strong>
					<span>PC</span>
					<br />
					<strong>Full Concept Document: </strong>
					<ExtURL href="https://docs.google.com/document/d/1giMBWkRwcUsuA4ARiBKsFVsNSyI_XP9jCX04zlMDqgo/edit?usp=sharing">Google Document</ExtURL>
				</>
			)
		},
		{
			type:'image',
			content:novel,
			alt:"SVN concept diagram"
		},
		"[Simple Visual Novel] is a 3D visual novel title that takes place in Seoul, South Korea and uncovers the exploits of high school student [Kim Yun Soo] as she uncovers events happening at her school as part of the school's Newspaper Club. The focus of [Simple Visual Novel] is its choice-driven storyline and implementation of 3D graphics to allow for dynamic camera movements, character animations, and detailed backgrounds. Unlike traditional 2D visual novels, the use of 3D will be at the core of gameplay, with gameplay mechanics such as inspecting items and spotting unconscious gestures in people taking advantage of the game's 3D nature.",
		{
			type:"jsx",
			content: (
				<>
					<strong>Premise:</strong><br />
					<span>"Taking place far in the future, South Korea has isolated itself from the rest of the world by erecting oceanic walls and bolstering its naval capabilities. In the rush to produce skilled scientists, engineers, and soldiers, many believe that the reduced focus on the humanities, arts, and culture in schools will lead to a reduced sense of cultural identity. As such, certain private schools were built to encourage new generations to focus on atypical subjects and maintain Korea's cultural identity.</span>
					<br />
					<span>The story of [Simple Visual Novel] takes place at one of these schools, following the exploits of [Kim Yun Soo] as she gets herself wrapped up in situations as part of the school's Newspaper Club. Followed by fellow classmate [P2], the two of them, strangers at first, warm up to each other as they uncover the situations and mysteries surrounding their fellow classmates."</span>
				</>
			)
		},
		{ type:"header", level:'3', content:"Prioritizing our Concepts" },
		"We have 7 concepts that we can follow for our first leg of the journey. However, not all concepts are created equally - some of these will require significant development time, while others will be simpler to make but require additional resources such as artists and funds. We also need to be aware that SimpleDevs is at the moment a one-person endeavor and we can only dedicate so much time and energy into our independent project.",
		"After some contemplation, here is the list of concepts, sorted by priority based on the factors mentioned above:",
		{
			type:"jsx",
			content:(
				<ol>
					<li><strong>[Journey VR]</strong> - Will not require too much engineering work, but its core difficulty will be the implementation of key gameplay mechanics such as navigation and interactive gestures and how those two will invoke an emotional response from players. Funding will not  be too difficult due to our ability to launch on Sidequest and the simpler artistic style, and we have access to tools such as an Oculus Quest and Unity already.</li>
					<li><strong>[Embarkment 2.0]</strong> - Will require some engineering work to properly implement the grid system, pathfinding, and other elements. Funding will not be too difficult, but some money will have to be used for artistic funds and other costs for development and publishing. Tools such as Unity are already given, but we may need additional hardware to test out optimization strategies and platform requirements.</li>
					<li><strong>[My Room]</strong> - Will require engineering work to create the virtual world in the manner described in the concept document and premise. Other online features such as image sharing will also need to have some work put into it. While we already have access to tools such as Unity and an Oculus Quest, some additional tools such as online databases and servers will be required. Furthermore, funding may be dependent on those additional tools and for potential funding of developers and/or modelers.</li>
					<li><strong>[SimpleRPG]</strong> - Will require some engineering work to develop the grid-based system and the dialogue system. Some additional thought will also be needed to develop the story, as it has not been fleshed out yet. What is immediately obvious is that this is still in its concept stages and is not ready for development yet, alongside all the other items below this item in the concept list. Lessons learned from [Embarkment 2.0] concerning the grid system can be a valuable asset for this game.</li>
					<li><strong>[PRDream-VRified]</strong> - Because of the complexity of the idea, significant engineering work will need to be put into the drawing -> 3D mechanism, possibly involving some use of machine learning and image recognition. While the mechanism for drawing itself in VR is already prototyped, significant work will also need to be put into it for additional features such as colors, and optimizations to make the drawing system seamless and intuitive will need to be investigated. This concept is not ready for development as a result.</li>
					<li><strong>[Orbit 2.0]</strong> - Because of the complexity of the idea, significant engineering work will be needed to create the oceanic world and its gameplay elements. This idea is simply too conceptual and is not ready for development on any scale.</li>
					<li><strong>[Simple Visual Novel]</strong> - Visual novels aren't exactly hard to engineer (per se), but I am putting this last on the list because it isn't so much the difficulty of the engineering work I am concerned about - it's the story that is being told that needs special attention. A visual novel's key selling point is its story, and a VN with a bad story and/or bad characters will be doomed to fail. This concept needs more work into the storyboarding and its character writing. This project also has a special place in my mind for being related to my Korean background and I wish to do this story right in that regard. This project isn't intended to be a self-contained project with a designated development time but rather an on-going project that will continue to evolve as we run through our concept list in the future.</li>
				</ol>
			)
		},
		"This list clarifies that our first independent project will be [Journey VR]. We'll be dedicating time and energy into building up the VR experience and creating a game that is functional and pays special homage to the game \"Journey\" by thatgamecompany.",
		{ type:"header", level:'3', content:"What comes now?" },
		"Now that we have our first project established, this blog will be dedicated towards explaining core updates in the project's pipeline. However, our blog will also be home to other kinds of posts such as game reviews and other sentiments that come across my mind concerning the other concepts we've talked about.",
		"Thank you for taking the time to read through my post, and I hope everyone stays safe and sound during these harsh times."
	]
}