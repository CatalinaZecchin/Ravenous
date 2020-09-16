// const { default: SearchBar } = require('src/components/SearchBar/SearchBar.js');

const apiKey = 'vZRT7whKlFn8WWGSjSQlByLNKcya1nubs1fleC4B3ydGK1-dL4U0UgcacxPvF82_NO658zMwc6DBM7MWnKI7oJCjX7df5iLEL4G2i2REJmAMUth4b_JlJO_ccTRiX3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: { Authorization: `Bearer ${apiKey}` }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address,
                            city: business.location.city,
                            state: business.location.address1,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    });
                }
            });
    }
}

export default Yelp;
