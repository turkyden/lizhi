import React from 'react';

function Download() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <iframe width={800} height={800} src="/lizhi.pdf"></iframe>
    </div>
  );
}

export default Download;
