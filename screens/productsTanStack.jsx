// https://www.npmjs.com/package/@tanstack/react-query
// https://tanstack.com/query/latest/docs/framework/react/overview
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import SearchBar from './SearchBar';
// import TanStackSearchBar from '../components/tanStackQuery';
import Products from '../components/products';

const queryClient = new QueryClient();

const ProductsTanStackPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
};

export default ProductsTanStackPage;
