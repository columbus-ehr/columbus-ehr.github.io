<script lang="ts">
    import { ref, set } from 'firebase/database';
    import { blankExamField, examFieldsToStrings, ExamFieldType, type ExamField } from '../util/examFields'
    import { fireDb } from '../util/firebase.svelte';

    const { removeThis, onRemove = $bindable() }: ComponentProps = $props()

    let examName: string = $state('')
    const fields: ExamField[] = $state([blankExamField()])

    async function onsubmit(e: SubmitEvent) {
        e.preventDefault()

        set(ref(fireDb, `/exams/${examName.replace('/', '')}`), fields)
        removeThis()
    }
</script>

<h1>Create Exam</h1>

<form {onsubmit}>
    <label for="exam-name">Name of Exam</label>
    <input name="exam-name" bind:value={examName} />
    <br>
    <br>

    {#each fields as field, i}
        <label for="exam-field-name-{i}">Name</label>
        <input name="exam-field-name-{i}" type="text" bind:value={field.name} />

        <label for="exam-field-type-{i}">Type</label>
        <select name="exam-field-type-{i}" bind:value={field.type}>
            {#each Object.keys(ExamFieldType) as type}
                <option value={type}>{examFieldsToStrings[type]}</option>
            {/each}
        </select>

        {#if field.type == ExamFieldType.Number}
            <label for="exam-field-units-{i}">Units</label>
            <input name="exam-field-units-{i}" type="text" bind:value={field.units} />
        {/if}

        <button onclick={() => fields.splice(i, 1)}>Delete</button>

        <br>
    {/each}

    <button onclick={() => fields.push(blankExamField())}>Add new field</button>
</form>
