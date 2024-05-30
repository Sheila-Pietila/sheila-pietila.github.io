import { render, screen } from '@testing-library/react';
import App from './App';
import Example from './pages/example.js'; 
import Navbar from './navbar.js'; 
import Home from './pages/home.js'; 
import { HashRouter } from 'react-router-dom';

// TODO finish test suites

// ---- Pass/Fail: First layer. ----

// Simple-path (white box test all options)

describe('Navbar', () => {
  it('renders site home nav button', () => {
    render(<HashRouter><App/></HashRouter>); 
    const buttonElement = screen.getByText(/site name/i); 
    expect(buttonElement).toBeInTheDocument(); 
  })

  it('renders site meal planner nav button', () => {
    render(<HashRouter><App/></HashRouter>); 
    const buttonElement = screen.getByText(/meal planner/i); 
    expect(buttonElement).toBeInTheDocument(); 
  })

  it('renders site example page nav button', () => {
    render(<HashRouter><App/></HashRouter>); 
    const buttonElement = screen.getByText(/react example/i); 
    expect(buttonElement).toBeInTheDocument(); 
  })

  it('renders site about nav button', () => {
    render(<HashRouter><App/></HashRouter>); 
    const buttonElement = screen.getByText(/about/i); 
    expect(buttonElement).toBeInTheDocument(); 
  })
})

// Code-path (non-basic method calls: N/A?) 

// Parameter-range (args and results: N/A, no args)









// Performance: Slideable goal, "better" and "worse", involves speed and memory. 
//    How To?: https://stackoverflow.com/questions/62214918/how-to-performance-test-react-js-application
// Stress-Test: Testing worst case performance loads. 
//    How To?: See above
// Simulation: Connection with outside factors (e.g. slow internet, internet breaks at various levels). 
//    How To?: (Currently using with the router wrapper, what else?)

// Presentation layer: Is MVC being written correctly : In React, is Flux store-view-dispatcher being written correctly. 
//    How To?: 

// Data Transaction: For testing less-than-database stored value interaction. N/A
// Collection management: For testing database interaction. N/A
// Multithreading: For testing multithreading, if applicable. N/A




/* Old, practice tests

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

*/
