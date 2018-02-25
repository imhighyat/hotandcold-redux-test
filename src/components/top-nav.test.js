import React from 'react';
import { shallow } from 'enzyme';
import {RESTART_GAME, GENERATE_AURAL_UPDATE} from '../actions';
import {TopNav} from './top-nav';

describe('<TopNav>', () => {
	it('should render without crashing', () => {
		shallow(<TopNav />);
	});

	it('should dispatch restartGame when new game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalled();
    });

    it('Should dispatch generateAuralUpdate when new game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.status-link');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalled();
    });
});