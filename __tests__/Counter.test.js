import React from "react";
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { create } from "react-test-renderer";
import Counter from "./tmp/Counter";

let container;

let act = ReactTestUtils.act;


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
    it('Doit s\'afficher', () => {
        act(() => {ReactDOM.render(React.createElement(Counter), container)})

        const label = container.querySelector('p');

        expect(container.outerHTML).toBe('<div id="container"><div><p>Vous avez cliqué 0 fois</p><button>Cliquez ici</button></div></div>');
        expect(label.textContent).toBe('Vous avez cliqué 0 fois');
        expect(document.title).toBe('Vous avez cliqué 0 fois');
    });

    it('Doit passer à 1 quand on clique', function () {
        act(() => {ReactDOM.render(React.createElement(Counter), container)})

        const button = container.querySelector('button')
        const label = container.querySelector('p')

        act(() => {button.dispatchEvent(new MouseEvent('click', {bubbles: true}))})

        expect(label.textContent).toBe('Vous avez cliqué 1 fois')
        expect(document.title).toBe('Vous avez cliqué 1 fois')
    });

    it('Doit passer à 3 quand on clique 3 fois', function () {
        act(() => {ReactDOM.render(React.createElement(Counter), container)})

        const button = container.querySelector('button')
        const label = container.querySelector('p')

        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
        })

        expect(label.textContent).toBe('Vous avez cliqué 3 fois')
        expect(document.title).toBe('Vous avez cliqué 3 fois')
    });
});
