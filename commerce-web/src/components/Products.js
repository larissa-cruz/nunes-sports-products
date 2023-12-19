import React from "react";
import { Button, Form, Modal, Table } from 'react-bootstrap';


class Products extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            name: '',
            description: '',
            price: '',
            products: [],
            openModal: false
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    componentWillUnmount() {

    }

    getProducts = () => {
        fetch("http://localhost:8080/products")
            .then(resp => resp.json())
            .then(dados => {
                this.setState({ products: dados.content })
            })
    }

    deleteProduct = (id) => {
        fetch("http://localhost:8080/products/" + id, { method: 'DELETE' })
            .then(resp => {
                if (resp.ok) {
                    this.getProducts();
                }

            })
    }

    postProduct = (product) => {
        fetch("http://localhost:8080/products", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(resp => {
                if (resp.ok) {
                    this.getProducts();
                }

            })
    }

    getProduct = (id) => {
        fetch("http://localhost:8080/products/" + id, { method: 'GET' })
            .then(resp => resp.json())
            .then(product => {
                this.setState({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price
                })
                this.handleOpen();
            })
    }

    putProduct = (product) => {
        fetch("http://localhost:8080/products/" + product.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(resp => {
                if (resp.ok) {
                    this.getProducts();
                }

            })
    }


    renderTable() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código do Produto</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.products.map((product) =>
                            <tr>
                                <td> {product.id} </td>
                                <td> {product.name} </td>
                                <td> {product.description} </td>
                                <td> {product.price} </td>
                                <td>
                                    <Button variant="secondary" onClick={() => this.getProduct(product.id)}>Atualizar</Button>
                                    <Button variant="danger" onClick={() => this.deleteProduct(product.id)}>Excluir</Button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        )
    }

    putName = (e) => {
        this.setState(
            {
                name: e.target.value
            }
        )
    }

    putDescription = (e) => {
        this.setState(
            {
                description: e.target.value
            }
        )
    }

    putPrice = (e) => {
        this.setState(
            {
                price: e.target.value
            }
        )
    }

    submit = () => {
        if (this.state.id === 0) {

            const product = {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price
            }

            this.postProduct(product);

        } else {

            const product = {
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                price: this.state.price
            }

            this.putProduct(product);
        }
        this.handleClose();

    }

    reset = () => {
        this.setState(
            {
                id: 0,
                name: '',
                description: '',
                price: ''
            }
        )
        this.handleOpen();
    }

    handleClose = () => {
        this.setState(
            {
                openModal: false
            }
        )
    }

    handleOpen = () => {
        this.setState(
            {
                openModal: true
            }
        )
    }

    render() {
        return (
            <div>
                <Modal show={this.state.openModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dados do Produto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="number" value={this.state.id} readOnly={true} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nome do Produto</Form.Label>
                                <Form.Control type="text" placeholder="Digite o nome do produto" value={this.state.name} onChange={this.putName} />
                                <Form.Text className="text-muted">
                                    Nome precisa ter de 3 a 80 caracteres
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Digite a descrição do produto" value={this.state.description} onChange={this.putDescription} />
                                <Form.Text className="text-muted">
                                    Descrição precisa ter no mínimo 10 caracteres
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Preço</Form.Label>
                                <Form.Control type="number" placeholder="Digite o preço do produto" value={this.state.price} onChange={this.putPrice} />
                                <Form.Text className="text-muted">
                                    O preço deve ser positivo
                                </Form.Text>
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" type="submit" onClick={this.submit}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Button variant="warning" type="submit" onClick={this.reset}>
                    Novo
                </Button>

                {this.renderTable()}
            </div>
        )
    }

}

export default Products;