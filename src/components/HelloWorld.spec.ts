import { shallowMount } from "@vue/test-utils"
import Component from "./HelloWorld.vue"

it("mounts", async () => {
	const msg = Symbol("msg").toString()
	const wrapper = shallowMount(Component, {
		propsData: { msg }
	})

	expect(wrapper.find("h1").text()).toBe(msg)
})

it("updates count", async () => {
	const wrapper = shallowMount(Component)
	const button = wrapper.find("button")

	expect(button.text()).toBe(`count is: 0`)

	await button.trigger("click")

	expect(button.text()).toBe(`count is: 1`)
})
