import Alert from 'react-bootstrap/Alert';

const NoHayRegistros = () => {
    return(
    <div className='noHayRegisto'>
        <Alert variant="danger">
            <Alert.Heading>No hay feriados!!!</Alert.Heading>
            <img src="https://www.lavanguardia.com/files/image_449_220/uploads/2016/11/01/5fa2fbee79aad.png" alt="" />
        </Alert>
    </div>
    )
}
export default NoHayRegistros;
