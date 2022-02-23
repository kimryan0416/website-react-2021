import PortfolioItemContent from '../../PortfolioItemContent';

import { livestreams } from "../../../../downloads";
import { thumbnail } from "./assets";

const content = {
    "header": {
        "id": "83daf9e7-0784-400e-9da8-4de5b6471b75",
        "title": "Investigating the Motivation Behind Live Stream Participants Who Post Comments During Live Streams",
        "icon_url": thumbnail,
        "description": "A report about why live stream viewers interact with live streamers.",
        "status": "Completed",
        "dates": "January 2018 – May 2018",
        "latest_version": null,
        "external_links": [
            {
                "text": "Report PDF (229 kB)",
                "url": livestreams
            }
        ],
        "platforms": [],
        "skills": [
            "Computer-Mediated Communication",
            "Live Streaming",
            "User Experience (UX) Design"
        ],
        "categories": [
            "Research Papers"
        ],
        "sub_category": null
    },
    "content": [
        {
            "id": "93bbee6c-5614-46e4-924c-22f9b9f60a00",
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
            "id": "746dab14-4ada-442f-aff7-3d6028fb5c17",
            "type": "paragraph",
            "contents": [
                {
                    "content": "A semester-long research endeavor to investigate changes in levels of viewer participation on live streams, with particular consideration to new features and behaviors particular to live streams; such new features include the ability of live streamers to see user reactions in real time, the ability to pay extra capital to make user messages more apparent, and the ability of viewers to network with each other in real time.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "1a7c9b14-ebff-40ae-b952-35f1c57839db",
            "type": "paragraph",
            "contents": [
                {
                    "content": "Our initial hypotheses include:",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "64b8587d-7c06-41a7-b2c0-c5ce7c0a5abf",
            "type": "numbered_list_item",
            "contents": [
                {
                    "content": "Participants post comments because they feel as if they are part of a greater community.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "6b91a0bd-e74f-4b78-bbf9-b872f94db761",
            "type": "numbered_list_item",
            "contents": [
                {
                    "content": "Participants feel like they have become one of the contributors.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "62d50e3d-1d75-4633-8f9a-e869c74782bb",
            "type": "numbered_list_item",
            "contents": [
                {
                    "content": "Participants want to achieve a level of self-satisfaction.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "48bfbe9b-dfb2-4d26-ae41-f05c54207136",
            "type": "paragraph",
            "contents": [
                {
                    "content": "Our findings indicated that our first and third hypotheses were partially supported due to interviewees from our test sample stating they only participated if there was a certain level of intimacy involved between the themselves and the live streamer, or if there was some knowledge to be gained by interacting with the live streamer and other viewers. Hypothesis #2 was not supported because a desire to become a contributor does not lead to greater interaction in all situations and contexts.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "cc2ea402-15a4-40ce-8cd2-5f480f578cc6",
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
            "id": "d4cb83cd-1485-4c36-9c40-ced4e9a6fd61",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Emily Chen",
                    "href": null,
                    "annotations": [
                        "italic",
                        "underline"
                    ]
                },
                {
                    "content": " - Dept. of Information Science, Cornell University [ec745@cornell.edu]",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "458ac278-a4eb-45c3-9397-ae1144aeebc8",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Frederick Kennedy",
                    "href": null,
                    "annotations": [
                        "italic",
                        "underline"
                    ]
                },
                {
                    "content": " - Dept. of Information Science, Cornell University [fak34@cornell.edu]",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "111d098d-a120-41bf-b1c3-e523deb3a214",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Sangmin Kim",
                    "href": null,
                    "annotations": [
                        "italic",
                        "underline"
                    ]
                },
                {
                    "content": " - Dept. of Information Science, Cornell University [sk858@cornell.edu]",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "b0c110df-2fea-4ffc-abf3-44e718c7f698",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Daye Shin",
                    "href": null,
                    "annotations": [
                        "italic",
                        "underline"
                    ]
                },
                {
                    "content": " - Dept. of Information Science, Cornell University [ds952@cornell.edu]",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        }
    ]
}

const LivestreamsData = {
	umbrella:"Research",
	key:"livestreams",
	thumbnail:thumbnail,
	title:"Investigating the Motivation Behind Live Stream Participants Who Post Comments During Live Streams",
	url:"livestreams",
	content:<PortfolioItemContent data={content} />
}

export default LivestreamsData;