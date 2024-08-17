'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useStore from "@/app/store/store";
import { Button } from './ui/button';
import { IconArrowRight } from './ui/icons';
import Page1 from './notebook-pages/Page1';
import Page2 from './notebook-pages/Page2';
import Page3 from './notebook-pages/Page3';


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
      <Page3 key="3" setPrompt={setPrompt} />
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
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
        {pages[currentPage]}
        <div style={{ flexGrow: 1 }}>
              {prompt && (
              <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                {prompt}
              </div>
            )}
  
  <div className="flex justify-center items-center">
                <button className="bg-white hover:bg-gray-100 inline-flex items-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow gap-1" 
                  onClick={() => executeChatPanelFunctionWrapper(prompt)}
                >
                  Please Explain Again
                </button>
              </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <button className="bg-white hover:bg-gray-100 inline-flex items-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow gap-1"
            onClick={prevPage} 
            disabled={currentPage === 0}
          >
            <span style={{ transform: 'scaleX(-1)' }}><IconArrowRight /></span>Previous Page 
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
