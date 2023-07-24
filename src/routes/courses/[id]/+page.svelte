<script>
 import { onMount } from 'svelte';
    export let data;

    let course = undefined;

    onMount(function() {
        course = getCourseById(data.id);
    })

    function getCourseById(id) {
        const { courses } = data;
        return courses.find(function(course) {
            return course.id === id;
        })
    }
</script>

{#if course !== undefined}
    {#if course.thumbnail !== ""}
        <img width="128" src="http://127.0.0.1:8090/api/files/{course.collectionId}/{course.id}/{course.thumbnail}" />
    {:else}
        <img width="128" src="/logo.png" />
    {/if}
    <h3>{course.title}</h3>
    <p>{@html course.description}</p>
{:else}
    <div class="loading-spinner">Loading...</div>
{/if}

<a href="/">Kembali</a>
