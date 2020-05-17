import { Subject } from "rxjs";
import { ActionTypes } from "./actions";

interface InitialState {
  recipes: Array<Object>;
}

interface Event {
  type: String;
  payload?: Object;
}

let state: InitialState = {
  recipes: [],
};

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_RECIPE:
      state = {
        recipes: [...state.recipes, data.payload],
      };
      return store.next(state);
    case ActionTypes.UPDATE_RECIPE:
      state = {
        recipes: [...state.recipes, data.payload],
      };

      return store.next(state);
    default:
      return state;
  }
});
