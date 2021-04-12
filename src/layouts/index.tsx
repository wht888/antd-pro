import { useModel } from 'umi';
import ProLayout from '@ant-design/pro-layout';
import sider from './sider';
import footerRender from './footer';
import headerContentRender from './header';

const Layouts: React.FC = (props) => {
  const { children } = props;

  const { initialState } = useModel('@@initialState');
  const sideProps = sider();
  return (
    <div style={{ height: '100vh' }}>
      {initialState?.token ? (
        <ProLayout
          {...sideProps}
          headerContentRender={headerContentRender}
          footerRender={footerRender}
        >
          {children}
        </ProLayout>
      ) : (
        <div>555</div>
      )}
    </div>
  );
};

export default Layouts;
