<template>
  <div>
    <h1>The Home Page</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut autem, blanditiis consequuntur
      dolore excepturi laborum maiores minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero
      voluptatem.</p>
    <div class="form-group">
      <label>Username</label>
      <input required class="form-control" type="text" v-model="user.username">
    </div>
    <div class="form-group">
      <label>Mail</label>
      <input required class="form-control" type="text" v-model="user.email">
    </div>
    <div v-if="errorShow" style="margin-bottom: 10px; color: red;">Fill all fields!</div>
    <button class="btn btn-primary" @click="submit">Submit</button>
    <hr>
    <button
      class="btn btn-primary"
      @click="fetchData">Get Data
    </button>
    <br><br>
    <ul class="list-group">
      <li class="list-group-item"
          v-for="u in users">{{ u.username }} - {{ u.email }}
        <button @click="deleteItem(u.id)" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    </ul>


  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    data() {
      return {
        errorShow: false,
        user: {
          email: '',
          username: '',
          id: 0
        },
        users: []
      }
    },
    methods: {
      generateId() {
        return this.user.id = '_' + Math.random().toString(36).substr(2, 9);
      },
      fetchData() {
        this.$http.get('')
          .then(response => {
            return response.json()
          })
          .then(data => {
            const tempArr = [];
            for (let key in data) {
              tempArr.push(data[key]);
            }
            this.users = tempArr;
          })
      },
      submit() {
        if (this.user.username !== '' && this.user.email !== '') {
          this.errorShow = false;
          this.generateId();
          this.$http.post('', this.user)
            .then(response => {
              console.log(response);
            })
        } else {
          this.errorShow = true;
        }
      }
    }
  }
</script>
