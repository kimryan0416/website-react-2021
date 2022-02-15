import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import BlogHome from "./BlogHome";
import BlogPost from "./BlogPost";

import { Divider } from "../../components";

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

export default withRouter(BlogFrame);