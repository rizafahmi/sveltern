<script>
 import { onMount } from 'svelte';
 import { page } from '$app/stores';

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

 let tempChapter = [{title: 'Chapter 1', video_url: 'https://www.youtube.com/embed/1yuc4BI5NWU'}];

</script>

{#if course !== undefined}
    <div class="container">
        <aside>
            <ul>
                {#each chapters as chapter}
                    <li>
                        <a href={$page.url.pathname + `/${chapter.order}`}>&gt; {chapter.title}</a>
                    </li>
                {/each}
            </ul>
        </aside>
        <div class="course">
            <h3>{course.title}</h3>
            <p>{@html course.description}</p>
            <div class="content">
                <iframe src={chapters[0]?.video_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="content-navigation">
                <button>Sebelumnya</button>
                <button>Selanjutnya</button>
            </div>
        </div>
    </div>
{:else}
    <div class="loading-spinner">Loading...</div>
{/if}

<div class="actions">
    <a href="/">Kembali</a>
</div>

<style>
 .container {
     display: flex;
     flex-direction: row;
 }

 aside {
     flex: 1;
     border-radius: var(--radius-3);
     border: var(--border-size-2) solid var(--stone-5);
     box-shadow: var(--shadow-3);
 }

 .course {
     flex: 4;
     margin-left: 0.5rem;
     padding-bottom: 0.75rem;
     padding-top: 0.75rem;
     padding-left: 0.75rem;
     padding-right: 0.75rem;
     border-radius: var(--radius-3);
     border: var(--border-size-2) solid var(--stone-5);
     box-shadow: var(--shadow-5);
 }

 .content {
     margin-top: 1rem;
     aspect-ratio: var(--ratio-widescreen);
 }

 iframe {
     width: 100%;
     height: 100%;
     border-radius: var(--radius-3);
 }
 ul {
     list-style: none;
     padding-left: 0.75rem;
     padding-top: 0.75rem;
 }
 li {
     margin-bottom: 0.5rem;
 }
 .content-navigation {
     margin-top: 1rem;
     display: flex;
     justify-content: space-between;
 }
 .actions {
     margin: 1rem;
 }
</style>
