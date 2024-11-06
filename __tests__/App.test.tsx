import 'react-native';
import React from 'react';
import { describe, expect, test } from '@jest/globals';
import {render} from '@testing-library/react-native';
import App from '../App';


describe("App Component", () => {
  test('Should render welcome message', () => {
     const { getByText } = render(<App />);
     expect(getByText('Welcome to PetBuddy')).toBeTruthy();
  });
})
