import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '../Accordion';
// import Accordion from '../Accordion.hooks';
import { hats, jeans } from '../data';

test('can open accordion items to see the contents', () => {
  render(<Accordion items={[hats, jeans]} />);

  expect(screen.getByText(hats.contents)).toBeInTheDocument();
  expect(screen.queryByText(jeans.contents)).not.toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: jeans.title }));

  expect(screen.getByText(jeans.contents)).toBeInTheDocument();
  expect(screen.queryByText(hats.contents)).not.toBeInTheDocument();
});
