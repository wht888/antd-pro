import styles from './index.less';
import { getData } from '../services';
import { useEffect } from 'react';

export default function IndexPage() {
  const onClick = () => {
    getList();
  };
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let res = await getData({});
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <span onClick={onClick}>哈哈哈哈1</span>
    </div>
  );
}
