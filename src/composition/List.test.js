import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
    const cards = [
        { title: 'First card', content: 'lorem ipsum' }, 
        { title: 'Second card', content: 'lorem ipsum' },
        { title: 'Fifth card', content: 'lorem ipsum' }
    ];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key="1" header="First list" cards={cards} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List key="1" header="First list" cards={cards} />)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});