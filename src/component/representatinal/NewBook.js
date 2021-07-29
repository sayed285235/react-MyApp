import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class NewBook extends Component {

    constructor(props){
        super(props);

        this.state = {
            bookName:"",
            writer:"",
            description:""
        }
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }
    
    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <div className="col-md-5 m-auto">
                    <Card style={{ textAlign:"start"}}>
                        <CardHeader>
                            New Book Entry
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="bookName">BookName</Label>
                                    <Input type="text" name="bookName" id="bookName" placeholder="BookName" 
                                        value={this.state.bookName} onChange={(event)=> this.handleInputChange(event)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="writer">Writer</Label>
                                    <Input type="text" name="writer" id="writer" placeholder="Writer" 
                                    value={this.state.writer} onChange={(event)=> this.handleInputChange(event)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Descriptions</Label>
                                    <Input type="textarea" name="description" id="description" placeholder="Description"  
                                    value={this.state.description} onChange={(event)=> this.handleInputChange(event)}/>
                                </FormGroup>
    
                                <Button type="Submit" value="submit">Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}


export default NewBook;