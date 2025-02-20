<template>



  <v-data-table :headers="headers" :items="cart">
    <template v-slot:item.action="{ item }">
      <v-btn @click="deleteItem(item.codigo)" color="red" variant="text" icon="mdi-cart-off"> </v-btn>
    </template>
  </v-data-table>

</template>


<script>
export default {
  data() {
    return {
      cart: [],  // Cargar el carrito desde localStorage
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
    this.getCart()
  },
  methods: {
    deleteItem(codigo) {
      console.log('codigo', codigo)
      // Filtrar el array para eliminar el artículo con el nombre especificado
      var cart = this.cart.filter(item => item.codigo !== codigo);
      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      this.getCart();
      this.$emit('update-cart', this.product);
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
    },
    getCart() {
      // Obtener el carrito de localStorage (si existe)
      const cart = localStorage.getItem('cart');
      this.cart = cart ? JSON.parse(cart) : [];
    },
  },
};
</script>
