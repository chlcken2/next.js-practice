import Link from 'next/dist/client/link';

const products = ['shirt', 'pants', 'skirts', 'shoes'];

export default function ProductsPage() {
    return (
    <>
        <h1>제품 소개 페이지!</h1>    
        <ul>
            {products.map((product, index) => (
                <li key={index}>
                    <Link href={`products/${product}`}>{product}</Link>
                </li>
                ))}
        </ul>
    </>
    );
}