import {useEffect, useState} from 'react';

export function usePostTitle(){

    const [post, setPost] = useState({});

    async function getPosts(){
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/32");
        const json = await data.json();
        setPost(json);
    }

  useEffect(() => {
    getPosts();
  },[])

  return post.title;
}

export function useFetch(url, retryTime){
    const[finalData, setFinalData] = useState({});
    const[loading, setLoading] = useState(false);

    async function getDetails(){
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setFinalData(json);
      setLoading(false);
    }
    
    useEffect(()=>{
      getDetails();
    },[url]);

    useEffect(()=>{
      setInterval(getDetails, retryTime*1000);
    },[]);

    return {
      finalData,
      loading
    }
}