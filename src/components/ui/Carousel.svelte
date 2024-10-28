<script>
    let activeIndex = $state(0);

    function setActive(index) {
        activeIndex = index;
    }
</script>

<section class="z-10 carousel w-full">
    <div id="slide1" class="carousel-item relative w-full">
        <video autoplay muted loop class="max-w-full object-cover rounded-lg shadow-lg">
            <source src="/media/content/carousel/slide-1-desktop.webm" type="video/webm">
            Tu navegador no soporta el video.
        </video>
        <div class="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-2">
            <a href="#slide3" onclick={() => setActive(2)}
               class="btn btn-primary btn-square btn-sm w-6">❮</a>
            <a href="#slide2" onclick={() => setActive(1)}
               class="btn btn-primary btn-square btn-sm w-6">❯</a>
        </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
        <img src="/media/content/carousel/slide-2-desktop.png" alt="Modelos posando con anuncio de oferta"
             class="w-full object-cover"/>
        <div class="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-2">
            <a href="#slide1" onclick={() => setActive(0)}
               class="btn btn-primary btn-square btn-sm w-6">❮</a>
            <a href="#slide3" onclick={() => setActive(2)}
               class="btn btn-primary btn-square btn-sm w-6">❯</a>
        </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
        <img src="/media/content/carousel/slide-3-desktop.png" alt="modelos posando con anuncios de oferta"
             class="w-full object-cover"/>
        <div class="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-2">
            <a href="#slide2" onclick={() => setActive(1)}
               class="btn btn-primary btn-square btn-sm w-6">❮</a>
            <a href="#slide1" onclick={() => setActive(0)}
               class="btn btn-primary btn-square btn-sm w-6">❯</a>
        </div>
    </div>
</section>

<div class="flex items-center justify-center space-x-2 mt-2">
    {#each Array(3).fill(0) as _, index}
        <a
                class="rounded-full focus:outline-none transition-all duration-200 {activeIndex === index ? 'w-3 h-3 bg-red-600' : 'w-2 h-2 bg-gray-500'}"
                onclick={() => setActive(index)}
                href="#slide{index + 1}"
        ></a>
    {/each}
</div>
