
const vModel = ref<string>('')
const isShow = ref<Boolean>(true)

const renderDom = () => { 
  return (
    <div>
      <h2>Hello Tsx</h2>
      <p>1、v-model practice</p>
      <input type="text" v-model={ vModel.value }/>
      <div>您正在输入的内容：{vModel.value}</div>
      <p>2、v-show practice</p>
      <p v-show={ isShow }>isShow 为true</p>
    </div>
  )
}

export default renderDom