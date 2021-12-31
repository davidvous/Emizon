function Category({departments}) {

    const uniqueDepartments = new Set(departments)
    console.log(uniqueDepartments)

    return (  
      <div className="category">
          {[...uniqueDepartments].map((each,idx) => 
              <span key={idx} className="category__heading">{each}</span>
          )}
      </div>
    );
}

export default Category
