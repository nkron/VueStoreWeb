<template>
    <div>
      <form>
            <div class="row">
                <div class="col-sm-12 col-md-6 offset-md-3">
                    <h1>Edit Item</h1>
                    <hr>
                    <div class="form-group">
                        <label for="id">Id</label>
                        <input
                                type="text"
                                id="id"
                                class="form-control"
                                v-model.number.lazy="item.id">
                    </div>
                    <div class="form-group">
                        <label for="itemName">Name</label>
                        <input
                                type="text"
                                id="itemName"
                                class="form-control"
                                v-model.trim.lazy="item.itemName">
                    </div>
                    <div class="form-group">
                        <label for="cost">Cost</label>
                        <input
                                type="number"
                                id="cost"
                                class="form-control"
                                v-model.number.lazy="item.cost">
                </div>
              </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-sm-offset-2 col-md-6 offset-md-3">
                    <button
                            class="btn btn-primary w-100"
                            @click.prevent="myEdit">Confirm
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    myEdit () {
      axios.patch('https://pocstoreapi.azurewebsites.net/api/Items', { id: this.item.id, itemName: this.item.itemName, cost: this.item.cost })
        .then(r => {
          if (r.status !== 200) {
            alert('Something went wrong with your record creation')
          } else {
            alert('Record created!')
            window.location.href = '/'
          }
        })
    },
    getItem () {
      axios.get('https://pocstoreapi.azurewebsites.net/api/Items/' + this.id)
        .then(r => {
          console.log(r.data)
          this.item = r.data
        })
    }
  },
  data: function () {
    return {
      id: this.$route.params.id,
      item: { id: '', itemName: '', cost: '' }
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
    }
  },
  mounted () {
    this.getItem()
  }
}
</script>
