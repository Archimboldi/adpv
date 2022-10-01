<template>
  <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>
  <script>
    export default {
      data () {
        return {
          /* 注意：formJson是指表单设计器导出的json，此处演示的formJson只是一个空白表单json！！ */
          formJson: { 'widgetList': [], 'formConfig': { 'labelWidth': 80, 'labelPosition': 'left', 'size': '', 'labelAlign': 'label-left-align', 'cssCode': '', 'customClass': '', 'functions': '', 'layoutType': 'PC', 'onFormCreated': '', 'onFormMounted': '', 'onFormDataChange': '' } },
          formData: {},
          optionData: {}
        }
      },
      methods: {
        submitForm () {
          this.$refs.vFormRef.getFormData().then(formData => {
            // Form Validation OK
            alert(JSON.stringify(formData))
          }).catch(error => {
            // Form Validation failed
            this.$message.error(error)
          })
        }
      }
    }
  </script>
