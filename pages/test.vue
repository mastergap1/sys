<template>
  <div>
    <div>
      <v-carousel
        class="mb-5"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(itemImage,i) in itemsImage"
          :key="i"
          :src="itemImage.src"
        />
      </v-carousel>
    </div>
    <div>
      <v-card>
        <v-tabs
          v-model="tab"
          dark
        >
          <v-tab
            v-for="item in items"
            :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>
        <v-divider class="mt-2 mb-2" />
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item.tab"
          >
            <div class="d-flex flex-wrap">
              <v-card
                v-for="item01 in dataMenus"
                :key="item01.id"
                elevation="24"
                class="ma-2 mb-2"
                max-width="400"
                :to="{}"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :img-src="item01.image"
                  :style="{width:'274px'}"
                >
                  <v-card-title>{{ item01.title }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0" />

                <v-card-text class="text--primary">
                  <div>{{ item01.menuName }}</div>

                  <div>Whitsunday Island</div>
                </v-card-text>
              </v-card>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
      {{ dataMenus }}
    </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      itemsImage: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      tab: null,
      items: [
        {
          id: 1,
          tab: 'อาหารใต้',
          content: ''
        },
        {
          id: 2,
          tab: 'อาหารเหนือ',
          content: ''
        },
        {
          id: 3,
          tab: 'อาหารทะเล',
          content: ''
        },
        {
          id: 4,
          tab: 'น้ำดื่ม',
          content: ''
        },
        {
          id: 5,
          tab: 'ของหวาน',
          content: ''
        },
        {
          id: 6,
          tab: 'ผลไม้',
          content: ''
        },
        {
          id: 7,
          tab: 'ของท่านเล่น',
          content: ''
        }, {
          id: 8,
          tab: 'ของท่าน',
          content: ''
        }
      ],
      dataMenus: []
    }
  },
  mounted () {
    this.menus()
  },
  methods: {
    menus () {
      db.collection('menus01').orderBy('id').onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        this.dataMenus = data
      })
    }
  }
}
</script>
