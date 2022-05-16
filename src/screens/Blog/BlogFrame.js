import { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import BlogHome from "./BlogHome";
import BlogPost from "./BlogPost";

import { Divider } from "../../components";
import { useMobile, useBlog } from '../../hooks';

const BlogFrame = (props) => {
  const { blog, getBlog } = useBlog();
  const isMobile = useMobile();

  useEffect(() => {
    window.scrollTo(0,0);
  });
  
  const posts = blog.posts;
  const currentPost = props.current || null;
  if (currentPost) {
    let curPostIndex = posts.findIndex(post=>post.blog_url === currentPost.blog_url);
    // posts are organized with more recent posts near the 0 index.
    
    /*
    let nextPost = (curPostIndex > 0)
      ? (
        <Link to={`/blog/${posts[curPostIndex-1].blog_url}`}>
          <Button>Next post: {posts[curPostIndex-1].publish_date}</Button>
        </Link>
      )
      : null;
    */

    let blogQuickNav = (
      <div className='blogHeaderNavigation'>
        {/*<Link to='/blog'><Button>Return to Blog Home</Button></Link>*/}
        <h6><Link to='/blog'>&#8678; Back to Blog</Link></h6>
        {
          (curPostIndex > 0 && !isMobile)
            ? <h6><Link to={`/blog/${posts[curPostIndex-1].blog_url}`}>&#8680; Next post: {posts[curPostIndex-1].publish_date}</Link></h6>
            : null
        }
      </div>
    );
    
    return (
      <BlogFrameStructure>
        <div className='blogContent'>
          {blogQuickNav}
          <Divider space={16} />
          <h2>{currentPost.title}</h2>
          <Divider space={32} />
          <BlogPost post={currentPost}>{blogQuickNav}</BlogPost>
        </div>
      </BlogFrameStructure>
    );
  }
  return (
    <>
      <div className='blogHeaderNavigation'>
        <h1>My Blog</h1>
        {/*<Button onClick={getBlog}><i>Refresh blog content</i></Button>*/}
      </div>
      <Divider space={32} />
      <BlogFrameStructure>
        <div className='blogContent'>
          <BlogHome posts={blog.data} />
        </div>
        <Divider space={24} horizontal={true} />
        <div className='blogHistory'>
          <p><strong>Post History</strong></p>
          <Divider space={8} />
          <ul>
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
      </BlogFrameStructure>
    </>
  );
}

function BlogFrameStructure(props) {
  return (
    <div className='Blog'>
      <div className='blogWrapper'>
        {props.children}
      </div>
    </div>
  );
}

export default withRouter(BlogFrame);