<template>
  <div>
    <v-container>
      <div>
        <v-card flat>
          <v-card-title primary-title>
            <h4>Login</h4>
          </v-card-title>
          <v-form>
            <v-text-field v-model="email" name="email" type="email" />
            <v-text-field v-model="password" name="password" type="password" />
            <v-card-actions>
              <v-btn primary large block @click="handleLoginClicked()">
                Login
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLoginClicked () {
      // eslint-disable-next-line no-console
      console.log('component', this.email, this.password)
      this.$emit('login-submitted', this.email, this.password)
    }
  }
}
</script>

<style>

</style>
