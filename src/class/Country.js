class Country {
  constructor(response) {
    this.name = response.name.common;
    this.capitals = response.capital;
    this.region = response.region;
    this.flag = response.flags.png;
  }
}

export default Country;