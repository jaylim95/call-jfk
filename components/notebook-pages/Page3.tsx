// components/notebook/Page1.tsx
import React, {useEffect} from 'react';
import Image from 'next/image';

interface Page1Props {
    setPrompt: (prompt: string) => void;
  }

export default function Page({ setPrompt }: Page1Props) {
    useEffect(() => {
        setPrompt('Welcome to the introduction page.');
      }, [setPrompt]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Introduction</h1>
      <img src="/images/page1.jpg" alt="Introduction" className="w-full h-auto mb-4 rounded-md" />
      <p className="text-lg text-gray-700">This is the third page of the notebook.</p>
    </div>
  );
};

export const prompt = 'page3';