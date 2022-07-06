
const vModel = ref<string>('')
const isShow = ref<Boolean>(false)

const renderDom = () => { 
  return (
    <div>
      <h2>Hello Tsx</h2>
      <input type="text" v-model={ vModel.value }/>
      <span>您正在输入的内容：{vModel.value}</span>
      <switch v-model={ isShow.value }/>
    </div>
  )
}

export default renderDom