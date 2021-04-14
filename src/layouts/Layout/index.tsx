import ProLayout from '@ant-design/pro-layout';
import Header from './Header';

const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <div style={{ height: '100vh' }}>
      <ProLayout
        title=""
        logo={require('@/assets/logo.svg')}
        rightContentRender={Header}
      >
        {children}
      </ProLayout>
    </div>
  );
};

export default Layout;
