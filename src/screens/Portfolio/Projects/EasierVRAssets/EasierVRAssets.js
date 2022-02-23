import PortfolioItemContent from '../../PortfolioItemContent';
import { thumbnail } from "./assets";

const content = {
	"header": {
    "id": "407a9fe3-e5ee-41d8-86ae-2c044ca0e8c9",
    "title": "Easier VR Assets",
    "icon_url": thumbnail,
    "description": "Custom scripts as an alternative to Oculus Implementation's OVR scripts.",
    "status": "Ongoing",
    "dates": null,
    "latest_version": null,
    "external_links": [
      {
      	"text": "Latest Release (v2.0.0)",
        "url": "https://github.com/kimryan0416/EasierVRAssets/releases/tag/v2.0.0"
      }, {
        "text": "Github Repo",
        "url": "https://github.com/kimryan0416/EasierVRAssets"
      }
    ],
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
    	"id": "1fa4c3da-7688-4a5e-86c8-a5af58b2f919",
      "type": "heading_2",
      "contents": [
      	{
          "content": "Description",
          "href": null,
          "annotations": [ "bold" ]
        }
      ],
      "children": [],
      "misc": null
    },
    {
    	"id": "a7375f71-faf5-439b-9092-0828bb09752e",
      "type": "paragraph",
      "contents": [
      	{
          "content": "The Easier VR Assets is a side project aimed to replicate the functionality of Oculus's OVRGrabber and OVRGrabbable scripts, which are provided in The \"Oculus Integration\" package on Unity.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "c5a2e143-5eed-4563-ba59-ac39fff9fc47",
      "type": "paragraph",
      "contents": [
        {
          "content": "Created in response to the general user-unfriendly nature of the default Oculus Integration package, this package attempts to reduce time for prototyping by having pre-set settings and code to allow for grabbing, locomotion, and any other events attached to each button input on the Oculus Quest and Quest 2 controllers.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    }
  ]
};

const EasierVRAssetsData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"easiervrassets",
	thumbnail:thumbnail,
	title:"Easier VR Assets",
	url:"easierVRAssets",
	content:<PortfolioItemContent data={content} />
}


export default EasierVRAssetsData;