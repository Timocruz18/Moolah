const MoolahConfig = {
    // Edit your product here. To add more later, just add another object to this array.
    activeProducts: [
        {
            id: 1,
            name: "Tesla Model X Series",
            price: 3000,
            dailyIncome: 1000,
            duration: 21, // days
            totalReturn: 21000
        }
    ],
    // Change these links whenever you need to swap gateways
    paymentGateways: {
        gatewayA: "https://pay.gatewayA.com/link",
        gatewayB: "https://pay.gatewayB.com/link"
    }
};
