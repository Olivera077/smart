import React from "react"; //importujemo react



export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: "Initial value primer sta pise",
      dataArray: ["item..."]
    }
  }

  updateState = (tekst) => {
    console.log("updateState", tekst);
    //kopirati niz u lokalnu promenjlljivu
    var myArray = this.state.dataArray;
    console.log("before", myArray);
    //dodajemo element u niz(na kraj))
    myArray.push("novi item.....");
    console.log("after", myArray);




    this.setState({
      data: tekst,
      dataArray: myArray //na svaki klik da se dodaje novi element niza
    });

  } //ovo je za custom meteda za pristup kljucnoj reci

  render() {
    console.log("render", this.state);

    return (
      <>

        <input type="button" value="Update state" onClick={() => this.updateState("tekst iz rendera")} />
        <h2>State string: {this.state.data}</h2>
        <h3>State array</h3>
        <ul>
          {this.state.dataArray.map((item, i) => {
            console.log(item);

            return (<li key={i}>{item}</li>);
          })}
        </ul>
      </>



    );
  }
}
//ovo => znaci da ce prekinuti infinite loop i da ce petlja da se pokrece samo na dugme

