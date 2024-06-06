import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

let state: StateType;

beforeEach(() => {
  state = {
    collapsed: true
  }
})

test('reducer should toggle value', () => {
  const updatedState = reducer(state, {type: TOGGLE_COLLAPSED});

  expect(updatedState).not.toBe(state);
  expect(updatedState.collapsed).toBe(false);
})

test('should throw error with bad action type', () => {
  expect(() => {
    reducer(state, {type: "FAKETYPE"})
  }).toThrowError()
})
