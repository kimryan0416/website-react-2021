import PortfolioItemContent from '../../PortfolioItemContent';
import { imol } from "../../../../downloads";
import { 
	thumbnail,
	button_mapping,
	environment,
	locomotion,
	palette,
	selection,
} from "./assets";

const content = {
  "header": {
    "id": "8791a2ff-9ccf-4087-a996-eb4da0754bb9",
    "title": "Method of Loci and Memory Recall in Virtual Reality - A User-Generated Exploration",
    "icon_url": thumbnail,
    "description": "A report on the efficacy of memory retention in VR.",
    "status": "Completed",
    "dates":[
      {
        header:null,
        dates:[
          {year:"2020",day:"Jan."},
          {year:"2020",day:"May 10"}
        ]
      }
    ],
    "latest_version": null,
    "external_links": [
      {
        "text": "Download PDF (1.6 mB)",
        "url": imol
      },
      {
        "text": "Downloadable Build & Files",
        "url": "https://drive.google.com/drive/folders/1YcBCD0vUy0Oj_lybbf-ZRvfHFcLavCcc?usp=sharing"
      },
      {
        "text": "Video Demonstration (YouTube)",
        "url": "https://youtu.be/AhC4hOWlfGY"
      }
    ],
    "platforms": [
      "Oculus Quest"
    ],
    "skills": [
      "C#/CSharp",
      "Unity",
      "Information Interfaces and Presentation",
      "User Experience (UX) Design",
      "User Interfaces (UI)",
      "Virtual Reality (VR)"
    ],
    "categories": [
      "Personal Projects",
      "Research Papers"
    ],
    "sub_category": "VR"
  },
  "content": [
    {
      "id": "76c5133b-6416-4859-86ca-ecc042c7253a",
      "type": "heading_2",
      "contents": [
        {
          "content": "Abstract",
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
      "id": "3a885dfa-0b45-4932-8eb5-29d4f5943b7b",
      "type": "paragraph",
      "contents": [
        {
          "content": "This paper proposes the idea that 3D object creation can work as a potential method to helping users apply the Method of Loci (MoL) in Virtual Reality (VR). In order to explore this alternative, the paper also introduces a prototype application of a content creator tool that can allow users to instantiate objects within a VR environment easily. Through experimentation with participants in a VR environment, key design issues surrounding this prototype have been made apparent, and thus this paper elaborates on how this content creator tool can be improved for future works. This paper also offers suggestions on how to improve the experiment procedure utilized in this paper and describes key aspects about the MoL technique in VR that should not be ignored.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "e81c0bad-1745-4e98-b3a9-4531261e0536",
      "type": "heading_2",
      "contents": [
        {
          "content": "Researchers",
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
      "id": "156f85bd-eb5e-478a-8624-5dcf1dcb3986",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Researcher:",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " Ryan Kim - Lead researcher",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "7d97c1c9-c41e-4a51-9ede-ca61e36aeaa5",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Advisor:",
          "href": null,
          "annotations": [
            "italic",
            "underline"
          ]
        },
        {
          "content": " Harald Haraldsson - Cornell Tech @ Cornell University [hh586@cornell.edu]",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "d48ba319-e268-4cc4-a914-c5b855811961",
      "type": "heading_2",
      "contents": [
        {
          "content": "Designing the Content Creation Tool",
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
      "id": "2bfdc37b-fb84-4a5c-858c-046b3f6d6e83",
      "type": "callout",
      "contents": [
        {
          "content": "This segment has been taken from the official report. Download the report here:",
          "href": null,
          "annotations": [
            "italic"
          ]
        },
        {
          "content": " [Download PDF (1.6 mB)]",
          "href": imol
          ,
          "annotations": [
            "bold"
          ]
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "c0c3229b-4803-477d-a100-ad0b75dcbbb8",
      "type": "divider",
      "contents": null,
      "children": [],
      "misc": null
    },
    {
      "id": "8c11df7c-6db3-4174-b5f2-8843d1a30d2f",
      "type": "paragraph",
      "contents": [
        {
          "content": "In order to test the efficacy of MoL and offer an experience that improves immersion in VR, a prototype system for content creation has been designed. The prototype system uses a combination of 2D and 3D interaction modalities to provide a user flow that feels comfortable to use. Both the prototype system and the virtual environment are developed with Unity3D and are playable on the Oculus Quest and Rift.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "034e6532-42de-4951-b9f2-3aef3a504974",
      "type": "heading_3",
      "contents": [
        {
          "content": "Interface Design",
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
      "id": "637a6580-a714-425c-b36a-03f47d438342",
      "type": "column_list",
      "contents": [
        {
          "id": "cd7b407a-21a2-48c4-a198-f4948f500717",
          "type": "column",
          "contents": [
            {
              "id": "126c4ccd-5012-4dc6-97c8-f8662065230e",
              "type": "paragraph",
              "contents": [
                {
                  "content": "The interface of this content creation system utilizes a combination of 2D palette menu and a 3D tooltip. This 2D menu is affixed to a virtual controller corresponding to the user's non-dominant hand, whereas the tooltip is affixed to the virtual controller corresponding to the user's dominant hand. The 2D menu consists of a palette of prefabricated objects, or \"prefabs,\" that the user can select by touching the tooltip of their dominant hand to the palette where the prefabricated object is represented. The palette itself allows for several key functions, such as allowing users to cycle through the list of prefabs available to the user and saving the status of the virtual world for later use should the user decide to leave the virtual world.",
                  "href": null,
                  "annotations": []
                }
              ],
              "children": [],
              "misc": null
            }
          ],
          "children": null,
          "misc": null
        },
        {
          "id": "1b84fee2-2f44-4fb0-84b1-3de53842db72",
          "type": "column",
          "contents": [
            {
              "id": "bc6025e5-605a-4bda-881a-906cb416486b",
              "type": "image",
              "contents": [
                {
                  "url": palette
                }
              ],
              "children": [],
              "misc": {
                "caption": [
                  {
                    "content": "Palette Screenshot",
                    "href": null,
                    "annotations": []
                  }
                ]
              }
            }
          ],
          "children": null,
          "misc": null
        }
      ],
      "children": null,
      "misc": null
    },
    {
      "id": "c4d0b068-2083-4248-82a3-6668e2c9b181",
      "type": "paragraph",
      "contents": [
        {
          "content": "The controllers of the Oculus Quest and Rift offer additional buttons and joysticks that are also mapped to other functions of the system. These functions include:",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "e36aa179-eb95-4fd8-bc94-c5b6ac7a11cb",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Continuous movement through the VR environment",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "96c46d41-aa6c-402a-bf9d-f938c79aba04",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Blink teleportation for users with low tolerance for vection",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "5659d6ea-9132-422d-a476-200ae46a1ffd",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Rotation of the player body at 22.5-degree intervals",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "c6c5447a-a679-4378-af96-112cfafe66eb",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Color picker toggle",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "6c3cdc15-31c7-4510-aa5a-19275e4ea8fd",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Scaling type toggle between the prefab's original scale and the scale defined\nby the difference between the user's initial tooltip position at the\nstart of the drag and the current position of the tooltip",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "5ace4766-9e0e-4df0-8f05-f937d4771028",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Deleting objects in the world",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "8c8ca9be-33e2-4abd-a550-38ff1db564a6",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Cycling through the palette list of prefabs",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "b1b1a7ec-3db6-4f10-9e91-a97374197b4f",
      "type": "heading_3",
      "contents": [
        {
          "content": "Object Instantiation and Manipulation",
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
      "id": "e9ef4f2d-72db-4486-85a9-cfcd36208faf",
      "type": "column_list",
      "contents": [
        {
          "id": "54916ef6-0add-4df6-a5e5-6bd3a4582282",
          "type": "column",
          "contents": [
            {
              "id": "7a1fa3cc-1927-485f-93e2-e8f404a4a491",
              "type": "paragraph",
              "contents": [
                {
                  "content": "To instantiate new objects into the world, the user must:",
                  "href": null,
                  "annotations": []
                }
              ],
              "children": [],
              "misc": null
            },
            {
              "id": "b021fab6-c319-48f7-a075-1207ebe8081e",
              "type": "numbered_list_item",
              "contents": [
                {
                  "content": "Select a prefab from the palette by touching the prefab with the tooltip.",
                  "href": null,
                  "annotations": []
                }
              ],
              "children": [],
              "misc": null
            },
            {
              "id": "15ecff8a-22e8-42fc-979d-3c5fddf45335",
              "type": "numbered_list_item",
              "contents": [
                {
                  "content": "Drag the tooltip while holding the index trigger to scale the object prior to placement in the virtual world.",
                  "href": null,
                  "annotations": []
                }
              ],
              "children": [],
              "misc": null
            }
          ],
          "children": null,
          "misc": null
        },
        {
          "id": "0d46a496-7986-464d-827b-14386561eb9e",
          "type": "column",
          "contents": [
            {
              "id": "bbbcbd95-3980-408f-972f-d16b25817508",
              "type": "image",
              "contents": [
                {
                  "url": selection
                }
              ],
              "children": [],
              "misc": {
                "caption": [
                  {
                    "content": "Selection Screenshot",
                    "href": null,
                    "annotations": []
                  }
                ]
              }
            }
          ],
          "children": null,
          "misc": null
        }
      ],
      "children": null,
      "misc": null
    },
    {
      "id": "f93f1e3e-50b7-4873-8be2-d8e2cf16863b",
      "type": "paragraph",
      "contents": [
        {
          "content": "Once objects have been instantiated in the world, the user is allowed to manipulate the position and rotation of the object via a grab metaphor with either controller as well as re-color the object via joystick toggle on the dominant hand's controller. Objects cannot be rescaled once they are instantiated in the world. Objects can also be deleted or copied, the functions of which are mapped to buttons on the dominant hand's controller.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "629b693f-cf51-4c3e-b553-dba474c5e7d0",
      "type": "image",
      "contents": [
        {
          "url": button_mapping
        }
      ],
      "children": [],
      "misc": {
        "caption": [
          {
            "content": "Button Mapping Controls",
            "href": null,
            "annotations": []
          }
        ]
      }
    },
    {
      "id": "981fd928-fc6a-4f9e-9a24-b05dbe94184f",
      "type": "heading_3",
      "contents": [
        {
          "content": "Locomotion",
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
      "id": "4c51acad-39b3-4123-a4cb-443e3468c983",
      "type": "column_list",
      "contents": [
        {
          "id": "de9d51ae-8538-4acc-9b3d-c45f232177ca",
          "type": "column",
          "contents": [
            {
              "id": "d000bb9b-4df9-4aff-9e6b-24da15917c01",
              "type": "paragraph",
              "contents": [
                {
                  "content": "Locomotion within the virtual environment is divided into two subcategories: positioning and rotation. The player avatar in the virtual environment follows the position of the headset using the headset's 6-DOF sensors. Therefore, users can adjust their position in the virtual environment either by moving physically in real-world space or by using the joystick on the non-dominant controller for continuous locomotion. Players can also move around the virtual environment via blink teleportation, which reduces motion sickness from vection as well as reduces the time necessary to navigate across the virtual environment, which was a problem in previous studies involving MoL.",
                  "href": null,
                  "annotations": []
                }
              ],
              "children": [],
              "misc": null
            }
          ],
          "children": null,
          "misc": null
        },
        {
          "id": "55dfe75b-9770-4f5e-8a53-75329c79dfbd",
          "type": "column",
          "contents": [
            {
              "id": "7e9e7195-908b-4bff-801f-6366235c5365",
              "type": "image",
              "contents": [
                {
                  "url": locomotion
                }
              ],
              "children": [],
              "misc": {
                "caption": [
                  {
                    "content": "Locomotion Screenshot",
                    "href": null,
                    "annotations": []
                  }
                ]
              }
            }
          ],
          "children": null,
          "misc": null
        }
      ],
      "children": null,
      "misc": null
    },
    {
      "id": "d7b72510-5f6e-4531-9c49-538ba0911bf6",
      "type": "heading_3",
      "contents": [
        {
          "content": "Environment",
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
      "id": "a6fc826e-9c5b-4b35-a85f-986644ba2a3a",
      "type": "column_list",
      "contents": [
        {
          "id": "07e9de8f-b5b1-4e36-a4fc-245b254b7594",
          "type": "column",
          "contents": [
            {
              "id": "98b4fe99-301c-44dc-83b4-6a7abf9ca21c",
              "type": "paragraph",
              "contents": [
                {
                  "content": "The virtual environment was a 3D rendering of Cornell Tech’s MakerLab. The virtual environment is populated with renderings of furniture commonly found in the real-world MakerLab such as chairs and tables, and the virtual environment attempts to replicate lighting conditions typically present in the real-world MakerLab. Colliders that match the shape and orientation of the walls, floor, and ceiling prohibit the player avatar from moving outside the test area. The virtual environment was built with and edited using Unity3D, and the game environment runs with Unity's proprietary game engine alongside Oculus' OVR Implementations SDK for VR support.",
                  "href": null,
                  "annotations": []
                }
              ],
              "children": [],
              "misc": null
            }
          ],
          "children": null,
          "misc": null
        },
        {
          "id": "5bbf6a5c-8769-4818-85ba-0444310aa651",
          "type": "column",
          "contents": [
            {
              "id": "76460395-bcb8-4373-904b-c5cfde2c206c",
              "type": "image",
              "contents": [
                {
                  "url": environment
                }
              ],
              "children": [],
              "misc": {
                "caption": [
                  {
                    "content": "VR Environment Screenshot",
                    "href": null,
                    "annotations": []
                  }
                ]
              }
            }
          ],
          "children": null,
          "misc": null
        }
      ],
      "children": null,
      "misc": null
    }
  ]
}



/*
<li><ExtURL href={imol}>Download PDF (1.6 mB)</ExtURL></li>
<ExtURL href={imol}><Button>Download PDF (1.6 mB)</Button></ExtURL>

<img className="PortfolioContentImage" src={palette} alt="Palette Screenshot" />
<img className="PortfolioContentImage" src={selection} alt="Selection Screenshot" />
<img className="PortfolioContentImage" src={button_mapping} alt="Button Mapping Controls" />
<img className="PortfolioContentImage" src={locomotion} alt="Locomotion Screenshot" />
<img className="PortfolioContentImage" src={environment} alt="VR Environment Screenshot" />
*/

const MoLData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"imol",
	thumbnail:thumbnail,
	title:"Method of Loci and Memory Recall in Virtual Reality - A User- Generated Exploration",
	url:"imol",
	content:<PortfolioItemContent data={content} />
}

export default MoLData;