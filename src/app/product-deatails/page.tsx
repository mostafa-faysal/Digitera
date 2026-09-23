import { redirect } from "next/navigation";
import { productPaths } from "@/features/products";

export default function ProductDeatailsRedirect() {
  redirect(productPaths.detail("santal-parchment"));
}
