import React from 'react'
import './form.css'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    productName: yup.string().required("Product name can't be empty"),
    unitPrice: yup.number("Unit price must be a number").positive("Unit price must be a positive number").required("Unit price can't be empty"),
    unitsInStock: yup.number("Units in stock price must be a number").positive("Units in stock must be a positive number").required("Units in stock can't be empty")
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
           {errors.productName?.message && <p className='error'>{errors.productName?.message}</p>}
            <input placeholder='Unit price' type="number" name="unitPrice" id="" {...register('unitPrice')}/>
           {errors.unitPrice?.message && <p className='error'>{errors.unitPrice?.message}</p>}
            <input placeholder='Units in stock' type="number" name="unitsInStock" id="" {...register('unitsInStock')}/>
        {errors.unitsInStock?.message && <p className='error'>{errors.unitsInStock?.message}</p>}
            <input type="submit" value="Submit" />

        </form>
    </div>
  )
}
