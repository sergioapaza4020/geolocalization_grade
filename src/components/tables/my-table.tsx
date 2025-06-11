'use client';

import { Avatar, Box, Button, Card, Checkbox, Divider, Stack, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import * as React from "react";

import { useSelection } from '@/hooks/use-selection';
import { GeneralUser } from "@/types/generalUser";
import { Driver } from "@/types/driver";

function noop(): void {
    // do nothing
}

interface MyTableProps {
    count?: number;
    page?: number;
    headerTable: string[];
    rows?: GeneralUser[] | Driver[];
    rowsPerPage?: number;
}

export default function MyTable({
    count = 0,
    rows = [],
    page = 0,
    headerTable,
    rowsPerPage = 0, }: MyTableProps): React.JSX.Element {
    const rowIds = React.useMemo(() => {
        return rows.map((user) => user.id);
    }, [rows]);

    const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

    const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
    const selectedAll = rows.length > 0 && selected?.size === rows.length;

    return (
        <Card>
            <Box sx={{ overflowX: 'auto' }}>
                <Table sx={{ minWidth: '800px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedAll}
                                    indeterminate={selectedSome}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            selectAll();
                                        } else {
                                            deselectAll();
                                        }
                                    }}
                                />
                            </TableCell>
                            {headerTable.map((header) => {
                                return (
                                    <TableCell>{header}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            const isSelected = selected?.has(row.id);

                            return (
                                <TableRow hover key={row.id} selected={isSelected}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isSelected}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    selectOne(row.id);
                                                } else {
                                                    deselectOne(row.id);
                                                }
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                                            <Avatar src={row.avatar} />
                                            <Typography variant="subtitle2">{row.name}</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>{row.ci}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    {row.status !== undefined ?
                                        <TableCell>
                                            {row.status ? (
                                                <Typography>Activo</Typography>
                                            ) : (
                                                <Typography>Inactivo</Typography>
                                            )}
                                        </TableCell>
                                        : null
                                    }

                                    <TableCell>{row.email}</TableCell>
                                    {row.carDescription !== undefined ?
                                        <TableCell>{String(row.carDescription)}</TableCell>
                                        : null
                                    }
                                    {row.carId !== undefined ?
                                        <TableCell>{String(row.carId)}</TableCell>
                                        : null
                                    }
                                    <TableCell>
                                        <Button variant="text">Editar</Button>
                                        <Button variant="text">Eliminar</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
            <Divider />
            <TablePagination
                component="div"
                count={count}
                onPageChange={noop}
                onRowsPerPageChange={noop}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    )
}