import React from 'react'

function Category() {

    const categories = ['Best Sellers', 'Coupons', 'Outdoor Recreation', 'Pet Supplies', 'Health & Household','Emizon Home', 'Livestreams' ]
    
    return (
      <div className="category">
          {categories.map(each => 
              <span className="category__heading">{each}</span>
          )}
      </div>
    );
}

export default Category
