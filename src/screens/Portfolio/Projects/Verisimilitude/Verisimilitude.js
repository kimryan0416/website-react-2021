import PortfolioItemContent from '../../PortfolioItemContent';
import { sigsimpads2024 } from "../../../../downloads";
import { 
	thumbnail,
} from "./assets";

const content = {
  "header": {
    //"id": "8138b1be-96b0-475d-8b00-a924139a7a6d",
    "title": "Building Verisimilitude in VR With High-Fidelity Local Action Models: A Demonstration Supporting Road-Crossing Experiments",
    "icon_url": thumbnail,
    "description": "Accepted into ACM SIGSIM PADS 2024",
    "status": "Completed",
    "dates":[
      {header:'Completed',dates:[{year:'2022',day:'Sep 1'},{year:'2023',day:'Jan 25'}]}
    ],
    "latest_version": "1.0",
    "external_links": [
      {
        "text": "Download PDF (7 mB)",
        "url": sigsimpads2024
      },
      {
        "text": "Video Description",
        "url": "https://youtu.be/6_tKPxGTxwQ"
      }
    ],
    "platforms": [
      "Unity3D",
      "HTC Vive Pro"
    ],
    "skills": [
      "C#/CSharp",
      "Unity",
      "Virtual Reality",
    ],
    "categories": [
      "Research Papers"
    ],
    "sub_category": "VR"
  },
  "content": [
    {
      "type":"column_list",
      "contents":[
        {
          "type":"column_list_item",
          "contents":[
            {
              "type":"heading_1",
              "contents":["Abstract:"],
            },
            {"type":"vspace","contents":[12]},
            { "type":"divider" },
            {"type":"vspace","contents":[12]},
            {
              "type":"paragraph",
              "contents":[{
                "content":"Virtual Reality (VR) is increasingly useful for experimentation with human-involved scenarios that are hard to access and dangerous to conduct in reality. There is growing incentive for VR to supplement real-world observational studies, and therefore new attention to the performance of VR assets relative to their real-world counterparts. Here, we examine how issues of investigative and experimental parity between real-world domain science and VR involving human-environment behavior might be advanced, particularly in the use case of safety science for road-crossing. Our contribution centers on a VR-based traffic flow simulation to recreate, with high-fidelity relative to the real-world, dynamics of hyper-local interaction between traffic, people, and the roadside environment. This is approached through novelty in provision of local action models for VR assets, based on realistic treatment of small-scale dynamics of traffic flow with matching agent-based pedestrian behavior trees. We show an end-to-end system that facilitates human immersion in what-if VR simulation and an experimental pipeline that supports within-subjects user behavior studies that are capable of revealing user perception of their experience in the experimental domain as well in VR as a graphical medium. An initial demonstration of the system shows that 22 participants ultimately responded with high levels of presence, and with high propensity toward natural behavior across road-crossing dimensions. We report these findings even with low-resolution graphic elements. Our results highlight that high levels of user-identified contextual verisimilitude (i.e., appearing authentic, particularly to the senses), alongside behavioral fidelity (i.e., exactness, particularly relative to users' knowledge of and experience with real-world counterparts) can be achieved, even with low-resolution graphical depictions. The key, we argue, is the design of appropriate low-level action models to drive user embodiment relative to VR assets. We contend that this finding has wider relevance to consideration of potential channels for VR experience more generally.",
                "annotations":["italic",]
              }],
            },
          ],
        },
        {
          "type":"column_list_item",
          "contents":[
            {
              "type":"video_embed",
              "contents":[{
                "width":560,
                "height":315,
                "src":"https://www.youtube.com/embed/6_tKPxGTxwQ",
                "title":"YouTube video player",
                "frameborder":0,
                "allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                "allowfullscreen":true
              }]
            },
            {
              "type":"heading_1",
              "contents":["Basic idea:"]
            },
            {"type":"vspace","contents":[12]},
            {"type":"divider"},
            {"type":"vspace","contents":[12]},
            {
              "type":"paragraph",
              "contents":[
                "The main motivation is to create a virtual simulation of a urban road crossing with a novel approach to how typucal urban studies are performed. While most urban road crossing simulations in research prioritize pre-determined, established gap distances between vehicles, vehicle velocities, or both, our study hopes to advance the practice by introducing high levels of verisimiltude with real-world scenarios by invoking unpredictability and stochastic modeling of phenomena in hyper-local interactions between pedestrians and vehicles.",
                {
                  "content":"The main motivation is to see whether such stochastic, mathematical modeling would induce observers into conducting strategies and interactions typically seen in real-world scenarios.",
                  "annotations":["bold","italic","blue"]
                },
                "This is becoming ever more important as VR is poised to supplement real-world observational studies and offers the chance to observe human behavior in situations that are either hard to reach or too dangerous in the real world."
              ]
            },
          ]
        }
      ],
    },
  ]
}

/*
<li><ExtURL href={vrkeyboard}>Download PDF (2.2 mB)</ExtURL></li>
<ExtURL href={vrkeyboard}><Button>Download PDF (2.2 mB)</Button></ExtURL>

<img className="PortfolioContentImage" src={report} alt="Paper Report Preview" />

<img className="PortfolioContentImage" src={v0_1} alt="Ver. 0.1" />
<img className="PortfolioContentImage" src={v0_2} alt="Ver. 0.2" />
<img className="PortfolioContentImage" src={v0_3} alt="Ver. 0.3" />
<img className="PortfolioContentImage" src={v1_0} alt="Ver. 1.0" />
<img className="PortfolioContentImage" src={v1_1} alt="Ver. 1.1" />
<img className="PortfolioContentImage" src={v1_2} alt="Ver. 1.2" />
*/

const VerisimilitudeData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"verisimilitude",
	thumbnail:thumbnail,
	title:"Building Verisimilitude in VR With High-Fidelity Local Action Models",
	url:"verisimilitude",
	content:<PortfolioItemContent data={content} />
}

export default VerisimilitudeData;