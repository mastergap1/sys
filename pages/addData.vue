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
                      v-model="name"
                      label="productName"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <v-text-field
                      v-model="original"
                      label="original"
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
                  <div class="form-group col-md-6">
                    <v-text-field
                      v-model="sell"
                      label="sell"
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
                      v-model="addproduct"
                      label="addproduct"
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
export default {
  data: () => ({
    valid: true,
    name: '',
    loader: null,
    load: false,
    original: '',
    left: '',
    buymore: '',
    sub: false,
    array: null,
    sell: null,
    addproduct: ''

  }),
  watch: {
    loader () {
      this.valid = true
      this.name = ''
      this.load = false
      this.original = ''
      this.left = ''
      this.buymore = ''
      this.sell = ''
      this.addproduct = ''
    }
  },

  methods: {
    confirm () {
      this.arrayData = { dataId: this.$store.state.Dataid, name: this.name, original: this.original, buymore: this.buymore, sell: this.sell, left: this.left, addproduct: this.addproduct }
      this.$store.commit('increment')
      this.$store.commit('regis', this.arrayData)
    }
  }
}
</script>
