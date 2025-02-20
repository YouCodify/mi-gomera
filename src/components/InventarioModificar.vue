<template>
    <v-container>
        <v-text-field v-model="producto.nombre" label="Nombre de Producto" />
        <v-text-field v-model="producto.marca" label="Marca" />
        <v-text-field v-model="producto.existencia" label="Cantidad en Existencia" type="number" />
        <v-btn @click="guardarCambios">Guardar Cambios</v-btn>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            producto: {
                nombre: '',
                marca: '',
                existencia: 0,
            },
        };
    },
    methods: {
        guardarCambios() {
            // Aquí puedes agregar el código para guardar los cambios
        },
    },
};
</script>