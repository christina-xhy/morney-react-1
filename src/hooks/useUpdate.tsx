import {useEffect,useRef} from 'react';


const useUpdate = (fn:()=>void,deps:any[])=>{

  const count = useRef(0)
  useEffect(()=>{
    count.current += 1
  })
  useEffect(()=>{
    if(count.current > 1){
     fn()
    }
  },deps)
}

//先解决每次页面 从unfdefine 变为 【】这一次的bug  为localstorage服务

export {useUpdate}