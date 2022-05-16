import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Divider } from "../../components";
import {
  useMobile,
  useBlog,
} from '../../hooks';


const BlogHome = () => {
  const { blog } = useBlog();
  const isMobile = useMobile();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <>
      <h1>Blog</h1>
      <Divider space={32} />
      <div className="BlogWrapper">
        <div className="BlogContent">
          { blog.posts.map((post,i)=>{
            return (
              <div className='BlogHomeItem' key={`home_blog_item_${i}`}>
                <Link to={`/blog/${post.blog_url}`}><h3>{post.title}</h3></Link>
                <p><i>{post.publish_date}</i></p>
                <Divider space={8} />
                <p>{post.preview_text}</p>
              </div>
            )
          })}
        </div>
        {
          (!isMobile) &&
          <div className="BlogHistory">
            <p><strong>Post History</strong></p>
            <Divider space={8} />
            <ul>
              {blog.posts.map((post,i)=>{
                return (
                  <li key={`bloghist_date_${post.blog_url}`}>
                    <Link to={`/blog/${post.blog_url}`}>{post.publish_date}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        }
      </div>
    </>
  )
}

export default BlogHome;