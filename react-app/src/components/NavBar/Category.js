function Category({departments}) {

    const uniqueDepartments = new Set(departments)

    return (  
      <div className="category">
          {[...uniqueDepartments].slice(0,7).map((each,idx) => 
              <span key={idx} className="category__heading">{each}</span>
          )}
      </div>
    );
}

export default Category
