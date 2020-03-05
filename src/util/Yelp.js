
const apiKey = 'caLgw9LX6H0J2Xs_U6Yki_y2gMIC7Ra6-JL1bdNiOPr4rzDIJ4kxsSgt_t21Mn5M9rpvb3Gvqr12IFbPDsHxlPC-57ryqFgBKwV6nqXxgonlANB4Nx1idX5SmCFgXnYx'

const yelp = {
  yelpSearch(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                  {headers: {
                    Authorization: `Bearer ${apiKey}`
                  }
                }).then(response => {
                  return response.json()

                }).then(jsonResponse => {
                  if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                      return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipcode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                      }
                    })
                  }
                })
  }
}
export default yelp;
