
import React from 'react'
import { DataTable, } from 'primereact/datatable';
import { Column } from 'primereact/column';
const TableValidate4 = ({ data = [] }: any) => {
    return (
        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
            <Column field="index" header="STT" align={'center'} />
            <Column field="x0" header="Tỉnh" align={'center'} />
            <Column field="x1" header="Số ca nhiễm mới" align={'center'} />
            <Column field="x2" header="Tổng số ca" align={'center'} />
            <Column field="x3" header="Tỷ lệ ca mắc" align={'center'} />
            <Column field="x4" header="Tỷ lệ ca mắc" align={'center'} />
            <Column field="x5" header="Tỷ lệ tử vong" align={'center'} />
            <Column field="x6" header="Tổng nhân lực y tế" align={'center'} />
            <Column field="x7" header="TP trung ương/tỉnh" align={'center'} />
        </DataTable>
    )
}

export default TableValidate4
