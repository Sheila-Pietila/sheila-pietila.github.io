import { getAllByRole, render, screen } from '@testing-library/react';
import Navbar from './navbar.js'; 
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import PageLink from './navbar.js'; 

/* Author's note: 
Creating more tests than necessary on this very simple feature 
for the purpose of practicing and learning testing itself. 
Similar to using a noop to make sure a structure functions. 
*/

// TODO finish test suites
// TODO find test leaks and needed teardowns

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

    it('renders site example page nav button', () => {
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

// Code-path (method calls above getter-setter complexity levels) 

describe('<ButtonLink />', () => {
  it('should have correct name and href', () => {
    const { getByRole } = render(
        <HashRouter><Link to="/" className="site-title">Site Name</Link></HashRouter>
    )

    // Should be titled "Site Name" and bring user to path /#/
    expect(getByRole('link')).toHaveTextContent('Site Name');
    expect(getByRole('link')).toHaveProperty('href', expect.stringMatching(/.+\/#\/$/));
  })
})

describe('<PageLink />s', () => {
    // This is over-the-top thorough testing. Decided it's okay to have a non ideal format here for completeness, and tests elsewhere will be more refined to true need. 
    it.todo('should have correct name and href')
    it('should have correct href pattern', () => {
        const { getByRole } = render(
            <HashRouter><PageLink to="/place">Location Name</PageLink></HashRouter>
        )

        var pagelinks = getAllByRole(getByRole('navigation'), 'link'); 
        for(let pagelink of pagelinks) {
            //expect(pagelink).toHaveTextContent(expect.stringMatching(/.*/));
            //expect(pagelink).toHaveTextContent('Site Name');
            expect(pagelink).toHaveProperty('href', expect.stringMatching(/.+\/#\/.*/));
        }
    })

    it.todo('should mark active if current path matches')
    it.todo('should not mark active if current path does not match')
})

// Parameter-range (args and results: N/A, no args)

// TODO advanced navbar testing

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
