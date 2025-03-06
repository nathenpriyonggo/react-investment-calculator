import { useState } from "react"

export default function UserInput() {
    const [ userInput, setUserInput ] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(event) {
        setUserInput((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </p>
            </div>
        </section>
    )
}