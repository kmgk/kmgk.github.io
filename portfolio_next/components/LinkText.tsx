import React, { FC } from 'react';

interface LinkTextProps {
  text: string;
  link: string;
}

export const LinkText: FC<LinkTextProps> = ({ text, link }) => (
  <a className='text-blue-500' href={link}>
    {text}
  </a>
);
