<script>
 export let data
</script>

<h1>Sveltern</h1>
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
<div class="courses">
    {#each data.courses as course}
        <div class="course">
            <img width="64" src="http://127.0.0.1:8090/api/files/{course.collectionId}/{course.id}/{course.thumbnail}" />
        <h2>{ course.title }</h2>
        <p>{ @html course.description }</p>
    </div>
    {/each}
</div>
