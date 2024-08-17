import React, {useEffect} from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface PageProps {
    setPrompt: (prompt: string) => void;
  }

export default function Page5({ setPrompt }: PageProps) {
    useEffect(() => {
        setPrompt('');
      }, [setPrompt]);
      
  return (
    <div className="flex flex-col justify-items-stretch space-y-8 ">
        
        <h1 className="text-4xl font-bold ">Hands-on Project - Build a multi-step story!</h1>
        
        <p>Write a choose your own adventure storiy by prompting ChatGPT. See some examples below!</p>
        <u><a href="https://mrfortin.com/stories/Night_Monster_Story" target="_blank">Night Monster Story</a></u>
        <u><a href="https://mrfortin.com/stories/Escape_Barbie" target="_blank">Escape Barbie</a></u>
        <u><a href="https://mrfortin.com/stories/The_Dating_Scam" target="_blank">the Dating Scam</a></u>

        <h2 className="text-2xl font-bold "> The step by step</h2>
        <ol className="pl-4  list-decimal list-outside">
            <li className='my-2'>Think of a fantasy world where your story is. I.e., a world where all the ocean has dried up, a world where all land is flooded and people now live in boats, or a world where humans have colonised Mars</li>
            <li className='my-2'>Think of a main character</li>
            <li className='my-2'>Start with some background story, and then create a decision to be made by the main character</li>
            <li className='my-2'>Expand on your story by writing the consequence of the decision, and create the next decision point</li>
            <li className='my-2'>Be creative! Consider adding the following things</li>
                <ul className="pl-4  list-disc list-outside">
                    <li className='my-2'>create dialogues with different speaking styles, i.e., rapper, medieval knight, yoda</li>
                    <li className='my-2'>create poems</li>
                    <li className='my-2'>create pictures to be added to the story</li>
                </ul>
        </ol>
        <p>
            Use Twinery below to create your interactive story!
        </p>
        
        
        <h2 className="text-2xl font-bold ">Twinery Guide</h2>
        <Button  variant='outline' size='lg' onClick={() => window.open('https://twinery.org/', '_blank')}>Open Twinery</Button>
        <ul className='pl-4 list-disc list-outside'>
            <li className='my-2'>
                Put the decisions in <b>double square brackets</b>double square brackets &#91;&#91;<i>decision 1</i>&#93;&#93; to create new branches
                <Image
                    src="/img/page5/img1.png"
                    width={500}
                    height={500}
                    alt="Picture"
                    className = 'border-2'
                />
                <Image
                    src="/img/page5/img2.png"
                    width={500}
                    height={500}
                    alt="Picture"
                    className = 'border-2'
                />
            </li>
            <li className='my-2'>
                Use <b>Rename</b> to change the name of the decisions or branches
                <Image
                    src="/img/page5/img3.png"
                    width={500}
                    height={500}
                    alt="Picture"
                    className = 'border-2'
                />
            </li>
            <li className='my-2'>
                Use <b>Embed</b> to add pictures or sound
                <Image
                    src="/img/page5/img4.png"
                    width={500}
                    height={500}
                    alt="Picture"
                    className = 'border-2'
                />
            </li>
            <li className='my-2'>
                Click <b>Build</b> and then <b>Play</b> to see your story live!
                <Image
                    src="/img/page5/img5.png"
                    width={500}
                    height={500}
                    alt="Picture"
                    className = 'border-2'
                />
            </li>
            <li className='my-2'>
                Click <b>Build</b> and then <b>Publish to File</b> to download a html file that you can keep and publish on github for everyone on the web to see!
                <Image
                    src="/img/page5/img6.png"
                    width={500}
                    height={500}
                    alt="Picture"
                    className = 'border-2'
                />
            </li>
        </ul>
        
        <h2 className="text-2xl font-bold ">Publishing your story on Github for your friends & family to try!</h2>

        <ol className="pl-4  list-decimal list-outside">
          <li className='my-2'>Set up a GitHub account
            <ol className="pl-4  list-disc list-outside">
              <li className='my-2'>Go to <u><a href="https://github.com">github.com</a></u> and enter your email, a password, and most importantly a username. This username will be part of the URL used to go to your story, and cannot be changed later (make sure it&#39;s a good one).</li>
              <li className='my-2'>Complete the captcha and uncheck the emails box if you don&#39;t wish to receive any, then press the &quot;Free plan&quot; button.</li>
              <li className='my-2'>You can fill in what your interests are, or just scroll to the bottom and press &quot;Complete setup&quot;.</li>
              <li className='my-2'>Verify your email: Log into your email, find the email from GitHub, and click the link to verify (if you can&#39;t find it, check your spam folder).</li>
            </ol>
          </li>
          <li className='my-2'>Create a repository
            <ol className="pl-4  list-disc list-inside">
              <li className='my-2'>Back on <u><a href="https://github.com">github.com</a></u>, click on the button that says &quot;Create a new repository&quot;. Name the repository after the story; this will be the second part of the URL, the story name.</li>
              <li className='my-2'>Select &quot;Public&quot;.</li>
              <li className='my-2'>Check the box that says &quot;Initialize this project with a README&quot; (this is important).</li>
              <li className='my-2'>Press &quot;Create repository&quot;.</li>
            </ol>
          </li>
          <li className='my-2'>Add your story
            <ol className="pl-4  list-disc list-inside">
              <li className='my-2'>Press the menu that says &quot;Branch: master&quot;.</li>
              <li className='my-2'>In the box, put exactly &quot;gh-pages&quot; (capitalization matters) and press enter.</li>
              <li className='my-2'>Under the branches menu, select the newly created gh-pages branch.</li>
              <li className='my-2'>Press &quot;Add file &gt; Upload files&quot;.</li>
              <li className='my-2'>Take the HTML file given by Twine&#39;s &quot;Publish to file&quot; option and rename it to &quot;index.html&quot;.</li>
              <li className='my-2'>Drag and drop the index.html file here to upload and then press &quot;Commit changes&quot;.</li>
            </ol>
          </li>
          <li className='my-2'>And done. Your story is now available for all to see at <code>username.github.io/storyname</code>.</li>
        </ol>
    </div>
  );
};