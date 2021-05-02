import React from "react";
import Axios from "axios";
import Data from "./Data";
import HomeData from "./HomeData";

class Alunos extends React.Component {
    state = {
        alunos: [],
        loading: true,
    }
    fetchAlunos = async () => {
        const res = await Axios.get("/addAluno");
        if (res.data.status === 200) {
            this.setState({ alunos: res.data.alunos });
            this.setState({ loading: false });
        }
    }
    componentDidMount() {
        this.fetchAlunos();
    }

    deleteAluno = async (id) => {
        const res = await Axios.delete(`/addAluno/${id}`);
        if (res.data.status === 200) {
            this.fetchAlunos();
        }
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading....</h1>
        }
        if (window.location.href === window.origin + "/dashboard") {
            return (
                <div>
                    {this.state.alunos.map(alunos => (
                        <Data alunos={alunos} key={alunos.id} deletePost={this.deletePost} />
                    ))}
                </div>
            )
        }
        return (
            <div>
                {this.state.alunos.map(alunos => (
                    <HomeData alunos={alunos} key={alunos.id} />
                ))}
            </div>
        )
    }
}

export default Alunos;