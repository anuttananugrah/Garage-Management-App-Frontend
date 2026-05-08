import React, { useEffect, useState, useContext } from 'react'
import { getCustomerServiceApi, serviceStatusUpdateApi } from '../services/allApis'
import { serviceSuccessContext } from '../contextApi/StatusContext'

function ServiceList({ customer_id }) {

    const [serviceItems, setServiceItems] = useState([])

    const { serviceSuccessStatus } = useContext(serviceSuccessContext)

    useEffect(() => {
        getData()
    }, [serviceSuccessStatus])

    const getData = async () => {
        const response = await getCustomerServiceApi(customer_id)
        // console.log(response)
        if (response.status === 200) {
            setServiceItems(response.data)
        }
    }

    const updateServiceStatus = async (id) => {
        const response = await serviceStatusUpdateApi(id, { "status": "completed" })
        console.log(response)
        if (response.status === 200) {
            getData()
        }
    }

    return (
        <>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Charge</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        serviceItems.map((item, index) => (

                            <tr>
                                <td>{index + 1}</td>
                                <td>{item?.title}</td>
                                <td>{item?.description}</td>
                                <td>{item?.service_charge}</td>
                                <td>
                                    {
                                        item?.status==="Pending" ?
                                        <button className='btn btn-dark' onClick={()=>{updateServiceStatus(item?.id)}}>
                                            Done!
                                        </button>
                                        :
                                        <span className='text-success'>{item?.status}</span>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ServiceList