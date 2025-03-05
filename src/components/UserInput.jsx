import { useState } from "react"

export default function UserInput(setUserInput) {

    return (

        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>
                        Initial Investment
                    </label>
                    <input value={val} type="number" required onChange={() => setUserInput("initialInvestment", )}/>
                </p>
                <p>
                    <label>
                        Annual Investment
                    </label>
                    <input type="number" required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>
                        Expected Return
                    </label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>
                        Duration
                    </label>
                    <input type="number" required/>
                </p>
            </div>
        </section>
    )
}