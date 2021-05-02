import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HomeData extends React.Component {

    render() {
        const { alunos } = this.props;
        return (
            <div className="card post">
                <div className="cardHeader">
                    <h2>{alunos.name}</h2>
                    <div className="subinfo">
                        <h6><FontAwesomeIcon icon="calendar" className="icon" />
                        </h6>
                        <h6><FontAwesomeIcon icon="flag" className="icon" />{alunos.dataNasc}</h6>
                    </div>
                </div>
                <hr />
                <div className="cardBody">
                    <p>{alunos.serie}</p>
                    <button className="secondary"><FontAwesomeIcon icon="book-open" className="icon" />Read More</button>
                </div>
                <hr />
            </div>
        )
    }
}

export default HomeData;