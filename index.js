import Didact from './Didact/index.js';

const container = document.getElementById('root');

function App(props) {
  const [state, setSate] = Didact.useState(1);
  return Didact.createElement(
    'div',
    {
      id: 'foo',
    },
    Didact.createElement('a', null, 'bar'),
    Didact.createElement(
      'div',
      {
        id: props.id,
        name: 'click',
        class: 'foo-1',
        onClick: () => {
          setSate(state + 1);
        },
      },
      `count: ${state}`
    )
  );
}

const element = Didact.createElement(App, { id: 'foo-1' });
Didact.render(element, container);
