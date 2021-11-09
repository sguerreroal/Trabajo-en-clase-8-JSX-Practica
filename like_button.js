const data = {
  title1: "Berenjenas fritas",
  comensales: "4 Personas",
  paragraph_1: "Comensale 4 personas",
  paragraph_2: "Comensale 5 personas",
}

// 1.
const title_x = <h2>{data.title1}</h2>;
const subtitle_x = <p> Comensales: {data.comensales }</p>;
const paragraph_x = <p>{data.paragraph_1}</p>;
const paragraph_2x = <p>{data.paragraph_2}</p>;

const element = (
  <div>
    <h1>Plato de la Semana</h1>
    {title_x}
    {subtitle_x}
    {paragraph_x}
    <br/><br/>
    {paragraph_2x}
    <br/><br/>
    {paragraph_2x}
  </div>
);


// Renderiamos o pintamos
ReactDOM.render(
  element,// estructura jsx para pintar
  document.getElementById('root')// elemento donde se pintara
);