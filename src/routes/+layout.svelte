<script>
    import { writable } from 'svelte/store';
    import { setContext } from 'svelte';

    import './style.css';
    export let data;

    const courses = writable(null);
    courses.set(data.courses);

    setContext('courses', courses);
</script>

<header>
    <h1>Sveltern</h1>
    <!-- <nav>
         <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>
         </ul>
         </nav> -->
  </header>

  <main>
      <slot></slot>
  </main>

  <footer>
      <p>&copy; 2023 Sveltern. All rights reserved.</p>
  </footer>

<style>

/* Basic styles for the layout */
header, main, footer {
  padding: var(--size-6);
}

header {
}

 /* nav ul {
    list-style: none;
    }

    nav ul li {
    display: inline-block;
    margin-right: 10px;
    }

    nav ul li a {
    color: #fff;
    text-decoration: none;
    } */

main {
  min-height: 50vh;
}

footer {
  text-align: center;
  margin-top: var(--size-2);
}

</style>
