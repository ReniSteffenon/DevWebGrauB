import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Lista de tarefas
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/tasks/list" className="nav-link">
                                Listar tarefas
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/tasks/create" className="nav-link">
                                Criar tarefa
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
