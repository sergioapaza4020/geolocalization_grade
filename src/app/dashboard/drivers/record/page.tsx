import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import DriverTable from "@/components/drivers/driver-table";
import dayjs from "dayjs";
import { Driver } from "@/types/driver";

export const metadata = { title: `Registro | Conductores | ${config.site.name}` } satisfies Metadata;

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
      line: 'Línea 06',
      period: 'Un mes',
      status: 'PENDIENTE',
    },
    record: {
      hours: '180 hrs',
      averageDay: '5 hrs',
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
      line: 'Línea 012',
      period: 'Un mes',
      status: 'CUMPLIDO',
    },
    record: {
      hours: '165 hrs',
      averageDay: '5 hrs',
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

  let assignmentTable: string[] = ['ASIGNACIÓN', 'PERIODO','HORAS TRABAJADAS', 'PROM. HORAS POR DÍA']

  return (
    <DriverTable
      count={paginatedUsers.length}
      page={page}
      headerTable={assignmentTable}
      rows={paginatedUsers}
      record
      rowsPerPage={rowsPerPage}
    />
  )
}