import React, {useState, useEffect, useCallback, useReducer} from 'react';
import axios from "axios";
import '../styles/Home.css';

import Post from './Post';
 
const initialState = {
  loading: true,
  error: null,
  allPosts: []
}

const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_ERROR = "REQUEST_ERROR";

function reducer(state, action) {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return {loading: false, error: null, allPosts: action.data};
    case REQUEST_ERROR:
      return {loading: false, error: action.data, allPosts: []};
    default:
      return initialState;
  }
}

function useGetDataFrom(url){  // Кастомный хук
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getData(){
    try {
      const { data } = await axios.get(url);

      dispatch({type: REQUEST_SUCCESS, data: 
        data.map( (post) => { 
          const userId = post.userId;
          const id = post.id; 
          const title = post.title.charAt(0).toUpperCase() + post.title.slice(1);
          const body = post.body.charAt(0).toUpperCase() + post.body.slice(1); 
          return {userId, id, title, body}; 
        })
      });
    } catch (exception) {
      dispatch({type: REQUEST_ERROR, data: exception.message});
    }
  }

  useEffect( () => {
    getData();        
  })

  return state;
}

function Home() {
//  const [counter, setCounter] = useState(7); // Текущее количество отображаемых постов на странице
  const {loading, error, allPosts} = useGetDataFrom('https://jsonplaceholder.typicode.com/posts');
  const [visibleMorePosts, setVisibleMorePosts] = useState(true); // После того, как все посты отображены - false (скрыть btn) 
  const [visiblePosts, setVisiblePosts] = useState([]);
/* Не получается задать начальное состояние для visiblePosts
  const [visiblePosts, setVisiblePosts] = useState(allPosts.slice(0, 7)); - не сработает, т к
  до первого рендера - allPosts = [], поэтому сразу вызываю обработчик нажатия на btn*/
  
  useEffect( () => {
    handleMorePostsButtonClick();
  }, [allPosts.length])

  const handleMorePostsButtonClick = useCallback( () => {
    const step = 10;
 
    if (visiblePosts.length + step >= allPosts.length && allPosts.length !== 0) { /* Если текущее кол-во отображаемых
                     постов + шаг > числа всех постов отобразить все посты */
      setVisiblePosts(allPosts.slice());
      setVisibleMorePosts(false); // Т к все посты отображены - убрать кнопку
    }
    else {
      setVisiblePosts(allPosts.slice(0, visiblePosts.length + step));
    }
  }, [visiblePosts, allPosts])

  return (      
    <div className="home">
      { error != null && <div className="home-error-massage">
        <h1>{error}</h1>
      </div>}
      {
        visiblePosts.map( (post) => 
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