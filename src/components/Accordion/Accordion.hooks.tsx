import * as React from 'react';
import AccordionContents from './AccordionContents';
import { AccordionItem } from '../../support/types';
import styles from './Accordion.module.css';

type AccordionProps = {
  items: AccordionItem[];
};

function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.accordion}>
          <button className={styles.button} onClick={() => setOpenIndex(index)}>
            {item.title}
          </button>
          {index === openIndex ? (
            <AccordionContents>{item.contents}</AccordionContents>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
