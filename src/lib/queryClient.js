"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(() => 
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, 
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={ false}></ReactQueryDevtools> */}
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;