
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike: () => { this.setState((prevState) => ({ likes: prevState.likes + 1 })) },
      handleDislike: () => { this.setState((prevState) => ({ dislikes: prevState.dislikes + 1 })) },
      totalReaction: () => {
        return this.state.likes + this.state.dislikes;
      }
    };
  }
  render() {
    return (
    <>
    <div className='content-rating'>
    <div className='content-rating'>
        <p>
        Neke is the smartest person you know. he has a good memory and quick thinking skills.
        </p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
          <p> Total Reaction {this.state.totalReaction()}</p>
        </div>
    </div>
    </div>
    </>
    );
  }
}

export default ContentRating;
