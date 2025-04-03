<script lang="ts">
    import { contents, getCurrentIdx, removeContent } from "./globalContent.svelte";

    let onRemove: () => void = () => {}

    function removeThis() {
        removeContent(getCurrentIdx())
        onRemove()
    }
</script>

<!-- <div>
    {#each contents as content, i}
        <div style:display={(i == currentIdx) ? 'block' : 'none'}>
            {content.component}
        </div>
    {/each}
</div> -->

<div class="popup">
    {#if (contents.length != 0) && (getCurrentIdx() != -1)}
        <svelte:component
            this={contents[getCurrentIdx()].component}
            {removeThis}
            bind:onRemove={onRemove}
        />
    {/if}
</div>

<style>
</style>
