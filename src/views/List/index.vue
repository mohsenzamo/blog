<template>
    <div style="padding: 2rem;">
        <p style="font-size: 2rem;border-right: .3rem solid #F94A29;padding-right: .5rem;">آخرین مطالب</p>
        <div class="splide" role="group" style="width: 100%;padding: .1rem;">
            <div class="splide__track">
                <ul class="splide__list">
                    <li v-for="i in 10" :key="i" class="splide__slide" style="padding: .2rem;">
                        <Card style="width: 300px;border-radius: .3rem;font-family: Yekan;">
                            <template #header>
                                <div
                                    style="background-color: #BFACE2;height: 200px;display: flex;align-items: center;justify-content: center;border-radius: .5rem .5rem 0 0;">

                                    <img v-if="i % 2 == 0" src="../../assets/13699.jpg"
                                        style="width: 100%;height: 100%;border-radius: .3rem .3rem 0 0;" />
                                    <i v-else class="pi pi-image" style="font-size: 4rem"></i>
                                </div>
                            </template>
                            <template #title>
                                <p style="margin: 0;font-size: 2rem;">{{ allNews.title }}</p>
                            </template>
                            <template #content>
                                <p style="margin: -1rem 0;font-size: 1.2rem;">
                                    {{ allNews.text.substring(0, 100) }}
                                    <span v-if="allNews.text.length > 100">...</span>
                                </p>
                            </template>
                            <template #footer>
                                <div
                                    style="display: flex;align-items: center;gap: 5px;flex-direction: row-reverse;color: red;">
                                    <Button label="ادامه مطلب" icon="pi pi-arrow-left" class="p-button-sm p-button-help"
                                        style="direction: ltr;font-family: Yekan;font-size: 1rem;" @click="pushBlog(allNews.title)" />
                                </div>
                            </template>
                        </Card>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { useStore } from '@/store/index';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useRouter } from 'vue-router';

export default {
    name: 'BlogList',

    components: {
        Card,
        Button
    },

    setup() {
        const store = useStore();
        const router = useRouter();

        onMounted(() => {
            const splide = new Splide('.splide', {
                autoWidth: true,
                perMove: 1,
                direction: 'rtl',
                wheel: true,
                pagination: false,
                arrows: false,
                gap: '.3rem'
            });

            splide.mount();
        })

        function pushBlog(title:string) {
            router.push({
                name: "Blog",
                params: { id: title },
            });
        }

        return {
            allNews: store.allNews,
            pushBlog
        }
    },
}
</script>

<style lang="scss">

</style>

