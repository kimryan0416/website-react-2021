import { 
	Switch,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";

import "./Blog.css";

import BlogFrame from './BlogFrame';

function Blog(props) {

	if (props.loading) return <h2>Loading blog info...</h2>;
	if (props.error) {
		return (
			<div>
				<h2>Error loading blog</h2>
				<p>Due to an error, the blog cannot be loaded at this time. I'm sorry for the inconvenience and am promptly rectifying the situation.</p>
			</div>
		);
	}
	return (
		<Switch>
			{props.posts.map((p,i)=>{
				return (
					<Route 
						key={`blog_post_item_${i}`}
						exact path={`/blog/${p.blog_url}`}
						component={()=> <BlogFrame posts={props.posts} current={p} />}
					/>
				)
			})}
			<Route
				exact 
				path="/blog"
				component={()=> <BlogFrame posts={props.posts} refreshBlogDatabase={props.refreshBlogDatabase} />}
			/>
			<Redirect to='/blog' />
		</Switch>
	);
}

export default withRouter(Blog);