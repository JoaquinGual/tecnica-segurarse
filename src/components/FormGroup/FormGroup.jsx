import React from 'react'
import {Formik, Field, Form } from 'formik'
import * as Yup from 'yup';

import Swal from 'sweetalert2';
import { TableUsers } from '../TableUsers/TableUsers';
import { useAddUser } from '../../hooks/useAddUser';
import { usePostBase64 } from '../../hooks/usePostBase64';



export const FormGroup = () => {
  
  const {addUser} = useAddUser();
  const {postBase64} = usePostBase64();
  
  const initialValues = {
    txtNombre: "",
    txtApellido: ""
}
const validationSchema = Yup.object({
    txtNombre: Yup.string().min(3).required('Nombre Requerido'),
    txtApellido: Yup.string().min(3).required('Apellido Requerido')
})


  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema}
      onSubmit={async (values, formikBag) => {
        try {
          const {data} = await postBase64(values.txtNombre, values.txtApellido);
          console.log(data);
            await addUser(values.txtNombre, values.txtApellido)
            Swal.fire("Ok", "Se agrego ok!", "success");
            formikBag.resetForm();
        } catch (error) {
            Swal.fire("Error", "Error al registrar usuario")
        }
    }}>
        <Form>
          <div className='container mt-2 d-flex justify-content-between'>
            <div className='col-md-4'>
            <Field name="txtNombre"
            type="text"
            className="form-control"
            placeholder="Nombre" 
            />
            </div>
            <div className='col-md-4'>
            <Field name="txtApellido"
            type="text"
            className="form-control"
            placeholder="Apellido" 
            />
            </div>
            <div className='col-md-3'>
              <button type="submit" className='btn btn-dark'>Añadir Usuario</button>
            </div>
          </div>
          
        </Form>
      </Formik>
      <TableUsers/>
    </>
  )
}
