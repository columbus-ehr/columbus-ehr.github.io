<script lang="ts">
    import type { ExamField } from "../util/examFields";
    import { fireDb } from "../util/firebase.svelte";
    import { get, ref } from "firebase/database";

    // Don't use `onValue`, since we don't want the exam changing while the person is taking it!
    interface Props extends ComponentProps {
        examName: string,
    }

    const { removeThis, onRemove = $bindable(), examName }: Props = $props()

    let exam = $state<ExamField[]>([])
    get(ref(fireDb, `/exams/${examName}`)).then(snapshot => exam = snapshot.val())
</script>

{#each exam as field}
{/each}
