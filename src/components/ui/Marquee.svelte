<script>
    import {onMount, onDestroy} from 'svelte';
    import {browser} from '$app/environment';

    function resetMarqueeAnimation() {
        document.querySelectorAll('.wrapper').forEach(wrapper => {
            wrapper.style.animation = 'none';
            // Forzar redibujado para reiniciar la animación
            wrapper.offsetHeight;
            wrapper.style.animation = '';
        });
    }

    onMount(() => {
        if (browser) {
            window.addEventListener('resize', resetMarqueeAnimation);
        }
        return () => {
            window.removeEventListener('resize', resetMarqueeAnimation);
        };
    });
</script>

<section class="marquee">
    <div class="wrapper cyber_image__dsk">
        <div>SOLO HOY LUCCI OFFERS | 50% DSCTO. EN LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 50% DSCTO. EN LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 50% DSCTO. EN LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 50% DSCTO. EN LA WEB</div>


    </div>
    <div class="wrapper cyber_image__mb">
        <div>SOLO HOY LUCCI OFFERS | 50% DSCTO. EN LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 50% DSCTO. EN LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 50% DSCTO. EN LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 50% DSCTO. EN LA WEB</div>
    </div>
</section>

<style>
    .marquee {
        font-family: "Big Shoulders Text", sans-serif;
        position: relative;
        overflow: hidden;
        height: 110px;
        background: url(/media/content/banners/fondo-cintillo.png) no-repeat;
        background-size: 100% 100%;
        margin: 30px 0;
    }

    .marquee .wrapper {
        position: absolute;
        overflow: hidden;
        width: 200%;
        animation: marquee 10s linear infinite;
        padding: 24px 0;
    }

    .marquee .wrapper div {
        float: left;
        width: 25%;
        font-size: 2.3rem;
        color: #FFF;
    }

    @keyframes marquee {
        0% {
            left: 0;
        }
        100% {
            left: -100%;
        }
    }

    @media screen and (max-width: 1200px) {
        .cyber_image__mb {
            display: flex;
            width: 100%;
        }

        .cyber_image__dsk {
            display: none !important;
        }

        .wrapper.cyber_image__mb div {
            font-size: 2rem;
            margin-right: 20px;
        }

        .marquee .wrapper {
            animation: marquee 10s linear infinite;
        }
    }

    @media screen and (max-width: 600px) {
        .marquee {
            height: 80px;
        }

        .marquee .wrapper {
            padding: 0;
        }

        .marquee .wrapper div {
            font-size: 1.3rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
