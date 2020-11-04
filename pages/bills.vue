<template>
  <div>
    <div id="table">
      <div class="text-center">
        <h3> Restaurant</h3>
        <p>ใบเสร็จรับเงิน/บิล(bill)/โต๊ะที่ 0</p>
      </div>
      <v-simple-table dark class="mb-3">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                วันที่
              </th>
              <th class="text-left">
                ประเภท
              </th>
              <th class="text-left">
                ชื่ออาหาร
              </th>
              <th class="text-left">
                ราคา
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in submit"
              :key="item.id"
            >
              <td>{{ item.date }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.menuName }}</td>
              <td>{{ item.price }} บาท</td>
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td>
                ราคารวม

                {{ total }} บาท
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div class="text-center">
      <v-btn @click="printDiv('table')">
        ปริ้นใบเสร็จเพื่อสั่งอาหาร
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      submit: [],
      total: 0
    }
  },
  mounted () {
    this.submit = this.$store.state.massage01
    for (const i in this.submit) {
      this.total = this.total + this.submit[i].price
    }
  },
  methods: {
    printDiv (divName) {
      const printContents = document.getElementById(divName).innerHTML
      const originalContents = document.body.innerHTML

      document.body.innerHTML = printContents

      window.print()

      document.body.innerHTML = originalContents
    }
  }
}
</script>
