import React, { Component } from 'react'
import { Button, Form, Segment, Dropdown } from 'semantic-ui-react'

class DeleteBeer extends Component { 

    render() {
        const structureDropdown = (beer) => {
            return beer.map(beer => {
                return(
                    {
                        text: beer.name,
                        value: beer.id
                    }
                )
            })
        }
        return(
            <Segment color='red'>
            <Form color='red'>
                <Form.Group widths='equal'>
                    <Dropdown onChange={this.props.selectBeerId} placeholder='Beer to Delete' search fluid selection options={structureDropdown(this.props.beers)} />
                </Form.Group>
                <Button onClick={this.props.deleteBeer} color='red' type='submit'>Submit</Button>
            </Form>
            </Segment>
    
        )
    }
}


export default DeleteBeer