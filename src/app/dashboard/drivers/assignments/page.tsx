import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import { Box } from "@mui/material";
import DriverHeader from "@/components/drivers/driver-header";
import DriverTable from "@/components/drivers/driver-table";
import { Driver } from "@/types/driver";
import dayjs from "dayjs";

export const metadata = { title: `Asignaciones | Conductores | ${config.site.name}` } satisfies Metadata;

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
    assignment: {
      line: '06',
      period: '01/02/25 - 01/03/25',
      status: 'PENDIENTE',
    },
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
    assignment: {
      line: '012',
      period: '01/01/25 - 01/02/25',
      status: 'CUMPLIDO',
    },
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

  let assignmentTable: string[] = ['CONDUCTOR', 'LÍNEA', 'PERIODO', 'ESTADO']

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <DriverHeader />
      <DriverTable
        count={paginatedUsers.length}
        page={page}
        headerTable={assignmentTable}
        rows={paginatedUsers}
        rowsPerPage={rowsPerPage}
      />
    </Box>
  )
}