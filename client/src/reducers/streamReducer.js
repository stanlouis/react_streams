import _ from "lodash";

import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "../actions/types";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_STREAMS:
      /*
        const streamsObj = payload.reduce((acc, stream) => {
         acc[stream.id] = stream;
         return acc;
       }, {});
       return { ...state, ...streamsObj };
      */
      return { ...state, ..._.mapKeys(payload, "id") };
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      // const { payload.id, ...newStream } = state;
      // return newStream;
      return _.omit(state, payload);

    default:
      return state;
  }
};
