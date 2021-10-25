export default class Cache {
  constructor(key) {
    this.CACHE_KEY = key;
    this.localStorage = window.localStorage;
  }

  getPokemon(id) {
    let cache = this.__get();

    if (cache.hasOwnProperty(id)) {
      return cache[id];
    }

    return null;
  }

  addPokemon(id, data) {
    let cache = this.__get();
    cache[id] = data;
    this.localStorage.setItem(this.CACHE_KEY, JSON.stringify(cache));
  }

  clear() {
    this.localStorage.clear();
  }

  __get() {
    return JSON.parse(window.localStorage.getItem(this.CACHE_KEY)) || {};
  }
}
