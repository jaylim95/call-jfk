import React, {useEffect} from 'react';
import Image from 'next/image';

interface PageProps {
    setPrompt: (prompt: string) => void;
  }

export default function Page1({ setPrompt }: PageProps) {
    useEffect(() => {
        setPrompt('Explain how beam search works to a 12 years old');
      }, [setPrompt]);
      
  return (
    <div className="flex flex-col justify-items-stretch space-y-8">
        <h1 className="text-2xl font-bold ">How does transformer answers your question?</h1>
        <p>To continuously generate the next word, the model gives a probability score to each token, which represents the likelihood of it being the next word in the sequence.</p>
        
        <Image
            src="/img/page3/img1.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        <p>However, predicting just the next token might cause problem, causing the full phrase to be less relevant. For example, Harvard Harvard is about to go for a walk.
        </p>
        <p>Hence, Transformers uses this model called <b>Beam Search</b>Rather than focusing only on the next word in a sequence, it looks at the probability of a larger set of tokens longer or &#40;whole sentences&#41; together.
        </p>

        <Image
            src="/img/page3/img2.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
       
        
    </div>
  );
};