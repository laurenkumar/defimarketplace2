import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const HeaderSearch: React.FC = () => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
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
