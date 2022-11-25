import {useRef} from 'react'
import '../assets/styles/dashboard.css'

function Dashboard() {
    const formData = useRef(null);

    const handleClick = (event)=> {
      event.preventDefault();
      const formdata = new FormData(formData.current);

      fetch('http://localhost:3000',{
        method:'POST',
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        },
        body: formdata
      })
      .then (response => response.json())
      .then (data => {
        console.log(data)
      })
      .catch (error => {
        console.log(error)
      })
    }
     
    return (
      <>
        <h2>Page Dashboard (private)</h2>
        <form className="container--formdata" ref={formData}>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" name="name"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="direccion" className="col-sm-2 col-form-label">Dirección</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="direccion" name="address"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="formFile" className="form-label">Logotipo de la empresa</label>
                    <input className="form-control" type="file" id="formFile" name="logotipo"/>
                </div>
                
                <div className="row mb-3">
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Registrar empresa</button>
                </div>
            </form>
      </>
        
      );
}

export default Dashboard