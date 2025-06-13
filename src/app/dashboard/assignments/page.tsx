import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import AssignmentHeader from "@/components/assignments/assignment-header";
import AssignmentDate from "@/components/assignments/assignment-date";
import AssignmentTable from "@/components/assignments/assignment-table";
import { Driver } from "@/types/driver";
import dayjs from "dayjs";

export const metadata = { title: `Asignaciones | Dashboard | ${config.site.name}` } satisfies Metadata;

const drivers = [
    {
        id: 'USR-010',
        avatar: '/assets/avatar-10.png',
        name: 'Conductor 1',
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
        name: 'Conductor 2',
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
        name: 'Conductor 3',
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
        name: 'Conductor 4',
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

    let lineTable: string[] = ['CONDUCTOR', 'LÍNEA 010', 'LÍNEA 02', 'LÍNEA 06', 'LÍNEA 0']
    return (
        <div>
            <AssignmentHeader />
            <AssignmentDate />
            <AssignmentTable
                count={paginatedUsers.length}
                page={page}
                headerTable={lineTable}
                rows={paginatedUsers}
                rowsPerPage={rowsPerPage}
            />
        </div>
    )
}