import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class createAlunos extends React.Component {
    state = {
        name: '',
        dataNasc: '',
        serie: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        nomeMae: '',
        cpfMae: '',
        dataPag: ''
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    saveAluno = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addAluno", this.state);
        if (res.data.status === 200) {
            this.props.history.push("/dashboard");
        }
    }

    render() {
        var greeting = "";
        var dt = new Date();
        var year = dt.getFullYear();
        var hour = dt.getHours();
        if (hour >= 1 && hour < 12) {
            greeting = 'Bom dia!!';
        }
        if (hour >= 12 && hour < 19) {
            greeting = 'Boa Tarde!!';
        }
        else {
            greeting = 'Boa Noite!!';
        }
        return (
            <div className="layout">
                <div className="sidebar">
                    <h1>Cadastro</h1>
                    <h1>Novo(a) Aluno(a)</h1>
                    <div className="actionBtn">
                        <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon" />Home</Link></button>
                        <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon" />Dashboard</Link></button>
                        <button className="unactive"><FontAwesomeIcon icon="pencil-alt" className="icon" />Cadastro</button>
                    </div>
                    <div className="footer"><p className="p1">No copyright | ©️ {year}, <a href="https://github.com/charleystep">Charley Pires</a></p></div>
                </div>
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.saveAluno}>
                            <div className="form-group">
                                <label>Nome:</label>
                                <input type="text" name="nome" className="form-control highlight"
                                    value={this.state.name} onChange={this.handleInput}
                                    placeholder="Nome Completo" required />
                            </div>
                            <div className="form-group">
                                <label>Data de Nascimento:</label>
                                <textarea name="dataNasc" className="form-control highlight"
                                    value={this.state.dataNasc} onChange={this.handleInput}
                                    required />
                            </div>
                            <div className="form-group">
                                <label>Serie:</label>
                                <select type="set" name="serie" className="form-control highlight"
                                    value={this.state.serie} onChange={this.handleInput}
                                    placeholder="Selecione a Serie" required>
                                    <option value="1_ano">1o ano</option>
                                    <option value="2_ano">2o ano</option>
                                    <option value="3_ano">3o ano</option>
                                    <option value="4_ano">4o ano</option>
                                    <option value="5_ano">5o ano</option>
                                    <option value="6_ano">6o ano</option>
                                    <option value="7_ano">7o ano</option>
                                    <option value="8_ano">8o ano</option>
                                    <option value="9_ano">9o ano</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>CEP:</label>
                                <textarea type="decimal" name="cep" className="form-control highlight"
                                    value={this.state.cep} onChange={this.handleInput}
                                    placeholder="Insira seu CEP" required />
                            </div>
                            <div className="form-group">
                                <label>Rua:</label>
                                <textarea type="text" name="rua" className="form-control highlight"
                                    value={this.state.rua} onChange={this.handleInput}
                                    placeholder="Nome da Rua" required />
                            </div>
                            <div className="form-group">
                                <label>Número:</label>
                                <textarea type="decimal" name="numero" className="form-control highlight"
                                    value={this.state.numero} onChange={this.handleInput}
                                    placeholder="Numero" required />
                            </div>
                            <div className="form-group">
                                <label>Complemento:</label>
                                <textarea type="text" name="complemento" className="form-control highlight"
                                    value={this.state.complemento} onChange={this.handleInput}
                                    placeholder="Complemento" required />
                            </div>
                            <div className="form-group">
                                <label>Bairro:</label>
                                <textarea type="text" name="bairro" className="form-control highlight"
                                    value={this.state.bairro} onChange={this.handleInput}
                                    placeholder="Bairro" required />
                            </div>
                            <div className="form-group">
                                <label>Cidade:</label>
                                <textarea type="text" name="cidade" className="form-control highlight"
                                    value={this.state.cidade} onChange={this.handleInput}
                                    placeholder="Cidade" required />
                            </div>
                            <div className="form-group">
                                <label>Estado:</label>
                                <textarea type="text" name="estado" className="form-control highlight"
                                    value={this.state.estado} onChange={this.handleInput}
                                    placeholder="Estado" required />
                            </div>
                            <div className="form-group">
                                <label>Nome da Mãe:</label>
                                <textarea type="text" name="nomeMae" className="form-control highlight"
                                    value={this.state.nomeMae} onChange={this.handleInput}
                                    placeholder="Nome completo da Mãe" required />
                            </div>
                            <div className="form-group">
                                <label>CPF:</label>
                                <textarea type="decimal" name="cpfMae" className="form-control highlight"
                                    value={this.state.cpfMae} onChange={this.handleInput}
                                    placeholder="CPF, apenas numeros" required />
                            </div>
                            <div className="form-group">
                                <label>Melhor data de pagamento:</label>
                                <textarea type="set" name="dataPag" className="form-control highlight"
                                    value={this.state.dataPag} onChange={this.handleInput}
                                    placeholder="Selecione um data" required>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                </textarea>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="primary">
                                    <FontAwesomeIcon icon="plus" className="icon" />
                                    Novo Aluno
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right-sidebar">
                    <div className="Greeting">
                        <h2>{greeting}</h2>
                        <h5>Bem-vindo de volta!</h5>
                        <button className="primary"><FontAwesomeIcon icon="calendar" className="icon" />View Events</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default createAluno;