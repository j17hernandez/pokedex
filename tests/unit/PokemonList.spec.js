import { shallowMount } from '@vue/test-utils'
import PokemonList from '../../src/components/PokemonList/PokemonList.vue'

let wrapper;
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
    wrapper.vm.getDataList();
    wrapper.vm.isLoading = false;
    done();
    expect(wrapper.vm.pokemonesFiltered).not.toEqual(0)
    expect(wrapper.vm.pokemonesList).not.toEqual(0)
    expect(wrapper.vm.isLoading).toEqual(false)
})