<script>
 export let data;
</script>

<div class="courses">
    {#each data.courses as course}
        <div class="course">
            <div class="thumbnail">
                {#if course.thumbnail !== ""}
                    <img width="128" src="http://127.0.0.1:8090/api/files/{course.collectionId}/{course.id}/{course.thumbnail}" />
                {:else}
                    <img width="128" src="/logo.png" />
                {/if}
            </div>
            <div class="content">
                <h2>{ course.title }</h2>
                <p>{ @html course.description }</p>
                <div class="actions">
                    <a class="button" href="/courses/{course.id}/0">Lihat Materi</a>
                </div>
            </div>
    </div>
    {/each}
</div>

<style>
.course {
    display: flex;
    align-items: center;
    border: var(--border-size-2) solid var(--stone-5);
    border-radius: var(--radius-4);
    box-shadow: var(--shadow-5);
    padding-top: var(--size-2);
    padding-bottom: var(--size-2);
    margin-bottom: var(--size-4);
    background-color: var(--gray-10);
 }
 .course h2 {
     font-size: var(--size-4);
 }
 .course .thumbnail {
     margin-right: var(--size-5);
     margin-left: var(--size-3);
 }
 .course .content {
     flex: 1;
 }

 .actions {
     margin-top: var(--size-2);
     margin-bottom: var(--size-2);
     margin-left: var(--size-1);
 }

 .button {
     color: var(--stone-0);
     background-color: var(--stone-8);
     border: 1px solid var(--stone-10);
     padding: var(--size-2);
     border-radius: var(--radius-2);
     text-shadow: 0 1px 0 var(--stone-6);

     &:hover {
         background-color: var(--stone-9);
         text-decoration: none;
     }
 }
</style>
