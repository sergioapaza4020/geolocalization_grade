'use client';

import { Button, ButtonGroup, Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import DateSelector from "../assignments/date-selector";

interface TableDataHeaderProps {
    workday?: boolean
}

export default function DriverHeader({ workday }: TableDataHeaderProps): React.JSX.Element {
    return (
        <>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CardContent>
                    {!workday ?
                        (
                            <Typography variant="h4">Asignación actual: <span style={{ fontWeight: '400 !important' }}>Línea 02</span></Typography>
                        )
                        :
                        (
                            <Typography variant="h4">Asignación: <span style={{ fontWeight: '400 !important' }}>Línea 06</span></Typography>
                        )
                    }
                </CardContent>
                {!workday ?
                    (
                        <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '3rem' }}>
                            <DateSelector text="Periodo" />
                        </CardContent>
                    )
                    :
                    (
                        <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '3rem' }}>
                            <Typography variant="h6">Estado</Typography>
                            <ButtonGroup variant="outlined" aria-label="Basic button group">
                                <Button>Inicio</Button>
                                <Button>Pausa</Button>
                                <Button>Fin</Button>
                            </ButtonGroup>
                        </CardContent>
                    )
                }
            </Card>
        </>
    )
}