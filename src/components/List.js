import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { deleteBlog } from '../redux/allAction'
import { blogInfo } from '../redux/allAction'
import { useDispatch } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
function List({ blogData }) {

    const dispatch = useDispatch();
    const { blogName, blogDetail, id } = blogData;

    const [countUp, setCountUp] = useState(0)
    const [countDown, setCountDown] = useState(0)

    return (

        <Card style={{ width: '70rem' }} className='mt-3'  >
            <Card.Body>
                <Card.Title>{blogName}</Card.Title>
                <Card.Text >{blogDetail}
                </Card.Text>
                <Card.Link>
                    <Button onClick={() => setCountUp(countUp + 1)}><ThumbUpIcon />{`${countUp === 0 ? '' : countUp}`}</Button><Button onClick={() => setCountDown(countDown + 1)}><ThumbDownIcon />{`${countDown === 0 ? '' : countDown}`}</Button>
                </Card.Link>
                <Card.Link ><Link to={`/edit-blog/${id}`}><button type='button'
                    className='btn btn-primary btn-sm btn-block'>Edit</button></Link></Card.Link>
                <Card.Link><button type='button'
                    className='btn btn-danger btn-sm btn-block' onClick={() => dispatch(deleteBlog(id))}>Delete</button></Card.Link>

                <Card.Link ><Link to={`/detail-blog/${id}`}><button type='button'
                    className='btn btn-primary btn-sm btn-block'>Detail</button></Link></Card.Link>
            </Card.Body>
        </Card>


    )
}

export default List;