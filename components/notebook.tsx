'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useStore from "@/app/store/store";
import { Button } from './ui/button';
import { IconArrowRight } from './ui/icons';

type Page = {
  key: number;
  name: string;
  component: React.ComponentType;
  prompt: string;
};

const Content1 = () =>  {
    const {  executeChatPanelFunction } = useStore();
    async function executeChatPanelFunctionWrapper(newValue: string)  {
        if (executeChatPanelFunction) {
            executeChatPanelFunction(newValue);// Call the function to see if it works
        } else {
            console.log('Chat panel function is not set.');
        }
    } 
    
    const [pages, setPages] = useState<Page[]>([]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [loadingError, setLoadingError] = useState<string | null>(null);
  
    useEffect(() => {
      const importPage = async (r: any) => {
        const mymodule = await r();
        if (!mymodule.default) {
          throw new Error(`No default export found for page ${r}`);
        }
        return mymodule;
      };
  
      const loadPages = async () => {
        try {
          const pageContext = (require as any).context('./notebook-pages', true, /\.tsx$/);
          const pageKeys = pageContext.keys();
          console.log(`Found ${pageKeys.length} pages:`, pageKeys);
  
          const loadedPages = await Promise.all(
            pageKeys.map(async (key: string, index: number) => {
              try {
                const mymodule = await importPage(() => import(`./notebook-pages/${key.replace(/^\.\//, '')}`));
                console.log(`Successfully loaded page: ${key}`);
                return {
                  key: index,
                  name: key.replace(/^\.\//, '').replace(/\.tsx$/, ''),
                  component: dynamic(() => Promise.resolve(mymodule.default)),
                  prompt: mymodule.prompt || '',
                };
              } catch (error) {
                console.error(`Error loading page ${key}:`, error);
                throw error;
              }
            })
          );
  
          setPages(loadedPages);
          console.log('All pages loaded successfully');
        } catch (error) {
          console.error('Error loading pages:', error);
          setLoadingError('Failed to load one or more pages. Check the console for details.');
        }
      };
  
      loadPages();
    }, []);
  
    const goToPreviousPage = () => {
      setCurrentPageIndex((prevIndex) => 
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    };
  
    const goToNextPage = () => {
      setCurrentPageIndex((prevIndex) => 
        prevIndex < pages.length - 1 ? prevIndex + 1 : prevIndex
      );
    };
  
    const currentPage = pages[currentPageIndex];

    if (loadingError) {
      return <div>Error: {loadingError}</div>;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          
          {pages.length === 0 ? (
            <div>Loading pages...</div>
          ) : currentPage ? (
            <div key={currentPage.key}>
              <h2>{currentPage.name}</h2>
              <currentPage.component />
              
              
              
              
              <div className="flex justify-center items-center">
                <button className="bg-white hover:bg-gray-100 inline-flex items-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow gap-1" 
                  onClick={() => executeChatPanelFunctionWrapper(currentPage.prompt)}
                >
                  Please Explain Again
                </button>
              </div>
              
            </div>
          ) : (
            <div>No pages found</div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <button className="bg-white hover:bg-gray-100 inline-flex items-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow gap-1"
            onClick={goToPreviousPage} 
            disabled={currentPageIndex === 0}
          >
            <span style={{ transform: 'scaleX(-1)' }}><IconArrowRight /></span>Previous Page 
          </button>
          <button className="bg-white hover:bg-gray-100 inline-flex items-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow gap-1"
            onClick={goToNextPage} 
            disabled={currentPageIndex === pages.length - 1}
          >
            Next Page <IconArrowRight />
          </button>
        </div>
      </div>
    );
  }

  
export default Content1;
