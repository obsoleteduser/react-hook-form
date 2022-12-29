import React from 'react'
import './form.css'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    productName: yup.string().required("Product name can't be empty"),
    unitPrice: yup.number().positive().required(),
    unitsInStock: yup.number().positive().required()
})


export const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data) =>{
            console.log(data)
    }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit(submitForm)}>
            <h1>Add Product</h1>
            <input placeholder='Product name' type="text" name='productName' {...register('productName')}/>
            <p className='error'>{errors.productName?.message}</p>
            <input placeholder='Unit price' type="number" name="unitPrice" id="" {...register('unitPrice')}/>
            <p className='error'>{errors.unitPrice?.message}</p>
            <input placeholder='Units in stock' type="number" name="unitsInStock" id="" {...register('unitsInStock')}/>
            <p className='error'>{errors.unitsInStock?.message}</p>
            <input type="submit" value="Submit" />

        </form>
    </div>
  )
}
