import React from 'react';
import {useParams} from 'react-router-dom';
import useTags from '../useTag';

const Tag: React.FC =(props) =>{

  type Params = {
    id:string
  }
  const {findTag} = useTags()
  let { id } = useParams<Params>()
  const tag = findTag(parseInt(id));
  return(
    <div>{tag.name}</div>
  )
}
export {Tag}

