import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
// export const revalidate = 10;

type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름: ${params.slug}`,
    }
}
    
export default async function ProductPage({params: {slug}}: Props) {
    const product = await getProduct(slug);

    return (
        <>
            <h1>{product?.name} 제품 설명 페이지!</h1>
            <Image 
                src={`/images/${product?.image}`}
                alt=''                
                width='300'
                height='300'
            />
        </>
    );    
} 

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map(product => ({
        slug: product.id,
    }));
}