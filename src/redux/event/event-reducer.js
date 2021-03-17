import {EventActionTypes} from "./event-action-types";

const INITIAL_STATE = {
  newEvent: null
}

const EventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventActionTypes.CREATE_NEW_EVENT:
      return {
        ...state,
        newEvent: action.payload
      }
  
    default:
      return state;
  }
}

export default EventReducer;