
const vModel = ref<string>('')
const isShow = ref<Boolean>(true)
const list = ['dog', 'cat', 'pada', 'monkey']

const onAnimalClick = (animal: string) => { 
  console.log('您点击了：' , animal )
}
const onTip = (msg:  string) => {
  console.log('您点击了：' , msg )
}

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
      {
        list.map(item => {
          return (<div onClick={onAnimalClick.bind(this, item)} >{ item }</div>)
        })
      }
      <p>5、v-on practice</p>
      <button onClick={() => onTip('button')}>点击试试</button>
    </div>
  )
}

export default renderDom