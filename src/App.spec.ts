import { enableAutoDestroy, shallowMount } from "@vue/test-utils"
import Component from "./App.vue"

enableAutoDestroy(afterEach)

it("mounts", async () => {
	const wrapper = shallowMount(Component)
	expect(wrapper.html()).toMatchSnapshot()
})
