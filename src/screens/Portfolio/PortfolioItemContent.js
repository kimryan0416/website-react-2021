import { 
	Divider, 
	ExtURL,
	Image,
	Date,
} from "../../components";
import BlogBlock, { parseRawData } from '../Blog/BlogBlock';

function PortfolioItemContent(props) {

	const { header, content } = props.data;
	const { 
		id,
		title,
		icon_url,
		description,
		status,
		dates,
		external_links,
		platforms,
		skills,
	} = header;

	const headerTable = [
		{
			key: "Status",
			value: <PortfolioStatus status={status} />
		}
	];

	// Dates
	if (dates && dates.length > 0) {
		/*
		let d = dates.split('\n');
	 	if (d.length > 0) {
	 		headerTable.push({
				key: "Dates",
				value: <>{d.map((date,i)=><p key={`${id}_dates_${i}`}>{date}</p>)}</>
			});
		}
		*/
		let d = dates.map((date_period,date_period_index)=>{
			console.log(date_period);
			const dts = (date_period.dates.length === 2)
				? <>
						{ (typeof date_period.dates[0] === "object")
							? <Date top={date_period.dates[0].year} bottom={date_period.dates[0].day} _width={60} />
							: <p>{date_period.dates[0]}</p>
						}
						<Divider horizontal space={8} />
						<p>-</p>
						<Divider horizontal space={8} />
						{
							(typeof date_period.dates[1] === "object")
								? <Date top={date_period.dates[1].year} bottom={date_period.dates[1].day} _width={60} /> 
								: <p>{date_period.dates[1]}</p>
						}
					</>
				: <Date top={date_period.dates[0].year} bottom={date_period.dates[0].day} _width={60} />
			return (
				<div key={date_period_index} className='DatePeriodContainer'>
					{
						date_period.header != null &&
						<p><strong>{date_period.header}:</strong></p>
					}
					<div className={(date_period.header != null)?'DateContainer WithHeader':'DateContainer'}>{dts}</div>
				</div>
			)
		});
		headerTable.push({
			key: "Dates",
			value: d
		});
	}

	// External Links
	if (external_links) {
		let el = external_links.reduce((accumulator,l,i)=>{
			if (l.text && l.text.length > 0 && l.url && l.url != null) {
				accumulator.push(<li key={`${id}_external-link_${i}`}><ExtURL href={l.url}>{l.text}</ExtURL></li>)
			}
			return accumulator;
		},[]);
		if (el.length > 0) {
			headerTable.push({
				key: "External Links",
				value: <ul>{el}</ul>
			});
		}
	}

	// Platforms
	if (platforms && platforms.length > 0) {
		headerTable.push({
			key: "Platforms",
			value: <ul>{platforms.map((p,i)=><li key={`${id}_platform_${i}`}>{p}</li>)}</ul>
		});
	}

	// Skills & Topics
	if (skills && skills.length > 0) {
		let st = skills.map((s,i)=>{
			return <li key={`${id}_skill_${i}`}>{s}</li>;
		});
		headerTable.push({
			key: "Skills & Topics",
			value: <ul>{st}</ul>
		});
	}

	const parsedContent = parseRawData(content);

	return (
		<div className="PortfolioContent">
			<div className="PortfolioContentHeader">
				<div className='PortfolioContentHeaderImage'>
					<Image src={icon_url} width={150} height={150} alt="" round cName="PortfolioThumbnail" />
				</div>
				<div className='PortfolioContentHeaderMain'>
					<h3>{title}</h3>
					<p><i>{description}</i></p>
					<Divider space={16} />
					<div className='PortfolioContentHeaderMainTable'>
						{headerTable.map((row,i)=>{
							return (
								<div key={`${id}_PortfolioHeaderTableRow_${i}`} className='PortfolioContentHeaderMainTableRow'>
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
				{/*}
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>The Easier VR Assets is a side project aimed to replicate the functionality of Oculus's OVRGrabber and OVRGrabbable scripts, which are provided in The "Oculus Integration" package on Unity.</p>
				<Divider space={8} />
				<p>Created in response to the general user-unfriendly nature of the default Oculus Integration package, this package attempts to reduce time for prototyping by having pre-set settings and code to allow for grabbing, locomotion, and any other events attached to each button input on the Oculus Quest and Quest 2 controllers.</p>
				{*/}
				{parsedContent.map((block,index)=>{
					return <BlogBlock key={`${block.id}`} block={block} index={index} />
				})}
				{props.children}
			</div>
		</div>
	);
}

function PortfolioStatus(props) {
	switch(props.status) {
		case 'Ongoing':
			return <p className="PortfolioStatus Ongoing">Ongoing</p>;
		case 'On-Hold':
			return <p className="PortfolioStatus OnHold">On-Hold</p>;
		case 'Completed':
			return <p className="PortfolioStatus Completed">Completed</p>;
		default:
			return null;
	}
}

export default PortfolioItemContent;