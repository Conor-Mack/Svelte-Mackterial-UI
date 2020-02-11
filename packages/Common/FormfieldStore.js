import { writable } from "svelte/store";

function store() {
  const { set, update, subscribe } = writable({});

  //const setInput = (inp) => update(n => n.input = inp)
  const testFn = t => alert(t);
  function setInput(inp) {
    update(n => {
      n.input = inp;
      debugger;
    });
  }

  return {
    subscribe,
    set,
    testFn,
    setInput
  };
}

export const fieldStore = store();
