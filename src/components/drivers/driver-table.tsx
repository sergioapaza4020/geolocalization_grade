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
    record?: boolean;
    rows?: GeneralUser[] | Driver[];
    rowsPerPage?: number;
}

export default function DriverTable({
    count = 0,
    rows = [],
    page = 0,
    headerTable,
    record,
    rowsPerPage = 0, }: MyTableProps): React.JSX.Element {
    const rowIds = React.useMemo(() => {
        return rows.map((user) => !record ? user.id : user.line);
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
                                    {!record ?
                                        (
                                            <>

                                                <TableCell>
                                                    <Stack>
                                                        <Typography variant="subtitle2">{row.name}</Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            {'assignment' in row && typeof (row as any).assignment === 'object' && (row as any).assignment && 'line' in (row as any).assignment
                                                                ? (row as any).assignment.line
                                                                : ''}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            {'assignment' in row && typeof (row as any).assignment === 'object' && (row as any).assignment && 'period' in (row as any).assignment
                                                                ? (row as any).assignment.period
                                                                : ''}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            {'assignment' in row && typeof (row as any).assignment === 'object' && (row as any).assignment && 'status' in (row as any).assignment
                                                                ? (row as any).assignment.status
                                                                : ''}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <TableCell>
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            {'assignment' in row && typeof (row as any).assignment === 'object' && (row as any).assignment && 'line' in (row as any).assignment
                                                                ? (row as any).assignment.line
                                                                : ''}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            {'assignment' in row && typeof (row as any).assignment === 'object' && (row as any).assignment && 'period' in (row as any).assignment
                                                                ? (row as any).assignment.period
                                                                : ''}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            {'record' in row && typeof (row as any).record === 'object' && (row as any).record && 'hours' in (row as any).record
                                                                ? (row as any).record.hours
                                                                : ''}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            {'record' in row && typeof (row as any).record === 'object' && (row as any).record && 'averageDay' in (row as any).record
                                                                ? (row as any).record.averageDay
                                                                : ''}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                            </>
                                        )}
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