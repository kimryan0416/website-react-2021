import { useEffect } from "react";
import { Link } from "react-router-dom";

import BlogPost from "./BlogPost";

import { Divider } from "../../components";
import { useMobile, useBlog } from '../../hooks';

const BlogFrame = (props) => {
  const { blog } = useBlog();
  const isMobile = useMobile();
  const currentPost = props.current;

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);
  
  const { posts } = blog;
  if (!currentPost) {
    return (
      <div>
        <h1>Blog Post Missing</h1>
        <Divider space={32} />
        <p>It appears that this blog post was either deleted or made private. Please return back to the main Blog page to read other posts!</p>
        <Divider space={16} />
        <Link to='/blog'><h6>Return to Blogs</h6></Link>
      </div>
    );
  }
  
  let curPostIndex = posts.findIndex(post=>post.blog_url === currentPost.blog_url);
  // posts are organized with more recent posts near the 0 index.
  let blogQuickNav = (
    <div className='blogHeaderNavigation'>
      <h6><Link to='/blog'>&#8678; Back to Blog</Link></h6>
      {
        (curPostIndex > 0 && !isMobile)
          ? <h6><Link to={`/blog/${posts[curPostIndex-1].blog_url}`}>&#8680; Next post: {posts[curPostIndex-1].publish_date}</Link></h6>
          : null
      }
    </div>
  );
    
  return (
    <>
      {blogQuickNav}
      <Divider space={8} />
      <h2>{currentPost.title}</h2>
      <Divider space={32} />
      <BlogPost post={currentPost}>{blogQuickNav}</BlogPost>
      <Divider space={32} />
    </>
  );
}

export default BlogFrame;