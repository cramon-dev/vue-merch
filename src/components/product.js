Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      description: 'A pair of socks. Nothing fancy',
      details: ["80% cotton", "20% polyester", "Gender neutral"],
      onSale: true,
      cart: 0,
      selectedVariant: 0,
      variants: [
        {
          variantId: 1,
          variantColor: 'green',
          variantImage: './img/vmSocks-green.jpg',
          variantQuantity: 15
        },
        {
          variantId: 2,
          variantColor: 'blue',
          variantImage: './img/vmSocks-blue.jpg',
          variantQuantity: 10
        }
      ],
      sizes: [
        "S", "M", "L"
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if(this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity > 0;
    },
    shippingCharge() {
      return this.premium ? "Free" : "2.99";
    },
    variantInventory() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    emptyCart() {
      return this.cart === 0;
    },
    saleMessage() {
      return `${this.brand} ${this.product} is currently on sale; hurry and get yours before it's too late!`
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p v-if="onSale" class="sale-alert">{{ saleMessage }}</p>
        <p v-if="variantInventory > 10">In stock</p>
        <p v-else-if="variantInventory <= 10 && variantInventory > 0">Almost sold out</p>
        <p v-else :class="{ 'text-strikethrough': !inStock }">Out of stock</p>
        <p>Shipping: {{ shippingCharge }}</p>

        <product-details :details="details"></product-details>

        <h3>Available colors:</h3>
        <div v-for="(variant, index) in variants" 
            :key="variant.variantId"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
            class="color-box">
        </div>

        <h3>Sizes:</h3>
        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <button :disabled="!inStock"
                :class="{ disabledButton: !inStock }"
                v-on:click="addToCart">
          Add to Cart
        </button>
        <button :disabled="emptyCart"
                :class="{ disabledButton: emptyCart }"
                v-on:click="removeFromCart">
          Remove from Cart
        </button>

        <div class="cart">
          <p>Cart ({{ cart }})</p>
        </div>
      </div>
    </div>
  `
});