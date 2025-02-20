<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" permanent rail expand-on-hover @click="rail = false">
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="José Abel">
                <template v-slot:append>
                    <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-list color="primary" nav>
                <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" :prepend-icon="item.icon"
                    :title="item.title">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="primary" elevation="0" density="comfortable">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title :text="$route.name" class="text-uppercase"> </v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-if="$vuetify.display.mdAndUp">
                <v-btn icon="mdi-magnify" variant="text"></v-btn>

                <!-- <v-btn icon="mdi-filter" variant="text"></v-btn> -->
            </template>

            <v-btn stacked :to="'/cart'">
                <v-btn v-if="!cart.length" icon="mdi-cart-outline" variant="text"></v-btn>
                <v-badge v-else color="error" :content="cart.length">
                    <v-icon>mdi-cart-outline</v-icon>
                </v-badge>
            </v-btn>
        </v-app-bar>
        <v-main>
            <router-view @update-cart="getCart"></router-view> <!-- Aquí se cargan las vistas -->
        </v-main>
    </v-app>

</template>
<script>
export default {
    data() {
        return {
            cart: [],
            drawer: true,
            rail: true,
            items: [{
                title: 'Inventario',
                value: 'inventario',
                icon: 'mdi-storefront',
                to: "/"
            }, {
                title: 'Salida',
                value: 'salida',
                icon: 'mdi-go-kart',
                to: "/salida"
            }, {
                title: 'Modificar',
                value: 'modificar',
                icon: 'mdi-cog',
                to: "/modificar"
            },],
        };
    },
    created() {
        this.getCart();
    },
    methods: {
        getCart() {
            // Obtener el carrito de localStorage (si existe)
            const cart = localStorage.getItem('cart');
            this.cart = cart ? JSON.parse(cart) : [];
        },
    },
};
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
