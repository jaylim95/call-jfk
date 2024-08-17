// components/notebook/Page1.tsx
import React, {useEffect} from 'react';
import Image from 'next/image';

interface PageProps {
    setPrompt: (prompt: string) => void;
  }

export default function Page3({ setPrompt }: PageProps) {
    useEffect(() => {
        setPrompt('Explain what is tokens, Word Embeddings and how word embeddings are generated to a 12 years old.');
      }, [setPrompt]);

return (
    <div className="flex flex-col justify-items-stretch space-y-8">
        <h1 className="text-4xl font-bold ">Embeddings</h1>
        <Image
            src="/img/page1/img1.png"
            width={500}
            height={500}
            alt="Picture"
            />
        <p>To write text, LLMs must first translate words into a language they understand. <br />First, the sentence are broken into tokens</p>
        

        <Image
            src="/img/page1/img2.png"
            width={500}
            height={500}
            alt="Picture"
            />
        <p>In order to grasp a word&apos;s meaning, let&apos;s say work in our example, LLM observe it in the context of the enormous training data, taken notes of nearby words.</p>
        <Image
            src="/img/page1/img3.png"
            width={500}
            height={500}
            alt="Picture"
            />
        <p>
            Eventually, we end up with a huge set of words found <u>alongside</u> <b>WORK</b> in the training data as well as those that <u>weren&apos;t</u> found near it.
        </p>
        <Image
            src="/img/page1/img7.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>
        As the model <u>processes</u> this set of words, it produces a vector &#40;a list of values	&#41;
        </p>
        <Image
            src="/img/page1/img8.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>This vector is known as a <b>word embedding</b></p>
        <p>A word embedding can have hundreds of values, each representing a different aspect of a word&apos;s meaning. </p>
        <p>Just as you might describe a house by its characteristics — type, location, bedrooms, bathrooms, storeys — the values in an embedding quantify a word&apos;s linguistic features.</p>
        <p>In words embedding, words we expect to be used in comparable ways often have similar-looking embeddings.</p>
        <Image
            src="/img/page1/img9.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <Image
            src="/img/page1/img10.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <Image
            src="/img/page1/img11.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>By reducing the hundreds of values each embedding represents to just two, we can see the distances between these words more clearly.</p>
        <Image
            src="/img/page1/img12.png"
            width={500}
            height={500}
            alt="Picture"
        />
        
    </div>
  );
};
