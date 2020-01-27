import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Login/Login';
import Map from '../Pages/Map/Map';


it('renders correctly', () => {
    const renderComponent = () => render(<Profile />);

    expect(renderComponent()).toBeTruthy();
}); 

it('renders correctly', () => {
    const renderComponent = () => render(<Login />);

    expect(renderComponent()).toBeTruthy();
}); 

it('renders correctly', () => {
    const renderComponent = () => render(<Map />);

    expect(renderComponent()).toBeTruthy();
}); 