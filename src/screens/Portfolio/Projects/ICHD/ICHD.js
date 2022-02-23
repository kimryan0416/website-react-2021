import PortfolioItemContent from '../../PortfolioItemContent';
import { thumbnail } from "./assets";

const content = {
    "header": {
        "id": "b32953a2-c2c6-4387-8214-830db1a171fb",
        "title": "Seoul National University - Marine Hydrodynamics Lab: International Conference on Hydrodynamics Website Developer",
        "icon_url": thumbnail,
        "description": "Landing pages for two conferences hosted by SNU's Marine Hydrodynamics Lab.",
        "status": "Completed",
        "dates": "June 2017 - August 2017",
        "latest_version": null,
        "external_links": [
            {
                "text": "ICHD 2018 Website",
                "url": "https://mhl.snu.ac.kr/ichd2018/"
            },
            {
                "text": "HYEL 2018 Website",
                "url": "https://mhl.snu.ac.kr/hyel2018/"
            }
        ],
        "platforms": [],
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "MySQL",
            "PHP"
        ],
        "categories": [
            "Work Experience",
            "Personal Projects"
        ],
        "sub_category": "Web Projects"
    },
    "content": [
        {
            "id": "85afad13-c1cd-425d-93dc-9b04d28f1db0",
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
            "id": "73ff7ad9-afb1-457e-943d-cfbc263acf2f",
            "type": "paragraph",
            "contents": [
                {
                    "content": "I was contracted to make a website for the 2018 International Conference on Hydrodynamics, which was being hosted by Seoul National University's (SNU's) Marine Hydrodynamics Laboratory (MHL).",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "5d4335d0-67f7-4af5-b6fa-bc61bcf8024c",
            "type": "paragraph",
            "contents": [
                {
                    "content": "The website allows for users who create accounts to upload documents into the website's main server and the managers of the conference to view these documents. This was necessary as the website was intended to allow the managers to view research papers and select individuals that they would invite to be speakers at this conference. The website gives users the chance to upload multiple documents at once and uses a database as a means of file management.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "fcc2a26c-37ae-4086-8ac1-ab0a88dd51b5",
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
            "id": "5ccc754d-3557-4b82-9c40-90a47c299067",
            "type": "heading_3",
            "contents": [
                {
                    "content": "Users can:",
                    "href": null,
                    "annotations": [
                        "underline"
                    ]
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "7bf19a9a-78d2-4f8c-bc48-0b4b9e891df4",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Create account with proper password encryption.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "fdae16c6-3f6d-45f6-b155-2984e5c93578",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Upload multiple files simultaneously, renaming them prior to upload if necessary.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "9b8269d7-b9b7-43ba-b1e2-6238dbb83a25",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Delete unneeded files they themselves uploaded.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "4fb5abd8-9118-41d9-997a-c5562edab94c",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "(A password checking process operates to ensure files cannot be deleted by another party).",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "e3ff2148-8e67-4a56-b9ee-f3e59f304e97",
            "type": "heading_3",
            "contents": [
                {
                    "content": "Administrators can:",
                    "href": null,
                    "annotations": [
                        "underline"
                    ]
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "da7e61f5-ad93-44c5-ab99-6a0d16e24091",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Track all users with accounts on the website and download and/or modify their file uploads if necessary.",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "759d765e-8264-4748-bdfb-e5e2a0e1547f",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Utilize a checklog that tracks the most recent uploads, deletions, and file\nrenamings that have happened. (This was necessary due to server\nprivileges preventing automated emails from being properly sent by\nwebsites managed by Seoul National University)",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "c2d7d93d-921d-4a94-b3a7-c9a5741b024b",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "Retrieve replacement passwords for users who have lost and/or forgotten the passwords to their accounts",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        },
        {
            "id": "581118ee-6477-49b0-906d-1234415fe0ee",
            "type": "bulleted_list_item",
            "contents": [
                {
                    "content": "(This was necessary due to server privileges preventing automated emails from being properly sent by websites managed by Seoul National University)",
                    "href": null,
                    "annotations": []
                }
            ],
            "children": [],
            "misc": null
        }
    ]
}

const ICHDData = {
	umbrella:"Contract Work",
	key:"ichd",
	thumbnail:thumbnail,
	title:"Seoul National University - Marine Hydrodynamics Lab: International Conference on Hydrodynamics Websites",
	url:"ichd",
	content:<PortfolioItemContent data={content} />
}

export default ICHDData;