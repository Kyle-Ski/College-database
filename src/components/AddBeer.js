import {Button, Form, Segment} from 'semantic-ui-react'
import React, { Component } from 'react'

const AddBeer = ({getName, getAbv, getImg, getReview, submitForm}) => {

    return(
        <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input onChange={getName} fluid label='Beer Name' placeholder='Beer name' />
                <Form.Input onChange={getImg} fluid label='Image' placeholder='Image' />
                <Form.Input onChange={getAbv} type='number' fluid label='ABV' placeholder='ABV'/>
                <Form.Input onChange={getReview} fluid label='Review' placeholder='Write a review' />
            </Form.Group>
            <Button color='green' onClick={submitForm} type='submit'>Submit</Button>
        </Form>
        </Segment>
    )
    
}

export default AddBeer