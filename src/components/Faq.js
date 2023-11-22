const Faq = () => {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                    <h1 class="display-6">FAQs</h1>
                    <p class="text-primary fs-5 mb-5">Frequently Asked Questions</p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How to use the Cloned Cards?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Step 1: Insert ATM Card.</p>
                                        <p>

                                            Step 2: Select the Language.</p>
                                        <p>
                                            Step 3: Enter 4 Digit ATM Pin.  </p>
                                        <p>

                                            Step 4: Select Your Transaction.</p>
                                        <p>

                                            Step 5: Select Your Account.</p>
                                        <p>

                                            Step 6: Enter the Withdrawal Money(withdraw £500 every after 2 hours) </p>
                                        <p>

                                            Step 7: Collect the Cash.    </p>
                                        <p>

                                            Step 8: Take a Printed Receipt.  </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How to order?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Your country/city </p>
                                        <p>    Your name</p>
                                        <p> Required quantity</p>
                                        <p>Delivery address details</p>
                                        <p> E-mail</p>
                                        <p className="mb-4"> Contact number (optional)</p>
                                        <p >

                                            We use three delivery services </p>
                                        <p>DHL</p>
                                        <p>USPS</p>
                                        <p>FedEx</p>

                                        <p>You decide which service you want based on your location. All packages come with tracking numbers that you can use to track and trace your packages</p>

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        To order
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ol>
                                            <li>
                                                indicate your currency
                                            </li>
                                            <li>indicate How much</li>
                                            <li>
                                                indicate the delivery details
                                            </li>
                                            <li>
                                                indicate the preferred delivery courier
                                            </li>
                                            <li>
                                                indicate the payment method
                                            </li>
                                        </ol>
                                        <p>Payment methods ✅</p>
                                        <ul>
                                            <li>Crypto</li>
                                            <li>PayPal</li>
                                            <li>Western Union</li>
                                        </ul>
                                        <p>USD Price list ✅</p>
                                        <ul>
                                            <li>$100,000 cost $25,000</li>
                                            <li>  $50,000 cost $12,000</li>
                                            <li> $10,000 costs $1,500</li>
                                            <li> $5,000 costs $700</li>
                                            <li> $2,000 cost $300</li>
                                        </ul>

                                        <p>Available in 10s 20s 50s 100s</p>

                                        <p>Euro price list ✅</p>

                                        <ul>
                                            <li>€ 100,000 cost € 9900</li>
                                            <li> € 50,000 cost € 4900</li>
                                            <li>€ 10,000 cost € 1000</li>
                                            <li>€ 5,000 cost €530</li>
                                            <li> € 2,000 cost € 235</li>
                                        </ul>

                                        <p> Pounds sterling price list✅</p>
           
                                        <ul>
                                            <li> £ 100,000 cost 22,000</li>
                                            <li> £ 50,000 cost 11,000</li>
                                            <li>£ 10,000 costs 1500</li>
                                            <li> £ 5,000 costs £ 800</li>
                                            <li> £ 2,000 costs £ 300</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq