import React from 'react'
import './form.css'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    productName: yup.string().required(),
    unitPrice: yup.number().positive().required(),
    unitsInStock: yup.number().positive().required()
})


export const Form = () => {
  return (
    <div className='form-container'>
        <form>
            <h1>Add Product</h1>
            <input placeholder='Product name' type="text" name='productName'/>
            <input placeholder='Unit price' type="number" name="unitPrice" id="" />
            <input placeholder='Units in stock' type="number" name="unitsInStock" id="" />
            <input type="submit" value="Submit" />

        </form>
    </div>
  )
}
