import { 
  Link,
  withRouter,
} from "react-router-dom";

import { 
  Divider, 
  Button,
} from "../../components";
import {
  useBlog
} from '../../hooks';


function BlogHome() {
  const { blog } = useBlog();
  return blog.posts.map((post,i)=>{
    return (
      <div className='blogHomeItem' key={`home_blog_item_${i}`}>
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

export default withRouter(BlogHome);