import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import API from './RutaAPI';

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      data: [],
      modalActualizar: false,
      modalInsertar: false,
      form: {
        UserName: "",
        Nombre: "",
        ApellidoMaterno: "",
        ApellidoPaterno: "",
        Edad: 0,
        Genero: "",
      },
      update: true,
    };
  }

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = async () => {
    var registro = this.state.form;
    const intEdad = parseInt(registro.Edad, 10);
    await fetch(`${API.RUTA_API}/ActualizarUsuario.php?user=${registro.UserName}&nombre=${registro.Nombres}&apellidoM=${registro.ApellidoMaterno}&apellidoP=${registro.ApellidoPaterno}&edad=${intEdad}&genero=${registro.Genero}`);
    this.setState({ modalActualizar: false });
    this.componentDidMount(); 
  };

  eliminar = async (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.UserName);
    if (opcion == true) {
      var arreglo = this.state.data;
      arreglo.map(async (registro) => {
        if (dato.UserName == registro.UserName) {
          await fetch(`${API.RUTA_API}/EliminarUsuario.php?user=${registro.UserName}`);
          this.componentDidMount();  
        }
      });
    }
    this.setState({ update: false });
    this.componentDidMount();
  };

  insertar = async ()=>{
    var valorNuevo= {...this.state.form};
    const intEdad = parseInt(this.state.form.Edad, 10);
    await fetch(`${API.RUTA_API}/CrearUsuario.php?user=${valorNuevo.UserName}&nombre=${valorNuevo.Nombre}&apellidoM=${valorNuevo.ApellidoMaterno}&apellidoP=${valorNuevo.ApellidoPaterno}&edad=${intEdad}&genero=${valorNuevo.Genero}&pass=${'generico'}`);
    console.log(valorNuevo, intEdad);
    this.setState({ modalInsertar: false });
    this.componentDidMount();
    
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  async componentDidMount()
  {
    const respuesta = await fetch(`${API.RUTA_API}/CargarDatos.php`);
    const datos = await respuesta.json();
    this.setState({ data: datos });
    console.log(this.state.data);
  }

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>User</th>
                <th>Nombre</th>
                <th>Apellido Materno</th>
                <th>Apellido Paterno</th>
                <th>Edad</th>
                <th>Genero</th>
                <th>acciones</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.UserName}>
                  <td>{dato.UserName}</td>
                  <td>{dato.Nombres}</td>
                  <td>{dato.ApellidoMaterno}</td>
                  <td>{dato.ApellidoPaterno}</td>
                  <td>{dato.Edad}</td>
                  <td>{dato.Genero}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               UserName:
              </label>
            
              <input
                className="form-control"
                readOnly
                name="UserName"
                type="text"
                value={this.state.form.UserName}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="Nombres"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Nombres}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellido Materno: 
              </label>
              <input
                className="form-control"
                name="ApellidoMaterno"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ApellidoMaterno}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido Paterno: 
              </label>
              <input
                className="form-control"
                name="ApellidoPaterno"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ApellidoPaterno}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Edad: 
              </label>
              <input
                className="form-control"
                name="Edad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Edad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Genero: 
              </label>
              <input
                className="form-control"
                name="Genero"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Genero}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                User Name: 
              </label>
              
              <input
                className="form-control"
                name = "UserName"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombres: 
              </label>
              <input
                className="form-control"
                name="Nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellido Materno: 
              </label>
              <input
                className="form-control"
                name="ApellidoMaterno"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido Paterno: 
              </label>
              <input
                className="form-control"
                name="ApellidoPaterno"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Edad: 
              </label>
              <input
                className="form-control"
                name="Edad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Genero: 
              </label>
              <input
                className="form-control"
                name="Genero"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
