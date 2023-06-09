
import React, { useState } from 'react'
import { DataTable, } from 'primereact/datatable';
import { Column } from 'primereact/column';
const TableValidate4 = ({ data = [] }: any) => {
    const [more, setMore] = useState(false)
    return (
        <>

            <DataTable value={data.slice(0, !more ? 5 : undefined)} tableStyle={{ minWidth: '50rem' }}>
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
            <h5 style={{ color: 'blue' }} onClick={() => setMore(i => !i)}>
                {more ? 'Thu gọn' : 'Xem thêm'}
            </h5>
        </>
    )
}

export default TableValidate4
