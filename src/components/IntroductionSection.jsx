import Button from './Button';
import React, { useRef, useEffect } from 'react';

const IntroductionSection = () => {
  const downloadBtnRef = useRef(null);

  useEffect(() => {
    downloadBtnRef.current?.focus();
  }, []);

  return (
    <section
      id="introduction"
      className="flex flex-col items-center justify-center min-h-[20vh] text-center p-8 transition-colors duration-300"
    >
      <div className="max-w-[600px] text-black dark:text-white">
        <h1 className="text-5xl font-bold mt-6 mb-6">Hi, I'm Abdulaziz Alfadel</h1>
        <p className="text-xl mb-8">Frontend Developer, Screenwriter and Voice Actor</p>
        <Button
          ref={downloadBtnRef}
          as="a"
          href="ALFADEL-CV-FINAL.pdf"
          download
          variant="introduction"
        >
          Download My Resume
        </Button>
      </div>
    </section>
  );
};

export default IntroductionSection;