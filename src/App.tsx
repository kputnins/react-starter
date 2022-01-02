import { FunctionComponent } from 'react';

import Counter from './components/Counter/Counter';

import image from './assets/magic.gif';

const App: FunctionComponent = () => {
  return (
    <div>
      <h1>Welcome to React - {process.env.name}</h1>
      <div>
        <img src={image as string} alt="React logo" />
      </div>
      <Counter />
    </div>
  );
};

export default App;
