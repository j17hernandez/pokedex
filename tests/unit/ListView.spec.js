import { shallowMount } from '@vue/test-utils'
import ListView from '@/src/components/Common/List/ListView.vue'

const items = [{ "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/", "fav": false }]
let wrapper;
beforeEach(() => {
  wrapper = shallowMount(ListView, {
    propsData: { items }
  });
});


test('props in listView', () => {
  expect(wrapper.vm.items.length).not.toEqual(0)
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