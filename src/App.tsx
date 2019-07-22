import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const Hello = Loadable({
  loader: () =>
    new Promise<typeof import('./Hello')>(resolve =>
      setTimeout(() => resolve(import('./Hello')), 2000),
    ),
  loading: Loading,
});

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello />
    </div>
  );
};

export default App;
