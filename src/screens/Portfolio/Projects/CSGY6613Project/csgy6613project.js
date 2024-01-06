import PortfolioItemContent from '../../PortfolioItemContent';
//import { siggraph2023 } from "../../../../downloads";
import { 
	thumbnail,
} from "./assets";

const content = {
  "header": {
    "title": "Patent Acceptance Predictor & Sentiment Analysis",
    "icon_url": thumbnail,
    "description": "A HuggingFace-Streamlit application for sentiment analysis and US patent acceptance prediction. Project for NYU CS-GY-6613: Artificial Intelligence - Spring 2023",
    "status": "Completed",
    "dates":[
      {dates:[{year:'2023',day:'Mar 26'},{year:'2023',day:'Apr 26'}]}
    ],
    "latest_version": "1.0",
    "external_links": [
      {
        "text": "Online HuggingFace Space Demo",
        "url": "https://huggingface.co/spaces/rk2546/csgy-6613-project-rk2546-backup"
      },
      {
        "text": "[PRIVATE] Github Repo",
        "url": "https://github.com/cs-gy-6613-assignments/cs-gy-6613-project-rk2546-backup"
      }
    ],
    "platforms": [
      "HuggingFace",
      "Streamlit"
    ],
    "Languages": [
      "Python",
    ],
    "categories": [
      "Natural Langauge Processing"
    ],
    //"sub_category": "Natural Language Processing"
  },
  "content": [
    {
      id:"intro_columns",
      type:"column_list",
      contents:[
        {
          id:"intro_column_1",
          type:"column",
          contents:[
            {
              id:"intro_video",
              type:"youtube_embed",
              contents:[{
                yt_src:"https://www.youtube.com/embed/csSGBwIE7nk",
                yt_height:400
              }]
            }
          ]
        },
        {
          id:"intro_column_2",
          type:"column",
          contents:[
            {
              id:"intro_1",
              type:"paragraph",
              contents:["If you're interested in NLP, here's a comprehensive example of just that!"]
            },
            {
              id:"intro_2",
              type:"paragraph",
              contents:[
                "As the name implies, our app performs two core functions: ",
                {content:"Sentiment Analysis",annotations:["bold","blue"]},
                " and ",
                {content:"Patent Acceptance Prediction",annotations:["bold","blue"]},
                ". Initially set as milestones for NYU's ",
                {content:"CSGY-6613: Artifiical Intelligence",annotations:["italic"]},
                " Spring 2023 course, this app is openly available and hosted by ",
                {content:"HuggingFace",href:"https://huggingface.co/"},
                "."
              ]
            },
            {
              id:"intro_3",
              type:"paragraph",
              contents:[
                "Don't know if your text might evoke certain emotions? Try out our ",
                {content:"Sentiment Analysis",annotations:["bold","blue"]},
                " tool. Determine whether your text appears to be positive, negative, or more by selecting different emotion models in the dropdown option provided."
              ]
            },
            {
              id:"intro_4",
              type:"paragraph",
              contents:[
                "Alternative, are you trying to file a patent? Use our ",
                {content:"Patent Acceptance Prediction",annotations:["bold","blue"]},
                " tool to check your changes of being accepted. Just enter your patent's ",
                {content:"Abstract",annotations:["italic"]},
                " and list of ",
                {content:"Claims",annotations:["italic"]},
                " and see how your abstract scores."
              ]
            },
          ]
        }
      ]
    },
    {
      id:"embedding",
      type:"video_embed",
      contents:[{
        src:"https://rk2546-csgy-6613-project-rk2546-backup.hf.space",
        width:"850",
        height:1000,
        frameborder:"0",
        style:{"border-radius":"16px"}
      }]
    },
    {
      id:"dividing",
      type:"divider"
    },
    {
      id:1,
      type:"heading_1",
      contents:["Code Breakdown",],
    },
    {
      id:2,
      type:"paragraph",
      contents:["The USPTO application is divided into several directories. Overall, the important files are present in the application as such:"]
    },
    {
      id:3,
      type:"code",
      contents:["- data/\n  - train.json\n  - val.json\n- src/\n  - main.py\n  - train.ipynb\n  - val.ipynb"],
      misc:{caption:"",}
    },
    {
      id:4,
      type:"paragraph",
      contents:[
        "Both ",
        {content:"train.json",annotations:["code"]},
        " and ",
        {content:"val.json",annotations:["code"]},
        " contain the original USPTO data, sized down to contain only the relevant data from each recorded patent and split between training and validation data. The validation data ",
        {content:"val.json",annotations:["code"]},
        " is used in the online USPTO application as a set of pre-set patents that a user can select when using the USPTO patent prediction function. ",
        "That, and the ",
        {content:"val.ipynb",annotations:['code']},
        " file was used to validate the model's accuracy."
      ]
    },
    {
      id:5,
      type:"paragraph",
      contents:[
        "The primary code back-end is stored in ",
        {content:"main.py",annotations:["code"]},
        " which runs the application on the HuggingFace space UI. The application uses ",
        {content:"Streamlit",annotations:["bold"]},
        " to render UI elements on the screen. All models run off of Transformers and Tokenizers from ",
        {content:"HuggingFace",annotations:["bold"]},
        "."
      ]
    },
    {
      id:6,
      type:"paragraph",
      contents:[
        "The application has two features: Sentiment Analysis (for Milestone #2) and USPTO Patent Acceptance Prediction (Milestone #3). Both run on ",
        {content:"main.py",annotations:["bold"]},
        " Sentiment Analysis relies on pre-trained ",
        {content:"models",href:"https://huggingface.co/models"},
        " from HuggingFace's public ",
        {content:"datasets",href:"https://huggingface.co/datasets"},
        " - particularly 4 models:"
      ]
    },
    {
      id:7,
      type:"bulleted_list_item",
      contents:[
        {content:"cardiffnlp/twitter-roberta-base-sentiment",href:"https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment"},
      ]
    },
    {
      id:8,
      type:"bulleted_list_item",
      contents:[
        {content:"finiteautomata/beto-sentiment-analysis",href:"https://huggingface.co/finiteautomata/beto-sentiment-analysis"}
      ]
    },
    {
      id:9,
      type:"bulleted_list_item",
      contents:[
        {content:"bhadresh-savani/distilbert-base-uncased-emotion",href:"https://huggingface.co/bhadresh-savani/distilbert-base-uncased-emotion"}
      ]
    },
    {
      id:10,
      type:"bulleted_list_item",
      contents:[
        {content:"siebert/sentiment-roberta-large-english",href:"https://huggingface.co/siebert/sentiment-roberta-large-english"}
      ]
    },
    {
      id:11,
      type:"paragraph",
      contents:[
        "The Patent Acceptance Prediction uses two fine-tuned models, which are built off of a pre-existing model named ",
        {content:"distilbert-base-uncased",href:"https://huggingface.co/distilbert-base-uncased"},
        " and fine-tuned off of the USPTO dataset. The tokenizer used to parse text uses the same ",
        {content:"distilbert-base-uncased",href:"https://huggingface.co/distilbert-base-uncased"},
        " model but is left unmodified."
      ]
    },
    {
      id:12,
      type:"heading_2",
      contents:["Shared Code"]
    },
    {
      id:13,
      type:"paragraph",
      contents:["In this section, I describe some code back-end used universally across both the Sentiment Analysis and Patent Accceptance Prediction functions."]
    },
    {
      id:14,
      type:"paragraph",
      contents:[
        "Starting from ",
        {content:"main.py",annotations:["bold"]},
        ", we load in the necessary tokenizers and pipelines needed to run the model."
      ]
    },
    {
      id:15,
      type:"code",
      contents:["import streamlit as st\nfrom transformers import TextClassificationPipeline, pipeline\nfrom transformers import AutoTokenizer, AutoModelForSequenceClassification, DistilBertTokenizerFast, DistilBertForSequenceClassification"],
      misc:{caption:"",}
    },
    {
      id:16,
      type:"paragraph",
      contents:[
        "These transformers are crucial to the functionality of both Sentiment Analysis and Patent Acceptance Prediction. Particularly, Sentiment Analysis uses ",
        {content:"AutoModelForSequenceClassification",annotations:["code"]},
        " as our model class, ",
        {content:"AutoTokenizer",annotations:["code"]},
        " as our string pre-processor, and ",
        {content:"pipeline",annoations:["code"]},
        " to combine the two. Patent Acceptance Prediction uses ",
        {content:"DistilBertForSequenceClassification",annotations:["code"]},
        " as our model class, ",
        {content:"DistilBertTokenizerFast",annotations:["code"]},
        " as our string pre-processor, and ",
        {content:"TextClassificationPipeline",annotations:["code"]},
        " to combine the two."
      ]
    },
    {
      id:17,
      type:"paragraph",
      contents:[
        "Because everything runs on one ",
        {content:"main.py",annotations:["code"]},
        " page and both the Sentiment Analysis and Patent Acceptance Prediction function similarly, I developed a custom python class called ",
        {content:"ModelImplementation",annotations:["code"]},
        " that's used by both and allows for switching between different models:"
      ]
    },
    {
      id:"17_code",
      type:"code",
      contents:[
        "class ModelImplementation(object):",
        "\n  def __init__(",
        "\n    self,",
        "\n    transformer_model_name,",
        "\n    model_transformer,", 
        "\n    tokenizer_model_name,",
        "\n    tokenizer_func,",
        "\n    pipeline_func,", 
        "\n    parser_func,",
        "\n    classifier_args={},",
        "\n    placeholders=[\"\"]",
        "\n  ):",
        "\n    self.transformer_model_name = transformer_model_name",
        "\n    self.tokenizer_model_name = tokenizer_model_name",
        "\n    self.placeholders = placeholders",
        "\n",
        "\n    self.model = model_transformer.from_pretrained(self.transformer_model_name)",
        "\n    self.tokenizer = tokenizer_func.from_pretrained(self.tokenizer_model_name)",
        "\n    self.classifier = pipeline_func(model=self.model, tokenizer=self.tokenizer, padding=True, truncation=True, **classifier_args)",
        "\n    self.parser = parser_func",
        "\n",
        "\n  def predict(self, val):",
        "\n    result = self.classifier(val)",
        "\n    return self.parser(self, result)"
      ],
      misc:{caption:""}
    },
    {
      id:"17_after",
      type:"paragraph",
      contents:[
        "The main idea is that for every model that's needed, we create a new instance of this class. ",
        "In each case, we can store a reference to the tokenizer, model, and pipeline; ",
        "the model will then use that tokenizer, model, and pipeline when making predictions. ",
        "If the output of a model needs to be curated in some way (ex. we need to post-process the output of a model so that it's more human-readable), ",
        "we can also pass a custom method alongside the other parameters too. This is useful when we are switching between models in the ",
        "Sentiment Analysis page or between the Sentiment Analysis and Patent Acceptance Prediction page - we merely have to create or modify ",
        "an instance of the ",
        {content:"ModelImplementation",annotations:["code"]},
        " class with the proper tokenizer, model, pipeline, and post-process method (if needed). ",
        "Placeholder text for any inputs can also be stored as well in an array."
      ]
    },
    {
      id:18,
      type:"paragraph",
      contents:["The Sentiment Analysis and Patent Acceptance Prediction pages are both stored on one interface, with a tab menu (via ",
      {content:"Streamlit",annotations:["bold"]},
      "'s ",
      {content:"st.tabs",annotations:["code"]},
      ") allowing a user to switch between the two."]
    },
    {
      id:19,
      type:"code",
      contents:[
        "# Title",
        "\nst.title(\"CSGY-6613 Project\")",
        "\n# Subtitle",
        "\nst.markdown(\"_**Ryan Kim (rk2546)**_\")",
        "\n",
        "\nsentimentTab, patentTab = st.tabs([",
        "\n  \"Emotion Analysis [Milestone #2]\",",
        "\n  \"Patent Prediction [Milestone #3]\"",
        "\n])",
        "\n",
        "\nwith sentimentTab:",
        "\n  st.subheader(\"Sentiment Analysis\")",
        "\n  // ...",
        "\n",
        "\nwith patentTab:",
        "\n  st.subheader(\"USPTO Patent Evaluation\")",
        "\n  // ..."
      ],
      misc:{caption:""}
    },
    {
      id:23,
      type:"heading_2",
      contents:["Sentiment Analysis"]
    },
    {
      id:24,
      type:"paragraph",
      contents:[
        "Sentiment Analysis is relatively simple. It uses the ",
        {content:"ModelImplementation",annotations:["code"]},
        " class detailed above to switch between four pre-existing HuggingFace models for the sentiment analysis:"
      ]
    },
    {
      id:25,
      type:"bulleted_list_item",
      contents:[
        {content:"cardiffnlp/twitter-roberta-base-sentiment",href:"https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment"},
      ]
    },
    {
      id:26,
      type:"bulleted_list_item",
      contents:[
        {content:"finiteautomata/beto-sentiment-analysis",href:"https://huggingface.co/finiteautomata/beto-sentiment-analysis"}
      ]
    },
    {
      id:27,
      type:"bulleted_list_item",
      contents:[
        {content:"bhadresh-savani/distilbert-base-uncased-emotion",href:"https://huggingface.co/bhadresh-savani/distilbert-base-uncased-emotion"}
      ]
    },
    {
      id:28,
      type:"bulleted_list_item",
      contents:[
        {content:"siebert/sentiment-roberta-large-english",href:"https://huggingface.co/siebert/sentiment-roberta-large-english"}
      ]
    },
    {
      id:29,
      type:"paragraph",
      contents:[
        "A method called ",
        {content:"ParseEmotionOutput()",annotations:["code"]},
        " is used to process labels outputted by the ",
        {content:"cardiffnlp/twitter-roberta-base-sentiment",href:"https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment"},
        " model in particular. Upon loading, if a model hasn't been instantiated yet, the page will create a new model with a pre-set model name and cache it for later use:"
      ]
    },
    {
      id:30,
      type:"code",
      contents:[
        "def emotion_model_change():",
        "\n  st.session_state.emotion_model = ModelImplementation(",
        "\n    st.session_state.emotion_model_name,",
        "\n    AutoModelForSequenceClassification,",
        "\n    st.session_state.emotion_model_name,",
        "\n    AutoTokenizer,",
        "\n    pipeline,",
        "\n    ParseEmotionOutput,",
        "\n    classifier_args={ \"task\" : \"sentiment-analysis\" },",
        "\n    placeholders=[\"@AmericanAir just landed - 3hours Late Flight - and now we need to wait TWENTY MORE MINUTES for a gate! I have patience but none for incompetence.\"]",
        "\n  )",
        "\n",
        "\n  if \"emotion_model_name\" not in st.session_state:",
        "\n    st.session_state.emotion_model_name = \"cardiffnlp/twitter-roberta-base-sentiment\"",
        "\n    emotion_model_change()"
      ],
      misc:{caption:""}
    },
    {
      id:31,
      type:"paragraph",
      contents:[
        "The method ",
        {content:"emotion_model_change()",annotations:["code"]},
        " can be called to switch between different models, based on the session-saved ",
        {content:"emotion_model_name",annotations:["code"]},
        " value. By default, the ",
        {content:"cardiffnlp/twitter-roberta-base-sentiment",href:"https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment"},
        " model is used. To switch between models, we use a ",
        {content:"Streamlit",annotations:["bold"]},
        " ",
        {content:"selectbox",annotations:["code"]},
        " module:"
      ]
    },
    {
      id:32,
      type:"code",
      contents:[
        "model_option = st.selectbox(",
        "\n  \"What sentiment analysis model do you want to use? NOTE: Lag may occur when loading a new model!\",",
        "\n  emotion_model_names,",
        "\n  on_change=emotion_model_change,",
        "\n  key=\"emotion_model_name\"",
        "\n)",
        "\n",
        "\nform = st.form(key='sentiment-analysis-form')",
        "\ntext_input = form.text_area(",
        "\n  \"Enter some text for sentiment analysis! If you just want to test it out without entering anything, just press the 'Submit' button and the model will look at the placeholder.\",", 
        "\n  placeholder=st.session_state.emotion_model.placeholders[0]",
        "\n)",
        "\nsubmit = form.form_submit_button('Submit')'"
      ],
      misc:{caption:""}
    },
    {
      id:33,
      type:"paragraph",
      contents:[
        "When the page loads, a placeholder from the current model is printed inside a ",
        {content:"Streamlit",annotations:["bold"]},
        " ",
        {content:"text_area",annotations:["code"]},
        " module. When the user clicks on the ",
        {content:"form_submit_button",annotations:["code"]},
        " button, the app will use whatever model is currently cached to generate output predictions. ",
        "If no user input was provided, the placeholder value is passed as the input instead."
      ]
    },
    {
      id:34,
      type:"code",
      contents:[
        "if submit:",
        "\n  if text_input is None or len(text_input.strip()) == 0:",
        "\n    to_eval = st.session_state.emotion_model.placeholders[0]",
        "\n  else:",
        "\n    to_eval = text_input.strip()",
        "\n  label, score, output_func = st.session_state.emotion_model.predict(to_eval)",
        "\n  output_func(\"**{}**: {}\".format(label,score))"
      ],
      misc:{caption:""}
    },
    {
      id:35,
      type:"heading_2",
      contents:["USPTO Patent Acceptance Prediction"]
    },
    {
      id:36,
      type:"paragraph",
      contents:[
        "The back-end for the USPTO Patent Acceptance Prediction is similar to that of ",
        {content:"Sentiment Analysis",annotations:["bold"]},
        ", but with some major differences."
      ]
    },
    {
      id:37,
      type:"paragraph",
      contents:["Instead of switching between for pre-trained HuggingFace models, we use two fine-tuned models. These models are available online:"]
    },
    {
      id:38,
      type:"bulleted_list_item",
      contents:[
        {content:"rk2546/uspto-patents-abstracts",href:"https://huggingface.co/rk2546/uspto-patents-abstracts"}
      ]
    },
    {
      id:39,
      type:"bulleted_list_item",
      contents:[
        {content:"rk2546/uspto-patents-claims",href:"https://huggingface.co/rk2546/uspto-patents-claims"}
      ]
    },
    {
      id:40,
      type:"paragraph",
      contents:[
        "and are built off of a pre-existing model named ",
        {content:"distilbert-base-uncased",href:"https://huggingface.co/distilbert-base-uncased"},
        ". They are fine-tuned off of the USPTO dataset. The tokenizer used to parse text uses the same ",
        {content:"distilbert-base-uncased",href:"https://huggingface.co/distilbert-base-uncased"},
        " model but is left unmodified."
      ]
    },
    {
      id:41,
      type:"code",
      contents:[
        "if \"patent_data\" not in st.session_state:",
        "\n  f = open('./data/val.json')",
        "\n  valData = json.load(f)",
        "\n  f.close()",
        "\n",
        "\n  patent_data = {}",
        "\n  for num, label, abstract, claim in zip(valData[\"patent_numbers\"],valData[\"labels\"], valData[\"abstracts\"], valData[\"claims\"]):",
        "\n    patent_data[num] = {\"patent_number\":num,\"label\":label,\"abstract\":abstract,\"claim\":claim}",
        "\n",
        "\n  st.session_state.patent_data = patent_data",
        "\n  st.session_state.patent_num = list(patent_data.keys())[0]",
        "\n  st.session_state.weight = 0.5",
        "\n  st.session_state.patent_abstract_model = ModelImplementation(",
        "\n    'rk2546/uspto-patents-abstracts',",
        "\n    DistilBertForSequenceClassification,",
        "\n    'distilbert-base-uncased',",
        "\n    DistilBertTokenizerFast,",
        "\n    TextClassificationPipeline,",
        "\n    ParsePatentOutput,",
        "\n    classifier_args={\"return_all_scores\":True},",
        "\n  )",
        "\n  print(\"Patent abstracts model initialized\")",
        "\n  st.session_state.patent_claim_model = ModelImplementation(",
        "\n    'rk2546/uspto-patents-claims',",
        "\n    DistilBertForSequenceClassification,",
        "\n    'distilbert-base-uncased',",
        "\n     DistilBertTokenizerFast,",
        "\n    TextClassificationPipeline,",
        "\n    ParsePatentOutput,",
        "\n    classifier_args={\"return_all_scores\":True},",
        "\n  )",
        "\n  print(\"Patent claims model initialized\")"
      ],
      misc:{caption:""}
    },
    {
      id:42,
      type:"paragraph",
      contents:[
        "In addition, instead of the user selecting a particular model to use, instead the interface allows for two separate inputs - ",
        "one for an Abstract draft and another for a Claims draft. These fields can be pre-populated using an ",
        {content:"st.selectbox",annotations:["code"]},
        " that, when selected, pre-fills the two inputs with examples from ",
        {content:"val.json",annotations:["code"]},
        ":"
      ]
    },
    {
      id:43,
      type:"code",
      contents:[
        "patent_select_list = list(st.session_state.patent_data.keys())",
        "\npatent_index_option = st.selectbox(",
        "\n  \"Want to pre-populate with an existing patent? Select the index number of  below.\",",
        "\n  patent_select_list,",
        "\n  key=\"patent_num\",",
        "\n)",
        "\n",
        "\n//...",
        "\n",
        "\nwith st.form(key='patent-form'):",
        "\n  col1, col2 = st.columns(2)",
        "\n  with col1:",
        "\n    abstract_input = st.text_area(",
        "\n      \"Enter the abstract of the patent below\",", 
        "\n      placeholder=st.session_state.patent_data[st.session_state.patent_num][\"abstract\"],",
        "\n      height=400",
        "\n    )",
        "\n  with col2:",
        "\n    claim_input = st.text_area(",
        "\n      \"Enter the claims of the patent below\",", 
        "\n       placeholder=st.session_state.patent_data[st.session_state.patent_num][\"claim\"],",
        "\n       height=400",
        "\n    )",
        "\n  weight_val = st.slider(",
        "\n    \"How much do the abstract and claims weight when aggregating a total softmax score?\",",
        "\n    min_value=-1.0,",
        "\n    max_value=1.0,",
        "\n    value=0.5,",
        "\n  )",
        "\n  submit = st.form_submit_button('Submit')"
      ],
      misc:{caption:""}
    },
    {
      id:44,
      type:"paragraph",
      contents:[
        "One unique addition is a slider ",
        {content:"st.slider",annotations:["code"]},
        " that lets the user tune how much the two models' softmax outputs are combined. This way, some customizability is allowed - if the user wants only an Abstract to be used, then the weight can be adjusted to bias the Abstract model's output completely."
      ]
    },
    {
      id:45,
      type:"heading_3",
      contents:["Training the USPTO Patent Acceptance Predictor"]
    },
    {
      id:46,
      type:"paragraph",
      contents:[
        "While the Sentiment Analysis function does not need to be trained, the model for the patent prediction needs to be fine-tuned from an existing model. The scripts that do so are available in both ",
        {content:"src/train.py",annotations:["code"]},
        " and ",
        {content:"src/patent_train.ipynb",annotations:["code"]},
        ", with the latter being a more user-readable option. ",
        {content:"NOTE:",annotations:["bold"]},
        " the ",
        {content:"src/train.py",annotations:["code"]},
        " implementation is a tad outdated. Please rely on ",
        {content:"src/patent_train.ipynb",annotations:["code"]},
        " if you want to try for yourself."
      ]
    },
    {
      id:47,
      type:"paragraph",
      contents:["The general idea was to divide the training into steps:"]
    },
    {
      id:48,
      type:"numbered_list_item",
      contents:["Parse only the necessary data out from the raw USPTO data,"]
    },
    {
      id:49,
      type:"numbered_list_item",
      contents:["Separate the data into training and validation data"]
    },
    {
      id:50,
      type:"numbered_list_item",
      contents:["Fine-tune an existing HuggingFace model into two separate models, each of which separately perform predictions onto abstracts and claims respectively."]
    },
    {
      id:51,
      type:"numbered_list_item",
      contents:["Publish the two models onto HuggingFace to make the models easily accessible."]
    },
    {
      id:52,
      type:"paragraph",
      contents:["The only data columns parsed from the original USPTO data were:"]
    },
    {
      id:53,
      type:"bulleted_list_item",
      contents:["\"patent_number\" <- Unique identifier"]
    },
    {
      id:54,
      type:"bulleted_list_item",
      contents:["\"abstract\" <- Input #1"]
    },
    {
      id:55,
      type:"bulleted_list_item",
      contents:["\"claims\" <- Input #2"]
    },
    {
      id:56,
      type:"bulleted_list_item",
      contents:["\"decision\" <- Output Labels"]
    },
    {
      id:57,
      type:"paragraph",
      contents:[
        "We also filter rows such that the values in the \"decision\" column only consist of \"ACCEPTED\" or \"REJECTED\"; these values are then coded into ",
        {content:"1",annotations:["code"]},
        " and ",
        {content:"0",annotations:["code"]},
        " respectively for easier data processing. Beyond splitting the data into training and validation data, we also split each into two sub-datasets - one consisting of Abstracts, and another for Claims. No pre-processing was performed further."
      ]
    },
    {
      id:58,
      type:"paragraph",
      contents:["During fine-tuning, we use a custom class that will be used by HuggingFace's various transformers:"]
    },
    {
      id:59,
      type:"code",
      contents:[
        "class USPTODataset(Dataset):",
        "\n  def __init__(self, encodings, labels):",
        "\n    self.encodings = encodings",
        "\n    self.labels = labels",
        "\n  def __getitem__(self, idx):",
        "\n    item = {key: torch.tensor(val[idx]) for key, val in self.encodings.items()}",
        "\n    item['labels'] = torch.tensor(self.labels[idx])",
        "\n    return item",
        "\n  def __len__(self):",
        "\n    return len(self.labels)"
      ],
      misc:{caption:""}
    },
    {
      id:60,
      type:"paragraph",
      contents:[
        "The training data is fitted into an instance of this class, and that instance is fed into the training algorithm. ",
        "First, all input strings are tokenized. The tokenized data is then fed into instances of ",
        {content:"USPTODataset",annotations:["code"]},
        "."
      ]
    },
    {
      id:61,
      type:"code",
      contents:[
        "train_abstracts_encodings = tokenizer(trainData[\"abstracts\"], truncation=True, padding=True)",
        "\ntrain_claims_encodings = tokenizer(trainData[\"claims\"], truncation=True, padding=True)",
        "\n",
        "\ntrain_abstracts_dataset = USPTODataset(train_abstracts_encodings, trainData[\"labels\"])",
        "\ntrain_claims_dataset = USPTODataset(train_claims_encodings, trainData[\"labels\"])"
      ],
      misc:{caption:""}
    },
    {
      id:62,
      type:"paragraph",
      contents:["When initializing the model that we'll fine-tune, we also add an additional step to run the training on the GPU rather than the CPU. This is a time optimization measure."]
    },
    {
      id:63,
      type:"code",
      contents:[
        "device = torch.device('cuda') if torch.cuda.is_available() else torch.device('cpu')",
        "\nmodel = DistilBertForSequenceClassification.from_pretrained(model_name)",
        "\nmodel.to(device)",
        "\nmodel.train()"
      ],
      misc:{caption:""}
    },
    {
      id:64,
      type:"paragraph",
      contents:[
        "Finally, we load the datasets into wrapper classes that are used during the training. We then train for ",
        {content:"10",annotations:["code"]},
        " epochs."
      ]
    },
    {
      id:65,
      type:"code",
      contents:[
        "train_abstracts_loader = DataLoader(train_abstracts_dataset, batch_size=32, shuffle=True)",
        "\ntrain_claims_loader = DataLoader(train_claims_dataset, batch_size=32, shuffle=True)",
        "\noptim = AdamW(model.parameters(), lr=5e-5)",
        "\n",
        "\ndef Train(loader, save_path, num_train_epochs=2):",
        "\n  batch_num = len(loader)",
        "\n  for epoch in range(num_train_epochs):",
        "\n    print(f'\t- Training epoch {epoch+1}/{num_train_epochs}')",
        "\n    batch_count = 0",
        "\n    for batch in loader:",
        "\n      print(f'{batch_count}|{batch_num} - {round((batch_count/batch_num)*100)}%', end=\"\")",
        "\n      #print('\t\t- optim zero grad')",
        "\n      optim.zero_grad()",
        "\n      #print('\t\t- input_ids')",
        "\n      input_ids = batch['input_ids'].to(device)",
        "\n      #print('\t\t- attention_mask')",
        "\n      attention_mask = batch['attention_mask'].to(device)",
        "\n      #print('\t\t- labels0')",
        "\n      labels = batch['labels'].to(device)",
        "\n      #print('\t\t- outputs')",
        "\n      outputs = model(input_ids, attention_mask=attention_mask, labels=labels)",
        "\n",
        "\n      #print('\t\t- loss')",
        "\n      loss = outputs[0]",
        "\n      #print('\t\t- backwards')",
        "\n      loss.backward()",
        "\n      #print('\t\t- step')",
        "\n      optim.step()",
        "\n",
        "\n      batch_count += 1",
        "\n      print(\"\r\", end=\"\")",
        "\n",
        "\n    model.save_pretrained(save_path, from_pt=True)", 
        "\n    print(f'Saved model in {save_path}!\\n')",
        "\n",
        "\nprint(\"=== TRAINING ABSTRACTS ===\")",
        "\nTrain(train_abstracts_loader,upsto_abstracts_model_path, num_train_epochs=10)",
        "\nprint(\"----\")",
        "\nprint(\"=== TRAINING CLAIMS ===\")",
        "\nTrain(train_claims_loader,upsto_claims_model_path, num_train_epochs=10)",
      ],
      misc:{caption:""}
    },
    {
      id:66,
      type:"heading_2",
      contents:["Evaluating the Models"]
    },
    {
      id:67,
      type:"heading_3",
      contents:["Sentiment Analysis"]
    },
    {
      id:68,
      type:"paragraph",
      contents:["There isn't an effective way to validate the sentiment analysis models, as they are publicly available models and it is unknown what data they were explicitly trained on. Therefore, evaluation will rely on anecdotal testing."]
    },
    {
      id:69,
      type:"paragraph",
      contents:[
        "The sentiment models that appear to work the best are the ",
        {content:"cardiffnlp/twitter-roberta-base-sentiment", href:"https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment"},
        " and ",
        {content:"siebert/sentiment-roberta-large-english", href:"https://huggingface.co/siebert/sentiment-roberta-large-english"},
        " models, with few caveats. These two models generally perform very well at detecting sentiment in mid to long expressions. However the ",
        {content:"siebert/sentiment-roberta-large-english", href:"https://huggingface.co/siebert/sentiment-roberta-large-english"},
        " model tends to suffer when expressions are shorter and less complex in lexicon. Even the ",
        {content:"cardiffnlp/twitter-roberta-base-sentiment", href:"https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment"},
        " model suffers from time to time if not enough context has been provided."
      ]
    },
    {
      id:70,
      type:"paragraph",
      contents:[
        "The model that performed the worst is the ",
        {content:"finiteautomata/beto-sentiment-analysis", href:"https://huggingface.co/finiteautomata/beto-sentiment-analysis"},
        ". This model seems to have the worst time trying to interpret meaning from sentences, even with strongly worded language ",
        "such as \"hate\". For example, the expression \"I hate you\" returns a ",
        {content:"NEUTRAL",annotations:["bold"]},
        " response with 99.6% confidence, which differs from the ",
        {content:"cardiffnlp/twitter-roberta-base-sentiment", href:"https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment"},
        " and ",
        {content:"siebert/sentiment-roberta-large-english", href:"https://huggingface.co/siebert/sentiment-roberta-large-english"},
        " models (",
        {content:"NEGATIVE",annotations:["bold"]},
        ": ~96.5% - ~99.9% accuracy respectively). It appears that the ",
        {content:"finiteautomata/beto-sentiment-analysis", href:"https://huggingface.co/finiteautomata/beto-sentiment-analysis"},
        " gets confused when not enough context is provided. The expression \"I hate you because you hurt my family\" manages to return a ",
        {content:"NEGATIVE",annotations:["bold"]},
        " label, but with a mere 87.7% confidence. ",
        {content:"NOTE", annotations:["bold"]},
        ": ",
        {content:"These expressions are purely meant for experimentation purposes, to convey model inaccuracies!", annotations:["italic"]}
      ]
    },
    {
      id:71,
      type:"paragraph",
      contents:[
        "The unique model is the ",
        {content:"bhadresh-savani/distilbert-base-uncased-emotion", href:"https://huggingface.co/bhadresh-savani/distilbert-base-uncased-emotion"},
        " model, which instead gives 6 general emotions as opposed to a binary ",
        {content:"NEGATIVE", annotations:["bold"]},
        " or ",
        {content:"POSITIVE",annotations:["bold"]},
        " rating:"
      ]
    },
    {
      id:72,
      type:"bulleted_list_item",
      contents:["Sadness"]
    },
    {
      id:73,
      type:"bulleted_list_item",
      contents:["Joy"]
    },
    {
      id:74,
      type:"bulleted_list_item",
      contents:["Love"]
    },
    {
      id:75,
      type:"bulleted_list_item",
      contents:["Anger"]
    },
    {
      id:76,
      type:"bulleted_list_item",
      contents:["Fear"]
    },
    {
      id:77,
      type:"bulleted_list_item",
      contents:["Surprise"]
    },
    {
      id:78,
      type:"paragraph",
      contents:[
        "This one offers more nuance to each evaluation, but while the general distinction between \"positive\" and \"negative\" ",
        "emotions is often accurate, the specific emotion applied to the statement is sometimes confusing. For example, the ",
        "expression \"I love you because you saved my family\" is labeled as ",
        {content:"JOY",annotations:["bold"]},
        " instead of ",
        {content:"LOVE",annotations:["bold"]},
        "."
      ]
    },
    {
      id:79,
      type:"paragraph",
      contents:["Overall, all models are able to perform to some level of success, but the context of each input needs to be made clear in the wording for the models to produce accurate responses. These models seem to suffer when not enough context is provided, sometimes blatantly giving incorrect responses to situations that are too simple."]
    },
    {
      id:80,
      type:"heading_3",
      contents:["Patent Acceptance Prediction"]
    },
    {
      id:81,
      type:"paragraph",
      contents:[
        "With access to labeled validation data, the fine-tuned models can be ranked in accuracy. ",
        "Sample code that does so is provided in ",
        {content:"src/val.ipynb", annotations:["code"]},
        " and evaluates 1000 random data samples out of 4000+ samples."
      ]
    },
    {
      id:82,
      type:"paragraph",
      contents:["Overall, both the fine-tuned Abstract model and the Claims model seem to perform very similarly, producing accuracy rates of 72.89% and 72.8% accuracy respectively out of 1000 random samples. The aggregated softmax labeling, assuming equal weighting between the two models, produces 76.2% accuracy. Depending on who you ask, this performance can be discouraging or encouraging. "]
    },
    {
      id:83,
      type:"paragraph",
      contents:["The 76% accuracy rating being higher than the individual fine-tuned models is interesting, as it implies that the accuracy between the two models is not consistent; there are times when one of the models might outperform the other in certain situations. If the accuracy remained the same across all 1000 random samples, then the aggregated prediction accuracy rate would be within the same range as the individual fine-tuned models."]
    }
  ]
}

const TemplateData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"template",
	thumbnail:thumbnail,
	title:"US Patent Acceptance Prediction & Sentiment Analysis (CSGY-6613: Artificial Intelligence)",
	url:"patent_prediction",
	content:<PortfolioItemContent data={content} />
}

export default TemplateData;