import Didact from './Didact/index.js';

const container = document.getElementById('root');

// const element = Didact.createElement(
//   'div',
//   {
//     id: 'foo',
//   },
//   Didact.createElement('a', null, 'bar'),
//   Didact.createElement(
//     'div',
//     {
//       id: 'foo-1',
//       name: 'click',
//       class: 'foo-1',
//       onClick: () => {
//         console.log('zsf');
//       },
//     },
//     '123'
//   )
// );

function App(props) {
  return Didact.createElement(
    'div',
    {
      id: 'foo',
    },
    Didact.createElement('a', null, 'bar'),
    Didact.createElement(
      'div',
      {
        id: 'foo-1',
        name: 'click',
        class: 'foo-1',
        onClick: () => {
          console.log('zsf');
        },
      },
      '123'
    )
  );
}

const element = Didact.createElement(App, { name: 'foo' });
Didact.render(element, container);
