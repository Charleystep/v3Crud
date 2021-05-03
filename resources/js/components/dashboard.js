import React from "react";
import { Link } from "react-router-dom";
import Alunos from "./Alunos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class dashboard extends React.Component {
    render() {
        var greeting = "";
        var dt = new Date();
        var year = dt.getFullYear();
        var hour = dt.getHours();
        if (hour >= 1 && hour < 12) {
            greeting = 'Bom Dia!!';
        }
        if (hour >= 12 && hour < 19) {
            greeting = 'Boa Tarde!!';
        }
        else {
            greeting = 'Boa Noite';
        }
        return (
            <div className="layout">
                <div className="sidebar">
                    <h1>Sua</h1>
                    <h1>Dashboard</h1>
                    <div className="actionBtn">
                        <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon" />Inicio</Link></button>
                        <button className="unactive"><FontAwesomeIcon icon="desktop" className="icon" />Dashboard</button>
                        <button className="active"><Link to="/createAlunos"><FontAwesomeIcon icon="pencil-alt" className="icon" />Cadastrar Alunos</Link></button>
                    </div>
                    <div className="footer"><p className="p1">No copyright | ©️ {year}, <a href="https://github.com/charleystep">Charley Pires</a></p></div>
                </div>
                <div className="PostDiv">
                    <Alunos />
                </div>

            </div>
        )
    }
}

export default dashboard;