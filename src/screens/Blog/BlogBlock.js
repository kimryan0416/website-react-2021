import { Component } from "react";

import { ExtURL } from "../../components";

function make_temp_id(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


class BlogBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			content: null,
		}
	}
	componentDidMount() {
		const content = convertBlock(this.props.block);
		this.setState({
			loading:false,
			content:content
		})
	}
	render() {
		if (this.state.loading) return (
			<div className='blogBlock'>
				<p>...</p>
			</div>
		);
		return (
			<div className='blogBlock'>
				{this.state.content}
			</div>
		);
	}
}

function parseRawData(data) {
  // stores the current OL or UL
  let curList = null;
  // Reduce the data into a smaller size...
  //    .. while also keeping track of OL or UL
  const toReturn = data.reduce((accumulator,block,block_index)=>{
    // If the current block has children, go deeper
    if (block.children && block.children.length > 0) {
      let newChildren = parseRawData(block.children);
      block.children = newChildren;
    }
    // Switch case block type
    switch(block.type) {
      case 'bulleted_list_item':
        // If there's currently a list active...
        if (curList) {
          // If the previous type was NOT a bulleted_list_item,
          //  then add the current list, wipe it, and set a new one
          if (data[block_index-1].type !== 'bulleted_list_item') {
            accumulator.push(curList);
            curList = { 
              id:block_index, type:'bulleted_list', 
              contents:[block], children:[], misc:null
            } 
          } 
          // Otherwise, just push current block into the curList
          else {
            curList.contents.push(block);
          }
        } 
        // curList is null, gotta instantiate a new one for the new UL
        else {
          curList = {
            id:block_index, type:'bulleted_list',
            contents:[block], children:[], misc:null
          } 
        }
        break;
      case 'numbered_list_item':
        // If there's currently a list active...
        if (curList) {
          // If the previous type was NOT a numbered_list_item,
          //  then add the current list, wipe it, and set a new one
          if (data[block_index-1].type !== 'numbered_list_item') {
            accumulator.push(curList);
              curList = {
                id:block_index, type:'numbered_list',
                contents:[block], children:[], misc:null
              } 
            } 
            // Otherwise, just push current block into the curList
            else {
              curList.contents.push(block);
            }
        } 
        // curList is null, gotta instantiate a new one for the new OL
        else {
          curList = {
            id:block_index, type:'numbered_list',	      						
            contents:[block], children:[], misc:null
          } 
        }
        break;
      case 'column_list':
        // Add that curList if it's active, wipe it.
        //  we can't have column_list be a child of an OL or UL
        if (curList) {
          accumulator.push(curList);
          curList = null;
        }
        // column_list has 2 content items - specifically type:"column"
        block.contents.forEach(column=>{
          // We process each column's contents recursively
          //  This is similar to if they had children
          let newColumnContents = parseRawData(column.contents);
          column.contents = newColumnContents;
        });
        // Push the column_list with the updated column data
        accumulator.push(block);
        break;
      default:
        // Add that curList if it's active, wipe it.
        //  we can't have the current block be a child of an OL or UL
        if (curList) {
          accumulator.push(curList);
          curList = null;
        }
        // Push the current block
        accumulator.push(block);
    }
    // At the end of it all, if we still have a curList active,
    //  then we push it anyways.
    if (block_index === data.length-1 && curList != null) {
      accumulator.push(curList);
      curList = null;
    }
    return accumulator;
  },[]);
  // Return the parsed data
  return toReturn;
}

