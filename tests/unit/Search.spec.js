import { shallowMount } from '@vue/test-utils'
import Search from '../../src/components/Search/Search.vue'

let wrapper;
beforeEach(() => {
    wrapper = shallowMount(Search);
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

test("filtrar", () => {
    wrapper.vm.filtrar()
    expect(wrapper.emitted().search).toBeTruthy()
})