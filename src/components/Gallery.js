import React from "react";
import "../Gallery.css";
import Popup from "reactjs-popup";

class Gallery extends React.Component {
  render() {
    return (
      <main>
        <div class="mask"></div>
        <div class="container">
          <div class="gallery">
            {this.props.user.media.map((item) => (
              <Popup
                trigger={
                  <div class="gallery-item" tabindex="0">
                    <img src={item.url} class="gallery-image" alt="" />
                    <div class="gallery-item-info">
                      <ul>
                        <li class="gallery-item-likes">
                          <span class="visually-hidden">Likes:</span>
                          <i class="fas fa-heart" aria-hidden="true"></i>{" "}
                          {item.likes}
                        </li>
                        <li class="gallery-item-comments">
                          <span class="visually-hidden">Comments:</span>
                          <i class="fas fa-comment" aria-hidden="true"></i>{" "}
                          {item.commentsCount}
                        </li>
                      </ul>
                    </div>
                  </div>
                }
                modal
                closeOnDocumentClick
              >
                <div>
                  <span class="divLeft">
                    <img src={item.url} class="gallery-image" alt="" />
                  </span>
                  <span class="divRight">
                  {item.comments.map((item2) => (
                    <div class="header">
                      <img src={item2.userURL} />
                      <span class="displayName title">{item2.userName}</span>
                      <span class="displayName caption">{item2.commentDate}</span>
                      <p>
                        {item2.commentBody}
                      </p>
                    </div>
                  ))}
                    
                  </span>
                </div>
              </Popup>
            ))}
          </div>

          <div class="loader"></div>
        </div>
      </main>
    );
  }
}

export default Gallery;
