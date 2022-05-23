import PortfolioItemContent from '../../PortfolioItemContent';
import { 
	thumbnail,
} from "./assets";

const content = {
  "header": {
    "id": "87da1273-f997-4942-99e4-7e88940a59b1",
    "title": "University of Michigan: Information Interaction Laboratory – Research Intern",
    "icon_url": thumbnail,
    "description": "Investigating reasons for miscommunication between college-level instructors and VR developers.",
    "status": "Ongoing",
    "dates":[
      {header:null,dates:[{year:'2021',day:'June 2'},'Current']}
    ],
    "latest_version": null,
    "external_links": [
      {
        "text": "Information Interaction Lab Website",
        "url": "https://www.mi2lab.com/"
      }
    ],
    "platforms": [],
    "skills": [
      "Virtual Reality (VR)",
      "Extended Reality (XR)",
      "Human-Computer Interaction (HCI)",
      "Online Collaboration",
      "Education"
    ],
    "categories": [
      "Work Experience",
      "Research Papers"
    ],
    "sub_category": null
  },
  "content": [
    {
      "id": "4490c35f-0122-4766-acef-41a6d70bba5b",
      "type": "heading_2",
      "contents": [
        {
          "content": "Description",
          "href": null,
          "annotations": [
            "bold"
          ]
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "82feee6c-4f89-4c43-921c-bb24a2172449",
      "type": "paragraph",
      "contents": [
        {
          "content": "I am currently participating as a research intern at the University of Michigan’s Information Interaction Laboratory, under the supervision of Professor Michael Nebeling.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "cde0fb2d-fb66-478d-b158-c452ed63df82",
      "type": "paragraph",
      "contents": [
        {
          "content": "Our current project is a research inquiry into the development of Virtual Reality Learning Environments, or VRLEs. Particularly, we are curious how both instructors (who have few to no experiences with VR) and VR developers understand the application of VR in learning environments.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "fa0029e9-4cb7-4d37-a5d1-5fe5635ef6df",
      "type": "paragraph",
      "contents": [
        {
          "content": "The project is a collaborative effort with two other peer researchers alongside our supervisor, Professor Nebeling. The project's paper is slated to be submitted to conferences either later in 2021 or early in 2022.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "a4d5ca5e-2e3f-4056-865d-f755671f3776",
      "type": "heading_2",
      "contents": [
        {
          "content": "Responsibilities",
          "href": null,
          "annotations": [
            "bold"
          ]
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "daee2d2f-2e8c-4cbb-bc28-1c1c2a343114",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Remotely collaborate with peer researchers from the Information Interaction Lab and the University of Michigan’s REMS program to investigate the development of VRLEs.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "631ed37f-2dfe-475c-a3a6-564dfcb1d965",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Participate in weekly meetings with other research groups at the Information Interaction Laboratory to share progress and suggestions.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    }
  ]
}

const UMichInternData = {
	umbrella:"University",
	key:"umich_intern",
	thumbnail:thumbnail,
	title:"University of Michigan: Information Interaction Laboratory – Research Intern",
	url:"umich_intern",
	content:<PortfolioItemContent data={content} />
}

export default UMichInternData;