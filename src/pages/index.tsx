import styles from './index.less';
import { getData } from '../services';
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let res = await getData({});
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
