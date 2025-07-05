import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll_On_Top = () => {
     const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // optional: 'auto' or 'smooth'
    });
  }, [pathname]);

  return null;
};


export default Scroll_On_Top
