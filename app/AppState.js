import { Note } from "./Models/note.js";
import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState, saveState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", [Value]);

  notes = loadState("notes", [Note]);
  // notes = [
  //   new Note({
  //     title: "Note 1",
  //     text: "this is my first note",
  //     color: "#178B14",
  //   }),
  //   new Note({
  //     title: "Note 2",
  //     text: "this is my second note",
  //     color: "#14198B",
  //   }),
  // ];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
