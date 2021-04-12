import { useState } from 'react';

export default () => {
  const [name, setName] = useState('');

  return {
    name,
    setName,
  };
};
