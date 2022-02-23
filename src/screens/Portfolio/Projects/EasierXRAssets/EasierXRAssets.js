import PortfolioItemContent from '../../PortfolioItemContent';
import { thumbnail } from "./assets";

const content = {
  "header": {
	  "id": "51a16ca1-5510-4d27-acd5-3acdee180e03",
	  "title": "Easier XR Assets",
	  "icon_url": thumbnail,
	  "description": "Premade template scripts for Unity developers to easily make VR experiences.",
	  "status": "On-Hold",
	  "dates": null,
	  "latest_version": null,
	  "external_links": [],
	  "platforms": [],
	  "skills": [
	    "C#/CSharp",
	    "Oculus Quest",
	    "Unity"
	  ],
	  "categories": [
	  	"Personal Projects"
	  ],
	  "sub_category": "VR"
  },
  "content": [
    {
      "id": "766ee830-f75a-4dc1-a881-0d6c90e5aeed",
      "type": "heading_2",
      "contents": [
        {
          "content": "Description",
          "href": null,
          "annotations": ["bold"]
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "87100e69-92cc-4c1b-987a-cdaf5d2d2216",
      "type": "paragraph",
      "contents": [
                {
                    "content": "The Easier XR Assets is an offshoot of the ",
                    "href": null,
                    "annotations": []
                },
                {
                    "content": "EasierVRAssets",
                    "href": "https://www.rkim.dev/#/portfolio/projects/easierVRAssets",
                    "annotations": []
                },
                {
                    "content": " project that is planned to work with Unity's XR Rig system.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "33aa36fe-fe69-4533-bb92-6bb7248b2762",
            "type": "paragraph",
            "contents": [
                {
                    "content": "This project has been put on-hold until later notice.",
                    "href": null,
                    "annotations": [
                        "italic"
                    ]
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "5cee29d4-0395-45e8-8d36-223a03d636fb",
            "type": "paragraph",
            "contents": [],
            "children": [],
            "misc": null
        }
    ]
}

const EasierXRAssetsData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"easierxrassets",
	thumbnail:thumbnail,
	title:"Easier XR Assets",
	url:"easierXRAssets",
	content:<PortfolioItemContent data={content} />
}


export default EasierXRAssetsData;