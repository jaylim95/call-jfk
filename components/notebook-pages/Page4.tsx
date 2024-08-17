import React, {useEffect} from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface PageProps {
    setPrompt: (prompt: string) => void;
  }

export default function Page4({ setPrompt }: PageProps) {
    useEffect(() => {
        setPrompt('Explain what is zero-shot prompting, few-shot prompting and chain of thought prompting to a 12 years old');
      }, [setPrompt]);
      
  return (
    <div className="flex flex-col justify-items-stretch space-y-8 ">
        
        <h1 className="text-4xl font-bold ">Prompt Expert</h1>
        <h2 className="text-2xl font-bold "> General Tips on Prompting</h2>
        <Button  variant='outline' size='lg' onClick={() => window.open('https://chatgpt.com/', '_blank')}>Open ChatGPT</Button>
        
        <p><b>Be Clear and Specific -</b>The more clearly and specifically you define your prompt, the better the response you&apos;ll get.</p>
        <p>Example: If you are explaining a concept to a 5 year old, or want the output to be formatted in a specific way, say it! </p>
        
        <p><b>Iterate and Refine -</b> Don&apos;t hesitate to tweak your prompt and try again.</p>
        <p>Example: If they give you an answer, but you need more details, you want to change a specific part, tell it so!</p>
        
        <p><b>Context Matters -</b> Providing relevant context within the prompt can guide the model to generate a more accurate and relevant response.</p>
        <p>Example: If you are coding an AI project, or your project has missing data, or you are teaching 16-17 years old, tell it!</p>
        
        <h2 className="text-2xl font-bold "> Fancy ways with shots</h2>
        <p><b>Zero Shot Prompting -</b> Asking the model to perform a task without providing any examples.</p>
        <Image
            src="/img/page4/img1.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        <p><b>Few Shot Prompting -</b> Providing a few examples within the prompt to help the model understand the task.</p>
        <Image
            src="/img/page4/img2.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        <p><b>Chain of Thought Prompting -</b> Encouraging the model to think step-by-step before arriving at an answer, particularly useful for complex reasoning tasks</p>
        <Image
            src="/img/page4/img3.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />

        <h2 className="text-2xl font-bold "> Try out the different prompting strategies with the exercise below!</h2>
        <Button  variant='outline' size='lg' onClick={() => window.open('https://tinyurl.com/gpt-crime', '_blank')}>Open Exercise</Button>

    </div>
  );
};