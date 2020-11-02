<template>
  <div>
    <v-container>
      <h2>แสดงวัตถุดิบที่ขาด</h2>
      <v-data-table
        dense
        :headers="headers"
        :items="this.$store.state.data"
        item-key="dataId"
        class="elevation-1"
      />
    </v-container>

    <v-container>
      <h2>ตารางแจ้งยอดเงิน</h2>
      <v-data-table
        dense
        :headers="headers"
        :items="this.$store.state.data"
        item-key="dataId"
        class="elevation-1"
      />
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'dataId'
      },
      {
        text: 'product',
        value: 'name'
      },
      {
        text: 'original',
        value: 'original'
      },
      { text: 'buymore', value: 'buymore' },
      { text: 'sell', value: 'sell' },
      { text: 'left', value: 'left' },
      { text: 'addproduct', value: 'addproduct' }
    ]
  })
}
</script>

<style>

</style>
