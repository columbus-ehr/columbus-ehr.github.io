<script lang="ts">
    import { contents, getCurrentIdx, removeContent, setCurrentIdx } from './globalContent.svelte'
</script>

<ul>
    {#each contents as content, i}
        <!-- <li
            class={(i == getCurrentIdx()) ? 'active' : ''}
            onclick={() => setCurrentIdx(i)}
            onkeydown={() => setCurrentIdx(i)}
            role="button" tabindex={i}
        > -->
        <li>
            <div
                class={(i == getCurrentIdx()) ? 'active' : ''}
                onclick={() => setCurrentIdx(i)}
                onkeydown={() => setCurrentIdx(i)}
                role="link"
                tabindex={i}
            >
                {content.title}
                <button id="close" onclick={() => removeContent(i)}>✕</button>
            </div>
        </li>
    {/each}
</ul>

<style>
    ul {
        background-color: black;
        color: white;
        margin: 0;
        padding: 0;
        width: 20%;

        background-color: rgba(50, 50, 50, 0.3);
    }
    div {
        list-style-type: none;
        padding: 10px;
        border-style: solid;
        border-color: white;
        border-width: 2px;
        cursor: pointer;
    }
    div.active {
        background-color: white;
        color: black;
    }
    #close {
        text-align: center;
        border: 2px black solid;
        border-radius: 5px;
        width: 20px;
        height: 20px;
        float: right;
        color: black;
        background-color: #EEE;
    }
    #close:hover {
        background-color: #888;
    }
    #close:active {
        background-color: black;
        color: white;
    }
</style>
