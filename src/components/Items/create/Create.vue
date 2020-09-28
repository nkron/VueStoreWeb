<template>
    <div>
      <form>
            <div class="row">
                <div class="col-sm-12 col-md-6 offset-md-3">
                    <h1>Create a new Item</h1>
                    <hr>
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
                      @click.prevent="mySubmit">Submit
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
    mySubmit () {
      axios.post('https://pocstoreapi.azurewebsites.net/api/Items?itemName=' + this.item.itemName + '&cost=' + this.item.cost)
        .then(r => {
          if (r.status !== 200) {
            alert('Something went wrong with your record creation')
          } else {
            alert('Record created!')
            window.location.href = '/'
          }
        })
    }
  },
  data: function () {
    return {
      item: {
      }
    }
  }
}
</script>
