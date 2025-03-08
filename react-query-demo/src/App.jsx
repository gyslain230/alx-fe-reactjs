import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

  const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    );
  }
export default App
