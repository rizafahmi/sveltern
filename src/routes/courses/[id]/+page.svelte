<script>
 import { onMount } from 'svelte';

 export let data;

 let course = undefined;
 let chapters = [];

 onMount(async function() {
     course = getCourseById(data.id);
     const chaptersPromise = course.chapters.map(async function(id) {
         const res = await fetch(`/api/chapters/${id}`)
         return await res.json();
     });
     chapters = await Promise.all(chaptersPromise);
 });

 function getCourseById(id) {
     const { courses } = data;
     return courses.find(function(course) {
         return course.id === id;
     });
 }

 function getChapterById(id) {

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
    <ul>
        {#each chapters as chapter}
            <li>
                <a>{chapter.title}</a>
                <p>{chapter.video_url}</p>
            </li>
        {/each}
    </ul>
{:else}
    <div class="loading-spinner">Loading...</div>
{/if}

<a href="/">Kembali</a>
