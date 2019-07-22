import React from 'react';
import Footer from './footer';
import toJson from 'enzyme-to-json';

import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';
import { mount, shallow } from 'enzyme';
import { Typography } from '@material-ui/core';

describe('<Footer />', () => {
    it('displays the proper text', () => {
        const component = shallow(<Footer />);
        const text = component.find(Typography).text();
        expect(text).toBe('Made with Love by Ihor Lysenko');
    });
});