import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from './user/user-reducer'
import EventReducer from './event/event-reducer'
import OrganizationReducer from './organization/organization-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const rootReducer = combineReducers({
  user: UserReducer,
  organization: OrganizationReducer,
  event: EventReducer
});

export default persistReducer(persistConfig, rootReducer)