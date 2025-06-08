import Link from "next/link";
import { categories } from "./_lib/categories";
const Categories = () => {
    return (
        <div>
            <h1>Category Page</h1>
            {categories.map((category) => (
                <div key={category}>
                    <Link href={`/categories/${category}`}>
                        {category}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Categories;

