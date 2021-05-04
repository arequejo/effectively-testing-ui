import * as React from 'react';
import AccordionContents from './AccordionContents';
import { AccordionItem } from '../../support/types';
import styles from './Accordion.module.css';

type AccordionProps = {
  items: AccordionItem[];
};

type AccordionState = {
  openIndex: number;
};

class Accordion extends React.Component<AccordionProps, AccordionState> {
  state: AccordionState = {
    openIndex: 0,
  };

  setOpenIndex = (openIndex: number): void => {
    this.setState({ openIndex });
  };

  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <div key={index} className={styles.accordion}>
            <button
              className={styles.button}
              onClick={() => this.setOpenIndex(index)}
            >
              {item.title}
            </button>
            {index === this.state.openIndex ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

export default Accordion;
