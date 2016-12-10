// 厨师模块
// 如果相要引入其他模块，直接在第一个参数中传入数组
// 不依赖则不需要传递数组
// define中数据中的模块中的回调function会在，当前模块
// 中的function之前执行,并且会得到对应模块暴露的数据(也就是返回的值)
// 这个返回的值，通过当前模块的fuction传递过来！
define(['./xianggu','./youcai'],function(myXiangu,myYoucai){
    // 这里的myXianggu就是./xianggu.js模块中暴露的数据
    console.log('我是厨师,chushi.js')
    console.log(myXiangu.data)
    console.log(myYoucai.data)

    // 
})