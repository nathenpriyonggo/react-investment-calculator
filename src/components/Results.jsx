import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result({ input }) {
    const results = calculateInvestmentResults({
        initialInvestment: input.initialInvestment,
        annualInvestment: input.annualInvestment,
        expectedReturn: input.expectedReturn,
        duration: input.duration
    })

    console.log(results);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(result => {
                    let totalInterest = 
                        result.valueEndOfYear - (result.annualInvestment * result.year)
                        - input.initialInvestment;
                    let investedCapital = 
                        result.valueEndOfYear - totalInterest;

                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
