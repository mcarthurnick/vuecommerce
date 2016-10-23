<template>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" track-by="id">
      <td>{{ product.name }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.price }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    /* eslint-enable */
    return {
      products: [{
        id: 'sku1',
        name: 'Product #1',
        description: 'This is the product description for sku1',
        price: '299'
      }, {
        id: 'sku2',
        name: 'Product #2',
        description: 'This is the product description for sku2',
        price: '399'
      }, {
        id: 'sku3',
        name: 'Product #3',
        description: 'This is the product description for sku3',
        price: '499'
      }, {
        id: 'sku4',
        name: 'Product #4',
        description: 'This is the product description for sku4',
        price: '599'
      }]
    }
  }
}
</script>
