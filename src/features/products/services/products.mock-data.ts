import type { Product } from "@/features/products/types/product.types";

export const mockProducts: Product[] = [
  {
    id: "fleur-de-lune",
    name: "Fleur de Lune",
    description: "A luminous floral composition of jasmine and white musk.",
    notes: "Floral / Jasmine & White Musk",
    topNotes: "Sicilian Bergamot, Pink Pepper",
    heartNotes: "Egyptian Jasmine Sambac, Papyrus",
    baseNotes: "West Indian Sandalwood, Cardamom, Amber",
    price: 195,
    images: ["/images/products/fleur-de-lune.png"],
    category: "pure-extractions",
    scentFamily: "floral",
    occasion: "personal-use",
    options: [
      {
        id: "volume",
        name: "Select Volume",
        values: ["30 ml", "50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "santal-parchment",
    name: "Santal Parchment",
    description:
      "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.",
    notes: "Woody / Sandalwood & Cardamom",
    topNotes: "Sicilian Bergamot, Pink Pepper",
    heartNotes: "Egyptian Jasmine Sambac, Papyrus",
    baseNotes: "West Indian Sandalwood, Cardamom, Amber",
    price: 220,
    images: [
      "/images/product-detail/main.png",
      "/images/product-detail/thumb-0.png",
      "/images/product-detail/thumb-1.png",
      "/images/product-detail/thumb-2.png",
    ],
    category: "pure-extractions",
    scentFamily: "woody",
    occasion: "evening",
    options: [
      {
        id: "volume",
        name: "Select Volume",
        values: ["30 ml", "50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "noir-cocoon",
    name: "Noir Cocoon",
    description: "An oriental blend of tobacco and amber.",
    notes: "Oriental / Tobacco & Amber",
    price: 240,
    images: ["/images/products/noir-cocoon.png"],
    category: "private-reserve",
    scentFamily: "oriental",
    occasion: "wedding",
    options: [
      {
        id: "volume",
        name: "Select Volume",
        values: ["30 ml", "50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "sol-dor",
    name: "Sol d'Or",
    description: "A fresh coastal blend of bergamot and sea salt.",
    notes: "Fresh / Bergamot & Sea Salt",
    price: 185,
    images: ["/images/products/sol-dor.png"],
    category: "pure-extractions",
    scentFamily: "fresh",
    occasion: "personal-use",
    options: [
      {
        id: "volume",
        name: "Select Volume",
        values: ["30 ml", "50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "atelier-oud",
    name: "Atelier Oud",
    description: "Rich oud deepened with saffron.",
    notes: "Woody / Rich Oud & Saffron",
    price: 310,
    images: ["/images/products/atelier-oud.png"],
    category: "atelier-oils",
    scentFamily: "woody",
    occasion: "gift-sets",
    options: [
      {
        id: "volume",
        name: "Select Volume",
        values: ["30 ml", "50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "rose-absolute",
    name: "Rose Absolute",
    description: "Damask rose balanced with cedar.",
    notes: "Floral / Damask Rose & Cedar",
    price: 205,
    images: ["/images/products/rose-absolute.png"],
    category: "private-reserve",
    scentFamily: "floral",
    occasion: "birthday",
    options: [
      {
        id: "volume",
        name: "Select Volume",
        values: ["30 ml", "50 ml", "100 ml"],
      },
    ],
  },
];
