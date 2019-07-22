import React from 'react';
import Header from './header';
import { BrowserRouter as Router } from 'react-router-dom';

import { mount } from 'enzyme';
import { Link } from "react-router-dom";
import { Toolbar } from '@material-ui/core/';

describe('<Header />', () => {
    it('Header displays the correct links', () => {
        const wrapper = mount(<Router><Header /></Router>);
        const header = wrapper.find(Toolbar)
        const arr = header.find(Link).map((node) => node.text().trim());
        expect(arr).toEqual(['Kyiv Capitals', 'Roster', 'News']);
    });
});