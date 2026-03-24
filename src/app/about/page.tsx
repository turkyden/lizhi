'use client';

import Back from '@/components/back';

export default function AboutPage() {
  return (
    <>
      <Back to="/" />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <iframe width={800} height={800} src="/lizhi.pdf"></iframe>
      </div>
    </>
  );
}
