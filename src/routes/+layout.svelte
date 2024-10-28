<script>
    import '../app.css';
    import NavBar from '../components/layout/NavBar.svelte';
    import Footer from '../components/layout/Footer.svelte';

    let {children} = $props();
</script>

<header>
    <NavBar/>
</header>

<main class="flex-grow">
    {@render children()}
</main>

<Footer/>
