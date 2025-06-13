import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import { Box } from "@mui/material";
import DriverHeader from "@/components/drivers/driver-header";
import dynamic from "next/dynamic";

export const metadata = { title: `Jornada | Conductores | ${config.site.name}` } satisfies Metadata;

const Map = dynamic(() => import('../../../../components/maps/map'), { ssr: false });

export default function Page(): React.JSX.Element {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
      <DriverHeader workday />
      <Map />
    </Box>
  )
}