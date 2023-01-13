import React from 'react';
import classnames from 'classnames'


let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
//引入icon，取代require 。防止被treeShaking.
//同时需要安装 yarn add --dev @types/webpack-nev 则解除bug/ __WebpackModuleApi下划线
//how to require whole loader; //webpack-env contains module and require in global namespace.
type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>
//声明类型，必须大写，并在函数参数传入类型
const Icon = (props: Props) => {
  //从props中拿出这些数据，和自定义hook中取出数据一样{deleteTag,updateTag} = useTags()
  //需要自定义的则抽出来。
  //案例： 创建多个className ，或者防止没有className undefine ///因此classnames 库 就诞生了
  //yarn add classnames
  // 合并classname 防止被覆盖
  const {name,children,className, ...rest} = props
  return (
    // <svg className={`icon ${className}`} {...rest}>
    <svg className = {classnames('icon',className)} {...rest} >
      { props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );//抽取规律，常量和变量
};


export default Icon;
