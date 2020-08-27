import { writable } from "svelte/store";

//TODO - Test - Could this be removed
function store() {
  const { set, update, subscribe } = writable({});

  function setInput(inp) {
    update((n) => {
      n.input = inp;
    });
  }

  return {
    subscribe,
    set,
    setInput,
  };
}

export const fieldStore = store();
