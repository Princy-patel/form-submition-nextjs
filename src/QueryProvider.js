"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

function QueryProvider({ children }) {
  // contains all properties and methods
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <div>{children}</div>
    </QueryClientProvider>
  );
}

export default QueryProvider;
