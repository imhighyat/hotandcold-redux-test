import React from 'react';
import { shallow } from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders the aural status update', () => {
    let status = 'Testing';
    let wrapper = shallow(<AuralStatus auralStatus={status} />);
    expect(wrapper.contains(status)).toEqual(true);
  });
});

