import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import MapHeader from "@/components/maps/map-header";
import dynamic from "next/dynamic";
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Card, CardContent } from "@mui/material";
import BusStopList from "@/components/maps/bus-stop-list";


export const metadata = { title: `Líneas y rutas | Dashboard | ${config.site.name}` } satisfies Metadata;

const Map = dynamic(() => import('../../../components/maps/map'), { ssr: false });

export default function Page(): React.JSX.Element {
    let busStopList: string[] = ['Primera parada', 'Segunda parada', 'Tercera parada', 'Cuarta parada', 'Quinta parada', 'Sexta parada', 'Séptima parada'];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <MapHeader />
            <Card sx={{display: 'grid', gridTemplateColumns: '1fr 1.5fr'}}>
                <CardContent>
                    <BusStopList list={busStopList} />
                </CardContent>
                <CardContent>
                    <Map />
                </CardContent>
            </Card>
        </Box>
    )
}