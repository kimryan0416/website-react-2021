import PortfolioItemContent from '../../PortfolioItemContent';
import { thumbnail } from "./assets";

const content = {
    "header": {
        "id": "7413c7ea-a2e2-4ad6-8c99-8e05e6044e72",
        "title": "MIMO - React.js Content Contractor & Consultant",
        "icon_url": thumbnail,
        "description": "Creating lesson plans and content for MIMO’s “React Basics” module.",
        "status": "Completed",
        "dates":[
            {
                header:null,
                dates:[
                    {year:"2021",day:"May 17"},
                    {year:"2021",day:"Aug. 10"}
                ]
            }
        ],
        "latest_version": null,
        "external_links": [
            {
                "text": "MIMO Website",
                "url": "https://getmimo.com/playgrounds"
            }
        ],
        "platforms": [],
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Online Teaching"
        ],
        "categories": [
            "Work Experience"
        ],
        "sub_category": null
    },
    "content": [
        {
            "id": "eb5448b6-f465-462c-814e-277689100e41",
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
            "id": "54d84dfc-df57-44e9-9a87-afdff7554cbc",
            "type": "paragraph",
            "contents": [
                {
                    "content": "I was responsible for the planning, generation, and execution of lessons that taught newcomers to React.js about the library’s key concepts and how to navigate its component-based infrastructure. These lessons are integrated into MIMO’s “React Basics” module, split across eight “Skills” that each represent major aspects of React.js such as state and Functional Components.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "a3784ce7-0d85-4bdc-9457-9f1ec95b696c",
            "type": "paragraph",
            "contents": [
                {
                    "content": "Content for each Skill consists of lessons. Each lesson consists of a description and executable code that students had to complete in order to move to the next lesson. As the lesson planner, I was allowed to decide not just what the content was but also how they would build off of one another sequentially across the eight Skills.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "f1417e3d-fd4e-49f3-9a6b-45584244ae4b",
            "type": "paragraph",
            "contents": [
                {
                    "content": "Since “React Basics” was meant for newcomers to React.js, I had to consider how to convey the lesson content in a manner that was easy to understand. The planning phase of the development process took the largest amount of time, whereas the implementation of lesson content into MIMO’s infrastructure took less time as a result of careful planning and adherence to MIMO’s content guidelines.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "4423ae2d-c24e-4f6d-a9fa-d022f2e4fe52",
            "type": "heading_2",
            "contents": [
                {
                    "content": "Responsibilities",
                    "href": null,
                    "annotations": ["bold"]
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "aba3bcdd-69f7-4505-a6bc-c8085727d00c",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Formulate lesson plans, split across eight Skills, to help\nnewcomers to React.js get acquainted with the library’s core concepts.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "5b4af28a-d69c-42d2-86bb-bece39edb2ff",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Collaborate with MIMO supervisors to ensure that each lesson adhered to MIMO’s content guidelines.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "b77d3545-ae1b-48ce-a71e-44bfe3fc9d1c",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Implement lesson content into MIMO’s infrastructure using their proprietary Course Builder tool.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "9d4a8c4d-86f9-4545-b005-e2da2fb2e306",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Plan, develop, and integrate Projects that encapsulated the learning content\nfrom the eight Skills and gave examples of how to use React.js to create web applications.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "f269ddb4-a62a-41ad-ba33-ea2e0af11214",
            "type": "heading_2",
            "contents": [
                {
                    "content": "Project Code",
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
            "id": "8c2588ae-60c5-4bc2-90b9-5fcd61419b6a",
            "type": "paragraph",
            "contents": [
                {
                    "content": "Presented here is a public version of the code used inside of the \"React Basics\" Projects. Students are required to modify each using the concepts taught in the module's Skills. The code samples below are the completed versions of each Project.",
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
<iframe src="https://kimryan0416.github.io/mimo-projects/" height={460} width={256} title="MIMO project samples" />	
*/


const MIMOData = {
	umbrella:"Startups",
	key:"mimo",
	thumbnail:thumbnail,
    thumbnailImageStyle:{padding:16},
	title:"MIMO - React.js Content Contractor/Consultant",
	url:"mimo",
	content:(
		<PortfolioItemContent data={content}>
			<iframe src="https://kimryan0416.github.io/mimo-projects/" height={460} width={256} title="MIMO project samples" />	
		</PortfolioItemContent>
	)
}

export default MIMOData;