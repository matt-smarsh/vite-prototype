import { shallowMount } from "@vue/test-utils"
import Component from "./App.vue"

it("mounts", async () => {
	const wrapper = shallowMount(Component, {
		stubs: ["v-app", "v-main", "v-container"],
	})
	expect(wrapper.html()).toMatchSnapshot()
})
