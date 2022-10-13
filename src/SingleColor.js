import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hex = rgbToHex(...rgb);
  console.log(hexColor);
  const bcg = rgb.join(',');
  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
    setTimeout(() => {
      setAlert(false);
    }, 2500);
  }
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setAlert(false);
  //     return () => clearTimeout(timeout);
  //   }, 2500);
  // }, [alert])
  return <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={handleCopy}>
    <p className='percent-value'>{weight}%</p>
    <p className="color-value">{hex}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>;
}

export default SingleColor
