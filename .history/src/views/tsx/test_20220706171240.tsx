
const vModel = ref<string>('')
const isShow = ref<Boolean>(true)
const list = ref<Array<string>>(['dog', 'cat', 'pada', 'monkey'])

const renderDom = () => { 
  return (
    <div>
      <h2>Hello Tsx</h2>
      <p>1、v-model practice</p>
      <input type="text" v-model={ vModel.value }/>
      <div>您正在输入的内容：{vModel.value}</div>
      <p>2、v-show practice</p>
      <p v-show={isShow}>isShow 为true</p>
      <p>3、v-if用三元运算 practice</p>
      { isShow ? <span>isShow 为true</span> : <span>isShow false</span>}
      <p>4、v-for用map() practice</p>
    </div>
  )
}

export default renderDom