import React from "react";
import { Link } from "react-router-dom";
import Alunos from "./Alunos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends React.Component {
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
                    <h1>Sua</h1>
                    <h1>Dashboard</h1>
                    <div className="actionBtn">
                        <button className="unactive"><FontAwesomeIcon icon="home" className="icon" />Home</button>
                        <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon" />Dashboard</Link></button>
                        <button className="active"><Link to="/createAlunos"><FontAwesomeIcon icon="pencil-alt" className="icon" />Cadastro</Link></button>
                    </div>
                    <div className="footer"><p className="p1">No copyright | ©️ {year}, <a href="https://github.com/charleystep">Charleys Pires</a></p></div>
                </div>
                <div className="PostDiv">
                    <Alunos />
                </div>
            </div>
        )
    }
}

export default Home;