import Accordion from './components/Accordion/Accordion';
import { items } from './components/Accordion/data';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Accordion items={items} />
    </div>
  );
}

export default App;
