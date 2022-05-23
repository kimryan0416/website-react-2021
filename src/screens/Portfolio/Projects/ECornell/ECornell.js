import PortfolioItemContent from '../../PortfolioItemContent';
import { thumbnail } from "./assets";

const content = {
    "header": {
        "id": "1d33363c-0b9a-46bc-9172-7a8f05140c95",
        "title": "eCornell: Student Web Code Autograder",
        "icon_url": thumbnail,
        "description": "A contract position where I was responsible for a Node.JS-based autograder capable of evaluating student website submissions.",
        "status": "Completed",
        "dates": [
            {
                header:null,
                dates:[
                    {year:"2018",day:"June"},
                    {year:"2019",day:"Aug."}
                ]
            }
        ],
        "latest_version": null,
        "external_links": [],
        "platforms": [],
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Codio",
            "Online Teaching"
        ],
        "categories": [
            "Work Experience",
            "Personal Projects"
        ],
        "sub_category": "Web Projects"
    },
    "content": [
        {
            "id": "958bf740-4192-48c9-9aaa-1b8b0a7614ed",
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
            "id": "eeaa7ae2-6c9e-45c8-93d3-c90a1e912d57",
            "type": "paragraph",
            "contents": [
                {
                    "content": "Soon after graduating from Cornell University, I was hired by eCornell to help them with their web design online course. As both programmer and content creator, I worked closely with other developers and the professor overseeeing the course to both create and upload the course material onto eCornell's chosen distribution platform: Codio.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "b8c7443d-9ad8-4afd-b746-601bfab6cce3",
            "type": "paragraph",
            "contents": [
                {
                    "content": "My main contribution was creating the framework, code, and documentation around an autograder capable of evaluating students' web code.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "a6492ec4-8ca3-4521-8dbd-9ea28805ef05",
            "type": "heading_2",
            "contents": [
                {
                    "content": "Functionality",
                    "href": null,
                    "annotations": ["bold"]
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "0810026a-5a72-4a7e-8ff2-7c7dd9a1402f",
            "type": "paragraph",
            "contents": [
                {
                    "content": "The eCornell Student Web Code Autograder, or Autograder for short, is a Node.JS-based program that allows local or virtual machines to evaluate web files. Utilizing a combination of Node.JS packages, Java, TestCafe, and other dependencies, the Autograder is capable of checking for various aspects about a website:",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "d60de290-43f8-4baf-a045-0bb643e9497b",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Check for HTML, CSS, and JavaScript errors in student files.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "f153f7ea-8598-406c-b8b4-6d128b982284",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Check for the presence or lack thereof of HTML elements and CSS properties/values in the source code.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "c068dc08-73ec-422e-ada2-acce595e3af6",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Check if certain HTML elements with specific styling or text content exists when rendered.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "a7bff4a2-dce7-4b2f-aea4-eb804c708ce8",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Check if actions performed on the website via headless browser create the intended results.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "5298794c-d0ef-40fe-9294-27dc5d1ce1c1",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Check if certain files and/or images are present and located in expected directories.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "51029349-c3b8-4477-bfc3-f10abc74a02e",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Check if files are formatted and/or indented, based on comparisons to beautifiers.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "6d91a0c2-0434-4e8f-a1ab-8ea32b10b82d",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Operable on both local and virtual machines that are capable of running bash scripts.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "211b8d34-410e-48e9-9807-f44c650c24bb",
            "type": "paragraph",
            "contents": [
                {
                    "content": "The Autograder can perform checks on both source files and rendered material of a student's website. The Autograder does so by utilizing Unit Tests that individually inspect a specific aspect of the student's submission. If needed, eCornell course managers and content creators can also write their own unique Unit Tests and adapt the Autograder for use on online IDE's such as Codio, or any virtual machine that is able to run Node.JS.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        }
    ]
}

const ECornellData = {
	umbrella:"Contract Work",
	key:"ecornell",
	thumbnail:thumbnail,
	title:"eCornell: Student Web Code Autograder",
	url:"ecornell",
	content:<PortfolioItemContent data={content} />
}

export default ECornellData;