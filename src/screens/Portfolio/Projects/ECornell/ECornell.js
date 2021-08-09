import { Divider } from "../../../../components";
import { thumbnail } from "./assets";

function ECornell() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>A contract position where I was responsible for a Node.JS-based autograder capable of evaluating student website submissions.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>Node.js</li>
					<li>Codio</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>eCornell: Student Web Code Autograder</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>Soon after graduating from Cornell University, I was hired by eCornell to help them with their web design online course. As both programmer and content creator, I worked closely with other developers and the professor overseeeing the course to both create and upload the course material onto eCornell's chosen distribution platform: Codio.</p>
				<Divider space={8} />
				<p>My main contribution was creating the framework, code, and documentation around an autograder capable of evaluating students' web code.</p>
				<Divider space={16} />
				<h6><strong>About the Autograder</strong></h6>
				<Divider space={8} />
				<p>The eCornell Student Web Code Autograder, or Autograder for short, is a Node.JS-based program that allows local or virtual machines to evaluate web files. Utilizing a combination of Node.JS packages, Java, TestCafe, and other dependencies, the Autograder is capable of checking for various aspects about a website, including:</p>
				<Divider space={8} />
				<ul>
					<li>the presence of HTML, CSS, or JavaScript syntax errors,</li>
					<li>the presence of specific HTML elements,</li>
					<li>whether certain CSS properties are applied to HTML elements,</li>
					<li>whether specific actions done on the website rendered on a headless browser will lead to expected results, and</li>
					<li>the presence of particular files and/or images.</li>
				</ul>
				<Divider space={8} />
				<p>The Autograder can perform checks on both source files and rendered material of a student's website. The Autograder does so by utilizing Unit Tests that individually inspect a specific aspect of the student's submission. If needed, eCornell course managers and content creators can also write their own unique Unit Tests and adapt the Autograder for use on online IDE's such as Codio, or any virtual machine that is able to run Node.JS.</p>
				<Divider space={16} />
				<h4><strong>Autograder Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Completed [June 2018 - Aug. 2019]</li>
					<li><strong>Current Stable Version:</strong> 1.0</li>
					<li>
						<strong>Out-of-the-box Functionality:</strong>
						<ul>
							<li>Check for HTML, CSS, and JavaScript errors in student files.</li>
							<li>Check for the presence or lack thereof of HTML elements and CSS properties/values in the source code.</li>
							<li>Check if certain HTML elements with specific styling or text content exists when rendered.</li>
							<li>Check if actions performed on the website via headless browser create the intended results.</li>
							<li>Check if certain files and/or images are present and located in expected directories.</li>
							<li>Check if files are formatted and/or indented, based on comparisons to beautifiers.</li>
							<li>Operatable on both local and virtual machines that are capable of running bash scripts.</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

const ECornellData = {
	umbrella:"Contract Work",
	key:"ecornell",
	thumbnail:thumbnail,
	title:"eCornell: Student Web Code Autograder",
	url:"ecornell",
	content:<ECornell />
}

export default ECornellData;