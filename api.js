console.log('Starting fetch call');
const postPromise = fetch('https://api.dailysmarty.com/posts');
console.log('After fetch call');
console.log(postPromise);
console.log('After program has run');


postPromise
    .then(data => data.json())
    .then(data => {
        data.posts.forEach((item) => {
            console.log(item.title);
        });
    })

    .catch((err) => {
        console.log(err)
    });



// A Family Office Guide to Sustainable Investment Reporting
// Best Nail Polishes for Women
// 5 Ways to Improve Your Car's Exhaust System for Better Performance
// NFT Marketplaces: A Primer for Businesses
// Fish Game Gambling Software - BR Softech
// Launch Your Own Decentralized IDO Platform With BSCpad Clone
// Wholesale Restaurant Furniture Manufacturer & Supplier In Mumbai
// The Science of Bird Behavior: Understanding How Balcony Nets Benefit Avian Health and Wellbeing in Dubai
// Accident Car Removal: The Best Solution for Your Damaged Vehicle
// Tips and Tricks for Closing High Ticket Big Deals Remotely