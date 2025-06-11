import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import { CreateProfileForm } from "@/components/profile/create-profile-form";
export const metadata = { title: `Perfil | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <>
      <CreateProfileForm />
    </>
  )
}