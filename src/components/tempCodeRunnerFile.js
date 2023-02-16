import React from 'react';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { Button } from 'bootstrap';
import {useDispatch} from 'react-redux';
import {deleteBlog} from '../redux/allAction';

function Home() {
    
    const dispatch=useDispatch();
    const blogList = useSelector((state) => {
        return state.blog.items;
    })
    return (
        <div  className='container '>
            <div  className='row '>
                    <div  className=' col-md-10 '>
                        
                                {
                                    blogList.map((blog, key) => (
                                       <List blogData={blog} key={blog.id}/>
                                    ))
                                }
                           
                    </div>
                    <div className='col-md-1'></div>

                </div>
            </div>
     
    )
}

export default Home;