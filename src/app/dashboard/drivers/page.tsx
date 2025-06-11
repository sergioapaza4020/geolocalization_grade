import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import { Box } from "@mui/material";
import TableDataHeader from "@/components/tables/table-data-header";
import MyTable from "@/components/tables/my-table";
import dayjs from "dayjs";
import { Driver } from "@/types/driver";

export const metadata = { title: `Usuarios | Dashboard | ${config.site.name}` } satisfies Metadata;

const drivers = [
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Alcides Antonio',
        ci: '12345678',
        phone: '90832421',
        email: 'alcides.antonio@devias.io',
        carDescription: 'Microbus de servicio colectivo',
        carId: '29THD03',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Alcides Antonio',
        ci: '12345678',
        phone: '90832421',
        email: 'alcides.antonio@devias.io',
        carDescription: 'Microbus de servicio colectivo',
        carId: '29THD03',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Alcides Antonio',
        ci: '12345678',
        phone: '90832421',
        email: 'alcides.antonio@devias.io',
        carDescription: 'Microbus de servicio colectivo',
        carId: '29THD03',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Alcides Antonio',
        ci: '12345678',
        phone: '90832421',
        email: 'alcides.antonio@devias.io',
        carDescription: 'Microbus de servicio colectivo',
        carId: '29THD03',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
] satisfies Driver[];

function applyPagination(rows: Driver[], page: number, rowsPerPage: number): Driver[] {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

export default function Page(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;

    const paginatedUsers = applyPagination(drivers, page, rowsPerPage);

    const tableHeader: string[] = ['NOMBRE', 'CI', 'TELÉFONO', 'CORREO', 'DECRIPCIÓN VEHÍCULO', 'N MATRÍCULA', 'MODIFICAR'];
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            <TableDataHeader isDriver />
            <MyTable
                count={paginatedUsers.length}
                page={page}
                headerTable={tableHeader}
                rows={paginatedUsers}
                rowsPerPage={rowsPerPage}
            />
        </Box>
    )
}