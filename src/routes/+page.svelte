<script>
    import Carousel from "../components/ui/Carousel.svelte";
    import WhatsappLogo from "../components/ui/WhatsappLogo.svelte";
    import Marquee from "../components/ui/Marquee.svelte";
</script>
<svelte:head>
    <title>Lucci.app ¡La mejor tienda online de ropa!</title>
</svelte:head>

<Carousel/>

<section>
    <h2 class="font-poppins text-2xl text-center m-4 font-medium">Comenzaron las mejores ofertas</h2>
</section>

<Marquee/>
<div class="fixed right-4 bottom-4">
    <a href="https://wa.me/#" target="_blank" class="btn btn-circle btn-success btn-md bg-[#00E676]">
        <WhatsappLogo/>
    </a>
</div>
