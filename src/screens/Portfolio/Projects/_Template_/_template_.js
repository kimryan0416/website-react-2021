import PortfolioItemContent from '../../PortfolioItemContent';
import { siggraph2023 } from "../../../../downloads";
import { 
	thumbnail,
} from "./assets";

const content = {
  "header": {
    //"id": "8138b1be-96b0-475d-8b00-a924139a7a6d",
    "title": "Template Title",
    "icon_url": thumbnail,
    "description": "Write down a description here. Preferably short. Doesn't have to be though. Only plain string - no styling.",
    "status": "Completed",
    "dates":[
      {header:'Completed',dates:[{year:'2023',day:'Jan 25'}]}
    ],
    "latest_version": "1.0",
    "external_links": [
      /*
      {
        "text": "Download PDF (11.7 mB)",
        "url": siggraph2023
      },
      {
        "text": "SIGGRAPH 2023 Video",
        "url": "https://youtu.be/6_tKPxGTxwQ"
      }
      */
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
      "id":"1",
      "type":"paragraph",
      "contents":[
        {
          "content":"Hello, this is a template that can be used for other projects. Use this as a format for any project that is added to the website.",
          "href":null,
          "annotations":[]
        },
      ],
      "children":[],
      "misc":null
    },
    {
      "type":"column_list",
      "contents":[
        {
          "type":"column",
          "contents":[
            {
              "type":"paragraph",
              "contents":[
                {
                  "content":"First of all, here's the basic format, to your right.",
                  "href":null,
                  "annotations":[]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"paragraph",
              "contents":[
                {
                  "content":"At the base level, consider anything that isn't a literal string as one of these objects.",
                  "href":null,
                  "annotations":[]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"paragraph",
              "contents":[
                {
                  "content":"The 'ID' key-value is pretty important. Don't delete it!",
                  "href":null,
                  "annotations":["bold"]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"paragraph",
              "contents":[
                {
                  "content":"There are several different types of content blocks:",
                  "href":null,
                  "annotations":[]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"`paragraph`",
                  "href":null,
                  "annotations":["italic"]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"`bulleted_list_item`",
                  "href":null,
                  "annotations":["italic"]
                },
                {
                  "content":" (there's no `bulleted_list` type.)",
                  "href":null,
                  "annotations":[]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"`numbered_list_item`",
                  "href":null,
                  "annotations":["italic"]
                },
                {
                  "content":" (There's no `numbered_list` type.)",
                  "href":null,
                  "annotations":[]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"column_list",
                  "href":null,
                  "annotations":["italic"]
                },
                {
                  "content":" (A horizontal list parent element.)",
                  "href":null,
                  "annotations":[]
                }
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"column_list_item",
                  "href":null,
                  "annotations":["italic"]
                },
                {
                  "content":" (An element inside of the `column_list` type.)",
                  "href":null,
                  "annotations":[]
                }
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"code",
                  "href":null,
                  "annotations":["italic"]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"image",
                  "href":null,
                  "annotations":["italic"]
                },
                {
                  "content":" (\"contents\" is an array with the first object having a \"url\" key-value; \"misc\" is an object that accepts a \"caption\" key whose value is an array of text objects.)",
                  "href":null,
                  "annotations":[]
                }
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"header_[1-6]",
                  "href":null,
                  "annotations":["italic"]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"quote",
                  "href":null,
                  "annotations":["italic"]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"callout",
                  "href":null,
                  "annotations":["italic"]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"bulleted_list_item",
              "contents":[
                {
                  "content":"divider",
                  "href":null,
                  "annotations":["italic"]
                },
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"paragraph",
              "contents":[
                {
                  "content":"Anything expecting text (i.e. paragraph, bulleted or numbered_list_item, code) will accept a text object, which is formatted a bit differently (refer to right)."
                }
              ],
              "children":null,
              "misc":null
            },
            {
              "type":"paragraph",
              "contents":["However, if you don't need any addendums such as styling or href URLs, then the \"contents\" array can just be an array of strings. You can even mix-match - for example, if you need to add a bold inside a text paragraph, then you can have the first \"contents\" item be a literal string, the next a text object, then finally net be another literal string."],
              "children":null,
              "misc":null
            }
          ],
          "children":null,
          "misc":null 
        },
        {
          "type":"column",
          "contents":[
            {
              "type":"code",
              "contents":[
                {
                  "content":"Object Type:\n{\
                    \n  'type':string,\
                    \n  'contents':array<object>,\
                    \n  'children':null or array<object>,\
                    \n  'misc':null or object\
                  \n}\n\n- paragraph: <p></p>\n- bulleted_list_item: <ul><li>...</ul>\n- numbered_list_item: <ol><li>...</ol>\n- column_list: horizontal columns\n- column_list_item: a column inside 'column_list'.\n- header_[1-6]: <h1> - <h6>\n\n//Text content type:\nJust a \"normal string\"... or:\n{\
                    \n  'content':string,\
                    \n  'href':null or string,\
                    \n  'annotations':null or array<string>\n}\n\nExample of a paragraph with literal strings mixed with objects:\n{\
                    \n  'type':\"string\",\
                    \n  'contents':[\
                    \n    \"My name is \",\
                    \n    {\
                    \n      'content':\"Ryan Kim\",\
                    \n      'href':null,\
                    \n      'annotations':[\"bold\"]\
                    \n    },\
                    \n    \". Nice to meet you!\"\
                    \n  ]\
                    \n\nAn example of an image:\
                    \n{\
                    \n  'type':\"image\",\
                    \n  'contents':[ { \"url\":<url> } ]\
                    \n  'children':null,\
                    \n  'misc':{\
                    \n    'caption':[\
                    \n      {\
                    \n        'content':\"Figcap something\",\
                    \n        'href':null,\
                    \n        'annotations':null\
                    \n      }\
                    \n    ]\
                    \n  }\
                    \n}\
                    ",
                  "href":null,
                  "annotations":[]
                },
              ],
              "children":null,
              "misc":{
                "caption":"",
              }
            }
          ],
          "children":null,
          "misc":null
        }
      ],
      "children":null,
      "misc":null
    },
    {
      "id":"3",
      "type": "heading_1",
      "contents": [
        {
          "content": "This is Header #1",
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
      "id":"4",
      "type": "heading_2",
      "contents": [
        {
          "content": "This is Header #2",
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
      "id":"5",
      "type": "heading_3",
      "contents": [
        {
          "content": "This is Header #3",
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
      "id":"6",
      "type": "heading_4",
      "contents": [
        {
          "content": "This is Header #4",
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
      "id":"7",
      "type": "heading_5",
      "contents": [
        {
          "content": "This is Header #5",
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
      "id":"8",
      "type": "heading_6",
      "contents": [
        {
          "content": "This is Header #6",
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
      "id":"9",
      "type":"paragraph",
      "contents":["This is a paragraph"],
      "children":[],
      "misc":null
    },
    {
      "type": "image",
      "contents": [
        { "url": thumbnail }
      ],
      "children": [],
      "misc": {
        "caption": [
          { "content": "Paper Report Preview", "href": null, "annotations": [] }
        ]
      }
    },
    {
      "type": "callout",
      "contents": ["This is a callout."],
      "children": null,
      "misc":null
    },
    {
      "type": "quote",
      "contents": ["This is a quote."],
      "children": null,
      "misc":null
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

const TemplateData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"template",
	thumbnail:thumbnail,
	title:"Template Title",
	url:"template",
	content:<PortfolioItemContent data={content} />
}

export default TemplateData;