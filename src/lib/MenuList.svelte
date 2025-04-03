<script lang="ts">
    import type { Component } from "svelte";
    import { insertContent, setCurrentIdx } from "./globalContent.svelte";

    interface Launcher {
        name: string,
        opens: Component<ComponentProps>,
    }
    const { launchers }: { launchers: Launcher[] } = $props()

    function open(name: string, opens: Component<ComponentProps>) {
        insertContent({
            title: name,
            component: opens,
        })
        setCurrentIdx(0)
    }
</script>

<ul>
    {#each launchers as { name, opens }, i}
        <li>
            <button onclick={() => open(name, opens)}>
                {name}
            </button>
        </li>
    {/each}
</ul>

<style>
    button {
        border: none;
        background-color: #222;
        width: 100%;
        padding: 10px;
        margin: 0;
    }
    button:hover {
        background-color: #555;
    }
    ul {
        margin: 0;
        padding: 0;
        background-color: #333;
    }
    li {
        margin: 0;
        list-style-type: none;
    }

</style>
