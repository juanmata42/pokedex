import App from './App/App.js';
import PokeApi from './App/PokeApi.js';
import Cache from './App/Cache.js';
import Pokemon from './App/Pokemon.js';
// this is a mess and it doesnt work yet. need more time oh gawd lord help me.
export default class Team {
  constructor(cache, flickity_el) {
    this.body = document.querySelector('body');
    this.flickityEl = flickity_el;
    this.cache = cache;
  }

  init() {
    // Add slides.
    for (let i = 1; i <= this.cache.length; i++) {
      let slide = document.createElement('div');
      slide.classList.add(...['slide']);
      this.flickityEl.appendChild(slide);
    }

    // Init flickity.
    this.flickity = new Flickity(this.flickityEl, {
      cellSelector: '.slide',
      pageDots: false,
      prevNextButtons: false,
      percentPosition: false,
      draggable: true,
      accessibility: false,
      cellAlign: 'left',
      contain: true,
    });
  }
  teamIncluder(index, pokemon, appcache) {
    this.cache.addPokemon(index, appcache.getPokemon(pokemon));
  }
  updatePokeInfo(id) {
    // Fetch pokemon from cache.
    let pokemon = this.cache.getPokemon(id);
    this.body.dispatchEvent(
      new CustomEvent('PokemonUpdated', {
        detail: {
          pokemon,
        },
      })
    );
  }
  getPokedexHexColor(color) {
    let colors = new Map([
      ['black', '#111111'],
      ['blue', '#2196F3'],
      ['brown', '#A1887F'],
      ['gray', '#BBBBBB'],
      ['green', '#4CAF50'],
      ['pink', '#E91E63'],
      ['purple', '#9C27B0'],
      ['red', '#F44336'],
      ['white', '#FFFFFF'],
      ['yellow', '#FFC107'],
    ]);

    return colors.get(color);
  }
}
