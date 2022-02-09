import { shallowMount } from '@vue/test-utils'
import ListView from '../../src/components/Common/List/ListView.vue'


let wrapper;
const items = [{ "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/", "isFavorite": false }]
beforeEach(() => {
  wrapper = shallowMount(ListView);
});

test('props none in listView', () => {
  wrapper = shallowMount(ListView);
  expect(wrapper.vm.items.length).toEqual(0)
})

describe("props in listView", () => {
  it('props', () => {
    wrapper = shallowMount(ListView, {
      propsData: { items }
    });
    expect(wrapper.vm.items.length).not.toEqual(0)
    expect(wrapper.vm.items.length).toBe(1)
  })
  it('props', done => {
    wrapper.vm.$emit("hideFooter")
    expect(wrapper.emitted().hideFooter).toBeTruthy();
    done();
  })
})
test('snapshot match', () => {
  expect(wrapper.html()).toMatchSnapshot()
})

test('is visible', () => {
  expect(wrapper.isVisible()).toBe(true)
})

test("is a Vue instance", () => {
  expect(wrapper.vm).toBeTruthy();
});

test("changeFavorite test", () => {
  const pokemon = { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/", "isFavorite": false }
  wrapper.vm.changeFavorite({ pokemon, i: 1 })
  expect(wrapper.emitted().changeFavorite).toBeTruthy()
})

test("getPokemon test", () => {
  const name = "bulbasaur"
  wrapper.vm.getPokemon(name)
  expect(wrapper.emitted().getPokemon).toBeTruthy()
})

test("backHome test", () => {
  wrapper.vm.backHome();
})