import ProLayout from '@ant-design/pro-layout';

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <div style={{ height: '100vh' }}>
      <ProLayout>{children}</ProLayout>
    </div>
  );
};

export default Layout;
