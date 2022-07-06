
const vModel = ref<string>('')

const renderDom = () => { 
  return (
    <div>
      <h2>Hello Tsx</h2>
      <input type="text" v-model={ vModel.value }/>
      <div>您正在输入的内容：{ vModel.value }</div>
    </div>
  )
}

export default renderDom