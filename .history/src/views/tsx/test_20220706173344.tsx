type Props = {
  title: string
}

const vModel = ref<string>('')
const isShow = ref<Boolean>(true)
const list = ['dog', 'cat', 'pada', 'monkey']

const onButtonClick = (msg:  string) => {
  console.log('您点击了：' , msg )
}

const onAnimalEmit = (animal: string, ctx: any) => { 
  console.log('您点击了：', animal)
  ctx.emit('on-click', animal)
}

const renderDom = (props: Props, ctx: any) => { 
  return (
    <div>
      <h2>{ props.title }</h2>
      <p>1、v-model practice</p>
      <input type="text" v-model={ vModel.value }/>
      <div>您正在输入的内容：{vModel.value}</div>
      <p>2、v-show practice</p>
      <p v-show={isShow}>isShow 为true</p>
      <p>3、v-if用三元运算 practice</p>
      { isShow ? <span>isShow 为true</span> : <span>isShow false</span>}
      <p>4、v-for用map()、emit practice</p>
      {
        list.map(item => {
          return (<p onClick={onAnimalEmit.bind(this, 'item', ctx)}  class="cursor-pointer">{ item }</p>)
        })
      }
      <p>5、v-on practice</p>
      <button onClick={onButtonClick.bind(this, 'bind 作用域')} >bind 作用域</button>
      <button onClick={() => onButtonClick('箭头函数')}>箭头函数</button>
    </div>
  )
}

export default renderDom