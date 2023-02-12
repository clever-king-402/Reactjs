import React from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products';

export default function Details() {
    let {id} = useParams('');
    let dd = Products.find((pr)=>pr.id == id);
  return (
    <>
    <h1>Hello World {id}</h1>
    <h4>{dd.title}</h4>
    <img src={dd.image} alt="" />
    </>
  )
}
