import { useEffect, useState } from 'react';
import ab from '../assets/img/sterling.png'
import strl from '../../src/assets/img/eth-min.jpg'
import dol from '../../src/assets/img/btc-min.jpg'
import WOW from 'wowjs';
import '../styles/lib/animate/animate.min.css'
import '../styles/lib/owlcarousel/assets/owl.carousel.min.css'
const DetailP = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();

  }, []);

  const [ch, setCh] = useState('0')
  const [show,setShow]=useState(true)
  const [city,setCity]=useState('')
  const [name,setName]=useState('')
  const [deli,setDeli]=useState('')
  const [qua,setQua]=useState('')
  const [c,setC]=useState('')
  
  const copyTextToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };
  
  
  const chang=()=>{
    setTimeout(() => {
      if(qua!='' && deli!=''){
        setShow(false)
      }
    }, 1000);
  }

  return (
    <div class="container-xxl py-5 bg-white">
      <div class="container">
        <div class='row justify-content-beetwen col-12 '>
          <div class="col-lg-6 wow fadeInUp " data-wow-delay="0.1s">
            <img class="img-fluid" src={ab} alt="" />
          </div>


          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="h-100">
              <h1 class="display-6">Pounds</h1>
              <p class="text-primary fs-5 mb-4">Description</p>
              <p>
                Purchasing Pounds tickets from propnotesetclone  is a transparent and convenient process. Through our user-friendly online platform, you can browse our selection, place your order and enjoy the convenience of worldwide delivery.  </p>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>1 year warranty</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>Free returns within 30 days</span>
              </div>


            </div>
          </div>

        </div>
        <div class="container-xxl bg-light py-5 my-5">
       
         {show? <div class="container py-5">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
              <h1 class="display-6">How to order</h1>
              <p class="text-primary fs-5 mb-5">How to place an order🚛🚚</p>
            </div>
            <form class="row">
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">Your country/city</label>
              <input type="text" class="form-control" id="validationDefault01"  />
            </div>
            <div class="col-md-4">
              <label for="validationDefault02" class="form-label">Your name</label>
              <input type="text" class="form-control" id="validationDefault02"/>
            </div>
            <div class="col-md-4">
              <label for="validationDefaultUsername" class="form-label">Required quantity
              </label>
              <div class="input-group">
                <select class="form-select" onChange={(e) => setCh(e.target.value)}>
                  <option value='1'>
                    100.000 £
                  </option>
                  <option value='2'>
                    50.000 £
                  </option>
                  <option value='3'>
                    10.000 £
                  </option>
                  <option value='4'>
                    5.000 £
                  </option>
                  <option value='5'>
                    2.000 £
                  </option>
                </select>
                {/* <input type="text" class="form-control" onChange={(e)=>setCh(e.target.value)} id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/> */}
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationDefault03" class="form-label">Delivery address details</label>
              <input type="text" class="form-control" id="validationDefault03" required onChange={(e)=>setDeli(e.target.value)}/>
            </div>
            <div class="col-md-3">
              <label for="validationDefault04" class="form-label">E-mail</label>
              <input type="text" class="form-control" id="validationDefault05" required onChange={(e)=>setQua(e.target.value)}/>
            </div>
            <div class="col-md-3">
              <label for="validationDefault05" class="form-label">contact number</label>
              <input type="number" class="form-control" id="validationDefault05" required onChange={(e)=>setC(e.target.value)}/>
            </div>
            <div class="col-12">
              <div style={{display:'flex',flexDirection:'row'}}>
                <div style={
                  {marginRight:5}
                }>
                <p>cost</p>
                </div>
                <div>
                {ch === '1' ?
                  <p>£22,000</p>
                  : <div>
                    {ch === '2' ? <p>£11,000</p> :
                      <div>{
                        ch === '3' ?<p>£1500</p>:
                        <div>
                          {
                            ch === '4' ?<p>£800</p>:<p>£300</p>
                          }
                        </div>
                    }
                      </div>}</div>
                }
                </div>
                
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary"  onClick={()=>chang()}>Order now</button>
            </div>
          </form>
       
          </div>:
          <div>

          <div class="card mb-5">
          <div class="card-body">
          <p style={{textAlign:'center'}}>Keep it short guys, there are lots of clients waiting to be attended to okay.Thanks for the trust📦📦📦</p>
          <p style={{textAlign:'center'}}> 
Payment method: Bitcoin or Ethereum
Copy link below 👇</p>
          </div>
          
          </div>
          <div class="row g-4 jutify-content-center">
      
      <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item bg-white p-5">
                    <img class="img-fluid mb-4" src={strl} alt=""/>
                    <h5 class="mb-3">ETH</h5>
                    <p>0x2eB3988628EB13af50a21cF38B
                        F88028621dd3e5  </p>
                    <a href=""onClick={() => copyTextToClipboard('0x2eB3988628EB13af50a21cF38BF88028621dd3e5')}>copied <i class="fa fa-arrow-right ms-2"></i></a>
                        
                </div>
            </div>
            <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item bg-white p-5">
                    <img class="img-fluid mb-2" src={dol} alt=""/>
                    <h5 class="mb-3">BTC</h5>
                    <p>bc1q2u4uv9jtwqqaycdr3uy0h3uev
                        32caa0w706vdd  </p>
                        <a href=""onClick={() =>copyTextToClipboard('bc1q2u4uv9jtwqqaycdr3uy0h3uev32caa0w706vdd')}>copied <i class="fa fa-arrow-right ms-2"></i></a>
                </div>
                
            </div>

        </div>
        </div>}
        </div>
        <div class="row g-5 align-items-center">




         



        </div>
      </div>
    </div>)
}

export default DetailP