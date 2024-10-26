<div class="marquee">
    <div class="wrapper cyber_image__dsk">
        <div>SOLO HOY LUCCI OFFERS | 30% DSCTO. EN TODA LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 30% DSCTO. EN TODA LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 30% DSCTO. EN TODA LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 30% DSCTO. EN TODA LA WEB</div>
    </div>
    <div class="wrapper cyber_image__mb">
        <div>SOLO HOY LUCCI OFFERS | 30% DSCTO. EN TODA LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 30% DSCTO. EN TODA LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 30% DSCTO. EN TODA LA WEB</div>
        <div>SOLO HOY LUCCI OFFERS | 30% DSCTO. EN TODA LA WEB</div>
    </div>
</div>

<style>
    .marquee {
        font-family: "Big Shoulders Text", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
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
        width: 200%; /* Mantener este valor */
        animation: marquee 15s linear infinite; /* Aumentar a 15s para un movimiento más lento */
        padding: 24px 0;
        display: flex; /* Flexbox para el contenedor */
    }

    .marquee .wrapper div {
        flex: 1; /* Permitir que cada div ocupe el mismo espacio */
        font-size: 40px;
        color: #FFF;
        display: flex; /* Flexbox para centrar el contenido */
        justify-content: center; /* Centrar horizontalmente */
        align-items: center; /* Centrar verticalmente */
        margin-right: 20px;
    }

    @keyframes marquee {
        0% {
            left: 0;
        }
        100% {
            left: -100%;
        }
    }

    @media screen and (max-width: 767px) {
        .cyber_image__mb {
            display: block;
            width: 100%;
        }

        .wrapper.cyber_image__mb div {
            font-size: 25px;
            margin-right: 20px; /* Añadir margen derecho para separación */
        }

        .cyber_image__dsk {
            display: none !important;
        }

        .marquee .wrapper {
            animation: marquee 20s linear infinite; /* Aumentar a 20s para pantallas pequeñas */
        }
    }

    @media screen and (max-width: 400px) {
        .marquee {
            height: 70px; /* Ajustar la altura para pantallas pequeñas */
        }

        .marquee .wrapper {
            padding: 0; /* Eliminar padding para centrar más */
        }

        .marquee .wrapper div {
            font-size: 20px; /* Ajustar el tamaño de fuente para pantallas muy pequeñas */
            height: auto; /* Ajustar la altura para que se centre */
            display: flex; /* Flexbox para centrar el contenido */
            justify-content: center; /* Centrar horizontalmente */
            align-items: center; /* Centrar verticalmente */
        }
    }
</style>
