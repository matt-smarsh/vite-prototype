import { shallowMount } from "@vue/test-utils"
import Component from "./App.vue"

it("mounts", async () => {
	const wrapper = shallowMount(Component)
	expect(wrapper.html()).toMatchSnapshot()
})
