import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Accordion from '../Accordion';
// import Accordion from '../Accordion.hooks';
import * as data from '../../../support/accordion-data';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('setOpenIndex sets the open index state properly', () => {
  const wrapper = mount(<Accordion items={[]} />);
  expect(wrapper.state('openIndex')).toBe(0);
  (wrapper.instance() as Accordion).setOpenIndex(1);
  expect(wrapper.state('openIndex')).toBe(1);
});

test('Accordion renders AccordionContents with the item contents', () => {
  const wrapper = mount(<Accordion items={data.items} />);
  expect(wrapper.find('AccordionContents').props().children).toBe(
    data.hats.contents
  );
});
