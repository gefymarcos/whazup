import { combineReducers } from 'redux';

import auth from './auth';
import app from './app';
import contacts from './contacts';
import talks from './talks';

export default combineReducers({
  auth,
  app,
  contacts,
  talks
});
