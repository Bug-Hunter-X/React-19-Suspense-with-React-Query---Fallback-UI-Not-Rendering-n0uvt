```javascript
// App.js
import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';

function MyComponent() {
  const { data, isLoading } = useQuery(['repoData'], () => {
    return fetch('/api/data').then((res) => res.json());
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Repository Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MyComponent />
    </Suspense>
  );
}
```