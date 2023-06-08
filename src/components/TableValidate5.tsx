
import React from 'react'
import { DataTable, } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Title from './Title';
export default function TableValidate5({ data = [] }: any) {
    // if (data.length == 0) return null
    return (
        <>

            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column field="x0" header="Tỉnh" />
                <Column field="x1" header="Số ca nhiễm mới" />
                <Column field="x2" header="Tổng số ca" />
                <Column field="x3" header="Tỷ lệ ca nhiem" />
                <Column field="x4" header="Tỷ lệ ca mắc" />
                <Column field="x5" header="Tỷ lệ tử vong" />
                <Column field="x6" header="Tổng nhân lực y tế" />
                <Column field="x7" header="TP trung ương/tỉnh" />
            </DataTable>
        </>
    )
}

