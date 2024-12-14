```javascript
// AppSolution.js
import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';

function MyComponent() {
  const { data, isError, error } = useQuery(['repoData'], () => {
    return fetch('/api/data').then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    });
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>; //Always show loading message until data arrives
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