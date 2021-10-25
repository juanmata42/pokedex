export default class TeamApi {
  constructor() {
    this.base = './placeholderTeam.json';
  }

  async request(path) {
    let response = await fetch(this.base + path);
    return await response.json();
  }

  async getPokemon(identifier) {
    return await this.request('/pokemon/' + identifier);
  }

  async getList(limit) {
    return await this.request('/pokemon?limit=' + limit);
  }

  async getSpecies(identifier) {
    return await this.request('/pokemon-species/' + identifier);
  }
}
//qwerty la idea detrás de esto es añadir un div igual en todo sobre la pokedex normal que haga display del equipo,
//renderizando todo igual salvo porque en el equipo se toman los datos del equipo y no del api. el botón de equipo debería estar gris hasta estar todos?
