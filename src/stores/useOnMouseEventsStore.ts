import {create} from 'zustand';

type MouseEvents = {};

type State = {
  mouseEvents: MouseEvents;
};

type Actions = {
  setMouseEvents: (props: MouseEvents) => void;
};

export const useOnMouseEventsStore = create<State & Actions>(set => ({
  mouseEvents: {x: 0, y: 0},
  setMouseEvents: newState => set(oldState => newState),
}));
