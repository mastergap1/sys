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

</style>
