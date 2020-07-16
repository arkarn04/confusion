import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import moment from 'moment'

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderComments(commentsArray){
        if(commentsArray.length != 0){
            const comments = commentsArray.map((com) => {
                
                return(
                        <div key={com.id}>
                            <p>{com.comment}</p>
                            <p>-- {com.author}, {moment(com.date).format("MMM DD, YYYY")} </p>
                        </div>
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                           <CardTitle>{this.props.dish.name}</CardTitle>
                           <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
                    {this.renderComments(this.props.dish.comments)}
                
            </div>
        )
    }
}

export default DishDetail