import { useSelector } from 'react-redux';

function Category() {
    const categories = useSelector(state => Object.values(state.products))
    const uniqueCategories = new Set(categories.map(each => each.department));
    
    return (
      <div className="category">
          {[...uniqueCategories].map((each,idx) => 
              <span key={idx} className="category__heading">{each}</span>
          )}
      </div>
    );
}

export default Category
