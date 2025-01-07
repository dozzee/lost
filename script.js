const recentDonations = [
    {
        organization: "Children's Education Fund",
        amount: 150000,
        date: "2024-02-15"
    },
    {
        organization: "Global Health Initiative",
        amount: 200000,
        date: "2024-01-20"
    },
    {
        organization: "Environmental Protection Alliance",
        amount: 350000,
        date: "2023-12-10"
    }
];

function formatCurrency(amount) {
    return `$${(amount / 1000).toFixed(0)}K`;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
}

function displayDonations() {
    const donationGrid = document.getElementById('recent-donations');
    
    recentDonations.forEach(donation => {
        const donationCard = document.createElement('div');
        donationCard.className = 'donation-card';
        
        donationCard.innerHTML = `
            <h3>${donation.organization}</h3>
            <p class="donation-amount">${formatCurrency(donation.amount)}</p>
            <p class="donation-date">${formatDate(donation.date)}</p>
        `;
        
        donationGrid.appendChild(donationCard);
    });
}

document.addEventListener('DOMContentLoaded', displayDonations);