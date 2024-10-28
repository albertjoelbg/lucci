<script>
    import Carousel from "../components/ui/Carousel.svelte";
    import WhatsappLogo from "../components/ui/WhatsappLogo.svelte";
    import Marquee from "../components/ui/Marquee.svelte";
    import Bento from "../components/ui/Bento.svelte";
    import Heading from "../components/ui/Heading.svelte";
</script>
<svelte:head>
    <title>Lucci ¡La mejor tienda online de ropa!</title>
</svelte:head>

<Carousel/>

<section>
    <Heading texto="Comenzaron las mejores ofertas"/>
    <Bento/>
</section>

<Marquee/>
