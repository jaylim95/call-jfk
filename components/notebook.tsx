'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useStore from "@/app/store/store";
import { Button } from './ui/button';
import { IconArrowRight } from './ui/icons';
import Page1 from './notebook-pages/Page1';
import Page2 from './notebook-pages/Page2';
import Page3 from './notebook-pages/Page3';
import Page4 from './notebook-pages/Page4';
import Page5 from './notebook-pages/page5';



const Content1 = () =>  {
    const {  executeChatPanelFunction } = useStore();
    async function executeChatPanelFunctionWrapper(newValue: string)  {
        if (executeChatPanelFunction) {
            executeChatPanelFunction(newValue);// Call the function to see if it works
        } else {
            console.log('Chat panel function is not set.');
        }
    } 
    
    const [currentPage, setCurrentPage] = useState(0);
    const [prompt, setPrompt] = useState('');

    // Array of imported pages
    const pages = [
      <Page1 key="1" setPrompt={setPrompt} />,
      <Page2 key="2" setPrompt={setPrompt} />,
      <Page3 key="3" setPrompt={setPrompt} />,
      <Page4 key="4" setPrompt={setPrompt} />,
      <Page5 key="5" setPrompt={setPrompt} />,
    ];


    const nextPage = () => {
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
   

    return (
      <div className="flex flex-col  items-center min-h-full">
        <div className='w-[600px]'>
          {pages[currentPage]}
        </div>
        
        <div className="h-12"></div>
        <div className="flex justify-between w-full">
          <button className="bg-white hover:bg-gray-100 inline-flex items-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow gap-1"
            onClick={prevPage} 
            disabled={currentPage === 0}
          >
            <span className="transform scale-x-[-1]"><IconArrowRight /></span>Previous Page 
          </button>

          <button className="bg-black hover:bg-black inline-flex items-center text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow gap-1" 
                  onClick={() => executeChatPanelFunctionWrapper(prompt)}
                >
                  Please Explain Again
                </button>

          <button className="bg-white hover:bg-gray-100 inline-flex items-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow gap-1"
            onClick={nextPage} 
            disabled={currentPage === pages.length - 1}
          >
            Next Page <IconArrowRight />
          </button>
        </div>
      </div>
    );
  }

  
export default Content1;
