
import React from 'react'
import Navbar from './Navbar';
import Sticky from 'react-stickynode';

interface ILayoutProp{
    children: JSX.Element | JSX.Element[];
}

export const LayoutComponent = ({children}: ILayoutProp) => {
  return (
    <>
      <Sticky>
         <Navbar/>
     </Sticky>
      {children}
    </>
  )
}
