import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import classNames from "classnames";


import './comment.input.css'

class CommentItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            update: false,
            value: ""
        }
        this.wrapperRef = React.createRef();
    }

    onClick = () => {
        this.setState(preState => ({
            isOpen: !preState.isOpen
        }))
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    updateClick = () => {
        this.setState({
            update: !this.state.update,
            value: this.props.comment
        })
    }

    onKeyDown = async (e) => {
        e.persist();
        if(e.keyCode === 13){
            if(this.state.value.trim() !== ""){
                await this.props.updateComemnt(this.state.value)
                this.setState({
                    isOpen: false,
                    update: false,
                })
            }
        }
        if(e.keyCode === 27){
            this.setState({
                update: false
            })
        }
    }
    

    componentDidMount(){
        document.addEventListener('click', this.handleClick);
       
        this.setState({
            value: this.props.comment,
            isOpen: false,
            update: false,
        })
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick)
    }

    handleClick = (event) => {
        const { target } = event;
        if( this.wrapperRef.current && !this.wrapperRef.current.contains(target) && this.wrapperRef.current.className === "option"){
            this.setState(preState => ({
                isOpen: !preState.isOpen
            }))
        }
    }
    showRatings(rating) {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="fa fa-star"></i>)
        }
        for (var j = 1; j <= (3 - rating); j++) {
            result.push(<i key={i + j} className="fa fa-star-o"></i>)
        }
        return result;
    }
    render(){
        const { comment, name, day, userId, userIdLogin, deleteComment } = this.props;
        const { isOpen, update, value } = this.state;
        return (
            <div>
                <Row >
                    <Col sm='2'>
                        <div className="ant-comment-inner" style={{"justifyContent": "center"}} >
                            <div className="ant-comment-avatar" >
                                <img alt="" src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png" />
                            </div>
                        </div>
                    </Col>
                    <Col sm='10' className="content">
                        <div className="ant-comment-content">
                            <div className="ant-comment-content-author"></div>
                            <span className="ant-comment-content-author-name">{name}</span>
                            <span className="ant-comment-content-author-time" style={{"float": "right", "font-size":"10px"}}>
                                <span>{day}</span>
                            </span>
                        </div>
                        <div className="ant-comment-content-detail">
                            <div className="show-comment" style={{"float":"left"}}>
                                {update ? 
                                    <input className="comment" type="text" value={value} onKeyDown={(e) => this.onKeyDown(e)}  onChange={(e) => this.onChange(e)} autoFocus/> : 
                                    comment
                                }
                            </div>
                            <div className="review" style={{"color": "#ffc107", "float":"right"}}>
                                {this.showRatings(2)}
                            </div>
                        </div>
                    </Col>

                </Row>
                <div className="line">
                    <hr />
                </div>
            </div>
        );
    };
}
CommentItem.propTypes = {
    name: PropTypes.string,
    comment: PropTypes.string
};

CommentItem.defaultProps = {
    name: "",
    comment: ""
};

export default CommentItem;