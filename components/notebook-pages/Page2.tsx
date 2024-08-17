import React, {useEffect} from 'react';
import Image from 'next/image';

interface PageProps {
    setPrompt: (prompt: string) => void;
  }

export default function Page2({ setPrompt }: PageProps) {
    useEffect(() => {
        setPrompt('Explain how self-attention works in LLM to a 12 years old');
      }, [setPrompt]);

  return (
    <div className="flex flex-col justify-items-stretch space-y-8 ">
        <h1 className="text-4xl font-bold">Self Attention</h1>
        <p>Self-attention is the key concept in the transformer.
        This is what allows GPT to understand the relationships between words.</p>
        <Image
            src="/img/page2/img1.png"
            width={500}
            height={500}
            alt="Picture"
            />
        <Image
            src="/img/page2/img2.png"
            width={500}
            height={500}
            alt="Picture"
            />
        <p>Self-attention looks at each token in a body of text and decides which others are most important to understanding its meaning.</p>
        <Image
            src="/img/page2/img3.png"
            width={500}
            height={500}
            alt="Picture"
            />
        <p>
         With self-attention, the transformer computes all the words in a sentence at the same time, instead of sequentially. <br />
         Capturing this context gives LLMs far more sophisticated capabilities to parse language.
        </p>
        <Image
            src="/img/page2/img4.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>
        In this example, assessing the whole sentence at once means the transformer is able to understand that interest is being used as a noun to explain an individual&apos;s take on politics.
        </p>
        <Image
            src="/img/page2/img5.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>If we tweak the sentence, the model understands interest is now being used in a financial sense.</p>
        
        <Image
            src="/img/page2/img6.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>Even if we combine the texts, </p>
        <Image
            src="/img/page2/img7.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>The model is still able to recognise the correct meaning of each word thanks to the attention it gives the accompanying text.</p>
        
        <Image
            src="/img/page2/img8.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <Image
            src="/img/page2/img9.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>This functionality is crucial for advanced text generation. Without it, words that can be interchangeable in some contexts but not others can be used incorrectly.</p>
        <Image
            src="/img/page2/img10.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>This capability goes beyond words, like interest, that have multiple meanings. Take the example below, the transformer is able to calculate that <b>IT</b> is most likely referring to <b>DOG</b></p>
        <Image
            src="/img/page2/img11.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>And if we alter the sentence by just swapping hungry and delicious, the model is able to calculate now that <b>IT</b> is most likely referring to <b>BONE</b></p>
        <Image
            src="/img/page2/img12.png"
            width={500}
            height={500}
            alt="Picture"
        />
        <p>The self-attention model allows LLMs to take context from beyond sentence boundaries, giving the model a greater understanding of how and when a word is used.</p>
    </div>
  );
};