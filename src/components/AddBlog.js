import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { blogRegistered } from '../redux/allAction'
function AddBlog() {

    const dispatch = useDispatch()
    const history = useHistory()
    const [inputField, setInputField] = useState({
        blogName: '',
        blogDetail: '',
    })

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }
    const submitButton = async () => {
        Object.assign(inputField, { id: shortid.generate() })
        dispatch(blogRegistered(inputField))
        history.push('/home')

    }

    return (
        <div className='container'>
            <div className='row login'>
                <h3 className='heading' style={{ marginTop: '20px' }}>Add Blog</h3><br />

                <div className='col-md-2'></div>
                <div className='col-md-6'>
                    <form autoComplete='off' action="/login-user" method='post'>
                        <div className='mb-3'>
                            <label type="text" className='form-label'>Blog Name</label>
                            <input type='text' className='form-control' name="blogName"
                                autoComplete='off' onChange={inputHandler} />
                        </div>

                        <div className='mb-3'>
                            <label type="text" className='form-label'>Blog Details</label>
                            <input type='text' className='form-control' name="blogDetail"
                                autoComplete='off' onChange={inputHandler} />
                        </div>
                        <div>
                            <button type='button' className='btn btn-primary'
                                onClick={submitButton}>Add Blog
                            </button>&nbsp;
                            <Link to='/home'><button type="button"
                                id="addBlogBtn" className='btn btn-success'>Back</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog;