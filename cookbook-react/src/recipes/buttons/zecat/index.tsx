import React, { useEffect, useRef } from 'react';

import styles from './styles.module.scss';

// This component is an example of how to use the buttons
// Please don't import this exact component in your project, use it as a guideline on how
// to use them. The important part are the styles.
function ButtonExample() {
  // We use a different button to showcase use cases
  // In a project you'll have a single button
  return (
    <div className="column center">
      <button type="button" className={`${styles.button} ${styles.primary} m-bottom-2`}>Primary</button>
      <button type="button" className={`${styles.button} ${styles.primary} m-bottom-2`} disabled>Primary Disabled</button>
      <button type="button" className={`${styles.button} ${styles.secondary} m-bottom-2`}>Secondary</button>
      <button type="button" className={`${styles.button} ${styles.secondary}`} disabled>Secondary Disabled</button>
    </div>    
  )
}

export default ButtonExample;