import React, { FC } from 'react';
import Launch from '@material-ui/icons/Launch';

interface LinkTextProps {
  text: string;
  link: string;
  external?: boolean;
}

export const LinkText: FC<LinkTextProps> = ({ text, link, external }) => {
  return (
    <a className='text-blue-500' href={link} target={external ? '_blank' : ''}>
      {text} {external && <Launch color='inherit' fontSize='small' />}
    </a>
  );
};
