import { Link } from "react-router-dom";

import image_1 from './assets/1_1.png';
import image_2 from './assets/1_2.jpg';

export const post = {
	id:1,
	url:'march_25_2021',
	metadata:{
		umbrella:'gamedev',
		post_date:"March 25, 2021",
		description:"Originally from a wordpress website called \"SimpleDevs\", I've migrated it to this personal blogging platform."
	},
	title:"The First Blog Post: Incredibly Nerve-Racking",
	content:[
		"Hello there! My name is Ryan Kim, and this is THE first blog post on my new blog site: SimpleDevs! This is both exciting and honestly nerve-racking, as this is the first thing that'll appear on this blog. I think I've got this though!",
		{
			type:"jsx",
			content:[
				<span>Simply put, I'm creating a blog here as a method of conveying my thoughts and feelings towards two topics in particular: </span>,
				<strong>Video Game Development</strong>,
				<span>, and </span>,
				<strong>Video Game Reviews</strong>,
				<span>. I wish to dedicate this blog to cataloging my progress on my first independent video game as well as create brief reviews of video games that I happen to come across in my free time. Most assuredly, those video game reviews will be in the context of developing key insights we can bring over to our game development process.</span>
			]
		},
		"As for myself, I'm a front-end developer with a passion for games, good user interfaces, and Virtual Reality. I work as a freelance, contract front-end developer for hire in my day time, meaning that I don't really have a solid foundation in game design at first glance. However, I have been a part of the video game development process before, and I have worked with VR to develop interactive, immersive experiences as part of my research topic in graduate school. I now dedicate my nights and free time towards brainstorming new ideas for games I can hopefully develop later on in life. I hope to continue this and actually take the step to developing my first independent game.",
		{
			type:"jsx",
			content:[
				<span>Did I mention I was part of the video game development process? In fact, I was part of a small team of students who worked together during one college semester to create </span>,
				<Link to="/portfolio/projects/embarkment">"Embarkment"</Link>, 
				<span>, a turret-defense shooter for PC. Suffice to say, it was a laborious and stressful time, indeed, but it was also simultaneously fulfilling and satisfying to see our game take shape and finally be shown to the public at Cornell's GDIAC game show conference in 2018. That passion was rekindled after a semester researching </span>,
				<Link to="/portfolio/projects/vrKeyboard">typing interfaces</Link>, 
				<span> and </span>,
				<Link to="/portfolio/projects/imol">loci-based memorization techniques</Link>,
				<span> in VR, where I worked with Unity and Head-Mounted Displays (HMD's) to create virtual, interactive environments. I'd like to rekindle that passion and really go forth with a game of my own this time around.</span>
			]
		},
		{
			type:"image",
			content:image_1,
			alt:"",
			caption:"Behold, the drawing tablet in VR… okay, it's a joke concept, but it was still fun to develop and think through."
		},
		"As for game ideas, I definitely have quite a lot. Perhaps a hundred pages of them, all in my personal notes (both handwritten and digitized). I'll share them in time, as we proceed on this journey together. Some ideas involve VR, and some involve more traditional games, but altogether I really just wish to create something that can really be enjoyable to experience and be thought-provoking in one way or another. Again, I'll elaborate more on these in a later blog post.",
		"For now, I have to return back to my duties, but you'll bet that I'll try to keep everyone informed on my progress. Make sure to check back in from time to time if you are interested in this journey!",
		"This is Ryan, signing off. Good night, everyone and may you be blessed with good luck and happy thoughts.",
		{
			type:"image",
			content:image_2,
			alt:"My ugly mug, in all its glory"
		},
	]
}