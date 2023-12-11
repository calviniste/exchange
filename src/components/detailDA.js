import { useEffect, useRef, useState } from 'react';
import ab from '../assets/img/b.png'
import strl from '../../src/assets/img/eth-min.jpg'
import dol from '../../src/assets/img/btc-min.jpg'
import WOW from 'wowjs';
import '../styles/lib/animate/animate.min.css'
import '../styles/lib/owlcarousel/assets/owl.carousel.min.css'
import { CostDa } from '../const/money';
import emailjs from '@emailjs/browser';
const DetailDA = () => {
  const form = useRef();
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  function convertObjectToForm(obj) {
    const form = document.createElement('form');
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const input = document.createElement('input');
        input.setAttribute('name', key);
        input.setAttribute('value', obj[key]);
        form.appendChild(input);
      }
    }
    
    return form;
  }
 

  const sendEmail = () => {
    

    emailjs.sendForm('service_3pz6erf', 'template_642zvc9', formElement, 'rXgHe9ZFP8wy8VFjO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const [ch, setCh] = useState("0");
  const [show, setShow] = useState(true);
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [deli, setDeli] = useState("");
  const [qua, setQua] = useState("");

  const comm={
      to_name: nom,
      to_contact: email,
      to_quantity: ch,
      to_address: deli,
      to_city:city
  }
  const formElement = convertObjectToForm(comm);
  const copyTextToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const chang = () => {
    if (
      city.length >= 1 &&
      
      deli.length >= 1 
     
    ) {
      sendEmail()
      setShow(false);
    }
  };

  return (
    <div class="container-xxl py-5 bg-white">
      <div class="container">
        <div class="row justify-content-beetwen col-12 ">
          <div class="col-lg-6 wow fadeInUp " data-wow-delay="0.1s">
            <img class="img-fluid" src={ab} alt="" />
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="h-100">
              <h1 class="display-6">Australian dollar</h1>
              <p class="text-primary fs-5 mb-4">Description</p>
              <p>
                Purchasing Australian dollar tickets from propnotesetclone is a
                transparent and convenient process. Through our user-friendly
                online platform, you can browse our selection, place your order
                and enjoy the convenience of worldwide delivery.{" "}
              </p>
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
        <div class="tarif">
          <h1>For all currency</h1>
          <p>We have available grade AA and B counterfeit banknotes</p>
          <p>
            AA grade notes passes in all ATM machines, pokies, UV control etc,
            and it's undetectable and bypasses all testing procedures, and it
            can be used everywhere except in Banks. It's almost 💯 % similar to
            original money.
          </p>
          <p>
            B grade notes can be use in public shows like concerts, video
            shooting, night clubs etc, and doesn't pass in ATM machines and
            pokies.
          </p>
          <p>We can produce any amount depending on orders!!</p>
          <h1>This is the Menu🚨</h1>
          <h5 style={{ textAlign: "center", marginBlock: 12 }}>
            PRICE OF NOTES
          </h5>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div class="card w-100">
              <table class="table table-bordered w-100" border={1}>
                <tr>
                  <th>
                    <h5>GRADE A </h5>
                  </th>
                  <th>
                    <h5>GRADE B</h5>
                  </th>
                </tr>

                {CostDa.map((c) => (
                  <tr style={{ textAlign: 'center' }}>
                    <th>
                      <div class="d-flex align-items-center mb-2">
                        <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-1 fw-bold"></i>
                        <span>{c.value}</span>
                      </div>
                    </th>
                    <td style={{ textAlign: 'center' }}>
                      <div class="d-flex align-items-center mb-2">
                        <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-1 fw-bold"></i>
                        <span>{c.val}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
        <div class="container-xxl bg-light py-5 my-2">
          {show ? (
            <div class="container py-5">
              <div
                class="text-center mx-auto wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ marginBottom: 60 }}
              >
                <h1 class="display-6">How to order</h1>
                <p class="text-primary fs-5 mb-5">How to place an order🚛🚚</p>
                <p>Hey guys </p>
                <p>Here's how to place an order</p>

                <p>
                  Open a BTC site,{" "}
                  <a href="https://www.moonpay.com/buy/BTC">Moonpay</a>
                </p>

                <p>Enter amount </p>
                <p>Choose my wallet </p>
                <p>Complete the steps </p>
                <p>And confirm payout</p>
                <p>
                  Delivery is instant, once you place order successfully, the
                  team drives to your desired location with package
                </p>
              </div>
              <form class="row" >
                <div class="col-md-4">
                  <label for="validationDefault01" class="form-label">
                    Your city
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault01"
                    onChange={(e) => setCity(e.target.value)}
                    name='to_city'
                  />
                </div>
                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label">
                    Your name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    onChange={(e) => setNom(e.target.value)}
                    name='to_name'
                  />
                </div>
                <div class="col-md-4">
                  <label for="validationDefaultUsername" class="form-label">
                    Required quantity
                  </label>
                  <div class="input-group">
                    <select
                      class="form-select"
                      onChange={(e) => setCh(e.target.value)}
                    >
                      {" "}
                      <option value="" style={{ fontWeight: "bold" }}>
                        Grade A
                      </option>
                      <option value="1">
                        &nbsp;&nbsp;&nbsp;&nbsp;$19.500
                      </option>
                      <option value="2">&nbsp;&nbsp;&nbsp;&nbsp; $4.1500</option>
                      <option value="3">
                        &nbsp;&nbsp;&nbsp;&nbsp;$65.500{" "}
                      </option>
                      <option value="4">&nbsp;&nbsp;&nbsp;&nbsp;$135000</option>
                      <option value="5">&nbsp;&nbsp;&nbsp;&nbsp;$275000</option>
                      <option value="" style={{ fontWeight: "bold" }}>
                        Grade B
                      </option>
                      <option value="b1">&nbsp;&nbsp;&nbsp;&nbsp;$8550</option>
                      <option value="b2">&nbsp;&nbsp;&nbsp;&nbsp;$11550</option>
                      <option value="b3">
                        &nbsp;&nbsp;&nbsp;&nbsp;$10.000
                      </option>
                      <option value="b4">&nbsp;&nbsp;&nbsp;&nbsp;$5.000</option>
                      <option value="b5">&nbsp;&nbsp;&nbsp;&nbsp;$2.000</option>
                    </select>
                    {/* <input type="text" class="form-control" onChange={(e)=>setCh(e.target.value)} id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/> */}
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationDefault03" class="form-label">
                    Delivery address details
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault03"
                    required
                    onChange={(e) => setDeli(e.target.value)}
                    name='to_address'
                  />
                </div>
                <div class="col-md-3">
                  <label for="validationDefault04" class="form-label">
                    Preferred contact
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder='E.mail /number'
                    id="validationDefault05"
                    name='to_contact'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="col-12">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: 5 }}>
                      <p className="text-primary font-weight-bold">Cost</p>
                    </div>
                    <div>
                    {ch === "1" ? (
                        <p>$1.000</p>
                      ) : (
                        <div>
                          {ch === "2" ? (
                            <p>$2.000</p>
                          ) : (
                            <div>
                              {ch === "3" ? (
                                <p>$3.000</p>
                              ) : (
                                <div>
                                  {ch === "4" ? (
                                    <p>$5.000</p>
                                  ) : (
                                    <div>
                                      {ch === "5" ? (
                                        <p>$10.000</p>
                                      ) : (
                                        <div>
                                          {ch === "b1" ? (
                                            <p>$500</p>
                                          ) : (
                                            <div>
                                              {ch === "b2" ? (
                                                <p>$700</p>
                                              ) : (
                                                <div>
                                                  {ch === "b3" ? (
                                                    <p>$800</p>
                                                  ) : (
                                                    <div>
                                                      {ch === "b4" ? (
                                                        <p>$1000</p>
                                                      ) : (
                                                        <p>$10k</p>
                                                      )}
                                                    </div>
                                                  )}
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <input class="btn btn-primary" type='button'  value='Order now' onClick={() => chang()} />

                </div>
              </form>
            </div>
          ) : (
            <div>
              <div class="card mb-5">
                <div class="card-body">
                  <p style={{ textAlign: "center" }}>
                    Keep it short guys, there are lots of clients waiting to be
                    attended to okay.Thanks for the trust📦📦📦
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Payment method: Bitcoin or Ethereum Copy link below 👇
                  </p>
                </div>
              </div>
              <div class="row g-4 jutify-content-center">
                <div
                  class="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="service-item bg-white p-5">
                    <img class="img-fluid mb-4" src={strl} alt="" />
                    <h5 class="mb-3">ETH</h5>
                    <p>0x2eB3988628EB13af50a21cF38B F88028621dd3e5 </p>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        copyTextToClipboard(
                          "0x2eB3988628EB13af50a21cF38BF88028621dd3e5"
                        )
                      }}
                    >
                      copied <i class="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="service-item bg-white p-5">
                    <img class="img-fluid mb-2" src={dol} alt="" />
                    <h5 class="mb-3">BTC</h5>
                    <p>bc1q2u4uv9jtwqqaycdr3uy0h3uev 32caa0w706vdd </p>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        copyTextToClipboard(
                          "bc1q2u4uv9jtwqqaycdr3uy0h3uev32caa0w706vdd"
                        );
                      }}
                    >
                      copied <i class="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
                <h1 class="mb-3" >Make payment now</h1>
                <h5 class="mb-3">after copying the address use one of these links to make bitcoin payment</h5>
                <a
                  href="https://paybis.com"
                >
                  Paybis <i class="fa fa-arrow-right ms-2"></i>
                </a>

                <a
                  href="https://Xcoins.Com"
                >
                  Xcoins<i class="fa fa-arrow-right ms-2"></i>
                </a>
                <a
                  href="https://Coinmama.conm"
                >
                  Coinmama<i class="fa fa-arrow-right ms-2"></i>
                </a>
                <a
                  href=" https://Coinspot.com.au"
                >
                  Coinspot<i class="fa fa-arrow-right ms-2"></i>
                </a>


                <p> Contact here for all other payments : other accepted payments are cardless cash, PayPal and steam gift cards exceptionally. Contact us on telegram or Snapchat or through the email for payments .</p>

                <a

                  href="https://T.me/legitnotes101"
                >
                  <i className="fab fa-telegram"></i> telegram
                </a>
                <a
                  className="mb-4 me-0"
                  href="https://www.snapchat.com/add/arkiez?share_id=QprYLNgosI0&locale=en-US"
                >
                  <i className="fab fa-snapchat"></i> snapchat
                </a>
              </div>
              <p>For package drops to specific positions , contact us on any of our contacts below and send photo of exact drop position. </p>
              <p>After you place order, you will receive ETA in less than 5 minutes . Thanks</p>
            </div>

          )}
        </div>
        <div class="row g-5 align-items-center"></div>
      </div>
    </div>
  );

}

export default DetailDA