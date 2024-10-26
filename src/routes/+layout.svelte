<script>
    import '../app.css';
    import Header from '../components/layout/Header.svelte';
    import Footer from '../components/layout/Footer.svelte';

    let {children} = $props();
</script>
<Header/>
<main class="flex-grow">
    {@render children()}
</main>

<Footer/>

