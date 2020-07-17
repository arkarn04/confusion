import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import moment from 'moment'

class DishDetail extends Component{
    
    renderComments(commentsArray){
        if(commentsArray.length !== 0){
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

        const { dish } = this.props;

        if(dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                   <CardTitle>{dish.name}</CardTitle>
                                   <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
                
            )
        }
        else{
            return(
                <div></div>
            )
        }
        

        
    }
}

export default DishDetail