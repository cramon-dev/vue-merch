Vue.component('product-review', {
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      this.errors = [];

      if(this.name && this.review && this.rating && this.recommend) {
        const productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
        };
  
        eventBus.$emit('add-review', productReview);
  
        this.name = '';
        this.review = '';
        this.rating = null;
        this.recommend = null;
        this.errors = [];
      }
      else {
        if(!this.name) this.errors.push("Name required");
        if(!this.review) this.errors.push("Review required");
        if(!this.rating) this.errors.push("Rating required");
        if(!this.recommend) this.errors.push("Recommendation required");
      }
    }
  },
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
    
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <h3>Would you recommend this product?</h3>

        <label>Yes</label>
        <input type="radio" v-model="recommend" value="true"/>
        <label>No</label>
        <input type="radio" v-model="recommend" value="false"/>
      </p>

      <button type="submit">Submit</button>
    </form>
  `
});