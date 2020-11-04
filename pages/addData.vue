<template>
  <v-layout>
    <v-flex class="text-center">
      <div class="container">
        <div>
          <div>
            <div class="card-header">
              <h2>เพิ่มวัตถุดิบที่ขาด</h2>
            </div>
            <div class="card-body">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <div class="row">
                  <div class="form-group col-md-6">
                    <v-text-field
                      v-model="product"
                      label="productName"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <v-text-field
                      v-model="buymore"
                      label="buymore"
                      required
                    />
                  </div>
                  <div class="form-group col-md">
                    <v-text-field
                      v-model="left"
                      label="left"
                      required
                    />
                  </div>
                  <div class="form-group col-md">
                    <v-text-field
                      v-model="date"
                      label="date"
                      required
                    />
                  </div>
                </div>
                <v-dialog
                  v-model="sub"
                  persistent
                  max-width="290"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      depressed
                      color="primary"
                      :loading="load"
                      :disabled="load"
                      v-bind="attrs"
                      @click="confirm(),loader = 'load'"
                      v-on="on"
                    >
                      ยืนยัน
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline">
                      ทำการส่งเป็นที่เรียนร้อย
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="primary darken-1"
                        text
                        @click="sub = false"
                      >
                        ปิด
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data: () => ({
    valid: true,
    product: '',
    loader: null,
    load: false,
    left: '',
    buymore: '',
    sub: false,
    array: null,
    date: ''

  }),
  watch: {
    loader () {
      this.valid = true
      this.product = ''
      this.load = false
      this.left = ''
      this.buymore = ''
      this.date = ''
    }
  },

  methods: {
    confirm () {
      this.arrayData = { dataId: this.$store.state.Dataid, product: this.product, buymore: this.buymore, left: this.left, date: this.date }
      // Add a new document in collection "cities"
      db.collection('missing').add(this.arrayData)
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
  }
}
</script>
