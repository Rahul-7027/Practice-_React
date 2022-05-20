import React from 'react'

export default function Demo() {
    return (

        <div className="card mb-3">
            <div className="row g-0">
                <button className='btn btn-primary mx-2' style={{ alignItems: "center" }}>7+Seater</button>
                <div className="col-md-4">
                    <img src="" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 style={{ textAlign: "center" }}>Nissan Quashqai <sapn>or Similar A</sapn></h3>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="container px-3">
                    <h3 style={{ textAlign: 'end' }}>$165/day</h3>
                    <h5 style={{textAlign:"end"}}>Total : $ 265</h5>
                    <button class="btn btn-primary" >Pay Now</button>
                    <div className="container my-5">
                
                </div>
                
                </div>
                <div className="conatiner py-3 mx-2">
                    <button class="btn btn-primary">Add Extras</button>
                    <button class="btn btn-primary mx-2">Add Insurance</button>
                    <h2 style={{textAlign:"end",display: 'inline-block',margin:"auto"}}>$ 165/day</h2>
                    <button class="btn btn-outline-success">Pay Later</button>
                </div>
            </div>
        </div>

    )
}
