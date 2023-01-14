import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';


//  此处是申明类型
// type newRecordItem = {
//   tagIds: number[]
//   note:string
//   category:'-' | '+'
//   amount: number
// }
// type RecordItem = newRecordItem & {
//   chartedAt:string
// }//ISO 8610 international standard date 合并 新的类型

export type RecordItem ={
  tagIds: number[]
  note:string
  category:'-' | '+'
  amount: number
  createdAt:string
}
type newRecordItem = Omit<RecordItem, 'createdAt'> //相同的写法和上面


const useRecords  = ()=> {
  const [records, setRecords] = useState<RecordItem[]>([])
  //money.tsx 中调用了 ，onOk = {submit}  submit (){addRecords(selected)}
  // 点击ok  numberPadSection监听button按钮则
  // 主要目的是 useEffect /useUpdate  首页输入的所有数据更新和渲染+存储
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },records)

  const addRecord = (newRecord: newRecordItem) => {
    if(newRecord.amount === 0 ){
      alert('请输入金额')//用户输入0时 弹出信息
      return false
    }
    if(newRecord.tagIds.length === 0){
     alert('请选择标签');//用户如果没有选择标签  弹出信息
     return false
    }
    const record ={...newRecord,createdAt:(new Date()).toISOString()}//在原本的类型上，新增一个新的类型并渲染
    setRecords([...records, record]);
    return true
  }


  return {records, addRecord}
}


export {useRecords}