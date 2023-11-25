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
                                        How to order?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <div
                class=" mx-auto wow fadeInUp"
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
                <p> Your location............................</p>
                <p>Your preferred name...............................</p>
                <p>Grade type..................</p>
                <p>Quantity needed........................</p>
                <p>Secure drop address..................</p>
                <p>(Shipping address)</p>
                Keep it short guys, there are lots of clients waiting to be attended to okay. Thanks for the trust📦📦📦
                <p>Payment method: Bitcoin or Ethereum
Copy link below 👇</p>
<h5 class="mb-3">ETH</h5>
                    <p>0x2eB3988628EB13af50a21cF38B F88028621dd3e5 </p>
                    <h5 class="mb-3">BTC</h5>
                    <p>bc1q2u4uv9jtwqqaycdr3uy0h3uev 32caa0w706vdd </p>
              </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                               
                               
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq