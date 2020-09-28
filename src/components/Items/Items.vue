<template>
    <div class="col-sm-10 offset-sm-1">
      <h1>Items</h1>
      <p>
      <span>Don't see the item you're looking for? </span>
      <router-link to="create" activeClass="active"><a>Create one!</a></router-link>
      </p>
      <table class="table table-hover">
        <thead class="thead-light">
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Cost</th>
          <th></th>
        </thead>
        <tbody class="table-hover">
          <tr v-for="item in items" :key=item.id>
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.itemName }}</td>
            <td>{{ item.cost }}</td>
            <td>
              <div class="ml-3">
            <router-link :to="'edit/'+item.id" item.id><button class="btn btn-primary">Edit</button></router-link>
            &nbsp;&nbsp;&nbsp;
            <button
            class="btn btn-danger"
            @click.prevent="myDelete(item.id)"
            >Delete</button>
            </div>
            </td>
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
      axios.get('https://pocstoreapi.azurewebsites.net/api/items')
      // eslint-disable-next-line no-return-assign
        .then(response => this.items = response.data)
    },
    myDelete (id) {
      axios.delete('https://pocstoreapi.azurewebsites.net/api/Items/' + id)
      // eslint-disable-next-line no-return-assign
        .then(response => response.status === 200 ? alert('Record deleted :(') : alert('Something went wrong with deleting'))
      this.getAPIData()
      this.$forceUpdate()
    }
  },
  mounted () {
    this.getAPIData()
  }
}

</script>
