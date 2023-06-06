
import React from 'react'
import { DataTable, } from 'primereact/datatable';
import { Column } from 'primereact/column';
const TableValidate3 = ({ data = [] }: any) => {
    return (
        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
            <Column field="so_ca_nhiem" header="so_ca_nhiem" />
            <Column field="tong_so_ca" header="tong_so_ca" />
            <Column field="ti_le_ca_nhiem" header="ti_le_ca_nhiem" />
            <Column field="ti_le_ca_nang" header="ti_le_ca_nang" />
            <Column field="ti_le_tu_vong" header="ti_le_tu_vong" />
            <Column field="tong_nguon_luc" header="tong_nguon_luc" />
            <Column field="ti_le_tinh" header="ti_le_tinh" />
            <Column field="tong_trong_so" header="tong_trong_so" />
            <Column field="trong_so" header="trong_so" />
            <Column field="vector" header="vector" />
        </DataTable>
    )
}

export default TableValidate3
