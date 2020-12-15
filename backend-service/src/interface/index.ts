export interface User {
    _id: string;
    email: string;
    accountType: string;
    overview : {
        annualDividend: number;
        monthlyPayoutThisYear: [number];
    };
    stockHolding: [
        {
            symbol: string;
            amount: number;
            averageCost: number;
            currentDividendYield: number;
            payoutSchedule: [
                {
                    date: Date;
                    payoutAmount: number;
                }
            ]
        }
    ];
}