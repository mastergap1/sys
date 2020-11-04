<template>
  <div>
    <v-container>
      <h2>แสดงวัตถุดิบที่ขาด</h2>
      <v-data-table
        dense
        :headers="headers"
        :items="missing"
        item-key="date"
        class="elevation-1"
      />
    </v-container>

    <v-container>
      <h2>ตารางแจ้งยอดเงิน</h2>
      <v-data-table
        dense
        :headers="headers01"
        :items="dataMoney"
        item-key="date"
        class="elevation-1"
      />
    </v-container>
    <div class="text-center">
      <v-btn to="/">
        logOut
      </v-btn>
    </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data: () => ({
    headers: [
      {
        text: 'date',
        align: 'start',
        value: 'date'
      },
      {
        text: 'product',
        value: 'product'
      },
      {
        text: 'left',
        value: 'left'
      },
      { text: 'buymore', value: 'buymore' }
    ],
    headers01: [
      {
        text: 'date',
        align: 'start',
        value: 'date'
      },
      {
        text: 'menuName',
        value: 'menuName'
      },
      {
        text: 'price',
        value: 'price'
      }
    ],
    missing: [],
    dataMoney: []
  }),
  mounted () {
    this.menus()
  },
  methods: {
    menus () {
      db.collection('missing').orderBy('date').onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        this.missing = data
      })
      db.collection('dataMoney').orderBy('date').onSnapshot((querySnapshot) => {
        const data01 = []
        querySnapshot.forEach((doc) => {
          data01.push(doc.data())
        })
        this.dataMoney = data01
      })
    }
  }
}
</script>
<style>

</style>
