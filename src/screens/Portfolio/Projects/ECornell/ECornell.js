import { Divider, Image } from "../../../../components";
import { thumbnail } from "./assets";

function ECornell() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Completed">Completed</p>)
		},
		{
			key:"Dates",
			value: (<p>June 2018 - August 2019</p>)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>Node.js</li>
					<li>Codio</li>
				</ul>
			)
		}
	]

	return (
		<div className="PortfolioContent">
			<div className="PortfolioContentHeader">
				<div className='PortfolioContentHeaderImage'>
					<Image src={thumbnail} alt="" width={150} height={150} round cName="PortfolioThumbnail" />
				</div>
				<div className='PortfolioContentHeaderMain'>
					<h3>eCornell: Student Web Code Autograder</h3>
					<p><i>A contract position where I was responsible for a Node.JS-based autograder capable of evaluating student website submissions.</i></p>
					<Divider space={16} />
					<div className='PortfolioContentHeaderMainTable'>
						{headerTable.map((row,i)=>{
							return (
								<div key={`PortfolioHeaderTableRow-${i}`} className='PortfolioContentHeaderMainTableRow'>
									<div className='PortfolioContentHeaderMainTableRowKey'>
										<p><strong>{row.key}:</strong></p>
									</div>
									<div className='PortfolioContentHeaderMainTableRowValue'>
										{row.value}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<Divider space={24} />
			<div className="PortfolioMain">
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>Soon after graduating from Cornell University, I was hired by eCornell to help them with their web design online course. As both programmer and content creator, I worked closely with other developers and the professor overseeeing the course to both create and upload the course material onto eCornell's chosen distribution platform: Codio.</p>
				<Divider space={8} />
				<p>My main contribution was creating the framework, code, and documentation around an autograder capable of evaluating students' web code.</p>
				<Divider space={16} />
				<h6><strong>About the Autograder</strong></h6>
				<Divider space={8} />
				<p>The eCornell Student Web Code Autograder, or Autograder for short, is a Node.JS-based program that allows local or virtual machines to evaluate web files. Utilizing a combination of Node.JS packages, Java, TestCafe, and other dependencies, the Autograder is capable of checking for various aspects about a website:</p>
				<Divider space={8} />
				<ul>
					<li>Check for HTML, CSS, and JavaScript errors in student files.</li>
					<li>Check for the presence or lack thereof of HTML elements and CSS properties/values in the source code.</li>
					<li>Check if certain HTML elements with specific styling or text content exists when rendered.</li>
					<li>Check if actions performed on the website via headless browser create the intended results.</li>
					<li>Check if certain files and/or images are present and located in expected directories.</li>
					<li>Check if files are formatted and/or indented, based on comparisons to beautifiers.</li>
					<li>Operatable on both local and virtual machines that are capable of running bash scripts.</li>
				</ul>
				<Divider space={8} />
				<p>The Autograder can perform checks on both source files and rendered material of a student's website. The Autograder does so by utilizing Unit Tests that individually inspect a specific aspect of the student's submission. If needed, eCornell course managers and content creators can also write their own unique Unit Tests and adapt the Autograder for use on online IDE's such as Codio, or any virtual machine that is able to run Node.JS.</p>
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