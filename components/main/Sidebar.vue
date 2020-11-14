<template>
    <div>
        <div class="d-flex align-items-center justify-content-center">
            <span class="fas fa-eye"></span>
            <h3>Vitor Web Player</h3>
        </div>
        <div class="d-flex flex-column">
            <div :class="['sidebar-item', {'selected': selectedItem === sidebarItem.id}]"
                 v-for="sidebarItem in sidebarItems" :key="sidebarItem.id" @click="setSelectedItem(sidebarItem.id)">
                <span>{{ sidebarItem.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                sidebarItems: [
                    {
                        name: 'Home',
                        id: 'home',
                    },
                    {
                        name: 'Pesquisar',
                        id: 'search',
                    },
                    {
                        name: 'Sua biblioteca',
                        id: 'library',
                    },
                ],
                selectedItem: '',
            }
        },
        watch: {
          selectedItem(item) {
              this.$emit('changedItem', item);
          }
        },
        methods: {
            setSelectedItem(item) {
                this.selectedItem = item;
            }
        },
        mounted() {
            this.setSelectedItem('home');
        }
    }
</script>

<style scoped>

</style>