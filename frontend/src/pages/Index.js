import React, { Component } from 'react';

import api from '../services/api';

import './Index.css';

import List from '../components/List';

export default class Index extends Component {
    state = {
        lists: []
    };

    async componentDidMount() {
        const response = await api.get('/');

        this.setState({ lists: response.data.data });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <h1>AnimaVita</h1>
                </div>
                <h2>Consultas online com animes e mangás</h2>

                <ul>
                { this.state.lists.map(list => (
                    <List key={list.id} list={list} />
                )) }
                </ul>

                <div className="footer">
                    <p>Telavita 2018 Todos os direitos reservados.</p>
                </div>
            </div>
        );
    }
}
