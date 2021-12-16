import { Input } from 'antd';

const HeaderSearch: React.FC = () => {
  const { Search } = Input;
  const onSearch = (value: any) => console.log(value);
  return (
    <div>
      <Search
        placeholder='input search text'
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default HeaderSearch;
