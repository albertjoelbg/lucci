<script>
    let {mainImage, rightTopImage, rightBottomImage} = $props();
</script>

<div class="relative">
    <div class="grid grid-cols-3 gap-2 h-auto">
        <!-- Imagen principal a la izquierda ocupando dos filas -->
        <div class="col-span-2 row-span-2">
            <img src={mainImage} alt="Main Image" class="w-full h-full object-cover rounded-lg"/>
        </div>

        <!-- Imagen superior derecha -->
        <div>
            <img src={rightTopImage} alt="Right Top Image" class="w-full h-full object-cover rounded-lg"/>
        </div>

        <!-- Imagen inferior derecha -->
        <div>
            <img src={rightBottomImage} alt="Right Bottom Image"
                 class="w-full object-cover rounded-lg"/>
        </div>
    </div>
</div>
