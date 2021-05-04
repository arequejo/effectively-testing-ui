import * as React from 'react';
import styles from './AccordionContents.module.css';

type AccordionContentsProps = {
  children: React.ReactNode;
};

function AccordionContents({ children }: AccordionContentsProps) {
  return <div className={styles.contents}>{children}</div>;
}

export default AccordionContents;
