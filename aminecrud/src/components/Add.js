import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Emploiyees from "./Emploiyees";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
function Add(){
const[name,setName]=useState('')
const[age,setAge]=useState('')
let History = useNavigate()
const handelSubmit =(e)=>{
    e.preventDefault();
    const ids=uuid();
    let uniqueId=ids.slice(0,8);
    let a=name,
    b=age;

  Emploiyees.push({id: uniqueId,name: a,age: b});
       
      

    History("/");
}

return(
    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
    <Form.Group className='nb-3' controlId='fornName'>
    <Form.Control type="texte" placeholder="enter name" required onChange={(e)=>setName(e.target.value)} />
    
    </Form.Group>
    <Form.Group className='nb-3' controlId='fornName'>
    <Form.Control type="texte" placeholder="enter age" required onChange={(e)=>setAge(e.target.value)} />
    
    </Form.Group>
    <Button onClick={(e)=> handelSubmit((e))} type="submit">Submit</Button>
    </Form>
   

)
}
export default Add;