function convertBlock(block) {
  let colorMap = {
    "gray":{color:"gray"},
    "brown":{color:"brown"},
    "orange":{color:"orange"},
    "yellow":{color:"yellow"},
    "green":{color:"green"},
    "blue":{color:"blue"},
    "purple":{color:"purple"},
    "pink":{color:"pink"},
    "red":{color:"red"},
    "gray_background":{backgroundColor:"gray"},
    "brown_background":{backgroundColor:"brown"},
    "orange_background":{backgroundColor:"orange"},
    "yellow_background":{backgroundColor:"yellow"}, 
    "green_background":{backgroundColor:"green"},
    "blue_background":{backgroundColor:"blue"},
    "purple_background":{backgroundColor:"purple"},
    "pink_background":{backgroundColor:"pink"},
    "red_background":{backgroundColor:"red"}
  }
  function parseText(t,i) {
    // expecting format: 
    //	{ content: string, annotations: string[] href: string or null }
    let tempTextKey = make_temp_id(6)
    if(typeof t === "string") {
      // This is merely a string.
      return <span key={`${tempTextKey}-text-${i}`}>{t}</span>;
    }
    let text = <>{t.content}</>
    if (t.hasOwnProperty("annotations") && Array.isArray(t.annotations) && t.annotations.length > 0) {
      t.annotations.forEach(a=>{
        switch(a) {
          case 'bold':
            text = <strong>{text}</strong>;
            break;
          case 'italic':
            text = <i>{text}</i>;
            break;
          case 'strikethrough':
            text = <s>{text}</s>;
            break;
          case 'underline':
            text = <u>{text}</u>;
            break;
          case 'code':
            text = <code>{text}</code>
            break;
          default:
            if (colorMap[a]) text = <span style={colorMap[a]}>{text}</span>
        }
      });
    }
    if (t.href) text = <ExtURL href={t.href}>{text}</ExtURL>;
    return <span key={`${tempTextKey}-text-${i}`}>{text}</span>;
  }

  let tempKey = make_temp_id(6)
  let content = null, text = null;
  switch(block.type) {
    case 'heading_1':
      // We reduce it to an h2, since the h1 is the title
      content = <h2>{block.contents.map((c,i)=>parseText(c,i))}</h2>;
      break;
    case 'heading_2':
      // We reduce it to an h3, since the h2 is header_1
      content = <h3>{block.contents.map((c,i)=>parseText(c,i))}</h3>;
      break;
    case 'heading_3':
      // We reduce it to an h4, since the h3 is header_2
      content = <h4>{block.contents.map((c,i)=>parseText(c,i))}</h4>;
      break;
    case 'column_list':
      let tempKey1 = make_temp_id(6)
      let tempKey2 = make_temp_id(6)
      text = block.contents.map((c)=>{
        return (
          <div key={`${tempKey}-${tempKey1}`} className='blogColumn'>
            {c.contents.map((c2)=>{
              return <div key={`${tempKey}-${tempKey1}-${tempKey2}`}>{convertBlock(c2)}</div>;
            })}
          </div>
        );
      });
      content = <div className='blogColumnList'>{text}</div>
      break;
    case 'bulleted_list':
      text = block.contents.map((c,i)=>{
        return <li key={`${tempKey}-${i}`}>{convertBlock(c)}</li>;
      });
      content = <ul>{text}</ul>;
      break;
    case 'numbered_list':
      text = block.contents.map((c,i)=>{
        return <li key={`${tempKey}-${i}`}>{convertBlock(c)}</li>;
      });
      content = <ol>{text}</ol>;
      break;
    case 'code':
      text = block.contents.map((c,i)=>{
        return <code key={`${tempKey}-${i}`}>{parseText(c,i)}</code>
      });
      content = (
        <figure>
          <pre>{text}</pre>
          {(block.misc.caption.length > 0) ? <figcaption>{block.misc.caption.map((c,i)=>{return parseText(c,i)})}</figcaption> : null}
        </figure>
      );
      break;
    case 'quote':
      text = block.contents.map((c,i)=>parseText(c,i));
      content = <blockquote>{text}</blockquote>;
      break;
    case 'callout':
      text = block.contents.map((c,i)=>parseText(c,i));
      content = <blockquote className='callout'>{text}</blockquote>;
      break;
    case 'image':
      text = (block.misc.caption && block.misc.caption.length > 0) 
        ?	<figcaption>{block.misc.caption.map((c,i)=>parseText(c,i))}</figcaption>
        : null;
      content = (
        <figure>
          <img src={block.contents[0].url} alt="" />
          {text}
        </figure>
      );
      break;
    case 'divider':
      content = <hr />
      break;
    case 'vspace':
      content = <div style={{height:block.contents[0]}} />;
      break;
    case 'youtube_embed':
      let { yt_height, yt_src } = block.contents[0];
      content = <iframe width="100%" height={yt_height} src={yt_src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
      break;
    case 'video_embed':
      let { width, height, src, title, frameborder, allow, allowfullscreen, style} = block.contents[0];
      content = <iframe width="100%" height={height} src={src} title={title} frameborder={frameborder} allow={allow} allowfullscreen={allowfullscreen} style={style}></iframe>;
      break;
    default:
      // The default case is a simple paragraph
      text = block.contents.map((c,i)=>parseText(c,i))
      content = <p>{text}</p>;
  }
  let children = null;
  if (block.children && block.children.length > 0) {
    children = (
      <div className='blogBlockChildren'>
        {block.children.map((child,child_i)=>{
          //console.log(child);
          return (
            <div key={`${tempKey}-child-${tempKey}`} className='blogBlockChild'>
              {convertBlock(child)}
            </div>
          );
        })}
      </div>
    );
  }
  return <>{content}{children}</>;
}

export default BlogBlock;
export { 
  parseRawData
};