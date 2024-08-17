// components/notebook/Page1.tsx
import React from 'react';
import Image from 'next/image';

export default function Page1() {

return (
    <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="text-2xl font-bold mb-4">Embeddings</h1>
        <Image
            src="/img/img1.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        <p>To write text, LLMs must first translate words into a language they understand.</p>
        <p>First, the sentence are broken into tokens</p>
        <Image
            src="/img/img2.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        <p>In order to grasp a word&apos;s meaning, let&apos;s say work in our example, LLM observe it in the context of the enormous training data, taken notes of nearby words.</p>
        <Image
            src="/img/img3.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        <p>
            Eventually, we end up with a huge set of words found <u>alongside</u> <b>WORK</b> in the training data as well as those that <u>weren't</u> found near it.
        </p>
        <Image
            src="/img/img7.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <p>
        As the model <u>processes</u> this set of words, it produces a vector (a list of values)
        </p>
        <Image
            src="/img/img8.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <p>This vector is known as a <b>word embedding</b></p>
        <p>A word embedding can have hundreds of values, each representing a different aspect of a word&apos;s meaning. </p>
        <p>Just as you might describe a house by its characteristics — type, location, bedrooms, bathrooms, storeys — the values in an embedding quantify a word&apos;s linguistic features.</p>
        <p>In words embedding, words we expect to be used in comparable ways often have similar-looking embeddings.</p>
        <Image
            src="/img/img9.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <Image
            src="/img/img10.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <Image
            src="/img/img11.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <p>By reducing the hundreds of values each embedding represents to just two, we can see the distances between these words more clearly.</p>
        <Image
            src="/img/img12.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        
    </div>
  );
};

export const prompt = 'Explain what is tokens, Word Embeddings and how word embeddings are generated to a 12 years old';