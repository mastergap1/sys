<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-btn
        icon
        to="/"
      >
        <v-icon>
          mdi-food
        </v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              to="/bills"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-bank</v-icon>
            </v-btn>
          </template>
        </v-dialog>
      </div>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-brightness-5</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title li>
                <nuxt-link
                  to="/login"
                  no-prefetch
                >
                  <v-icon>mdi-login</v-icon> login
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item>
              <v-list-item-title li>
                <nuxt-link
                  to="/addData"
                  no-prefetch
                >
                  <v-icon>mdi-book</v-icon> addData
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    />
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      dialog: false,
      items: [],
      itemsto: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'RESTAURANT',
      massages: '',
      show: false
    }
  },
  mounted () {
    this.massages = this.$store.state.massage01
  }
}
</script>
