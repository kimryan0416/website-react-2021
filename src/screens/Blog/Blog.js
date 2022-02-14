import { Component } from 'react';
import { 
	Switch,
	Route,
	Redirect,
	Link,
	withRouter,
} from "react-router-dom";
import axios from 'axios';

import "./Blog.css";

import { 
	Divider, 
//	Image, 
	Button,
	ExtURL,
} from "../../components";

class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			posts: null,
			error: null
		}
	}
	componentDidMount() {
		axios.get(`https://hidden-savannah-61825.herokuapp.com/`)
      .then(res => {
      	if (res.status === 200) {
      		this.setState({
      			loading:false,
      			posts: res.data.map(d=>{
      				return {...d, publish_date:ConvertDate(d.publish_date)}
      			})
      		});
      	} else {
      		this.setState({
      			loading:false,
      			error:res.statusText
      		});
      	}
      })
	}
	render() {
		if (this.state.loading) return <h2>Loading blog info...</h2>;
		if (this.state.error) {
			return (
				<div>
					<h2>Error loading blog</h2>
					<p>Due to an error, the blog cannot be loaded at this time. I'm sorry for the inconvenience and am promptly rectifying the situation.</p>
				</div>
			);
		}
		return (
			<Switch>
				{this.state.posts.map((p,i)=>{
					return (
						<Route 
							key={`blog_post_item_${i}`}
							exact path={`/blog/${p.blog_url}`}
							component={()=> <BlogFrame posts={this.state.posts} current={p} />}
						/>
					)
				})}
				<Route
					exact 
					path="/blog"
					component={()=> <BlogFrame posts={this.state.posts} />}
				/>
				<Redirect to='/blog' />
			</Switch>
		);
	}
}

class BlogFrame extends Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}
	render() {
		const { posts } = this.props;
		const currentPost = this.props.current || null;
		let title, blog;
		if (currentPost) {
			title = currentPost.title;
			blog = <BlogPost post={currentPost} />;
		} else {
			title = 'My Blog';
			blog = <BlogHome posts={posts} />;
		}
		return (
			<div className='Blog'>
				<div className='blogWrapper'>
					<div className='blogContent'>
						<h2>{title}</h2>
						<Divider space={32} />
						{blog}
					</div>
					<Divider space={24} horizontal={true} />
					<ul className='blogHistory'>
						{posts.map((post,i)=>{
							if (currentPost != null && post.blog_url === currentPost.blog_url) {
								return <li key={`bloghist_date_${post.blog_url}`} className='blogHistoryCurrentPost'><strong>&gt; {post.publish_date}</strong></li>;
							}
							return (
								<li key={`bloghist_date_${post.blog_url}`}>
									<Link to={`/blog/${post.blog_url}`}>{post.publish_date}</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		);
	}
}

function BlogHome(props) {
	return props.posts.map((post,i)=>{
		return (
			<div key={`home_blog_item_${i}`}>
				<h3>{post.title}</h3>
				<Divider space={16} />
				<p>{post.preview_text}</p>
				<Divider space={12} />
				<div className='blogBlock'>
					<Link to={`/blog/${post.blog_url}`}>
						<Button cName='blogButtonLink'>Read More!</Button>
					</Link>
				</div>
			</div>
		);
	});
}
class BlogPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			contents: null,
			error: null
		}
	}
	componentDidMount() {
		if (
			typeof this.props.post === 'undefined' 
			|| this.props.post == null 
			|| typeof this.props.post.notion_page_id === 'undefined' 
			|| this.props.post.notion_page_id == null
		) {
			this.setState({
				loading: false,
				error: "Unable to load blog content due to missing blog data."
			});
			return;
		}
		axios.get(`https://hidden-savannah-61825.herokuapp.com/blog?id=${this.props.post.notion_page_id}`).then(res => {
			if (res.status !== 200) {
				this.setState({
					loading:false,
					error:res.statusText
				});
				return;
			}
			const return_data = parseRawData(res.data);
			this.setState({
				loading:false,
				contents: return_data
			});
		});
	}

	render() {
		if (this.state.loading) return <p>Loading blog content from server...</p>;
		if (this.state.error) return <p>{this.state.error}</p>
		return (
			<div>
				<BlogMetadata {...this.props.post} />
				<Divider space={16} />
				{this.state.contents.map((block,index)=>{
					return <BlogBlock key={`${block.id}`} block={block} index={index} />
				})}
			</div>
		);
	}
}

function BlogMetadata(props) {
	let description = (props.description) 
		? <><p><i>{props.description}</i></p><Divider space={4} /></>
		: null;
	let postDate = (props.publish_date) 
		? <p><i><strong>Posted on:</strong> {props.publish_date}</i></p>
		: null;
	/*
	let modifiedDate = (meta.post_modified) 
		? <p><i><strong>Modified last:</strong> {meta.post_modified}</i></p>
		: null;
	*/
	let visibleClass = (description || postDate)
		? 'visibleMeta'
		: '';
	return (
		<div className={visibleClass}>
			{description}
			{postDate}
			{/*modifiedDate*/}
		</div>
	);
}
function ConvertDate(raw_date) {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let fullDate = new Date(raw_date);
	return `${months[fullDate.getMonth()]} ${fullDate.getDate()}, ${fullDate.getFullYear()}`;
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
    let text = <>{t.content}</>
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
    if (t.href) text = <ExtURL href={t.href}>{text}</ExtURL>;
    return <span key={`${block.id}-text-${i}`}>{text}</span>;
  }

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
      text = block.contents.map((c)=>{
        return (
          <div key={`${block.id}-${c.id}`} className='blogColumn'>
            {c.contents.map((c2)=>{
              return <div key={`${block.id}-${c.id}-${c2.id}`}>{convertBlock(c2)}</div>;
            })}
          </div>
        );
      });
      content = <div className='blogColumnList'>{text}</div>
      break;
    case 'bulleted_list':
      text = block.contents.map((c,i)=>{
        return <li key={`${block.id}-${i}`}>{convertBlock(c)}</li>;
      });
      content = <ul>{text}</ul>;
      break;
    case 'numbered_list':
      text = block.contents.map((c,i)=>{
        return <li key={`${block.id}-${i}`}>{convertBlock(c)}</li>;
      });
      content = <ol>{text}</ol>;
      break;
    case 'code':
      text = block.contents.map((c,i)=>{
        return <code key={`${block.id}-${i}`}>{parseText(c,i)}</code>
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
      console.log('CALLOUT');
      content = null;
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
            <div key={`${block.id}-child-${block.id}`} className='blogBlockChild'>
              {convertBlock(child)}
            </div>
          );
        })}
      </div>
    );
  }
  return <>{content}{children}</>;
}

export default withRouter(Blog);