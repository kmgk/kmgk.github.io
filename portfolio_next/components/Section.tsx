import React, { FC } from 'react';

interface SectionProps {
  title: string;
}

export const Section: FC<SectionProps> = ({ title, children }) => (
  <div>
    <p className='text-teal-500 py-1 text-2xl'>{title}</p>
    {children}
  </div>
);
