
import React from 'react';
import Input from '../../../components/ui-elements/input';

const Step1 = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 '>
      <div className='text-lg font-medium'>
        Instance Id:
      </div>
      <div>
        <Input/>
      </div>
    </div>
  );
}

export default Step1;
