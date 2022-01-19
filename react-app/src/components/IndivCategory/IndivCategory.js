import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Product from '../Product/Product'
import "./IndivCategory.css";

function IndivCategory() {
    const { category } = useParams();
    const products = useSelector((state) => Object.values(state.products));

    return (
      <div className="category__content">
        <div className="category__content__container">
            <div className="category__row">
                {products.filter(each => each.department === category).map((each) => (
                <Product
                key={each.id}
                name={each.name}
                price={each.price}
                product_url={each.product_url}
                rating={
                    each.average_rating_length
                    ? each.average_rating_total / each.average_rating_length
                    : 0
                    }
                    id={each.id}
                    />
                    ))}
            </div>
        </div>
      </div>
    );
}

export default IndivCategory
