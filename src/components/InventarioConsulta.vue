<template>
    <v-row class="mt-5">
        <v-col md="6" offset-md="3">
            <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" placeholder="Buscar..."></v-text-field>
        </v-col>
    </v-row>
    <v-data-table :search="search" :headers="headers" :items="inventario" hover color="primary">
        <template v-slot:item.action="{ item }">
            <v-btn @click="addToCart(item)" color="primary" variant="text" icon="mdi-cart-plus"> </v-btn>
        </template>
    </v-data-table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            search: '',
            cart: [],
            inventario: [],
            headers: [
                { title: 'Codigo', key: 'codigo' },
                { title: 'Nombre', key: 'name' },
                { title: 'Marca', key: 'marca' },
                { title: 'Existencia', align: 'right', key: 'cantidad' },
                { title: 'Agregar', align: 'center', key: 'action' },
            ],
        };
    },
    created() {
        this.getCart();
        this.cargarInventario();
    },
    methods: {
        getCart() {
            // Obtener el carrito de localStorage (si existe)
            const cart = localStorage.getItem('cart');
            return cart ? JSON.parse(cart) : [];
        },
        cargarInventario() {
            axios
                .get('https://youcodify.github.io/mi-gomera/public//inventario.json')
                .then(response => {
                    this.inventario = response.data.map((x) => { x.action = ""; return x; });
                });
        },
        addToCart(product) {
            // Buscar si el producto ya existe en el carrito
            const existingProduct = this.cart.find(item => item.codigo === product.codigo);
            if (existingProduct) {
                // Si el producto ya está en el carrito, aumentar la cantidad
                existingProduct.quantity += product.quantity;
            } else {
                // Si no está en el carrito, agregarlo con cantidad 1
                this.cart.push(product);
            }

            // Almacenar el carrito actualizado en localStorage
            localStorage.setItem('cart', JSON.stringify(this.cart));
            this.$emit('update-cart', this.product);
        },
    },
};
</script>