const [contador, setContador] = useState(0);
const aumentarCont = () => {
  const nuevoValor = contador + 1;
  setContador (nuevoValor);
}

export default aumentarCont;