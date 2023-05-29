import { Input } from '@arco-design/web-react';

const Search = () => {
  return (
    <div>
      <Input.Search
        allowClear
        placeholder="Enter keyword to search"
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Search;
