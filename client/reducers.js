/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import notes from './modules/Note/NoteReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  notes,
});