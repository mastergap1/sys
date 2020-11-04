<template>
  <v-row justify="center" align="center">
    <v-col>
      <div class="">
        <template>
          <div>
            <menus />
          </div>
        </template>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import menus from '@/components/menus'
export default {
  data () {
    return {
      components: {
        menus
      }
    }
  }
}
</script>

<style>
 .theme--dark.v-application {
  background-image: url("https://cdn.discordapp.com/attachments/773219308557303858/773220815872196648/3259967.jpg");
  background-attachment: fixed;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
