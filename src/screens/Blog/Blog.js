import { 
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import {
	useBlog
} from '../../hooks';

import "./Blog.css";

import BlogFrame from './BlogFrame';

const Blog = (props) => {
	const { blog } = useBlog();
	if (blog == null) return <h2>Loading blog info...</h2>;
	if (blog.error != null) {
		return (
			<div>
				<h2>Error loading blog</h2>
				<p>Due to an error, the blog cannot be loaded at this time. I'm sorry for the inconvenience and am promptly rectifying the situation.</p>
			</div>
		);
	}
	return (
		<Switch>
			{blog.posts.map((p,i)=>{
				return (
					<Route 
						key={`blog_post_item_${i}`}
						exact path={`/blog/${p.blog_url}`}
						component={()=> <BlogFrame current={p} />}
					/>
				)
			})}
			<Route
				exact 
				path="/blog"
				component={()=> <BlogFrame />}
			/>
			<Redirect to='/blog' />
		</Switch>
	);
}

export default Blog;