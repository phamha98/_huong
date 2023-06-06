
import React from 'react'
import { DataTable, } from 'primereact/datatable';
import { Column } from 'primereact/column';
const TableValidate5 = ({ data = [] }: any) => {
    return (
        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
            <Column field="x0" header="x0" />
            <Column field="x1" header="x1" />
            <Column field="x2" header="x2" />
            <Column field="x3" header="x3" />
            <Column field="x4" header="x4" />
            <Column field="x5" header="x5" />
            <Column field="x6" header="x6" />
            <Column field="x7" header="x7" />
        </DataTable>
    )
}

export default TableValidate5
