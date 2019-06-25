Vue.component('product-tabs', {
  props: {
    reviews: {
      type: Array,
      required: true
    },
    shippingCharge: {
      type: String,
      required: true
    },
    details: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tabs: [ 'Shipping Info', 'Details', 'Reviews', 'Submit a Review' ],
      selectedTab: 'Details'
    }
  },
  template: `
    <div>
      <span class="tab"
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ activeTab: selectedTab === tab }"
            @click="selectedTab = tab">
        {{ tab }}
      </span>

      <div v-show="selectedTab === 'Details'">
        <h3>Details:</h3>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
      </div>

      <div v-show="selectedTab === 'Shipping Info'">
        <p>Shipping: {{ shippingCharge }}</p>
      </div>

      <div v-show="selectedTab === 'Reviews'">
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
            <p>{{ review.name }} - {{ review.rating }}</p>
            <p>{{ review.review }}</p>
            <p v-if="review.recommend">{{ review.name }} recommends this product!</p>
            <p v-else>{{ review.name }} would not recommend this product.</p>
          </li>
        </ul>
      </div>

      <product-review v-show="selectedTab === 'Submit a Review'"></product-review>
    </div>
  `
})