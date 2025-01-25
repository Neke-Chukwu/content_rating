
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0
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
        <button className="like-button">
            Like ({this.state.likes})
          </button>
          <button className="dislike-button">
            Dislike ({this.state.dislikes})
          </button>
        </div>
    </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
