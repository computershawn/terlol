import React from 'react';
import './styles/style.css';
import List from './composition/List';


class App extends React.Component {
  static defaultProps = {
    store: {}
  };

  render() {
    let allCards = this.props.store.allCards;
    const allCardLists = this.props.store.lists.map(function(cardList) {
      let myCards = cardList.cardIds.map(cardID => allCards[cardID])
      return <List key={cardList.id} header={cardList.header} cards={myCards} />
    });

    return (
      <main className="App">
      <header className="App-header">
        <h1>-/ terlol /-</h1>
      </header>
      <div className="App-list">
        {allCardLists}
      </div>
    </main>
    );
  }
}

export default App;