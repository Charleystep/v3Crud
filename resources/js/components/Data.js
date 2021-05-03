import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Data extends React.Component {
    deleteAluno = (id) => {
        alert("Are You Want To Delete This Aluno");
        this.props.deleteAluno(id);
    }
    render() {
        const { alunos } = this.props;
        return (
            <div className="card post">
                <div className="cardHeader">
                    <h2>{alunos.name}</h2>
                    <div className="subinfo">
                        <h6><FontAwesomeIcon icon="calendar" className="icon" /></h6>
                        <h6><FontAwesomeIcon icon="flag" className="icon" />{alunos.dataNasc}</h6>
                    </div>
                </div>
                <hr />
                <div className="cardBody">
                    <p>{alunos.serie}</p>
                    <button className="secondary"><FontAwesomeIcon icon="book-open" className="icon" />Read More</button>
                </div>
                <hr />
                <div className="cardFooter end">
                    <button className="primary"><FontAwesomeIcon icon="share" className="icon" />Share</button>
                    <div className="action">
                        <button className="edit"><Link className="color" to={`/edit/${alunos.id}`}><FontAwesomeIcon icon="edit" className="icon" />Atualizar</Link></button>
                        <button className="delete" onClick={() => this.deleteAluno(alunos.id)}><FontAwesomeIcon icon="trash-alt" className="icon" />Deletar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;