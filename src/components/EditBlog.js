import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateBlogInfo } from '../redux/allAction'
import { blogInfo } from '../redux/allAction'

class EditBlog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            blogName: '',
            blogDetail: '',
            redirect: false
        }
    }

    componentDidMount() {
        this.props.getBlogDetail(this.props.match.params.id)



    }

    componentDidUpdate() {

        if (this.state.blogName == '') {
            const { blogName, blogDetail } = this.props.myblogs.blog;
            this.setState({
                blogName: blogName,
                blogDetail: blogDetail
            })
        }

    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitButton = async () => {
        let newData = Object.assign(this.props.myblogs.blog, this.state)
        console.log(newData)
        this.props.updateBlogInfo(newData)
        this.setState({ redirect: true })

    }

    render() {
        const { blogName, blogDetail } = this.state;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/home' />
        }

        return (
            <div className='container'>
                <div className='row login'>
                    <h3 className='heading' style={{ marginTop: '20px' }}>Edit Blog</h3><br />

                    <div className='col-md-2'></div>
                    <div className='col-md-6'>
                        <form autoComplete='off' action="/login-user" method='post'>
                            <div className='mb-3'>
                                <label type="text" className='form-label'>Blog Name</label>
                                <input type='text' className='form-control' name="blogName"
                                    autoComplete='off' value={blogName} onChange={this.inputHandler} />
                            </div>

                            <div className='mb-3'>
                                <label type="text" className='form-label'>Blog Details</label>
                                <input type='text' className='form-control' name="blogDetail"
                                    autoComplete='off' value={blogDetail} onChange={this.inputHandler} />
                            </div>
                            <div>
                                <button type='button' className='btn btn-primary'
                                    onClick={this.submitButton}>Edit Blog
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

}
const mapStateToProps = (state) => {
    return {

        myblogs: state.blog

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        getBlogDetail: (id) => {
            dispatch(blogInfo(id))
        },
        updateBlogInfo: (data) => {
            dispatch(updateBlogInfo(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditBlog);