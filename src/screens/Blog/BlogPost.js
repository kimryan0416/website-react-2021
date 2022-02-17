import { Component } from "react";
import axios from 'axios';

import BlogBlock, { parseRawData } from './BlogBlock';

import { Divider } from "../../components";

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      contents: null,
      error: null
    }
  }
  componentDidMount() {
    if (
      typeof this.props.post === 'undefined' 
      || this.props.post == null 
      || typeof this.props.post.notion_page_id === 'undefined' 
      || this.props.post.notion_page_id == null
    ) {
      this.setState({
        loading: false,
        error: "Unable to load blog content due to missing blog data."
      });
      return;
    }

    axios.get(`https://hidden-savannah-61825.herokuapp.com/blog?id=${this.props.post.notion_page_id}`).then(res => {
      if (res.status !== 200) {
        this.setState({
          loading:false,
          error:res.statusText
        });
        return;
      }
      const return_data = parseRawData(res.data);
      this.setState({
        loading:false,
        contents: return_data
      });
    });
  }

  render() {
    if (this.state.loading) return <p>Loading blog content from server...</p>;
    if (this.state.error) return <p>{this.state.error}</p>
    return (
      <div>
        <BlogMetadata {...this.props.post} />
        <Divider space={16} />
        {this.state.contents.map((block,index)=>{
          return <BlogBlock key={`${block.id}`} block={block} index={index} />
        })}
        {this.props.children}
      </div>
    );
  }
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