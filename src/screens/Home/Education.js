import { Image, Divider, Date } from "../../components";
import { cornellLogo, cornellTechLogo, tandonLogo } from '../../assets';

const EducationSegment = (props) => {
	let datesContainer;
	if (props.endDate == null) {
		datesContainer = (
			<div className="DatesContainer">
				<Date top={props.startDate.year} bottom={props.startDate.month} />
				<p>to</p>
				<p className="DateStatus Current">Current</p>
			</div>
		);
	}
	else {
		datesContainer = (
			<div className="DatesContainer">
				<Date top={props.startDate.year} bottom={props.startDate.month} />
				<p>to</p>
				<Date top={props.endDate.year} bottom={props.endDate.month} />
			</div>
		);
	}

	return (
		<li>
			<div className="EducationLogo">
				<Image width={120} height={130} src={props.logo} />
			</div>
			<div>
				<div className="EducationLocation">
					<h5>{props.school.name}</h5>
					<p><i>{props.school.location}</i></p>
				</div>
				<p><u>{props.school.degree}</u></p>
				<Divider space={8} />
				<p><strong>Subjects: </strong>{props.school.subjects}</p>
				<Divider space={16} />
				{datesContainer}
			</div>
		</li>
	);
}

const Education = () => {
	return (
		<div className="Education">
			<ul className="">
				<EducationSegment 
					key="tandon"
					logo={tandonLogo}
					school={{
						name:"Tandon School of Engineering, New York University",
						location:"New York, NY",
						degree:"Ph.D. in Computer Science",
						subjects:"Augmented/Virtual Reality (AR/VR), Virtual Agents, Human Behavior Simulation in VR, User Experience (UX) Design"
					}}
					startDate={{year:"2022",month:"Sep."}}
					endDate={null}
				/>
				<EducationSegment 
					key="ct"
					logo={cornellTechLogo}
					school={{
						name:"Cornell Tech, Cornell University",
						location:"New York, NY",
						degree:"Master of Engineering in Computer Science",
						subjects:"Algorithms and Data Structures, Augmented and Virtual Reality (AR/VR), User Experience (UX) Research Methods"
					}}
					startDate={{year:"2019",month:"Aug."}}
					endDate={{year:"2020",month:"May"}}
				/>
				<EducationSegment 
					key="c"
					logo={cornellLogo}
					school={{
						name:"Cornell University",
						location:"Ithaca, NY",
						degree:"Bachelor of Arts in Information Science (User Experience Concentration)",
						subjects:"Web Design and Programming, Rapid Prototyping, Human-Computer Interaction (HCI), UX Design"
					}}
					startDate={{year:"2014",month:"Aug."}}
					endDate={{year:"2018",month:"May"}}
				/>
			</ul>
		</div>
	);
}

export default Education;