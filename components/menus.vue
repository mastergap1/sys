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
      <div>
        <v-card class="mb-3">
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
                  class="mx-auto mb-2"
                  max-width="344"
                  @click="addclick(item01)"
                >
                  <v-card v-if="item.tab === item01.type">
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
                </v-card>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </div>
      <!-- cart card -->
      <v-col>
        <div>
          <v-card id="table">
            <div class="text-center">
              <h3>RESTAURANT</h3>
              <p>ใบเสร็จรับเงิน/บิล(bill)/โต๊ะที่ 0</p>
            </div>
            <template>
              <v-data-table
                :headers="headers"
                :items="massage"
                :items-per-page="5"
                class="elevation-1"
              />
            </template>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="dialog = false, reloadPage()"
              >
                รีเช็ต
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="dialog = false, clickSubmit()"
              >
                ยืนยัน
              </v-btn>
              <!-- <v-btn
                color="primary"
                text
                @click="dialog = false, printDiv('table')"
              >
                ปริ้น(เมนู)
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
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
          src: 'https://www.img.in.th/images/4042f1b35e457055008a2301429ac412.jpg'
        },
        {
          src: 'https://www.img.in.th/images/cb9d974dcb1ed9a63bb0ef737caa02a1.jpg'
        },
        {
          src: 'https://www.img.in.th/images/48450713916b5a4ba7d253667b25897d.jpg'
        }
      ],
      tab: null,
      items: [
        {
          id: 1,
          tab: 'rice'
        },
        {
          id: 2,
          tab: 'dessert'
        },
        {
          id: 3,
          tab: 'snacks'
        },
        {
          id: 4,
          tab: 'drink'
        }
      ],
      dessert: [],
      massage: [],
      headers: [
        {
          text: 'วันที่',
          align: 'start',
          sortable: false,
          value: 'date'
        },
        { text: 'ประเภท', value: 'type' },
        { text: 'ชื่ออาหาร', value: 'menuName' },
        { text: 'ราคา', value: 'price' }
      ],
      date: null
    }
  },
  mounted () {
    this.menus()
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    today = mm + '/' + dd + '/' + yyyy
    this.date = today
  },
  methods: {
    reloadPage () {
      window.location.reload()
    },
    menus () {
      db.collection('dessert').orderBy('id').onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        this.dessert = data
      })
    },
    addclick (massageAdd) {
      const data = {
        menuName: massageAdd.menuName, price: massageAdd.price, date: this.date, type: massageAdd.type
      }
      this.massage.push(data)
    },
    clickSubmit () {
      this.$store.commit('addclick', this.massage)
      for (const i in this.massage) {
        db.collection('dataMoney').add(this.massage[i])
          .then(function () {
            console.log('Document successfully written!')
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
      }
      // Add a new document in collection "cities"
    }
    // printDiv (divName) {
    //   const printContents = document.getElementById(divName).innerHTML
    //   const originalContents = document.body.innerHTML

    //   document.body.innerHTML = printContents

    //   window.print()

    //   document.body.innerHTML = originalContents
    // }
  }
}
</script>
