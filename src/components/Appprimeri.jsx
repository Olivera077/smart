import React from "react"; //importujemo react
import Header from "./components/Header";
import Content from "./components/Content";


export class App extends React.Component { //kreiranje komponenta prvo export da bi bilo import APP je naziv komponente i fajla, extends React.component-nasledjivanje metoda render
    render() { //omogucava prikaz sadrzaja na stranici
        console.log("App", this.props);

        return ( //vracanje necega

            <>
                <h1>Hello from the other side</h1>
                <p>Hello again</p>
                <Header hederProp="heder sa druge strane"></Header>
                <hr />
                <Header
                    number={this.props.number}// levi je naziv koji se vezuje za nasu komponentu a desni je parent naziv number
                    hederProp="prikazi drugi sadrzaj"></Header>
                <hr />
                <Content contentProp={22365}></Content >
            </>
        );
    }
}

// primer gore 1. cas REACT 31.03

import React from "react"; //importujemo react
import Header from "./components/Header";
import Content from "./components/Content";


export class App extends React.Component {

    constructor() {
        super();

        this.state = {
            header: "Header from the state",
            content: "Content from state"
        }
    }
    render() {
        console.log("App", this.state);

        return ( //vracanje necega

            <>
                <Header hederProp={this.state.header}></Header>
                <Content content={this.state.content}></Content>
            </>
        );
    }
}

// ovo je primer sa 2. casa REACTA 02.04
import React from "react"; //importujemo react
import Header from "./components/Header";
import Content from "./components/Content";


export class App extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [
                { id: 1, name: "FOO", age: 20 },
                { id: 2, name: "BAR", age: 30 },
                { id: 3, name: "BUZZ", age: 40 },
                { id: 4, name: "FizBuzz", age: 50 }
            ]
        }
    }
    render() {


        return ( //vracanje necega

            <table>
                <tbody>
                    {this.state.data.map((naziv, i) => {
                        console.log(naziv, i);
                        return (
                            <tr key={naziv.id}>
                                <td>Id: {naziv.id}</td>
                                <td>Name: {naziv.age}</td>
                                <td>Age: {naziv.age}</td>
                            </tr>
                        );

                    })}
                </tbody>
            </table>
        );
    }
}


// ovo je treci primer 2. casa Reacta

import React from "react"; //importujemo react
import Header from "./components/Header";
import Content from "./components/ComponentsStudenti";


export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            students: [
                { firstName: "John", lastName: "Deer", year: 2000, mark: 9 },
                { firstName: "Peter", lastName: "Peeterson", year: 2003, mark: 8 },
                { firstName: "Hannah", lastName: "Holly", year: 2005, mark: 9.5 }
            ]
        }
    }


    render() {
        return (
            <>
                <ComponentsStudenti studentsProp={this.state.students}></ComponentsStudenti>
            </>



        );
    }
}

//primer rstudenti 2. cas

import React from "react"; //importujemo react



export class App extends React.Component {
    render() {
        console.log(this.props);




        return (
            <>
                <h1>Title: {this.props.title}</h1>
                <h2>Tekst: {this.props.text}</h2>
            </>



        );
    }
}

App.defaultProps = {
    title: "Default app title",
    text: "Default app text"
}

//primer 2. cas



