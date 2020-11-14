<template>
    <div class="song-card">
        <div class="d-flex flex-column">
            <div style="margin-bottom: 16px">
                <img height="160px" :src="song.src" alt="">
            </div>
            <div>
                <span style="font-weight: bold">{{ song.title }}</span>
                <div class="card-subtitle-container">
                    <p class="subtitle subtitle-card">{{ song.subtitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            song: {
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>