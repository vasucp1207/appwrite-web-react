![appwrite1](https://user-images.githubusercontent.com/85363195/232071479-e176041e-0be3-4123-91bc-d4d296072660.gif)


<h1 align="center">Appwrite Web React</h1>

<p align="center">This library makes it easy to add authentication features to your web app with ready-made auth screens and a bunch of helper functions for interacting to your appwrite database.</p>

- ✅ Easy to use auth screens
- ✅ Confirmation toasts messages
- ✅ Utilities for appwrite server
- ✅ OAuth2 providers

## 📦Installation

You can install this library via npm:
```bash
npm i appwrite-web-react
```

## 🦄Usage

Setup api's to interact with the various services provided by the Appwrite server,

```tsx
// utils/utils.js
import { useConfig } from "appwrite-web-react";

const { client, account, database, storage, avatars } = useConfig({
  endpoint: API Endpoint,
  projectId: Project ID
});

export {
  client,
  account,
  database,
  storage,
  avatars
}
```

### Auth Screens

To setup your auth flow quickly,
```tsx
// index.tsx
import { SignInEmail } from 'appwrite-web-react';
import "react-toastify/dist/ReactToastify.css";
import { account } from '../../utils/utils';

export default function Home() {
  return (
    <div>
      <SignInEmail 
        account={account} 
        theme='light' 
        routePush='/room'
        routeSign='/'
        routeRst='/reset'
      />
    </div>
  )
}
```

```tsx
// reset.tsx
import React from 'react'
import { Reset, useConfig } from 'appwrite-web-react';
import { account } from '../../utils/utils';

function reset() {
  return (
    <div>
      <Reset 
        theme="light" 
        account={account} 
        routePush='/room' 
      />
    </div>
  )
}

export default reset
```

SignInEmail screen props,
- `account`: Appwrite [account api](https://appwrite.io/docs/client/account).
- `theme`: Theme of auth screen.
- `routePush`: Route you redirected to after loged in your account.
- `routeSign`: Absolute route of your SignInEmail screen.
- `routeRst`: Absolute path of your Reset screen.

### Utilities

```tsx
// room.tsx
import { useListDocuments, useLogedAccount } from 'appwrite-web-react';
import { client, database } from '../../utils/utils';

function room() {
  let { data: movies, error } = useListDocuments(client, database);
  return (
    <div>
      {movies?.map((movie) => {
        <div>
          <div>{movie.name}</div>
          <div>{movie.year}</div>
        </div>
      })}
    </div>
  )
}

export default room
```

`useListDocuments` is a hook that uses the [swr](https://swr.vercel.app/) library from Next.js to fetch and automatically re-fetch data from a collection in the Appwrite database when it's changes so there is no need to managing the states for data when working with this hook.
