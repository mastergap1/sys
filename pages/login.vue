<template>
  <div>
    <!-- <LoginForm @login-submitted="handleLoginFormSubmitted" /> -->
    <v-text-field v-model="email" name="email" type="email">
      Email
    </v-text-field>
    <v-text-field v-model="password" name="password" type="password">
      password
    </v-text-field>
    <v-btn primary large block @click="handleLoginFormSubmitted()">
      ligin
    </v-btn>    {{ error }}
  </div>
</template>

<script>
// import LoginForm from '@/components/LoginForm'
export default {
  // components: {
  //   // LoginForm
  // },
  data: () => ({
    email: '',
    password: '',
    gapEmail: 'saranyoo00200@gmail.com',
    gapPassword: '15975355',
    error: ''
  }),

  methods: {
    handleLoginFormSubmitted () {
      if (this.email === this.gapEmail && this.password === this.gapPassword) {
        this.$router.replace('/dataTable')
      } else {
        this.error = 'Error!!'
      }
    }
  }
}
</script>

<style>

</style>
