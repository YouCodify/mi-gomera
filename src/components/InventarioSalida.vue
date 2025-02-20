<template>
    <v-container>
        <v-text-field v-model="cantidad" label="Cantidad de Gomas" type="number" />
        <v-btn @click="darSalida">Dar Salida</v-btn>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            cantidad: 0,
        };
    },
    methods: {
        darSalida() {
            // Lógica para dar salida a las gomas
            console.log(`Salida de ${this.cantidad} gomas`);
        },
    },
};
</script>