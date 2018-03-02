<template>
    <div class="users">
      <!--添加用户信息-->
      <form v-on:submit="addUser">
        <input type="text" placeholder="name" v-model="newUser.name">
        <input type="text" placeholder="email" v-model="newUser.email">
        <input type="submit" value="Submit">
      </form>
      <!--展示用户信息-->
      <ul>
        <li v-for="user in users">
          <input type="checkbox" class="toggle" v-model="user.contacted">
          <span v-bind:class="{contacted: user.contacted}">
            {{user.name}} : {{user.email}}
            <button v-on:click="deleteUser(user)">x</button>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'users',
        data() {
            return {
              message: '哈哈哈哈哈',
              newUser:{},
              users: [
                {
                  name: 'zhangsan',
                  email: 'zhangsan@163.com',
                  contacted: false
                },
                {
                  name: 'lisi',
                  email: 'lisi@126.com',
                  contacted: true
                },
                {
                  name: 'wangwu',
                  email: 'wangwu@qq.com',
                  contacted: false
                }
              ]
            }
        },
        methods: {
          addUser: function (e) {
            this.users.push({
              name: this.newUser.name,
              email: this.newUser.email,
              contacted: false
            });
            e.preventDefault();
          },
          deleteUser: function (user) {
            this.users.splice(this.users.indexOf(user), 1)
          }
        }
    }
</script>

<style scoped>
  .users {

  }
  .contacted {
    text-decoration: line-through;
  }
</style>
