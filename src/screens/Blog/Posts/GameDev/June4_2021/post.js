import { Link } from "react-router-dom";

import { ExtURL } from "../../../../../components";

import mapping from "./assets/mappingProblem.jpg";
import journeyVR from "./assets/journeyVRScheme.jpg";
import journey from "./assets/journey.png";
// https://www.joyscribe.com/7-best-snow-levels-in-gaming/
import cold from "./assets/ColdWeatherSimulation.jpg";

export const post = {
	id:5,
	url:'june_4_2021',
	metadata:{
		umbrella:'gamedev',
		post_date:"June 4, 2021",
		description:"Originally from a wordpress website called \"SimpleDevs\", I've migrated it to this personal blogging platform."
	},
	title:"Am I Going the Right Way? Orienteering as a New Inspiration",
	content:[
		"Hello there. It's been a while since my last post here. There have been some \"interesting\" updates that I think would be cool to share regarding SimpleDevs.",
		"The title says it all, really: Orienteering. Orienteering is a group of sports that requires participants to navigate towards distinct coordinates in a designated region of land with nothing but a map and a compass. Foot Orienteering, or navigation via foot, is the most common kind of Orienteering, but other variants exist.",
		"But why, you may ask, am I bringing up Orienteering? In my mind, I see a close connection between the idea of \"Journey VR\", the first VR game we've set out to develop, and the concept of Orienteering.",
		{ type:"header", level:'3', content:'What was "Journey VR" again?' },
		"Our \"Journey VR\" concept was the idea of navigating harsh terrain, with the end goal of delivering a \"package\" from one location to another; the journey is tough but eventful, filled with a large variety of routes that the player can take to reach that end goal. In the end, the kind of experience I wanted to convey with \"Journey VR\" was the concept of \"traveling through a mysterious world\".",
		{ type:"header", level:'3', content:'Mapping Problems and "Journey VR"' },	
		{
			type:"jsx",
			content: (
				<>
					<span>... Or at least, that was the original concept from a few weeks ago. I've had quite a bit of time to really think and sketch out what I wanted "Journey VR" to be. In a previous blog post, </span>
					<Link to="/blog/may_3_2021">"VR-Centric Game Design: The Conundrum of Immersive Experiences"</Link>
					<span>, we established that all VR games eventually run into the </span>
					<strong>"Mapping Problem"</strong>
					<span>.</span>
				</>
			)
		},
		{
			type:'image',
			content:mapping,
			alt:"The Mapping Problem, depicted through a linear graph",
		},
		"This \"Mapping Problem\", to put it concisely, is a linear scale representing the justification for a game being in VR. VR games where the control scheme, visual experience, and/or ultimately the end experience can be mapped very closely to a keyboard-and-mouse or gamepad controller experience have a far lesser justification for being in VR, whereas those whose mappings are less defined have a greater justification. To use an example, a game like \"Beat Saber\" has a greater justification for being in VR because its 6-DOF control scheme and \"Beat Saber\"'s execution on slicing boxes in tune with the beat is very hard to replicate in a traditional 2D-screen theoretical rendition. On the other hand, a game like \"Tetris Effect\" has little justification because the experience of playing that game in VR is near identical to that of the traditional console version.",
		{ type:'header', level:'3', content:"Thinking a bit differently" },
		"When I began to apply the \"Mapping Problem\" with \"Journey VR\", it became readily apparent that \"Journey VR\" faces the same problem as \"Tetris Effect\". Conceptually it really is just the game \"Journey\" (made by thatgamecompany) in VR. This does not really bode a great justification for our game idea, as outside of perhaps the novelty of a 6-DOF camera there isn't any gameplay-oriented justification for \"Journey VR\" to exist. Not the best start, I am going to admit.",
		"I am also going to admit that I had a fun time trying to devise new ways to counter that problem and really brainstorm some ideas. Generally, I want \"Journey VR\" to not only take advantage of the affordances VR offers in gameplay but also tap into that intrinsic feeling of \"traveling through a world\" that I was aiming for. I knew that the way we designed our gameplay mechanisms and control scheme would play a huge part in whether we could really achieve that. Below is a sketch of how one simple gesture, holding your hand up, could be used in a multitude of different ways to perform different actions.",
		{
			type:'image',
			content: journeyVR,
			alt:"Gameplay sketches and ideas for Journey VR"
		},
		"I also wanted to differentiate from the original concept of thatvideogamecompany's \"Journey\" in that I wanted to not only use a different kind of setting for the game but also convey the struggle aspect of journeys as the forefront of the overall experience. thatvideogamecompany's \"Journey\" conveys this sentiment in the last segment of the game, wherein the player must travel up to the summit of the mountain in snowy weather. The game achieves this by adding limitations to the gameplay mechanics players have experienced thus far alongside setting the ambiance of a desolate, cold world via its visuals and music. For example, a flying mechanic whose length is determined by how much energy a player has (represented in the glow of their scarf) is limited by the cold sapping energy from the player.",
		{
			type:"image",
			content: journey,
			alt:"Journey gameplay screenshot",
			caption:(
				<>
					<span>Source: Joyscribe (</span>
					<ExtURL href="https://www.joyscribe.com/7-best-snow-levels-in-gaming/">https://www.joyscribe.com/7-best-snow-levels-in-gaming/</ExtURL>
					<span>)</span>
				</>
			)
		},
		"I must point out that these limitations are indirect in their effect of making the player feel immersed in the world of \"Journey\". There is no way the player can actually feel the cold or feel the snow crunching under their feet; they can only vicariously experience these via their character in the game. Because of this limitation, the developers had to simulate the situation the player MIGHT experience by hindering their character's movement ability. We are empathetic to the suffering our character is going through, and we can do nothing but just push the joystick forward and hold down a button to urge our character to continue the crime (I guess it's kind of masochistic if you really think about it O_o).",
		"Nonetheless, with VR in our grasp, how can we move that indirect experience into one that's more direct? We may still be unable to truly make the player feel the same experiences that their character in our game is going through - we can't simulate cold or wind just by headset alone, for example - but maybe we can encourage and make use of certain gestures that bring us closer to behaving how we would if we were in that cold world ourselves. Below is a sketch that demonstrates this idea a bit more clearly:",
		{
			type:"image",
			content: cold,
			alt:'Sketches showing the temperature system in Journey VR'
		},
		{
			type:"jsx",
			content: (
				<>
					<span>In "Journey VR", we can simulate weather effects via auditory and visual cues, but </span>
					<strong>the important aspect I want to convey is that weather has a tangible effect on the player's ability to see out of their snow visor - it reduces the visible area</strong>
					<span>. If the player is traversing through terrain that may or may not hurt them, they'll want all the visual real estate they can get, and thus snow is a natural enemy to the player's survivability (there are other effects like the buildup of snow causing reduced health or making the player move slower as well, but we can address those later). In order to remove this snow effect on the player's vision, </span>
					<strong>the player has to physically move their hand to block the snow and wind</strong>
					<span>, a gesture commonly used in real life when we are faced with unhappy weather. This gesture, though it may block wind and snow, may also server certain functions such as allocating UI to the back of the player's hand, allowing the player to see data or access info when holding up their hand as well; the downside is that the player only has so much physical stamina in the real world. Thus, players will be limited in how long they can hold up their hand based on real-world factors, hopefully encouraging some level of immersion into gameplay.</span>
				</>
			)
		},
		{ type:"header", level:'3', content: "This is where Orienteering comes into play" },
		{
			type:"jsx",
			content:(
				<>
					<span>When I described this concept to </span>
					<ExtURL href="http://www.bil.dev">William "Bil" Leon</ExtURL>
					<span>, a friend and colleague from my days at Cornell Tech and its XR Collaboratory, he was particularly focused on two aspects of my pitch:</span>
				</>
			)
		},
		{
			type:"jsx",
			content:(
				<ol>
					<li>Occlusion as a gameplay factor</li>
					<li>The navigation of unknown terrain being the main core loop of the game</li>
				</ol>
			)
		},
		"It also, coincidentally, was the time when we were in a group meeting with a bunch of other students and professors discussing recent research projects, some of which was concerned with navigation and movement in VR. Nonetheless, Bil and I had a lengthy discussion about the nature of Orienteering and his personal experiences with Orienteering as a sport.",
		"According to Bil, Orienteering isn't a simple process of checking a map to see where you're going. Rather, two key skills are required in Orienteering:",
		{
			type:'jsx',
			content:(
				<ol>
					<li>The ability to look up and “orient yourself” by noting important topographic information visually and comparing it to your map</li>
					<li>The ability to anticipate the risks and rewards of going one direction as opposed to other directions.</li>
				</ol>
			)
		},
		{
			type:"jsx",
			content: (
				<>
					<span>In Orienteering, people must learn to accept and reduce </span>
					<strong>Uncertainty </strong>
					<span>- it’s important to be able to read the environment and determine how certain (or uncertain) you are. Participants must always question "how do I know where I am; am I really here; how did I get off-course?"</span>
				</>
			)
		},
		{
			type:"jsx",
			content: (
				<>
					<span>Perhaps the biggest enemy to Orienteering participants is </span>
					<strong>Arrogance</strong>
					<span>. When you’re arrogant, you stop checking, which can easily get you off-course. When you are really lost, a good idea is to re-assess the landscape and find a vantage point to see the greater area.</span>
				</>
			)
		},
		"In order to teach new participants to Orienteering about Uncertainty, newbie participants are given only a compass (no map). This is to get them familiar with navigating the landscape and noting landmarks. It is only after this step that a newbie is given the map to handle. Beginner maps are simple with only one or two modifiers (ie. elevation); as participants gain more experience they're given more complicated maps (ex. colors == forest density, type of road), with the most complicated maps including landmarks (ex. radio tower, tallest peaks).",
		{ type:"header", level:'3', content:'Orienteering and Journeying' },
		"In conversing with Bil about the sport I became more steadily convinced with the idea of applying Orienteering concepts into \"Journey VR\". It would certainly be interesting to think how players might navigate a region with just a map with no indication of where the player is located on that map. This concept could tie into the whole aspect of vision occlusion being a major factor in gameplay and how players must learn how to deal with the Uncertainty while navigating snowy terrain.",
		"How would players \"orient\" themselves in the VR world? Would they die more often if they let their arrogance get the better of them? Would they even rely on a map to begin with? These questions constantly nag me to no end, and I honestly just want to start experimenting with Unity already (if only work allowed me to...). To summarize, the application of Orienteering into \"Journey VR\" would most likely inhabit this form:",
		{
			type:"jsx",
			content: (
				<ul>
					<li>The player is only given a map, compass, and an end coordinate. Their job is to navigate from the starting coordinate to the ending coordinate.</li>
					<li>The explorable area is expansive and varied enough to allow for different routes. It's the player's job to observe the area, note important landmarks, identify hazardous terrain, and plan out a route that would optimize their health without sacrificing too much time. Players are not required to do this, but if they're smart they might want to do so.</li>
					<li>In tandem with the previous point, map design has to be conscious of elevation, landmarks, obstacles, hazards, and ultimately visual storytelling elements (ex. the technology seen may offer an idea of what life was like in that area before the snow came).</li>
					<li>Instructions on where to go or how to navigate the landscape must be rarely provided. We want to encourage visual observation as much as possible as a key gameplay mechanic. This also means no visual aides (ex. holographic markers), no hints (ex. AI's telling us to get out of the cold), and no tools (ex. rope, hammers, climbing gear).</li>
				</ul>
			)
		},
		"I think there is a lot to learn about how Orienteering and VR can be made to work together conceptually.",
		{ type:"header", level:'3', content:"What comes next" },
		"We're still fleshing out the possible range of gameplay mechanics we'll ultimately work with for \"Journey VR\". In summary, we've covered these gameplay mechanics:",
		{
			type:'jsx',
			content:(
				<ul>
					<li>Snow and Wind affecting visibility</li>
					<li>Holding the hands up reducing the weather's effect on visibility</li>
					<li>Using some interface and/or map to give players the option to Orient themselves relative to landmarks and/or areas they visually see.</li>
				</ul>
			)
		},
		"We'll need to continue more on this ideation train we've hopped onto. But for now, I think we're really starting to tap into how \"Journey VR\" can stand as its own unique unit as opposed to a game that relies on the strengths of other games. If we can flesh out those details in the ideation phase, then prototyping would be the next step. But, before we do that, I want to read up more about Orienteering and see what other variants exist and how we can learn from Orienteering within the context of the immersive experience.",
		{ type:"line" },
		"Thank you for reading my post. I hope you all have a good day and are staying safe during these trying times."
	]
}