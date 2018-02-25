import React from 'react';
import {shallow} from 'enzyme';

import { Feedback } from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders some feedback', () => {
	    let feedback = 'Testing feedback';
	    let wrapper = shallow(<Feedback feedback={feedback} />);
	    expect(wrapper.contains(feedback)).toEqual(true);
	});
});