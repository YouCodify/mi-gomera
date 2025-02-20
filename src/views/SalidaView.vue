<template>
  <div>
    <h1>Carrito de Compras</h1>
    <v-list>
      <v-list-item v-for="(item, index) in cart" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>Cantidad: {{ item.quantity }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-btn @click="addToCart({ name: 'Producto A', quantity: 1 })">
      Agregar Producto A
    </v-btn>
    <v-btn @click="addToCart({ name: 'Producto B', quantity: 1 })">
      Agregar Producto B
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: this.getCart(),  // Cargar el carrito desde localStorage
    };
  },
  methods: {
    addToCart(product) {
      // Buscar si el producto ya existe en el carrito
      const existingProduct = this.cart.find(item => item.name === product.name);
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
      return cart ? JSON.parse(cart) : [];
    },
  },
};
</script>
