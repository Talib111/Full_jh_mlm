import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { upload_kyc } from './Update_kyc';

const Example = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <upload_kyc ref={componentRef} />
    </div>
  );
};

