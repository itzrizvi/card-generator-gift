const cardDistribution = (allCards) => {
    // Mapping the Input data
    const mapCard = allCards.map((M, i) => ({
        cardNumber: M.district.slice(0, 2).toUpperCase() + M.currentYear.toString().slice(-2) + M.postNo.toString().slice(0, 2) + M.birthYear + (i + 1).toString().padStart(6, 0),
        gift: (i + 1) % 2 ? "W" : "R",
        priority: M.priority
    }
    )).sort((a, b) => a.priority - b.priority); // sorting by priority number

    console.log(mapCard);
}

// Calling The Function
cardDistribution([
    { name: "Mr Shahriar", birthYear: 1992, currentYear: 2023, district: "Sylhet", postNo: 1307, priority: 3 },
    { name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2 },
    { name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1 }
])