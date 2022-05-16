import { useState, useEffect } from "react";

import BlogBlock, { parseRawData } from './BlogBlock';

import { 
  Divider 
} from "../../components";
import { useBlog } from '../../hooks';

const BlogPost = (props) => {
  const { getPost } = useBlog();
  const [ loading, setLoading ] = useState(true);
  const [ contents, setContents ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(()=>{
    const PreparePost = async() => {
      let res = await getPost(props.post.notion_page_id);
      console.log(res);
      if (res.status === 200) {
        const return_data = parseRawData(res.data);
        setContents(return_data);
        setLoading(false);
      } else {
        setError(res.error);
        setLoading(false);
      }
    }
    if (
      typeof props.post === 'undefined' 
      || props.post == null 
      || typeof props.post.notion_page_id === 'undefined' 
      || props.post.notion_page_id == null
    ) {
      setError("Unable to load blog content due to missing blog data.");
      setLoading(false);
    } else {
      PreparePost();
    }
  },[props.post, getPost])

  if (loading) return <p>Loading blog content from server...</p>;
  if (error) return <p>{error}</p>
  return (
    <div>
      <BlogMetadata {...props.post} />
      <Divider space={16} />
      {contents.map((block,index)=>{
        return <BlogBlock key={`${block.id}`} block={block} index={index} />
      })}
      {props.children}
    </div>
  );
}

function BlogMetadata(props) {
  let description = (props.description) 
    ? <><p><i>{props.description}</i></p><Divider space={4} /></>
    : null;
  let postDate = (props.publish_date) 
    ? <p><i><strong>Posted on:</strong> {props.publish_date}</i></p>
    : null;
  /*
  let modifiedDate = (meta.post_modified) 
    ? <p><i><strong>Modified last:</strong> {meta.post_modified}</i></p>
    : null;
  */
  let visibleClass = (description || postDate)
    ? 'visibleMeta'
    : '';
  return (
    <div className={visibleClass}>
      {description}
      {postDate}
      {/*modifiedDate*/}
    </div>
  );
}

export default BlogPost;