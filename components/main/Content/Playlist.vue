<template>
    <div style="margin-bottom: 40px;">
        <h2 style="margin-bottom: 0;">{{ title }}</h2>
        <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
        <div class="d-flex" style="flex-wrap: wrap">
            <card v-for="song in songs" :key="song.id" :song="song"></card>
        </div>
    </div>
</template>

<script>
    import Card from './Card';

    export default {
        name: 'Playlist',
        components: {
            Card,
        },
        props: {
            title: {
                Required: true
            },
            subtitle: {
                required: false,
            },
            songs: {
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>