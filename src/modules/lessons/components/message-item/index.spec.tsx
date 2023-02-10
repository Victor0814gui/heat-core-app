/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MessageItem } from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<MessageItem 
    index={1} 
    item={{
      avatarUrl:"asdfa",
      createAt: "sadfasdf",
      id: "sdfgsdfgsdf",
      message: "asçdklfkajçklsdfjasd",
      name: "asdfasdf"
    }} 
    previousMessage={{
      createAt: "asdfa"
    }}
  />);
});
