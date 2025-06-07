import { Metadata } from "next";
import { config } from "@/config";
import React from "react";

export const metadata = { title: `Usuarios | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <>
        <h1>Rutas y líneas acá</h1>
        </>
    )
}