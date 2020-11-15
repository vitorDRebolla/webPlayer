<template>
    <div style="padding: 0 40px">
        <playlist
                v-for="playlist in playlists"
                :key="playlist.title"
                :title="playlist.title"
                :subtitle="playlist.subtitle"
                :songs="playlist.songs"
        ></playlist>
    </div>
</template>

<script>
    import Playlist from "../main/Content/Playlist";

    export default {
        name: 'Home',
        components: {
            Playlist
        },
        data() {
            return {
                playlists: [
                    {
                        title: 'Made for you',
                        subtitle: 'Get better recommendations the more you listen.',
                        songs: [
                            {
                                title: 'Daily mix 1',
                                subtitle: 'MC WM, Dj W-Beatz, Dj Guuga and more',
                                src: 'https://dailymix-images.scdn.co/v2/img/f3c1305b30e2d1f8ce9e9f22e925b1e250ebf91d/1/en/default'
                            },
                            {
                                title: 'Daily mix 2',
                                subtitle: 'Kaya Conky, Aretuza Lovi, Mateus Carrilho and more',
                                src: 'https://dailymix-images.scdn.co/v2/img/d4be3efb9f2d5c78578541957f34038b1976e116/2/en/default'
                            },
                            {
                                title: 'Daily mix 3',
                                subtitle: 'Lady Gaga, Tove Lo, Charlie Puth and more',
                                src: 'https://dailymix-images.scdn.co/v2/img/1f4c23aa943d8eafc17e9f02e0cb1ffc3ac49d37/3/en/default'
                            },
                            {
                                title: 'Daily mix 4',
                                subtitle: 'Alok, Luísa Sonza, Pabllo Vittar and more',
                                src: 'https://dailymix-images.scdn.co/v2/img/339b4f2b8fa072d2130ad69cd603919e6279258e/4/en/default'
                            },
                            {
                                title: 'Daily mix 5',
                                subtitle: 'KSHMR, R3HAB, Tiësto and more',
                                src: 'https://dailymix-images.scdn.co/v2/img/827aa43e7c4ff41408c93a4598db908a34778309/5/en/default'
                            },
                        ],
                    },
                    {
                        title: 'Uniquely Yours',
                        songs: [
                            {
                                title: 'On repeat',
                                subtitle: 'The songs you can’t get enough of right now.',
                                src: 'https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat_DEFAULT-en.jpg'
                            },
                            {
                                title: 'Repeat Rewind',
                                subtitle: 'Past songs that you couldn\'t get enough of.',
                                src: 'https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind_DEFAULT-en.jpg'
                            },
                            {
                                title: 'Liked Songs',
                                subtitle: '',
                                src: 'https://misc.scdn.co/liked-songs/liked-songs-300.png'
                            },
                            {
                                title: 'Your top songs 2019',
                                subtitle: 'The songs you loved most this year, all wrapped up.',
                                src: 'https://lineup-images.scdn.co/your-top-songs-2019_DEFAULT-en.jpg'
                            },
                            {
                                title: 'Your top songs 2018',
                                subtitle: 'The songs you loved most this year, all wrapped up.',
                                src: 'https://lineup-images.scdn.co/your-top-songs-2018_DEFAULT-en.jpg'
                            },
                        ],
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>