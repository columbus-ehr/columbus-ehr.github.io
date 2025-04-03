import type { Component } from 'svelte'

// const content: SvelteComponent[] = []
export interface Content {
    title: string,
    component: Component<ComponentProps>,
}

export let contents: Content[] = $state([])
let currentIdx: number = $state(-1)

export function insertContent(content: Content) {
    contents.splice(0, 0, content)
}
export function removeContent(idx: number) {
    contents.splice(idx, 1)
}

export function getCurrentIdx(): number {
    return currentIdx
}
export function setCurrentIdx(x: number) {
    currentIdx = x
}

