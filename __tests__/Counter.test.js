import React from "react";
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { create } from "react-test-renderer";
import Counter from "./tmp/Counter";

let container;

var act = ReactTestUtils.act;

beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('tests basiques du composant', function () {
    it('Le composant s\'affiche', () => {
        act(() => {
            ReactDOM.render(React.createElement(Counter), container);
        });
        expect(container.outerHTML).toBe('<div id="container"><div><p>Vous avez cliqué 0 fois</p><button>Cliquez ici</button></div></div>');
        const button = container.querySelector('button');
        const label = container.querySelector('p');
        expect(label.textContent).toBe('Vous avez cliqué 0 fois');
        expect(document.title).toBe('Vous avez cliqué 0 fois');

        // Teste un second affichage et l'appel à componentDidUpdate
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        expect(label.textContent).toBe('Vous avez cliqué 1 fois');
        expect(document.title).toBe('Vous avez cliqué 1 fois');
    });
});
