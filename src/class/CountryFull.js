class CountryFull {
    constructor(response) {
        this.name = response.name.common;
        this.official = response.name.official;
        this.capitals = response.capital;
        this.region = response.region;
        this.continent = response.continents[0];
        this.area = parseInt(response.area).toLocaleString();
        this.population = parseInt(response.population).toLocaleString();
        this.languages = response.languages && Object.values(response.languages);
        this.currencies = response.currencies && Object.values(response.currencies);
        this.demonyms = response.demonyms && (response.demonyms.eng.f === response.demonyms.eng.m
            ? response.demonyms.eng.f
            : `${response.demonyms.eng.f} and ${response.demonyms.eng.m}`);
        this.map = response.maps.openStreetMaps;
        this.flag = response.flags.png;
        this.coatOfArms = response.coatOfArms.png;
    }
}

export default CountryFull;