<script>
    import Carousel from "../components/ui/Carousel.svelte";
    import Portada1 from "../components/ui/Portada1.svelte";
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

<section>
    <Heading texto="Para ella"/>
    <Portada1 mainImage="/media/content/portadas/portada-conjunto-mujer.webp"
              rightTopImage="/media/content/portadas/portada-braziers.webp"
              rightBottomImage="/media/content/portadas/portada-braziers-cachetero.webp"/>
</section>
