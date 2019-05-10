import React from 'react';
import Card from './Card';
import './List.css';


class List extends React.Component {
  static defaultProps = {
    header: 'no header',
    cards: [],
  };
  render() {
    //console.log('Using a class component!')
    const listOfCards = this.props.cards.map(function(card, index) {
        return <Card key={index} title={card.title} content={card.content}/>
    });
    return (
        <section className="List">
            <header className="List-header">
                <h2>{this.props.header}</h2>
            </header>
            <div className="List-cards">
                {listOfCards}
            </div>
        </section>
    )
  }
}

export default List;






