import { Divider, ExtURL, Image } from "../../../../components";
import { 
	thumbnail,
	earlyConcepts,
	embarkmentPosterSmall,
	gameplay,
	levelEditor,
	manualPreview,
	manualPreview2,
	paperPrototype,
	spawn,
	startupMenu,
	turretBulletConcept,
} from "./assets";

function Embarkment() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Completed">Completed</p>)
		},
		{
			key: "Dates",
			value: (<p>January 2018 - May 2018</p>)
		},
		{
			key: "External Links",
			value: (<ExtURL href="https://drive.google.com/drive/folders/1kBw8TO8bOcRXW55dNH7mXiCBKTnmTGE5?usp=sharing">Downloadable Build &amp; Files</ExtURL>)
		},
		{
			key: "Platforms",
			value: (
				<ul>
					<li>OS X</li>
					<li>Windows XP+</li>
				</ul>
			)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>Video Games</li>
					<li>Java</li>
					<li>HTML</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>Adobe Photoshop</li>
				</ul>
			)
		},	
	]

	return (
		<div className="PortfolioContent">
			<div className="PortfolioContentHeader">
				<div className='PortfolioContentHeaderImage'>
					<Image src={thumbnail} alt="" width={150} height={150} round cName="PortfolioThumbnail" />
				</div>
				<div className='PortfolioContentHeaderMain'>
					<h3>Embarkment</h3>
					<p><i>A video game created for Cornell University GDIAC 2018.</i></p>
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
				<h4><strong>Synopsis</strong></h4>
				<Divider space={8} />
				<div className='PortfolioMainBlock'>
					<div className='PortfolioBlockText'>
						<p>Once upon a time...</p>
						<Divider space={8} />
						<p>There was a great forest, where golden trees were said to grow. These golden trees were many in number, and the golden leaves that fell from these trees were believed to bring life and vitality to the forest.</p>
						<Divider space={8} />
						<p>Stories about this place tell of a time when a mysterious, vile corruption swept through the forest, infesting these golden trees. The golden leaves that once gave life now sustained monsters that attacked anything on sight.</p>
						<Divider space={8} />
						<p>If the stories are to be believed, then there must have been a sole hero who rid the forest of this corruption and the monsters lurking within.</p>
						<Divider space={8} />
						<p>The fate of the forest laid on their antlers...</p>
					</div>
					<div className='PortfolioBlockImageWrapper Right'>
						<img className="PortfolioContentImage" src={embarkmentPosterSmall} alt="Embarkment Poster" />
					</div>
				</div>
				<Divider space={16} />
				<h4><strong>My Roles &amp; Reponsibilities</strong></h4>
				<Divider space={8} />
				<h6><strong>Designer</strong></h6>
				<Divider space={8} />
				<div className='PortfolioMainBlock'>
					<div className='PortfolioBlockText'>
						<p>My role was as a designer was to create UI elements, animate sprites, and write promotional material for the game.</p>
						<Divider space={8} />
						<p>I primarily used Photoshop to animate the sprites. Sprites that I had made and animated include the infected tree sprite and animation, the golden leaf drop sprite and animation, and UI elements such as the menu background and buttons.</p>
					</div>
					<div className='PortfolioBlockImageWrapper Right'>
						<img className="PortfolioContentImage" src={spawn} alt="Infected Tree Boss" />
					</div>
				</div>
				<Divider space={16} />
				<h6><strong>Programmer</strong></h6>
				<Divider space={8} />
				<div className='PortfolioMainBlock'>
					<div className='PortfolioBlockText'>
						<p>I was also responsible for creating a light version of a level editor that could be used to quickly create maps that could be imported into the game. The light level editor, made with HTML, JavaScript, CSS, and JSON, allows users to place assets in a map, import and export maps, and copy-paste sections of a map onto new areas. The necessity to use this version of the level editor became significant after the full version of the level editor was delayed in development.</p>
						<Divider space={8} />
						<p className="h7"><i>The level editor is solely meant for internal development and is not made publicly available.</i></p>
					</div>
					<div className='PortfolioBlockImageWrapper Right'>
						<img className="PortfolioContentImage" src={levelEditor} alt="Level Editor Screenshot" />
					</div>
				</div>
				<Divider space={16} />
				<h6><strong>Other Contributions</strong></h6>
				<Divider space={8} />
				<div className='PortfolioMainBlock'>
					<div className='PortfolioBlockText'>
						<p>I was also responsible for creating the game's manual (which is downloadable alongside the game in the link above). The manual details aspects of gameplay, story, and objectives.</p>
					</div>
					<div className='PortfolioBlockImageWrapper Right'>
						<img className="PortfolioContentImage Right" src={manualPreview} alt="Manual Screenshot" />
					</div>
				</div>
				<Divider space={16} />
				<h6><strong>Teammates</strong></h6>
				<ul>
					<li><i><u>Allie Shuldman</u></i> - Project Lead</li>
					<li><i><u>Joshua Ying</u></i> - Programming Lead, Composer</li>
					<li><i><u>Riley Niu</u></i> - Programmer</li>
					<li><i><u>Victor Lucena</u></i> - Programmer, Composer</li>
					<li><i><u>Yueyang Adrian Zheng</u></i> - Design Lead</li>
					<li><i><u>Jeremy Paton</u></i> - Designer</li>
					<li><i><u>Ryan Kim (me)</u></i> - Designer, Programmer</li>
				</ul>
				<Divider space={16} />
				<Divider space={64} cName='HideInMobile' />
				<div className="PortfolioMainImageGallery HideInMobile">
					<img className="PortfolioContentImage" src={paperPrototype} alt="Paper Prototype" />
					<img className="PortfolioContentImage" src={earlyConcepts} alt="Early Concept Art" />
					<img className="PortfolioContentImage" src={turretBulletConcept} alt="Turret Bullet Concept" />
					<img className="PortfolioContentImage" src={gameplay} alt="Gameplay Screenshot" />
					<img className="PortfolioContentImage" src={manualPreview2} alt="Manual Preview #2" />
					<img className="PortfolioContentImage" src={startupMenu} alt="Startup Menu" />
				</div>
			</div>
		</div>
	);
}

const EmbarkmentData = {
	umbrella:"Games",
	key:"embarkment",
	thumbnail:thumbnail,
	title:"Embarkment",
	url:"embarkment",
	content:<Embarkment />
}

export default EmbarkmentData;