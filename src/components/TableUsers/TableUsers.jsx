import React from 'react'
import Table from 'react-bootstrap/Table'
import { useGetActiveUsers } from '../../hooks/useGetActiveUsers';

export const TableUsers = () => {




    const { data } = useGetActiveUsers();
  


    return (
        <Table className='container mt-5' bordered striped>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.data.map((u) => {
                        return <tr key={u.idUsuario}>
                            <td>{u.nombre}</td>
                            <td>{u.apellido}</td>
                            {u.estado === true ? <td>Activo</td> : <td>Inactivo</td>}
                        </tr>
                    })
                }
            </tbody>
        </Table>
    )
}
