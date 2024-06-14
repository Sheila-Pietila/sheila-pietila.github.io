import { render, screen } from '@testing-library/react';
import Navbar from './navbar.js'; 
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

// TODO finish test suites

// ---- Pass/Fail: First layer. ----

// Simple-path (white box test all options)

describe('Location list', () => {
    it('renders site home nav button', () => {
        render(<HashRouter><Navbar/></HashRouter>); 
        const buttonElement = screen.getByText(/site name/i); 
        expect(buttonElement).toBeInTheDocument(); 
    })

    it('renders site meal planner nav button', () => {
        render(<HashRouter><Navbar/></HashRouter>); 
        const buttonElement = screen.getByText(/meal planner/i); 
        expect(buttonElement).toBeInTheDocument(); 
    })

    test('renders site example page nav button', () => {
        render(<HashRouter><Navbar/></HashRouter>); 
        const buttonElement = screen.getByText(/react example/i); 
        expect(buttonElement).toBeInTheDocument(); 
    })

    it('renders site about nav button', () => {
        render(<HashRouter><Navbar/></HashRouter>); 
        const buttonElement = screen.getByText(/about/i); 
        expect(buttonElement).toBeInTheDocument(); 
    })
})

// Code-path (non-basic method calls) 

describe('<ButtonLink />', () => {
    // TODO figure out what the correct inputs-outputs are here
  it('should have correct children and href', () => {
    const { getByRole } = render(
        <HashRouter><Link to="/" className="site-title">Site Name</Link></HashRouter>
    )

    expect(getByRole('link')).toHaveTextContent('Site Name')
    expect(getByRole('link')).toHaveProperty('href', expect.stringMatching(/.+\/#\/$/))
  })
})

describe('PageLink', () => {
    it.todo('should have correct children and href')
    it.todo('should mark active if current path matches')
    it.todo('should not mark active if current path does not match')
})

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
