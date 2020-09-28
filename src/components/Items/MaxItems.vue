<template>
    <div class="col-sm-12">
      <h1>Max Item Values</h1>
      <table class="table table-hover">
        <thead class="thead-light">
          <th scope="col">Name</th>
          <th scope="col">Cost</th>
        </thead>
        <tbody class="table-hover">
          <tr v-for="item in items" :key=item.id>
            <td>{{ item.itemName }}</td>
            <td>{{ item.cost }}</td>
          </tr>
        </tbody>

      </table>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      items: null
    }
  },
  methods: {
    getAPIData () {
      axios.get('https://pocstoreapi.azurewebsites.net/api/maxitems')
      // eslint-disable-next-line no-return-assign
        .then(response => this.items = response.data)
    }
  },
  mounted () {
    this.getAPIData()
  }
}

</script>
