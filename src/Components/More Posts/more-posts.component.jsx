import React from 'react';

import './more-posts.styles.scss';

export const MorePosts = ({handleClick}) => {
    return (
        <div className="btn-wrapper">
          <button className="more-posts-btn" onClick={handleClick}>Load More Posts</button>
        </div>
    )
}