
import { categories } from "../_lib/categories";
// if you want to disable dynamic params, set this to false
export const dynamicParams = true; // this is required to enable dynamic params in Next.js 13

//for multiple dynamic sections, you need an explosion of the params you want to generate
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params-for-dynamic-routes
// the return type is an array of objects, each object containing the dynamic params
// in this case, we have a single dynamic param 'category'
export const generateStaticParams = async () => {
  return categories.map(category => ({
    category
  }));
}

const CategoryPage = async ({params}:{params: Promise<{category: string}>}) => {
    const { category } = await params;
  return (
    <div>
      <h1>Category Page</h1>
      <p>{category} rendered at {new Date().toLocaleString()}</p>
    </div>
  );
}

export default CategoryPage;