<template>
<form>
  <div class="form-group">
    <label for="productName">Product Name</label><br/>
    <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
  </div>
  <div class="form-group">
    <label for="productDescription">Product Description <small class="text-muted">(option)</small></label><br/>
    <textarea type="text" v-model="product.description" class="form-control" id="productDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
  </div>
  <div class="form-group">
    <label for="price">Price</label><br/>
    <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter price" number>
  </div>
  <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Save Product</button>
</form>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    onSubmit() {
      this.$emit('submit', this.product)
    }
  }
}
</script>
