import strl from '../assets/img/sterling.png'
import dol from '../assets/img/doll.jpg'
import ero from '../assets/img/eur.jpg'
import { MONEY } from '../const/money'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Services=()=>{
    const [img,setImg]=useState()
    const [name,setName]=useState()
    const [desc,setDesc]=useState()
    const navigate=useNavigate()
    const change=(img,name,desc,route)=>{
       setImg(img)
       setDesc(desc)
       setName(name)
        navigate('usd')
        
    }
    return(
        <div class="container-xxl bg-light py-5 my-5">
        <div class="container py-5">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
                <h1 class="display-6">Services</h1>
                <p class="text-primary fs-5 mb-5">Prop Money</p>
            </div>
            <div class="row g-4">
               {
                MONEY.map((m)=>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item bg-white p-5">
                        <img class="img-fluid mb-4" src={m.image} alt=""/>
                        <h5 class="mb-3">{m.name}</h5>
                        <p>{m.dsc}</p>
                        <a href=""
                        onClick={()=>change(m.image,m.name,m.dsc)}
                        >Place order, then make payment <i class="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
                )
                }
                
                
            </div>
        </div>
    </div>
    )
}

export default Services