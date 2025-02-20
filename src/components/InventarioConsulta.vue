<template>
    <v-container>
        <v-data-table :items="inventario"></v-data-table>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            inventario: [],
            headers: [
                { text: 'Codigo', key: 'codigo' },
                { text: 'Nombre', key: 'nombre' },
                { text: 'Marca', key: 'marca' },
                { text: 'Existencia', align: 'right', key: 'cantidad' },
            ],
        };
    },
    created() {
        this.cargarInventario();
    },
    methods: {
        cargarInventario() {
            axios
                .get('https://youcodify.github.io/mi-gomera/public//inventario.json')
                .then(response => {
                    this.inventario = response.data;
                });
        },
    },
};
</script>