import React from 'react'
import  { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Emploiyees from "./Emploiyees";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

function Edit() {
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[id,setId]=useState('')

    let History = useNavigate()

var index=Emploiyees.map(function(e){
            return  e.id
           

        })
        .indexOf(id);
        const handelSubmit =(e)=>{
            e.preventDefault();
          let a=Emploiyees[index];
          a.name=name;
          a.age=age;
              
        
            History("/");
        }
        
useEffect(()=>{
    setName(localStorage.getItem('name'))
    setAge(localStorage.getItem('age'))
    setId(localStorage.getItem('id'))
},[])


  return (
    <div>
    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
    <Form.Group className='nb-3' controlId='fornName'>
    <Form.Control type="texte" placeholder="enter name" value={name} required onChange={(e)=>setName(e.target.value)} />
    
    </Form.Group>
    <Form.Group className='nb-3' controlId='fornName'>
    <Form.Control type="texte" placeholder="enter age" value={age} required onChange={(e)=>setAge(e.target.value)} />
    
    </Form.Group>
    <Button onClick={(e)=> handelSubmit((e))} type="submit">Update</Button>
    </Form>
   
    </div>
  )
}

export default Edit
