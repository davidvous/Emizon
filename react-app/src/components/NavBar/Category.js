import { Link } from 'react-router-dom';

function Category({departments}) {

    const uniqueDepartments = new Set(departments)

    return (  
      <div className="category">
          {[...uniqueDepartments].slice(0,7).map((each,idx) => 
              <Link className="general__link" key={idx} to={`/products/category/${each}`}>{each}</Link>
          )}
      </div>
    );
}

export default Category
