import React from 'react';
import withLoading from './withLoading';

// You will probably be lazy loading page components which usually don't accept props
const Hello = withLoading(() => import('./Hello'));

// const Hello = Loadable({
//   loader: () => import('./Hello'),
//   loading: Loading,
// });

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello />
    </div>
  );
};

export default App;
