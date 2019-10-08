import React from 'react';
import '../styles/Post.css';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
  
function Post(props) {
  
  function ContinueReading(){
    props.post_info(props.text, props.title);
  }
  return (
    <div className="post">
      <div className="post-title">
        {props.title}
      </div>
      <div className="post-nav">
        <div className="post-nav__date">MARCH 2, 2016</div>
        <div className="post-nav__pipe">|</div>
        <div className="post-nav__travel">TRAVEL</div>
      </div>
      <div className="post-text">
        {props.text}
      </div>
      <Link to="/Post" className="post-btn" onClick={ContinueReading}>
        <div className="post-btn__text">Continue reading</div>
      </Link>
      <div className="post-delimetr"></div>
    </div>
  );
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps,
  dispatch => ({
    post_info: (text, title) => {
      dispatch({ type: 'post-text', value: text});
      dispatch({ type: 'post-title', value: title});
    }
  })
)(Post);