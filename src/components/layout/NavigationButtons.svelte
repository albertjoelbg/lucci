<script>
    import {ShoppingBag} from 'lucide-svelte';
    import {Headset} from "lucide-svelte";
</script>

<section class="flex justify-center">
    <div>
        <button class="btn-circle">
            <a href="/contacto"><Headset/></a>
        </button>
    </div>

    <div>
        <button class="btn-circle">
            <a href="#"><ShoppingBag/></a>
        </button>
        <span class="badge badge-xs bg-red-600 text-white rounded-full absolute top-4 right-6 py-2 px-1">0
        </span>
    </div>
</section>


