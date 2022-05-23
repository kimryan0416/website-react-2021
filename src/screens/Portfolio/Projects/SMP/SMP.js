import PortfolioItemContent from '../../PortfolioItemContent';
import { thumbnail, ffmp } from "./assets";

const content = {
  "header": {
    "id": "eac88aeb-3cbf-4959-8174-f1d0b3bd0fd1",
    "title": "Simple Music Player (SMP)",
    "icon_url": thumbnail,
    "description": "A browser-based media player for personal use.",
    "status": "On-Hold",
    "dates":[
      {
        header:null,
        dates:[
          {year:'2017',day:'Aug.'},
          {year:'2017',day:'Dec.'}
        ]
      }
    ],
    "latest_version": "1.0.1",
    "external_links": [
      {
        "text": "Downloadable Build & Files",
        "url": "https://github.com/kimryan0416/simpleMusicPlayer"
      }
    ],
    "platforms": [],
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQLite",
      "React Native"
    ],
    "categories": [
      "Personal Projects"
    ],
    "sub_category": "Web Projects"
  },
  "content": [
    {
      "id": "56d7cb71-fde4-4ce1-bcd9-6064792fe84f",
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
      "id": "37be4c82-38f2-4f79-86b8-6107ece5825c",
      "type": "paragraph",
      "contents": [
        {
          "content": "The Simple Music Player, or \"SMP\" for short, is a fully functional HTML/JavaScript/PHP music player that utilizes a mixture of XML requests and SQLite queries to allow users to play audio and video from their browser. With the help of a SQLite database to store metadata information on each piece of media contained within the music player, data is can be easily accessed without altering the original metadata of all media files.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "fe583ee8-aad4-42ed-9231-0746de081e0c",
      "type": "paragraph",
      "contents": [
        {
          "content": "This project has given the opportunity to investigate how file uploads are processed both through AJAX and XMLHttpRequests(), as well as how JavaScript can be manipulated into playing audio and video. Investigations into how to mimic inheritance within JavaScript have also been permitted based on how the SMP had been designed.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "71ca41d6-ad09-4561-86c1-9b850aafa134",
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
      "id": "3a454b7e-beea-4058-b759-bb56b8822f0d",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Play audio (mp3) and video (mp4, YouTube embed) media",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "905d36ae-0416-452a-aa23-66aa34953793",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Adjust looping and shuffling of albums",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "5cfcd857-d69d-4b8e-8837-d7733c88ef81",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Autoscrolling lyrics",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "9ad0ea76-16a7-46a0-b27e-60c2c7c715db",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Media Info Editing, including album art and adding dynamic lyrics",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "9eb2c923-c9c4-44b1-accc-670e557b08f3",
      "type": "bulleted_list_item",
      "contents": [
        {
          "content": "Mobile Version in the works",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "956e897a-ef23-48b4-8d57-e936b3006593",
      "type": "heading_2",
      "contents": [
        {
          "content": "Features",
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
      "id": "f8441543-5220-4263-a8f7-d0f474014b52",
      "type": "paragraph",
      "contents": [
        {
          "content": "The SMP can play audio files, video files, and embedded YouTube videos and allows for dynamic subtitles if the user should want so. Additionally, users can add or delete media from the SMP as well, and with the use of a PHP library called the getID3, metadata can be extracted from media \nfiles and stored within the aforementioned database, saving users the effort from inputting all the metadata on their own. Should the need arise, users can also edit details of a piece of media, including uploading specific artwork for that media or use an already-existing artwork already added to the database by other media with artwork.",
          "href": null,
          "annotations": []
        }
      ],
      "children": [],
      "misc": null
    },
    {
      "id": "2cefa6a7-3852-47d2-9c34-3c5dc23c1772",
      "type": "heading_2",
      "contents": [
        {
          "content": "Deprecated Prototype: The Full-Function Music Player (FFMP)",
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
      "id": "8756943f-adc8-4dd8-a8ba-eb1b368392c4",
      "type": "column_list",
      "contents": [
        {
          "id": "322c8dff-f0d7-4f66-ad28-de3da0138415",
          "type": "column",
          "contents": [
            {
              "id": "29aeadcd-9592-4784-953e-41f99f522b84",
              "type": "paragraph",
              "contents": [
                {
                  "content": "The Full-Function Music Player, or \"FFMP\", was the basis for the creation of the SMP, which retains much of the same framework as the FFMP with optimized code and additional improvements.",
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
          "id": "d546ecfe-4152-4f0d-8ea2-9fd6cb9d22cb",
          "type": "column",
          "contents": [
            {
              "id": "c56d906e-0ac9-4c69-a8c7-f3691cb5ecee",
              "type": "image",
              "contents": [
                {
                  "url": ffmp
                }
              ],
              "children": [],
              "misc": {
                "caption": [
                  {
                    "content": "Screenshot of the Full-Function Music Player's UI",
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
      "id": "b302cdaf-a8b1-40d3-b5de-685ac18bbd7e",
      "type": "paragraph",
      "contents": [
        {
          "content": "The FFMP originally aimed to replicate the functionality of other public music players such as iTunes and Spotify. Users are given the ability to upload individual song files and categorical tags prior to upload (i.e. song title, artist, album artist). Songs can be divided between \"Songs\", \"Artists\", \"Albums\", and \"Album Artists\" (\"Playlists\" are not available in this version), which allows for organizing audio based on user preference.",
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
<img className="PortfolioContentImage" src={ffmp} alt="Screenshot of the Full-Function Music Player's UI" />
*/

const SMPData = {
	umbrella:"Web Projects",
	key:"smp",
	thumbnail:thumbnail,
	title:"Simple Music Player (SMP)",
	url:"smp",
	content:<PortfolioItemContent data={content} />
}

export default SMPData;