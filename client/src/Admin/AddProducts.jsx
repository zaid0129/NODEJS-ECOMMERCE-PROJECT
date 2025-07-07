import  { useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import '../css/AddProducts.css'
const AddProducts = () => {
    
    const[inp,setInp]=useState({})
    const[image,setImage]=useState([])
   
     function handleInput(e){

       let name= e.target.name
       let value=e.target.value
       
       setInp(values=>({...values,[name]:value}))
       
     }

     function handleFile(e){
       
       setImage(e.target.files)
       console.log(image);
     }
         
      async function formSubmit(e) {
        
         e.preventDefault()
        
          let api=`${BackEndUrl}/admin/productsave`;

         const formData=new FormData()

         for(const e in inp){
          formData.append(e,inp[e])
        
         }

         for(let i=0;i<image.length;i++){
          formData.append('images',image[i])
          
         }

         await axios.post(api,formData).then((res)=>{
            
            console.log(res.data)
         })
         console.log(formData)
      }    

  return (
    <>
        <div className="add-product-container">
      <form className="add-product-form" onSubmit={formSubmit}>
        <h2>Add Product</h2>
        <ul>
          <li>
            <label htmlFor="name">Enter Product Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInput}
              required
            />
          </li>

          <li>
            <label htmlFor="description">Enter Product Description *</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleInput}
              required
            />
          </li>

          <li>
            <label htmlFor="price">Enter Price *</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleInput}
              required
            />
          </li>

          <li>
            <label htmlFor="category">Select Category *</label>
            <select
              id="category"
              name="category"
              onChange={handleInput}
              required
            >
              <option value="">Choose Category</option>
              <option value="eyes">Male</option>
              <option value="face">Female</option>
              <option value="skin">Unisex</option>
              <option value="lips">Kids</option>
            </select>
          </li>

          <li>
            <label htmlFor="files">Choose Files *</label>
            <input
              type="file"
              id="files"
              multiple
              onChange={handleFile}
              required
            />
          </li>
        </ul>

        <button type="submit">Add Product</button>
      </form>
    </div>
    </>
  );
}

export default AddProducts