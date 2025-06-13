import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import { CreateDriverForm } from "@/components/drivers/create-driver-form";

export const metadata = { title: `Registrar conductor | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <>
      <CreateDriverForm />
    </>
  )
}