import { useParams } from 'react-router-dom';

function IndivCategory() {
    const { category } = useParams();

    return (
        <div>
            <h1>We are currently in {category}</h1>

            
        </div>
    )
}

export default IndivCategory
