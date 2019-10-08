import React from 'react';
import '../styles/Post-Page.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

function PostPage(props) {
  return (
    <div className="post-page">
      <div className="post-page__title">
        {props.postTitle}
      </div>
      <div className="post-page-info">
        <span className="post-page-info__date">MARCH 2, 2016</span>
        <span className="post-page-info__pipe">|</span>
        <span className="post-page-info__travel">TRAVEL</span>
      </div>
      <div className="post-page__delimetr" ></div>
      <p>
        {props.postText}
      </p>
      <div className="post-page_subtitle">
        {props.postTitle}
      </div>
      <p>
        In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.
      </p>
      <p>
        Integer nulla ex, aliquet eget erat non, lobortis tristique risus. Aliquam gravida urna quis odio fermentum cursus. Donec semper ante quis vulputate sagittis. In diam est, pulvinar vehicula mattis at, elementum quis ex. Pellentesque vitae nisl at risus malesuada mattis. Sed et justo dui. Sed elementum orci in nisi ullamcorper scelerisque. Maecenas et tempor dui, a volutpat risus. Sed quam arcu, sagittis non leo et, condimentum porttitor arcu. Aenean orci ex, cursus sed feugiat et, finibus id diam. Etiam gravida volutpat consequat.
      </p>
      <p>
        Aenean id neque porta, maximus tellus sit amet, aliquet mi. Curabitur lectus diam, pharetra vitae gravida in, faucibus nec tortor. Suspendisse porta, felis nec suscipit tincidunt, urna turpis bibendum nisi, eu malesuada ex magna id dolor. Praesent nunc turpis, elementum vitae dapibus ut, suscipit in lectus. In sit amet gravida dui. Quisque quis est urna. Ut eu malesuada eros. Aliquam pharetra pellentesque magna. Maecenas consequat quam sit amet diam faucibus accumsan. Aenean lectus elit, vestibulum id dui vitae, facilisis dictum augue. Curabitur viverra eu lorem eget facilisis. Sed ut risus sed tortor lacinia lacinia non in ex. Suspendisse tortor ante, interdum eget iaculis sit amet, blandit sit amet orci. Aenean tortor est, malesuada in tellus id, semper mollis risus.
      </p>
      <div className="post-page_subtitle post-page_subtitle2">
        {props.postTitle}
      </div>
      <p>
        In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.
      </p>
      <p>
        Integer nulla ex, aliquet eget erat non, lobortis tristique risus. Aliquam gravida urna quis odio fermentum cursus. Donec semper ante quis vulputate sagittis. In diam est, pulvinar vehicula mattis at, elementum quis ex. Pellentesque vitae nisl at risus malesuada mattis. Sed et justo dui. Sed elementum orci in nisi ullamcorper scelerisque. Maecenas et tempor dui, a volutpat risus. Sed quam arcu, sagittis non leo et, condimentum porttitor arcu. Aenean orci ex, cursus sed feugiat et, finibus id diam. Etiam gravida volutpat consequat.
      </p>
      <p>
        Aenean id neque porta, maximus tellus sit amet, aliquet mi. Curabitur lectus diam, pharetra vitae gravida in, faucibus nec tortor. Suspendisse porta, felis nec suscipit tincidunt, urna turpis bibendum nisi, eu malesuada ex magna id dolor. Praesent nunc turpis, elementum vitae dapibus ut, suscipit in lectus. In sit amet gravida dui. Quisque quis est urna. Ut eu malesuada eros. Aliquam pharetra pellentesque magna. Maecenas consequat quam sit amet diam faucibus accumsan. Aenean lectus elit, vestibulum id dui vitae, facilisis dictum augue. Curabitur viverra eu lorem eget facilisis. Sed ut risus sed tortor lacinia lacinia non in ex. Suspendisse tortor ante, interdum eget iaculis sit amet, blandit sit amet orci. Aenean tortor est, malesuada in tellus id, semper mollis risus.
      </p>
      <Link to="/" className="post-page__vievPosts">
        Viev all posts
      </Link>
    </div>
  );
}

const mapStateToProps = function(state) {
  return {
    postTitle: state.title,
    postText: state.text,
  }
}
export default connect(mapStateToProps)(PostPage);