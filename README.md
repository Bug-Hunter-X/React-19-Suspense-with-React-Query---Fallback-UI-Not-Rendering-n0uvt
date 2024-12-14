# React 19 Suspense with React Query - Fallback UI Not Rendering

This repository demonstrates a subtle bug encountered when integrating React 19's Suspense component with TanStack's React Query library.  Under certain conditions, the Suspense fallback UI fails to render during initial data loading, leading to a frozen UI instead of a loading indicator.

## Problem Description

The issue is related to how Suspense handles promises and React Query's asynchronous data fetching.  While the `useQuery` hook is designed to be asynchronous and handle loading states, the combination with Suspense doesn't always behave as expected.  The fallback UI is not displayed while fetching the data, and instead the app hangs.

## Solution

The solution involves ensuring that the promise returned by React Query's data fetching function is handled appropriately within the context of Suspense.  Specific adjustments might be needed depending on your setup, but the example provided illustrates a common approach.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## License

MIT