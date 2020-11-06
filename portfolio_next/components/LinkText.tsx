import React, { FC } from 'react';

interface LinkTextProps {
  text: string;
  link: string;
  external?: boolean;
}

export const LinkText: FC<LinkTextProps> = ({ text, link, external }) => {
  return (
    <a className='text-blue-500' href={link} target={external ? '_blank' : ''}>
      {text}
    </a>
  );
};
