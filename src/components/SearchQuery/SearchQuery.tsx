import React, { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchQuery.scss';

export const SearchQuery: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value) {
      searchParams.set('query', value);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
  };

  return (
    <div>
      <input
        className="search-query"
        placeholder="Search..."
        type="search"
        onChange={handleQuery}
      />
    </div>
  );
};
