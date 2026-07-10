"use client";

import dynamic from "next/dynamic";

const Brands = dynamic(() => import("./Brands"), { ssr: false });

export default function BrandsClient() {
    return <Brands />;
}
