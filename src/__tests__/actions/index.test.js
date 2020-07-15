import * as actions from './../../actions';

describe('tap room actions', () => {
  it('toggleCreate should create TOGGLE_CREATE action', () => {
    expect(actions.toggleCreate()).toEqual({type: "TOGGLE_CREATE"})
  })
});