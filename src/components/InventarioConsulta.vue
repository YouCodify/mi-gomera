<template>
    <v-container>
        <v-data-table :headers="headers" :items="inventario" item-key="id">
            <!-- <template v-slot:item.existencia="{ item }">
                <v-chip>{{ item.existencia }}</v-chip>
            </template> -->
        </v-data-table>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            inventario: [],
            headers: [
                { text: 'Nombre', align: 'start', key: 'nombre' },
                { text: 'Marca', align: 'start', key: 'marca' },
                { text: 'Existencia', align: 'center', key: 'existencia' },
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