import { ProductDetailView } from "@/features/products";

export default async function ProductDetailsRoute({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <ProductDetailView productId={productId} />;
}
