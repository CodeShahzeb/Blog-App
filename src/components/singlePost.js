import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { blogInfo } from '../redux/allAction'
import { Link, Redirect } from 'react-router-dom';

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogName: '',
            blogDetail: ''
        }
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.getSingleBlog(this.props.match.params.id)
    }

    componentDidUpdate() {
        console.log(this.props.myPost)

        if (this.state.blogName == '') {
            const { blogName, blogDetail } = this.props.myPost.blog;
            this.setState({
                blogName: blogName,
                blogDetail: blogDetail
            })
        }



    }



    render() {
        const { blogName, blogDetail } = this.state
        return (
            <Card className="text-center mt-2">
                <Card.Body>
                    <Card.Title>{blogName}</Card.Title>
                    <Card.Text>
                        {blogDetail}
                    </Card.Text>
                    <Link to='/home'><button type="button"
                        id="addBlogBtn" className='btn btn-success'>Back</button></Link>
                </Card.Body>
            </Card>
        )
    }
}
const mapSateToProps = (state) => {
    return {
        myPost: state.blog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleBlog: (id) => {
            dispatch(blogInfo(id))
        }

    }
}

export default connect(mapSateToProps, mapDispatchToProps)(SinglePost);
