import { useState } from "react"

export default function UserInput({ onChange, userInput }) {
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>
                        Initial Investment
                    </label>
                    <input 
                        name="initialInvestment"
                        value={userInput.initialInvestment} 
                        type="number" 
                        required 
                        onChange={onChange}
                    />
                </p>
                <p>
                    <label>
                        Annual Investment
                    </label>
                    <input 
                        name="annualInvestment"
                        value={userInput.annualInvestment} 
                        type="number" 
                        required 
                        onChange={onChange}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>
                        Expected Return
                    </label>
                    <input 
                        name="expectedReturn"
                        value={userInput.expectedReturn} 
                        type="number" 
                        required 
                        onChange={onChange}
                    />
                </p>
                <p>
                    <label>
                        Duration
                    </label>
                    <input 
                        name="duration"
                        value={userInput.duration} 
                        type="number" 
                        required 
                        onChange={onChange}
                    />
                </p>
            </div>
        </section>
    )
}