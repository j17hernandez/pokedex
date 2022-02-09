import { shallowMount } from '@vue/test-utils'
import Footer from '../../src/components/Footer/Footer.vue'


let wrapper
beforeEach(() => {
    wrapper = shallowMount(Footer)
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