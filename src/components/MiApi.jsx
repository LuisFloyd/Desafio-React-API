import React, {useState, useEffect} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoHayRegistros from "./NoHayRegistros";

const MiApi = () => {
    const [datos, setDatos] = useState([])
    const [listaFiltrada, setListaFiltrada] = useState([])
    const [filtro, setFiltro] = useState('')
    const [orden, setOrden] = useState('ascendentemente')
    const [ordenContrario, setOrdenContrario] = useState('descendentemente')

    useEffect(()=>{
        llamarApi()
    }, [])

    const llamarApi = async () => {
        const url = 'https://api.victorsanmartin.com/feriados/en.json';
        const response = await fetch(url)
        const data = await response.json()
        setDatos(data.data)
        setListaFiltrada(data.data)
    }

    useEffect(() => {
        const lista = (filtro === '00') ? datos : datos.filter(dato => dato.date.includes('2022-'+filtro))        
        const lista2 = (orden === 'ascendentemente') ? [...lista].sort((a, b) => (a.date > b.date) ? 1 : -1) : [...lista].sort((a, b) => (a.date > b.date) ? -1 : 1)
        setListaFiltrada(lista2)
    }, [filtro, datos, orden])

    const cambiaOrden = () => {
        if (orden === 'ascendentemente') {
            setOrden('descendentemente')
            setOrdenContrario('ascendentemente')
        }
        else {
            setOrden('ascendentemente')
            setOrdenContrario('descendentemente')            
        }
    }

    return(
        <Container>
            <Row className="orden-filtro">
                <Col xs={7}>
                    <Form.Label>Ordenar por fecha : </Form.Label>
                    <br />
                    <Button id="btnOrdenar" onClick={cambiaOrden} >{ordenContrario}</Button>
                </Col>
                <Col>
                    <Form.Label>Filtrar por mes : </Form.Label>
                    <Form.Select id="selectMes" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                        <option value='00'>Filtrar por mes</option>
                        <option value='01'>enero</option>
                        <option value='02'>febrero</option>
                        <option value='03'>marzo</option>
                        <option value='04'>abril</option>
                        <option value='05'>mayo</option>
                        <option value='06'>junio</option>
                        <option value='07'>julio</option>
                        <option value='08'>agosto</option>
                        <option value='09'>septiembre</option>
                        <option value='10'>octubre</option>
                        <option value='11'>noviembre</option>
                        <option value='12'>diciembre</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="listaDatos">
                <Col>
                {(listaFiltrada.length == 0) ? 
                    <NoHayRegistros/>
                    :
                    <ul>
                        <Row className="encabezado"><Col xs={2}>Fecha</Col> <Col xs={4}>Tipo</Col> <Col>Motivo</Col></Row>
                        {listaFiltrada.map((dato) => (<li key={dato.date}> <Row><Col xs={2}>{dato.date}</Col> <Col xs={4}>{dato.extra}</Col> <Col>{dato.title}</Col></Row></li>))}
                    </ul>}
                </Col>
            </Row>
        </Container>
    )
}
export default MiApi