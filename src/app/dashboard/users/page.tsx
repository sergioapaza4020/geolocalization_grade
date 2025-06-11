import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import TableDataHeader from "@/components/tables/table-data-header";
import MyTable from "../../../components/tables/my-table";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import { GeneralUser } from "@/types/generalUser";

export const metadata = { title: `Usuarios | Dashboard | ${config.site.name}` } satisfies Metadata;

const users = [
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Alcides Antonio',
        ci: '12345678',
        phone: '90832421',
        status: true,
        email: 'alcides.antonio@devias.io',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Alcides Antonio',
        ci: '12345678',
        phone: '90832421',
        status: false,
        email: 'alcides.antonio@devias.io',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Alcides Antonio',
        ci: '12345678',
        phone: '90832421',
        status: true,
        email: 'alcides.antonio@devias.io',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Alcides Antonio',
        ci: '12345678',
        phone: '90832421',
        status: true,
        email: 'alcides.antonio@devias.io',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
] satisfies GeneralUser[];

function applyPagination(rows: GeneralUser[], page: number, rowsPerPage: number): GeneralUser[] {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

export default function Page(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;

    const paginatedUsers = applyPagination(users, page, rowsPerPage);

    const tableHeader: string[] = ['NOMBRE', 'CI', 'TELÉFONO', 'ESTADO', 'CORREO', 'MODIFICAR'];
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            <TableDataHeader />
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