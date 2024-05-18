import { render, screen } from '@testing-library/react';
import App from './App';
import Example from './pages/example.js'; 
import Navbar from './navbar.js'; 
import Home from './pages/home.js'; 
import { HashRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<Example />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders homepage stub', () => {
  render(<Home />); 
  const textElement = screen.getByText(/homepage/i); 
  expect(textElement).toBeInTheDocument(); 
}); 

test('navbar with HashRouter renders react example nav button', () => {
  render(<HashRouter><Navbar /></HashRouter>); 
  const buttonElement = screen.getByText(/react example/i); 
  expect(buttonElement).toBeInTheDocument(); 
});

test('app with HashRouter renders react example nav button', () => {
  render(<HashRouter><App /></HashRouter>); 
  const buttonElement = screen.getByText(/react example/i); 
  expect(buttonElement).toBeInTheDocument(); 
});

describe('Example', () => {
  it('renders react example component', () => {
    render(<Example />); 
    //screen.debug(); 
  }); 
});
