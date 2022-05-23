import PortfolioItemContent from '../../PortfolioItemContent';
import { thumbnail } from "./assets";

const content = {
  "header": {
    "id": "59e67f39-3a78-40cb-ab1d-98f78b1f6455",
    "title": "Terms of Service Text Evaluator (ToSTE)",
    "icon_url": thumbnail,
    "description": "A browser extension capable of summarizing Terms of Service.",
    "status": "Completed",
    "dates":[
      {
        header:"Completed",
        dates:[{year:'2019',day:'Dec.'}]
      }
    ],
    "latest_version": "1.0 (FIREFOX ONLY)",
    "external_links": [
      {
        "text": "Downloadable Build & Files",
        "url": "https://github.com/ct-studio-buildboard/F19-T022"
      }
    ],
    "platforms": [],
    "skills": [
      "JavaScript",
      "Python",
      "Natural Language Processing"
    ],
    "categories": [
      "Personal Projects"
    ],
    "sub_category": "Web Projects"
  },
  "content": [
    {
      "id": "f9d8b6ff-a53c-4f29-81aa-c5a3919d1320",
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
      "id": "868b2de7-6cc2-4700-b520-1ffb6e68b24d",
      "type": "paragraph",
      "contents": [
        {
          "content": "The Terms of Service Text Evaluator, or \"ToSTE\" for short, is a browser extension intended to help people protect their data and personal information by summarizing Terms of Service documents. ToSTE answers the following question:",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "fa05485c-4367-4b3d-a1ea-ddc81646a9c4",
      "type": "quote",
      "contents": [
        {
          "content": "\"How might we allow people to have positive digital interactions while feeling safe and empowered?\".",
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
      "id": "19e00ccf-c3bb-4d77-93c9-744e8337648e",
      "type": "paragraph",
      "contents": [
        {
          "content": "Feeling safe in the digital world has a lot to do with the concept of privacy - it is about your data. Understanding your privacy gives YOU the power to make decisions on it. In the digital world, information about privacy is set out in Terms of Services, or ToS for short. This document  contains how a company collects your data, use it, and share it. Unfortunately, ToS's generally are long and full of legal jargon. So, few people read it.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "f6efb723-338c-4c18-8190-a22ccecfe94d",
      "type": "paragraph",
      "contents": [
        {
          "content": "This raises a problem: on the one hand, people care about privacy, but on the other, they don't read documents that govern it. How do we solve that problem? Our solution is ToSTE: the \"Terms of Service Text Evaluator\" - A web extension that reads ToS on websites analyzes the complicated privacy clauses using machine learning, summarizes the clauses, and presents them in simpler language to users. With simpler ToS, users can understand ToS in a short amount of time and can make educated decisions on their data. We believe knowledge is power. ToSTE makes Terms of Service accessible so that one can understand their rights and privacy.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "e33534af-4119-4e8e-aa23-8b1ceecff6d2",
      "type": "heading_2",
      "contents": [
        {
          "content": "Functionality",
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
      "id": "b2cc5256-0196-4277-bf38-66b73793027e",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Parse through legal documents such as Terms of Service and return a summarized version of the document.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "5b4d1fb2-6ac1-49b6-814d-a6292fe95d4e",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Uses Extractive Summarization to pick sentences that are most important in each section of a legal document.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "59927b5e-6242-47af-a58d-88deb3bcb5cf",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Works as a browser extension on FIREFOX ONLY, with a Python back-end server that communicates with the web extension.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "a8cfb1cf-6391-4534-a067-9f805f31bd57",
      "type": "heading_2",
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
      "id": "51b56595-819d-4c3b-9c42-31a4c5a668c7",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Emilie Burton",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell Tech @ Cornell University [eb736@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "d15ad2cc-d092-4b8a-bab1-647fe52ef346",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Arief Hutahaean",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell Tech @ Cornell University [arh272@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "17e9eac3-a45b-4ccf-bab6-0466385b8d93",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Jerry Tsou",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell Tech @ Cornell University [ct558@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    }
  ]
}

const TosteData = {
	umbrella:"Web Projects",
	key:"toste",
	thumbnail:thumbnail,
	title:"Terms of Service Text Evaluator (ToSTE)",
	url:"toste",
	content:<PortfolioItemContent data={content} />
}

export default TosteData;