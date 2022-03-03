import React from 'react'
import {useState} from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import quickSort from '../algorithms/quickSort'; 
import updateStates from '../utility/updateStates'

export const NavBar = ({states, setSettings, rand_num_array}) => {
    const [buttonColorAndText, setButtonColorAndText] = useState ({
        color: "blue",
        text: "Sort"
    })

    const onSort = async () => {
        await  quickSort(rand_num_array, setSettings)
        setButtonColorAndText ({
                color : "green",
                text : "Sorted"
            })
        setTimeout (() => {setButtonColorAndText ({
                color : "Blue",
                text : "Sort Again!"
            })}, 3000)
    }

    const onClick = (button, setSettings, rand_num_array) => {
        switch (button) {
            case "gen_num":
                var new_array = new Array (100).fill(0);
                updateStates (setSettings, {rand_num_array: new_array.map((x) => Math.round(Math.random() * 500))})
                break;
            case "Bubble Sort":
                updateStates (setSettings, {sort_method: "Bubble Sort"})
                break;
            case "Merge Sort":
                updateStates (setSettings, {sort_method: "Merge Sort"})
                break;
            case "Quick Sort":
                updateStates (setSettings, {sort_method: "Quick Sort"})
                break;
            default:
                break;
        }
    } 

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Web Sorter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => onClick('gen_num', setSettings)}>Generate Random Array</Nav.Link>
                            <NavDropdown title="Sorting Algorithms">
                                <NavDropdown.Item onClick={() => onClick('Bubble Sort', setSettings)}>Bubble Sort</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => onClick('Merge Sort', setSettings)}>Merge Sort</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => onClick('Quick Sort', setSettings)}>Quick Sort</NavDropdown.Item>
                            </NavDropdown>
                            <p className="navbar-nav" style={navStyle}>Selected Algorithm: {states.sort_method}</p>
                            <p className="navbar-nav" style={navStyle}>Compared With: </p>
                        </Nav>
                        
                        <Button 
                            onClick={() => onSort()} 
                            className="btn" 
                            style={{backgroundColor:buttonColorAndText.color}} 
                        >
                            {buttonColorAndText.text}
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

const navStyle = {
    display: "block",
    paddingTop: 9, 
    paddingBottom: 8,
    paddingRight: 32,
    paddingLeft: 32, 
    color: 'rgba(0,0,0,.55)',
    fontSize: 16
}

export default NavBar
