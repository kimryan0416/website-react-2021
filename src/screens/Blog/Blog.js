import { Component } from 'react';
import { 
	Switch,
	Route,
	Redirect,
	Link,
	withRouter,
} from "react-router-dom";

import "./Blog.css";

import { 
	Divider, 
//	Image, 
	Button,
//	ExtURL,
} from "../../components";

import {posts,database} from "./Posts";

const Blog = (props) => {
		return (
			<Switch>
				{posts.map((p,i)=>{
					return (
						<Route 
							key={`blog_post_item_${i}`}
							exact path={`/blog/${p.url}`}
							component={()=> <BlogPost {...p} />}
						/>
					)
				})}
				<Route
					exact 
					path="/blog"
					component={()=> <BlogHome />}
				/>
				<Redirect to='/blog' />
			</Switch>
		);
	}

function BlogHome(props) {
	const latest = posts[0];
	const moreButton = (latest.content.length > 1)
		? {
			type:"buttonLink",
			to:`/blog/${latest.url}`,
			content:'Read more...'
		}
		: null;
	const content = [
		{
			type:'header',
			level:'5',
			content:'Latest Post:'
		},
		{
			type:'header',
			level:'3',
			content:latest.title
		},
		latest.content[0],
		moreButton
	];
	return (
		<BlogFrame 
			id={null}
			title="My Blog" 
			content={content} 
		>
		</BlogFrame>
	);
}
function BlogPost(props) {
	return (
		<BlogFrame 
			id={props.id}
			title={props.title} 
			metadata={props.metadata} 
			content={props.content} 
		/>
	);
}

class BlogFrame extends Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}
	render() {
		return (
			<div className='Blog'>
				<h1>{this.props.title}</h1>
				<Divider space={32} />
				<div className='blogWrapper'>
					<BlogContent metadata={this.props.metadata} content={this.props.content} />
					<Divider space={24} horizontal={true} />
					<BlogHistory id={this.props.id} />
				</div>
			</div>
		);
	}
}
class BlogHistory extends Component {
	constructor(props) {
		super(props);
		this.state = { view:'date' }
	}
	switchView = (to='date') => {
		this.setState({view:to});
	}
	render() {
		let r;
		switch(this.state.view) {
			case 'date':
				r = (
					<ul className='blogHistory'>
						{posts.map((post,i)=>{
							if (post.id === this.props.id) {
								return <li key={`bloghist_date_${post.id}`} className='blogHistoryCurrentPost'><strong>&gt; {post.metadata.post_date}</strong></li>;
							}
							return (
								<li key={`bloghist_date_${post.id}`}>
										<Link to={`/blog/${post.url}`}>{post.metadata.post_date}</Link>
								</li>
							)
						})}
					</ul>
				);
				break;
			case 'category':
				r = (
					<ul className='blogHistory'>
						{database.map((d)=>{
							let childrenLinks = (d.posts.length > 0)
								? (
									<ul>
										{d.posts.map((p_id,i)=>{
											let post = posts[p_id];
											return (
												<li key={`${d.id}_${post.id}`}>
													<Link to={`/blog/${post.url}`}>{post.metadata.post_date}</Link>
												</li>
											)
										})}
									</ul>
								)
								: null;
							return (
								<li key={d.id}>
									{d.name}
									{childrenLinks}
								</li>
							);
						})}
					</ul>
				);
				break;
			default:
				r = null;
		}
		return (
			<div className='blogHistory'>
				<p><strong>Post History:</strong></p>
				<Divider space={8} />
				{r}
			</div>
		);
	}
}
function BlogContent(props) {
	let meta = convertMetadata(props.metadata);
	let content = convertContents(props.content);
	return (
		<div className='blogContent'>
			{meta}
			{content}
		</div>
	);
}
function convertMetadata(meta) {
	// can take in description, date created (GMT), and date modified (GMT)
	if (meta == null) return null;
	let description = (meta.description) 
		? <><p><i>{meta.description}</i></p><Divider space={4} /></>
		: null;
	let postDate = (meta.post_date) 
		? <p><i><strong>Posted on:</strong> {meta.post_date}</i></p>
		: null;
	let modifiedDate = (meta.post_modified) 
		? <p><i><strong>Modified last:</strong> {meta.post_modified}</i></p>
		: null;
	let visibleClass = (description || postDate || modifiedDate)
		? 'visibleMeta'
		: '';
	return (
		<div className={`blogPostItem ${visibleClass}`}>
			{description}
			{postDate}
			{modifiedDate}
		</div>
	);
}
function convertContents(content) {
	const render = content.map((i,index)=>{
		let r = null;
		let key = `post_item_${index}`;
		switch(typeof i) {
			case 'string':
				r = <p key={key} className='blogPostItem'>{i}</p>
				break;
			case 'object':
				switch(i.type) {
					case 'header':
						switch(i.level) {
							case '1':
								r = <h1 key={key} className='blogPostItem'>{i.content}</h1>
								break;
							case '2':
								r = <h2 key={key} className='blogPostItem'>{i.content}</h2>
								break;
							case '3':
								r = <h3 key={key} className='blogPostItem'>{i.content}</h3>
								break;
							case '4':
								r = <h4 key={key} className='blogPostItem'>{i.content}</h4>
								break;
							case '5':
								r = <h5 key={key} className='blogPostItem'>{i.content}</h5>
								break;
							case '6':
								r = <h6 key={key} className='blogPostItem'>{i.content}</h6>
								break;
							default:
								r = <p key={key} className='blogPostItem'>{i.content}</p>
						}
						break;
					case 'image':
						let c = (i.caption) ? <figcaption>{i.caption}</figcaption> : null;
						r = (
							<figure className='blogPostItem'>
								<img key={key} src={i.content} alt={i.alt} />
								{c}
							</figure>
						);
						break;
					case 'buttonLink':
						r = (
							<Link 
								key={key} 
								to={i.to}
							>
								<Button cName='blogButtonLink'>{i.content}</Button>
							</Link>
						);
						break;
					case 'quote':
						r = (<p className='blogPostItem blogQuote'>{i.content}</p>);
						break;
					case 'line':
						r = (<hr />);
						break;
					default:
						r = (<p key={key} className='blogPostItem'>{i.content}</p>);
				}
				break;
			default:
				r = <p key={key} className='blogPostItem'>{i}</p>
		}
		return r;
	});
	return <>{render}</>
}

export default withRouter(Blog);