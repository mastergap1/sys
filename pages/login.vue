<template>
  <div>
    <!-- <LoginForm @login-submitted="handleLoginFormSubmitted" /> -->
    <v-text-field v-model="email">
      Email
    </v-text-field>
    <v-text-field v-model="password">
      password
    </v-text-field>
    <v-btn @click="handleLoginFormSubmitted()">ligin</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase/app'
// import LoginForm from '@/components/LoginForm'
export default {
  // components: {
  //   // LoginForm
  // },
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    handleLoginFormSubmitted () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    }
  }
}
</script>

<style>

</style>
