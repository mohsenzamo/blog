<template>
    <div
        style="height: 100vh;width: 100%;display: flex;align-items: center;justify-content: center;position: relative;">
        <Card style="width: 80%;height: 35rem;border-radius: .3rem;font-family: Yekan;">
            <template #title>
                <p style="margin: -1rem 0 -1.5rem 0;font-size: 3rem;">{{ allNews.title }}</p>
            </template>
            <template #content>
                <p ref="content" class="content"
                    style="margin: 0;overflow-y: scroll;height: 28rem;display: inline-block;font-size: 1.3rem;">
                    <span v-if="false" class="shape">
                        <img src="../../assets/13699.jpg" alt="" style="width: 100%;height: 100%;border-radius: .5rem;">
                    </span>
                    {{ allNews.text }}
                    {{ allNews.text }}
                    {{ allNews.text }}
                    {{ allNews.text }}
                    {{ allNews.text }}
                    {{ allNews.text }}
                    {{ allNews.text }}
                </p>
            </template>
        </Card>
        <Button v-if="scrollDownButton" icon="pi pi-arrow-down" class="p-button-sm p-button-help"
            style="position: absolute;bottom: 3.5rem;left: 5rem;" @click="scrollingDown" />
        <Button v-if="scrollUpButton" icon="pi pi-arrow-up" class="p-button-sm p-button-help"
            style="position: absolute;top: 3.5rem;left: 5rem;" @click="scrollingUp" />
    </div>
</template>

<script lang="ts">
import { useStore } from '@/store/index';
import { ref, watch } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
    name: 'BlogPage',

    props: ["id"],

    components: {
        Card,
        Button
    },

    setup() {
        const store = useStore();
        const scrollDownButton = ref(true)
        const scrollUpButton = ref(false)

        const content = ref<HTMLParagraphElement>();

        function scrollingDown() {
            content.value!.scrollTop += 20;
            if (content.value!.offsetHeight + content.value!.scrollTop >= content.value!.scrollHeight) {
                scrollDownButton.value = false
            }
            if (content.value!.scrollTop > 0) {
                scrollUpButton.value = true
            }
        }

        function scrollingUp() {
            content.value!.scrollTop -= 20;
            if (content.value!.scrollTop == 0) {
                scrollUpButton.value = false
            }
            if (content.value!.offsetHeight + content.value!.scrollTop < content.value!.scrollHeight) {
                scrollDownButton.value = true
            }
        }

        return {
            allNews: store.allNews,
            scrollingDown,
            scrollingUp,
            content,
            scrollUpButton,
            scrollDownButton
        }
    },
}
</script>

<style lang="scss" >
.content::-webkit-scrollbar {
    display: none;
}

.shape {
    width: 17rem;
    height: 12rem;
    text-align: center;
    float: left;
    margin: .1rem;
    shape-outside: url(../../assets/13699.jpg);
}
</style>

