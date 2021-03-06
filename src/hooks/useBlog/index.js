import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import axios from 'axios';

const _API_URL = 'https://hidden-savannah-61825.herokuapp.com';
function ConvertDate(raw_date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let fullDate = new Date(raw_date);
  return `${months[fullDate.getMonth()]} ${fullDate.getDate()}, ${fullDate.getFullYear()}`;
}

const BlogContext = createContext(null);

const useBlog = _ => useContext(BlogContext);

const BlogProvider = (props) => {
	const [ blog, setBlog ] = useState(null);

	const GetBlog = useCallback(async() => {
		console.log('GETTING BLOG DATABASE...');
		let payloadResponse = null;
		try {
			const res = await axios.get(`${_API_URL}/blog`);
			if (res.status === 200) {
				console.log('BLOG DATABASE RESPONSE RECEIVED');
				payloadResponse = {
		       status: res.status,
		       posts: res.data.map(d=>{
		        return {...d, publish_date:ConvertDate(d.publish_date)}
	        }),
		      error:null
		    };
			} else {
				throw(res);
			}
		} catch(e) {
			let status = (e.status) ? e.status : null;
		  let error = (e.statusText) ? e.statusText : e;
	  	console.error('BLOG DATABASE RESPONSE ERROR:',e);
		  payloadResponse = {
	      status: status,
	      posts: null,
		     error: error
		  }
		}
		setBlog(payloadResponse);
	},[]);

	const GetBlogPost = useCallback(async(id = null) => {
		console.log('GETTING BLOG POST...');
  	let payloadResponse = {};
	  try {
	    if (id === null) throw(new Error('null id provided'));
	    let res = await axios.get(`${_API_URL}/blog/post?id=${id}`)
	    if (res.status === 200) {
	      console.log('BLOG POST RESPONSE RECEIVED');
	      payloadResponse = {
	        status: 200,
	        data:res.data,
	        error: null
	      }
	    } else {
	      throw(res);
	    }
	  } catch(e) {
	    let status = (e.status) ? e.status : null;
	    let error = (e.statusText) ? e.statusText : e; 
	    console.error('ERROR RECEIVING BLOG POST:',error);
	    payloadResponse = {
	      status:status,
	      data:null,
	      error:error
	    }
	  }
	  return payloadResponse;
	},[]);

	useEffect(()=>{
		GetBlog()
	},[GetBlog]);

	return (
		<BlogContext.Provider value={{blog:blog,getBlog:GetBlog,getPost:GetBlogPost}}>
			{props.children}
		</BlogContext.Provider>
	);
}

export {
	useBlog, 
	BlogProvider,
};
