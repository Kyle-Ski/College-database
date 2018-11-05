import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form, Segment, Dropdown } from 'semantic-ui-react'

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
                    <Dropdown placeholder='Beer to Delete' search selection options={structureDropdown(this.props.beers)} />
                </Form.Group>
                <Button color='red' type='submit'>Submit</Button>
            </Form>
            </Segment>
    
        )
    }
}

export default DeleteBeer