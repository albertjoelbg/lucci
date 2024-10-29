<script>
    import {MapPin} from "lucide-svelte";
</script>

<svelte:head>
    <title>Contacto | Lucci</title>
</svelte:head>


<section
        class="hero min-h-screen"
        style="background-image: url(/media/content/hero/contacto-hero.webp);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
            <h1 class="mb-5 text-4xl font-bold">Contáctanos</h1>
            <p class="mb-5">
                Aquí estamos brindarte ayuda
            </p>
            <button class="btn btn-primary"><a href="/contacto/#formulario">Contactar</a></button>
        </div>
    </div>
</section>

<section class="flex flex-wrap justify-evenly mt-12 mb-16 mx-2 p-1 gap-4">
    <section id="formulario" class="w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h1 class="card-title font-medium text-2xl text-center">Déjanos saber tus dudas</h1>
                <div class="bg-white px-6 py-8 rounded text-black w-full font-open-sans">
                    <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Nombres y Apellidos"/>

                    <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Correo electrónico"/>

                    <input
                            type="tel"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="telefono"
                            placeholder="Teléfono"/>
                    <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="asunto"
                            placeholder="Asunto"/>
                    <textarea
                            class="textarea textarea-bordered w-full border-gray-500 focus:border-blue-500 rounded mb-4 transition-colors resize-none"
                            rows="4"
                            placeholder="Mensaje"></textarea>
                    <div class="flex justify-center">
                        <button class="btn btn-wide btn-primary rounded-box font-bold">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full md:w-1/2 lg:w-1/2">
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h1 class="card-title font-medium text-2xl text-center">Ubícanos</h1>

                <p class="flex">
                    <MapPin class="text-red-500"/>&nbsp;<span>Calle Túpac Amaru #672 (cerca del parque
                    principal).</span>
                </p>
            </div>
            <figure class="mb-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d580.6448780280703!2d-79.71804606191546!3d-6.154847317981836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904b5d40a6d03671%3A0x7fbc5af1083f96e5!2sTupac%20Amaru%20II%20672%2C%20Motupe%2014201!5e0!3m2!1ses-419!2spe!4v1730134206418!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </figure>
        </div>
    </section>
</section>


