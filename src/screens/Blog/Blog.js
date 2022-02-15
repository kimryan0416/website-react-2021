import { Component } from 'react';
import { 
	Switch,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";
import axios from 'axios';

import "./Blog.css";

import BlogFrame from './BlogFrame';

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
    this.getBlogDatabase();
  }
  getBlogDatabase = () => {
    axios.get(`https://hidden-savannah-61825.herokuapp.com/`).then(res => {
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
    });
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

function ConvertDate(raw_date) {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let fullDate = new Date(raw_date);
	return `${months[fullDate.getMonth()]} ${fullDate.getDate()}, ${fullDate.getFullYear()}`;
}

export default withRouter(Blog);