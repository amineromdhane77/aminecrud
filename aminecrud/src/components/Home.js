import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Emploiyees  from './Emploiyees';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
 function Home() {

 let History=useNavigate();
 const handelEdit=(id,name,age)=>{
  localStorage.setItem('name',name);
  localStorage.setItem('age',age);
  localStorage.setItem('id',id);
 }


    const handleDelete  = (id)=>{
        var index=Emploiyees.map(function(e){
            return  e.id
           

        })
        .indexOf(id);
        Emploiyees.splice(index,1);
        History("/");
    }



  return (
    <div>
    <Table striped bordered hover size='sn'>
    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
    {
        Emploiyees && Emploiyees.length>0
        ?
        Emploiyees.map((item)=>{
            return(
                <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <Link to={'/edit'}>
                <Button onClick={()=>handelEdit(item.id,item.name,item.age)}>Edit</Button> 
                </Link>
                <Button onClick={()=>handleDelete(item.id)}>Delete</Button> 
              </tr>
            )
        })
    :
    "no avalebale"
    }
      
    </tbody>
  </Table>
  <Link className='d-grid gap-2' to='/create'>
  <Button size='ig'>create</Button>
  </Link>
    </div>
  )
}

export default Home;