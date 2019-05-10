import React from 'react';
import './Card.css';


class Card extends React.Component {
  static defaultProps = {
    title: 'no title',
    content: 'no content',
  };
  render() {
    //console.log('Using a class component!')
    //console.log(this.props)
    return (
        <div className="Card">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
        </div>
    )
  }
}

export default Card;