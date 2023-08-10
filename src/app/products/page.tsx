import { getProducts } from '@/service/products';
import Link from 'next/dist/client/link';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '../../../public/images/clothes.jpg';
import Image from 'next/image';
// export const revalidate = 10;

export default async function ProductsPage() {        
    const products = await getProducts();
    
    return (
    <>
        <h1>제품 소개 페이지!</h1>        
        <Image src = {clothesImage} alt='Clothes' priority/>
        <ul>
            {products.map((product, index) => (
                <li key={index}>
                    <Link href={`products/${product.id}`}>{product.name}</Link>
                </li>
                ))}
        </ul>
        <MeowArticle/>
    </>
    );
}