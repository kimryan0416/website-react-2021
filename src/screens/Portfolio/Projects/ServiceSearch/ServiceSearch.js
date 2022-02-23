import PortfolioItemContent from '../../PortfolioItemContent';
import { serviceSearch, serviceSearchPoster } from "../../../../downloads";

import { thumbnail } from "./assets";

const content = {
  "header": {
    "id": "25eb114c-d583-4bb5-9645-7d374179303c",
    "title": "ServiceSearch: An Opportunity Searcher Just For You",
    "icon_url": thumbnail,
    "description": "A report on volunteering behavior amongst college students.",
    "status": "Completed",
    "dates": "August 2017 – December 2017",
    "latest_version": null,
    "external_links": [
      {
        "text": "Report PDF (634 kB)",
        "url": serviceSearch
      },
      {
        "text": "ServiceSearch Poster",
        "url": serviceSearchPoster
      }
    ],
    "platforms": [],
    "skills": [
      "Information Interfaces and Presentation",
      "User Experience (UX) Design",
      "User Interfaces (UI)"
    ],
    "categories": [
      "Research Papers"
    ],
    "sub_category": null
  },
  "content": [
    {
      "id": "80b1462b-cec0-4132-9d1d-aad7f3d61485",
      "type": "heading_1",
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
      "id": "6afc3bec-3e4c-44df-b3b0-34c523647347",
      "type": "paragraph",
      "contents": [
        {
          "content": "A semester-long inspection of human-computer interaction design via the development of a prototype mobile application called “ServiceSearch”. Working in a team of 6, the design phase of our prototype’s development involved rigorous application of HCI-based theory such as the usage of personas to facilitate user research and testing and the usage of interview data to develop design solutions to problems.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "f6a9ef8a-d0c3-44da-af52-d4b10a728a6a",
      "type": "paragraph",
      "contents": [
        {
          "content": "Our initial analysis of alternate existing web applications and interview responses suggested that students in colleges, particularly at Cornell, were largely constrained by time, transportation, and exposure to opportunities due to learning about opportunities mostly via word of mouth. Furthermore, students felt best about volunteering when the opportunity revolved around a specific interest of theirs or put to use a skill of theirs that could discovered.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "5967519f-fe69-496f-aa9b-0ed458e2a54d",
      "type": "paragraph",
      "contents": [
        {
          "content": "This directed the design of our “ServiceSearch” app to focus primarily on not just creating a database for volunteer opportunities but also catering to the limitations of each user such as volunteer interests, transportation options, and time available.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "870be87b-6d29-462e-b371-035cb397c451",
      "type": "heading_1",
      "contents": [
        {
          "content": "Peer Researchers",
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
      "id": "8db346cc-0a10-47d2-a918-25129cebcb10",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Kate Brind",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell University [kbb55@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "671868a5-52a6-4a35-b366-7ccda4392f88",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Amanda Chen",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell University [aec255@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "f8de4a26-65ab-4048-8e40-402df9f5d013",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Kevin Kee",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell University [kpk58@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "34c16e5b-a9c3-423e-a24d-3cc3ef3b1c42",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Yoo Hyeon Kim",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell University [yk493@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "54ccb286-96d4-4cc0-9aa1-ff3cd80d8863",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Amanda Xu",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell University [ax22@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    }
  ]
}

/*
<li><ExtURL href={serviceSearch}>Report PDF (634 kB)</ExtURL></li>
<li><ExtURL href={serviceSearchPoster}>ServiceSearch Poster</ExtURL></li>
*/

const ServiceSearchData = {
	umbrella:"Research",
	key:"servicesearch",
	thumbnail:thumbnail,
	title:"ServiceSearch: An Opportunity Searcher Just For You",
	url:"servicesearch",
	content:<PortfolioItemContent data={content} />
}

export default ServiceSearchData;