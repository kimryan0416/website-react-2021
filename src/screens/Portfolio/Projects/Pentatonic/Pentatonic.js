import PortfolioItemContent from '../../PortfolioItemContent';
import { pentatonic } from "../../../../downloads";

import { thumbnail } from "./assets";

const content = {
  "header": {
    "id": "58e9fb49-924f-40cd-9fe7-8de33ac8bced",
    "title": "Pentatonic Tone Sequencer",
    "icon_url": thumbnail,
    "description": "Teaching young children about music scales.",
    "status": "Completed",
    "dates": "September 2017 - December 2017",
    "latest_version": "1.0 (FIREFOX ONLY)",
    "external_links": [
      {
        "text": "Report PDF (1.4 mB)",
        "url": pentatonic
      },
      {
        "text": "Video Demonstration",
        "url": "https://youtu.be/X9uepFLdJ9k"
      }
    ],
    "platforms": [],
    "skills": [
      "Arduino",
      "C/C++",
      "Teensy"
    ],
    "categories": [
      "Personal Projects"
    ],
    "sub_category": "Hardware"
  },
  "content": [
    {
      "id": "c28186a2-d806-4ef7-9d3f-1a641469cbb6",
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
      "id": "f4b866b9-10f8-450b-b783-ff622f4fadd2",
      "type": "paragraph",
      "contents": [
        {
          "content": "A collaborative project during Cornell University's INFO 4320 Intro to Rapid Prototyping course, the Pentatonic Tone Sequencer allows users to create harmonic sequences of music by pressing on the button pad on top of the device.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "0b933208-d3b4-4aed-af49-22c7ad2910e3",
      "type": "paragraph",
      "contents": [
        {
          "content": "The device utilizes a 8 x 16 button grid with the X-axis representing the beat (from left to right) and the Y-axis representing a tone in a pentatonic harmonic scale. Users press on a button to activate it, and all notes that are activated in the same column (x-value) will output their associated y-value-based notes together, and the system will loop through and around the X-axis.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "75cd5378-d4e0-40ac-a331-d6210c58d599",
      "type": "paragraph",
      "contents": [
        {
          "content": "My main role in the group was as our team's lead programmer and wiring specialist. I was responsible for writing the main code that operated the button pads, audio output, and volume control. As such, I was also responsible for ensuring that the schematics of our sequencer were correctly wired such that voltages were controlled properly and signals from both the Teensy 5 chip and the Teensy Audio Shield we had used were sent to their proper peripherals.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "44202718-6548-4939-83b8-0fea34f29f47",
      "type": "heading_2",
      "contents": [
        {
          "content": "Main Materials",
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
      "id": "188a269b-69f4-499e-b11f-5643d872fd1c",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Adafruit 4x4 Button Pad (buttons)",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "ff65de21-da68-4e9f-bcbf-0572874e402f",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Wood (frame)",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "17791d0a-93fc-4464-80ad-579b99b0a66e",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Acrylic Sheet (frame)",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "5204bebb-4f7b-4f0f-9497-1f907a8ac316",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "3mm colored LED bulbs",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "d66870fc-db15-45b2-83c7-a998b573aa5d",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Teensy 5",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "7322315c-9c01-44fa-99ba-8dabda1e55b9",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Teensy Audio Shield",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "2519a3a3-18df-45dc-acd2-7e26b38cad9d",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Speaker",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "892776c4-aa5f-47de-b352-fd4dba3e49e6",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Power Bank (power supply)",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "ff33119b-2993-4949-8c31-a97d77445d1b",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Potentiometer (volume control)",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "e27a4e10-20a7-44f0-9b65-94c412ac91ce",
      "type": "heading_2",
      "contents": [
        {
          "content": "Teammates",
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
      "id": "fecdfa0e-86ad-4d42-93df-41af0d1b7255",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Annie Zhang",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell University [zz229@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "e388e1d2-db38-4d1f-8f73-88052897e7c5",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Boris Chan",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell University [bkc38@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "c0c15d97-eb2a-4a4a-a8e7-c90000cb51c6",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Cindy Wang",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " - Cornell University [cw653@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    }
  ]
}

const PentatonicData = {
	umbrella:"Hardware",
	key:"pentatonic",
	thumbnail:thumbnail,
  thumbnailStyle:{backgroundColor:"rgb(230,230,230)"},
  thumbnailImageStyle:{padding:16},
	title:"Pentatonic Tone Sequencer",
	url:"pentatonic",
	content:<PortfolioItemContent data={content} />
}

export default PentatonicData;