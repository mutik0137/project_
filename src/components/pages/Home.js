import React, {useState, useEffect, useCallback, useReducer} from 'react';
import axios from "axios";
import '../styles/Home.css';

import Post from './Post';
 
const initialState = {
  loading: true,
  error: null,
  posts: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'request-success':
      return {loading: false, error: null, posts: action.data};
    case 'request-error':
      return {loading: false, error: action.data, posts: []};
    default:
      return initialState;
  }
}

function useGetDataFrom(url){  // Кастомный хук
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getData(){
    try {
      const { data } = await axios.get(url);

      dispatch({type: 'request-success', data: 
        data.map( (post) => { 
          let userId = post.userId;
          let id = post.id; 
          let title = post.title.charAt(0).toUpperCase() + post.title.slice(1);
          let body = post.body.charAt(0).toUpperCase() + post.body.slice(1); 
          return {userId, id, title, body}; 
        })
      });
    } catch (exception) {
      dispatch({type: 'request-error', data: exception.message});
    }
  }

  useEffect( () => {
        getData();
  })

  return state;
}

function Home() {
 const [counter, setCounter] = useState(7), // Текущее количество отображаемых постов на странице
   [visibleMorePosts, setVisibleMorePosts] = useState(true), // После того, как все посты отображены - false (скрыть btn) 
   {loading, error, posts} = useGetDataFrom('https://jsonplaceholder.typicode.com/posts');

  const handleMorePostsButtonClick = useCallback( () => {
    const step = 40;
    if (counter + step > posts.length) { /* Если текущее кол-во отображаемых
                     постов + шаг > числа всех постов отобразить все посты */
      setCounter(posts.length);
      setVisibleMorePosts(false); // Т к все посты отображены - убрать кнопку
    }
    else {
    setCounter(counter + step);
    }
  }, [counter, posts.length])

  return (      
    <div className="home">
      { error != null && <div className="home-error-massage">
        <h1>{error}</h1>
      </div>}
      { 
        posts.slice(0, counter).map( (post) => 
          <Post  key = {post.id} title = {post.title}  text = {post.body}></Post>
        )
      }
      <div>
        {visibleMorePosts && <button className="home-more-posts"  onClick={handleMorePostsButtonClick}>
          <div className="home-more-posts__text">
            More posts
          </div>
        </button>}
      </div>
    </div>
  );
}
  
export default Home;