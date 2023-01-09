import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
//引入icon，取代require 。防止被treeShaking.
//同时需要安装 yarn add --dev @types/webpack-nev 则解除bug/ __WebpackModuleApi
//how to require whole loader; //webpack-env contains module and require in global namespace.
type Props = {
  name: string
}
//声明类型，必须大写，并在函数参数传入类型
const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );//抽取规律，常量和变量
};

export default Icon;
