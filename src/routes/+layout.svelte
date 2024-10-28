<script>
    import '../app.css';
    import NavBar from '../components/layout/NavBar.svelte';
    import Footer from '../components/layout/Footer.svelte';
    import WhatsappLogo from "../components/ui/WhatsappLogo.svelte";

    let {children} = $props();
</script>

<header>
    <NavBar/>
</header>

<main class="flex-grow">
    {@render children()}
</main>

<aside class="fixed right-4 bottom-4">
    <a href="https://wa.me/#" target="_blank" class="btn btn-circle btn-success btn-md bg-[#00E676]">
        <WhatsappLogo/>
    </a>
</aside>

<Footer/>

