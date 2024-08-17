'use server';
import fs from 'fs';
import path from 'path';
import React from 'react';

// Define the Page type
type Page = {
  key: number;
  name: string;
  component: React.ComponentType;
  prompt: string;
};

export async function getNotebookPages(): Promise<Page[]> {
  const pagesDirectory = path.join(process.cwd(), 'components/notebook-pages');
  const pageFiles = fs.readdirSync(pagesDirectory);

  const pages = await Promise.all(
    pageFiles.map(async (file, index) => {
      const module = await import(`components/notebook-pages/${file}`);
      return {
        key: index,
        name: file.replace(/\.tsx$/, ''),
        component: module.default,
        prompt: module.prompt,  // Extract the prompt from the module
      };
    })
  );

  return pages;
}