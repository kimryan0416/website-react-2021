import { Image, Divider, Date } from "../../components";
import { cornellLogo, cornellTechLogo } from '../../assets';

const Education = () => {
	return (
		<div className="Education">
			<ul className="">
				<li>
					<div className="EducationLogo">
						<Image width={120} height={120} src={cornellTechLogo} />
					</div>
					<div>
						<div className="EducationLocation">
							<h5>Cornell Tech, Cornell University</h5>
							<p><i>New York, NY</i></p>
						</div>
						<p><u>Master of Engineering in Computer Science</u></p>
						<Divider space={8} />
						<p><strong>Subjects:</strong> Algorithms and Data Structures, Augmented and Virtual Reality (AR/VR), User Experience (UX) Research Methods</p>
						<Divider space={16} />
						<div className="DatesContainer">
							<Date top="2019" bottom="Aug." />
							<p>to</p>
							<Date top="2020" bottom="May" />
						</div>
					</div>
				</li>
				<li>
					<div className="EducationLogo">
						<Image width={120} height={120} src={cornellLogo} />
					</div>
					<div>
						<div className="EducationLocation">
							<h5>Cornell University</h5>
							<p><i>Ithaca, NY</i></p>
						</div>
						<p><u>Bachelor of Arts in Information Science (User Experience Concentration)</u></p>
						<Divider space={8} />
						<p><strong>Subjects:</strong> Web Design and Programming, Rapid Prototyping, Human-Computer Interaction (HCI), UX Design</p>
						<Divider space={16} />
						<div className="DatesContainer">
							<Date top="2014" bottom="Aug." />
							<p>to</p>
							<Date top="2018" bottom="May" />
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Education;