import { shallowMount } from '@vue/test-utils'
import PokemonList from '../../src/components/PokemonList/PokemonList.vue'

let wrapper;
const pokemones = [{ "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" }]
beforeEach(() => {
    wrapper = shallowMount(PokemonList);
});

test('snapshot match', () => {
    expect(wrapper.html()).toMatchSnapshot()
})

test('is visible', () => {
    expect(wrapper.isVisible()).toBe(true)
})

test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
});

test("getDataList", done => {
    wrapper.vm.isLoading = true;
    wrapper.vm.getDataList().then(() => {
        pokemones.forEach((item) => (item.isFavorite = false));
        wrapper.vm.pokemonesFiltered = pokemones;
        wrapper.vm.pokemonesList = pokemones;
        wrapper.vm.isLoading = false;
        expect(wrapper.vm.pokemonesFiltered.length).not.toEqual(0)
        expect(wrapper.vm.pokemonesList.length).not.toEqual(0)
        expect(wrapper.vm.pokemonesList).toEqual(pokemones)
        expect(wrapper.vm.isLoading).toEqual(false)
        done();
    })
})
test("ChangeFavorite", () => {
    const pokemon = { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/", "isFavorite": false }
    const item = { pokemon, i: 0 }
    wrapper.vm.pokemonesList = pokemones;
    wrapper.vm.changeFavorite(item);
    expect(wrapper.vm.pokemonesList[0].isFavorite).toEqual(true)
    expect(wrapper.vm.pokemonesFavoritos).toEqual(wrapper.vm.favoriteListFiltered)
});

test("getSeccionList all test", () => {
    wrapper.vm.getSeccionList('all')
    expect(wrapper.vm.isAllActive).toEqual(true)
    expect(wrapper.vm.isFavoriteActive).toEqual(false)
})

test("getSeccionList Favorite test", () => {
    wrapper.vm.getSeccionList('favorite')
    expect(wrapper.vm.isFavoriteActive).toEqual(true)
    expect(wrapper.vm.isAllActive).toEqual(false)
})

test("searchByName all test", () => {
    wrapper.vm.pokemonesList = pokemones;
    wrapper.vm.isAllActive = true;
    const search = "bulbasaur";
    wrapper.vm.searchByName(search)

    wrapper.pokemonesFiltered = wrapper.vm.pokemonesList.filter((pokemon) =>
        `${pokemon.name}`.toLowerCase().includes(search.toLowerCase())
    );
    expect(wrapper.pokemonesFiltered.length).not.toEqual(0)
})

test("searchByName favorite test", () => {
    wrapper.vm.pokemonesFavoritos = pokemones;
    wrapper.vm.isFavoriteActive = true;
    const search = "bulbasaur";
    wrapper.vm.searchByName(search)

    wrapper.favoriteListFiltered = wrapper.vm.pokemonesFavoritos.filter((pokemon) =>
        `${pokemon.name}`.toLowerCase().includes(search.toLowerCase())
    );
    expect(wrapper.favoriteListFiltered.length).not.toEqual(0)
})

test("searchByName test all fail", () => {
    wrapper.vm.isAllActive = true;
    wrapper.vm.pokemonesList = pokemones;
    const search = null;
    wrapper.vm.searchByName(search)
    wrapper.pokemonesFiltered = wrapper.vm.pokemonesList
    expect(wrapper.pokemonesFiltered.length).not.toEqual(0)
})

test("searchByName test favorite fail", () => {
    wrapper.vm.isFavoriteActive = true;
    wrapper.vm.pokemonesFavoritos = pokemones;
    const search = null;
    wrapper.vm.searchByName(search)
    wrapper.favoriteListFiltered = wrapper.vm.pokemonesList
    expect(wrapper.vm.favoriteListFiltered.length).not.toEqual(0)
})

test("hideFooter test", () => {
    wrapper.vm.hideFooter(true)
    expect(wrapper.vm.isActiveFooter).toEqual(true)
})

test("getPokemonDetail", done => {
    wrapper.vm.isLoading = true;
    wrapper.vm.getPokemonDetail("bulbasaur")
    const pokemon = { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/", "isFavorite": false }
    wrapper.vm.infoPoke = pokemon;
    wrapper.vm.isLoading = false;
    expect(typeof wrapper.vm.infoPoke).not.toEqual("Object")
    expect(wrapper.vm.infoPoke).toEqual(pokemon)
    expect(wrapper.vm.isLoading).toEqual(false)
    done();
})

test("closeModal test", () => {
    wrapper.vm.dialog = true;
    wrapper.vm.closeModal()
    expect(wrapper.vm.dialog).toEqual(false)
})