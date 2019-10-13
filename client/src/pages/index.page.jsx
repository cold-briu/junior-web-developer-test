import React, { Component } from 'react';

export default class Index extends Component {
    state = {}
    render() {
        return (
            <main className="container-fluid animated fadeInRight py-5">
                <section className="row mt-5">
                    <article className="col col-10 col-md-7 text-center bg-warning">
                        <h1>Acá Empleados</h1>
                    </article>
                </section>

                <section className="row">
                    <article className="col col-10 col-md-7 text-center bg-info">
                        <h1>Acá drop</h1>
                    </article>
                </section>

                <section className="row">
                    <article className="col col-10 col-md-7 text-center bg-danger">
                        <h1>Acá busy</h1>
                    </article>
                </section>
            </main>
        );
    }
}

