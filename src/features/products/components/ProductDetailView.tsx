"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/features/cart";
import { Header } from "@/components/shared/Header";
import { ProductCard } from "@/features/products/components/ProductCard";
import { useProduct } from "@/features/products/hooks/useProduct";
import { useProducts } from "@/features/products/hooks/useProducts";
import { productPaths } from "@/features/products/paths";
import { formatWholePrice } from "@/features/products/utils/product.utils";

const VOLUME_PRICES: Record<string, number> = {
  "30 ml": 140,
  "50 ml": 180,
  "100 ml": 220,
};

type ProductDetailViewProps = {
  productId: string;
};

export function ProductDetailView({ productId }: ProductDetailViewProps) {
  const productQuery = useProduct(productId);
  const companionsQuery = useProducts({ pageSize: 24 });
  const { addItem } = useCart();

  const product = productQuery.data;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVolume, setSelectedVolume] = useState("100 ml");
  const [giftWrapping, setGiftWrapping] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const hasVolumeOptions = Boolean(
    product?.options.some((option) => option.id === "volume"),
  );
  const price = hasVolumeOptions
    ? (VOLUME_PRICES[selectedVolume] ?? product?.price ?? 0)
    : (product?.price ?? 0);

  const companions = useMemo(() => {
    const items = companionsQuery.data?.items ?? [];
    return items.filter((item) => item.id !== productId).slice(0, 4);
  }, [companionsQuery.data?.items, productId]);

  const scentNotes = useMemo(() => {
    if (!product) {
      return [];
    }
    
    const notes = [];
    if (product.topNotes) notes.push({ label: "Top Notes", value: product.topNotes });
    if (product.heartNotes) notes.push({ label: "Heart Notes", value: product.heartNotes });
    if (product.baseNotes) notes.push({ label: "Base Notes", value: product.baseNotes });
    
    if (notes.length > 0) return notes;
    
    return [
      { label: "Notes", value: product.notes },
    ];
  }, [product]);

  if (productQuery.isLoading) {
    return (
      <p className="px-4 py-16 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Loading product...
      </p>
    );
  }

  if (!product) {
    return (
      <p className="px-4 py-16 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Product not found.
      </p>
    );
  }

  const baseImages =
    product.images.length > 0
      ? product.images
      : ["/images/products/santal-parchment.png"];
  
  const fallbackThumbs = [
    "/images/product-detail/thumb-0.png",
    "/images/product-detail/thumb-1.png",
    "/images/product-detail/thumb-2.png",
  ];
  
  // Ensure we have at least 3 unique thumbnails to match the design interactivity
  const images =
    baseImages.length < 3
      ? [
          ...baseImages,
          ...fallbackThumbs.slice(0, 3 - baseImages.length)
        ]
      : baseImages;
      
  const thumbs = images.slice(0, Math.min(3, images.length));
  const activeImage = images[selectedImageIndex] ?? images[0];
  const scentFamilyLabel = product.scentFamily.replace(/-/g, " ");
  const occasionLabel = product.occasion.replace(/-/g, " ");

  function handleAddToCart() {
    for (let i = 0; i < quantity; i += 1) {
      addItem({
        productId: product!.id,
        name: product!.name,
        price,
        image: images[0],
        selectedOptions: {
          ...(hasVolumeOptions ? { volume: selectedVolume } : {}),
          ...(giftWrapping ? { giftWrapping: "yes" } : {}),
        },
      });
    }
  }

  return (
    <section className="overflow-x-hidden bg-[#faf8f5] text-[#1a1a1a]">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 px-4 py-4 sm:px-6 sm:py-6 md:px-10 lg:px-20"
      >
        {[
          { label: "Home", href: productPaths.list },
          { label: "Shop", href: productPaths.list },
          { label: "Fragrances", href: productPaths.list },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="text-[12px] font-normal whitespace-nowrap text-[#605a54]"
            >
              {item.label}
            </Link>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/chevron-right.svg" alt="" width={10} height={10} />
          </span>
        ))}
        <span className="max-w-[140px] truncate text-[12px] font-semibold text-[#1a1a1a] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      <div className="flex flex-col items-stretch gap-8 px-4 pb-12 sm:gap-10 sm:px-6 sm:pb-16 md:px-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16 lg:px-20 lg:pb-[100px]">
        <div className="flex min-w-0 w-full flex-1 flex-col gap-3 sm:gap-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg sm:aspect-auto sm:h-[480px] lg:h-[560px] xl:h-[600px]">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              className="rounded-lg object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
          {thumbs.length > 1 ? (
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {thumbs.map((image, index) => {
                const isActive = selectedImageIndex === index;
                return (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    aria-label={`View image ${index + 1}`}
                    className={`relative aspect-square min-w-0 flex-1 overflow-hidden rounded sm:aspect-auto sm:h-[100px] lg:h-[120px] ${
                      isActive
                        ? "border-2 border-solid border-[#c5a880]"
                        : "border border-transparent"
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="rounded object-cover"
                      sizes="20vw"
                    />
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-6 sm:gap-8 lg:w-[min(100%,560px)] lg:shrink-0">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#f2ede4] px-2.5 py-1 text-[10px] font-semibold uppercase text-[#1a1a1a] sm:text-[11px]">
                Scent Family: {scentFamilyLabel}
              </span>
              <span className="rounded-full bg-[#f4f0eb] px-2.5 py-1 text-[10px] font-semibold uppercase text-[#605a54] sm:text-[11px]">
                Occasion: {occasionLabel}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-[32px] leading-tight text-[#1a1a1a] sm:text-[40px] lg:text-[48px]">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
              <p className="text-[20px] font-semibold text-[#1a1a1a] sm:text-[24px]">
                {formatWholePrice(price)}
              </p>
              <div className="flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/status-dot.svg"
                  alt=""
                  width={8}
                  height={8}
                />
                <p className="text-[12px] font-semibold text-[#10b981] sm:text-[13px]">
                  Available in Atelier
                </p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#ebe6de]" />

          {hasVolumeOptions ? (
            <div className="flex flex-col gap-3">
              <p className="text-[12px] font-bold uppercase text-[#1a1a1a]">
                Select Volume
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {Object.entries(VOLUME_PRICES).map(([volume, volumePrice]) => {
                  const selected = selectedVolume === volume;
                  return (
                    <button
                      key={volume}
                      type="button"
                      className={`flex flex-col items-center gap-1 rounded p-2.5 sm:p-3 ${
                        selected
                          ? "border-2 border-solid border-[#1a1a1a] bg-white"
                          : "border border-solid border-[#ebe6de]"
                      }`}
                      onClick={() => setSelectedVolume(volume)}
                    >
                      <span
                        className={`text-[12px] sm:text-[14px] ${
                          selected
                            ? "font-bold text-[#1a1a1a]"
                            : "font-medium text-[#1a1a1a]"
                        }`}
                      >
                        {volume}
                      </span>
                      <span className="text-[10px] font-normal text-[#605a54] sm:text-[11px]">
                        {formatWholePrice(volumePrice)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="flex items-center justify-between gap-3 rounded-md bg-[#f4f0eb] p-4 sm:gap-4 sm:p-5">
            <div className="flex min-w-0 flex-col gap-1">
              <p className="text-[12px] font-semibold text-[#1a1a1a] sm:text-[13px]">
                Complimentary Signature Gift Wrapping
              </p>
              <p className="text-[11px] font-normal text-[#605a54] sm:text-[12px]">
                Encased in linen paper box with custom wax seal stamp.
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={giftWrapping}
              aria-label="Toggle gift wrapping"
              className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                giftWrapping ? "bg-[#1a1a1a]" : "bg-[#d9d3cb]"
              }`}
              onClick={() => setGiftWrapping((current) => !current)}
            >
              <span
                className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform ${
                  giftWrapping ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex w-full items-center justify-between gap-5 rounded border border-solid border-[#ebe6de] px-4 py-3.5 sm:w-auto sm:justify-center">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="text-[16px] font-normal text-[#605a54]"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="text-[14px] font-semibold text-[#1a1a1a]">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="text-[16px] font-normal text-[#605a54]"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="flex w-full flex-1 items-center justify-center rounded bg-[#1a1a1a] px-4 py-4 text-[12px] font-bold uppercase text-white sm:text-[13px]"
              onClick={handleAddToCart}
            >
              Add to Cart / {formatWholePrice(price)}
            </button>
          </div>

          <div className="h-px w-full bg-[#ebe6de]" />

          <div className="flex flex-col gap-4 sm:gap-5">
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[26px] text-[#1a1a1a] sm:text-[32px]">
              Scent Anatomy
            </h2>
            <p className="text-[13px] leading-[1.6] font-normal text-[#605a54] sm:text-[14px]">
              {product.description}
            </p>
            <div className="flex flex-col gap-3">
              {scentNotes.map((note) => (
                <div
                  key={note.label}
                  className="flex flex-col gap-1 border-b border-solid border-[#ebe6de] py-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                >
                  <p className="shrink-0 text-[12px] font-bold uppercase text-[#1a1a1a]">
                    {note.label}
                  </p>
                  <p className="text-[13px] font-normal text-[#605a54] sm:text-right">
                    {note.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="flex w-full items-center justify-center bg-[#1a1a1a] px-4 py-3 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white">
          Complimentary signature gift wrapping on all orders above $150
        </p>
      </div>
      
      <Header />

      {companions.length > 0 ? (
        <div className="flex flex-col gap-8 bg-[#f4f0eb] px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:px-10 lg:gap-12 lg:px-20 lg:py-[100px]">
          <div className="flex w-full flex-col items-center gap-2 text-center sm:gap-3">
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[28px] text-[#1a1a1a] sm:text-[36px] lg:text-[48px]">
              Olfactory Companions
            </h2>
            <p className="text-[12px] font-normal uppercase text-[#605a54] sm:text-[14px]">
              Fragrances of synonymous sophistication
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {companions.map((companion) => (
              <ProductCard key={companion.id} product={companion} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
