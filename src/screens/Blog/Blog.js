import { 
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import {
	useBlog
} from '../../hooks';

import "./Blog.css";

import BlogHome from './BlogHome';
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
		<div className="Blog">
			<Routes>
				{blog.posts.map((p,i)=>{
					return (
						<Route 
							key={`blog_post_item_${i}`}
							exact path={`/blog/${p.blog_url}`}
							element={()=> <BlogFrame current={p} />}
						/>
					)
				})}
				<Route
					exact 
					path="/blog"
					element={()=> <BlogHome />}
				/>
				<Route
					path="*"
					element={<Navigate to='/blog' />}
				/>
			</Routes>
		</div>
	);
}

export default Blog;