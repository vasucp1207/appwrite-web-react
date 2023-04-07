import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SignInEmail } from '../src/components/SignInEmail';
import { SignInOauth } from '../src/components/SignInOauth';
import { useConfig } from '../src/helpers/useProvidersApi';

const App = () => {
  const { client, account, database, storage, avatars } = useConfig({
    endpoint: 'http://localhost/v1',
    projectId: '6351b10aa89690061fa4'
  });

  const config = {
    client,
    account,
    database,
    storage,
    avatars
  }

  return (
    <div>
      <SignInEmail account={account} theme='light' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
