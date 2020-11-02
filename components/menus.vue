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
            :key="item.id"
          >
            <div class="d-flex flex-wrap">
              <v-card
                v-for="item01 in dessert"
                :key="item01.id"
                elevation="24"
                class="ma-2 mb-2"
                max-width="400"
                :to="{}"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="item01.image"
                  :style="{width:'274px'}"
                />

                <v-card-subtitle class="pb-0" />

                <v-card-text class="text--primary">
                  <div>{{ item01.menuName }}</div>

                  <div>{{ item01.price }} บาท</div>
                </v-card-text>
              </v-card>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
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
          src: 'https://www.img.in.th/images/656c969c43c080e793732c6972fb19ba.jpg'
        },
        {
          src: 'https://www.img.in.th/images/656c969c43c080e793732c6972fb19ba.jpg'
        },
        {
          src: 'https://www.img.in.th/images/cb9d974dcb1ed9a63bb0ef737caa02a1.jpg'
        },
        {
          src: 'https://www.img.in.th/images/cb9d974dcb1ed9a63bb0ef737caa02a1.jpg'
        }
      ],
      tab: null,
      items: [
        {
          id: 1,
          tab: 'ของหวาน'
        },
        {
          id: 2,
          tab: 'กับข้าว'
        },
        {
          id: 3,
          tab: 'ส้มตำ'
        },
        {
          id: 4,
          tab: 'ของทานเล่น'
        },
        {
          id: 5,
          tab: 'อาหารจานเดียว'
        },
        {
          id: 6,
          tab: 'เครื่องคื่ม'
        }
      ],
      dessert: []
    }
  },
  mounted () {
    this.menus()
  },
  methods: {
    menus () {
      db.collection('dessert').orderBy('id').onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        this.dessert = data
      })
    }
  }
}
</script>
