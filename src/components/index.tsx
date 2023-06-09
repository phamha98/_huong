
import React, { useState } from 'react'
import { DataTable, } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Title from './Title';
import { InputNumber } from 'primereact/inputnumber';
export function TableTrongSo({ data = [] }: any) {

    let m: any = {}
    data.forEach((i: any, j: any) => {
        m[`x${j}`] = i
    })
    return (
        <>
            <Title title={`Trong so`} />
            <DataTable value={[m]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="x0" header="x0" />
                <Column field="x1" header="x0" />
                <Column field="x2" header="x0" />
                <Column field="x3" header="x0" />
                <Column field="x4" header="x0" />
                <Column field="x5" header="x0" />
                <Column field="x6" header="x0" />
            </DataTable>
        </>
    )
}

export function TableValidate6({ data = [] }: any) {
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

export function TableValidate6MinMax({ data = [] }: any) {
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
export function TableValidate7({ data = [] }: any) {
    const [more, setMore] = useState(false)

    return (
        <>
            <DataTable value={data.slice(0, !more ? 5 : undefined)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="x0" header="Tỉnh" />
                <Column field="x1" header="Số ca nhiễm mới" />
                <Column field="x2" header="Tổng số ca" />
                <Column field="x3" header="Tỷ lệ ca nhiem" />
                <Column field="x4" header="Tỷ lệ ca mắc" />
                <Column field="x5" header="Tỷ lệ tử vong" />
                <Column field="x6" header="Tổng nhân lực y tế" />
                <Column field="x7" header="TP trung ương/tỉnh" />
                {/* <Column field="x8" header="Di+" />
            <Column field="x9" header="Di-" />
            <Column field="x10" header="Si/Di" />
        <Column field="x11" header="RANK" /> */}
                <Column field="x12" header="Chẩn hoá SI" />
            </DataTable>
            <h5 style={{ color: 'blue' }} onClick={() => setMore(i => !i)}>
                {more ? 'Thu gọn' : 'Xem thêm'}
            </h5>
        </>
    )
}
export function TableValidateAdd({ data = [] }: any) {
    return (
        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
            <Column field="x0" header="Tỉnh" />
            <Column field="x1" header="Số ca nhiễm mới" />
            <Column field="x2" header="Tổng số ca" />
            <Column field="x3" header="Tỷ lệ ca nhiem" />
            <Column field="x4" header="Tỷ lệ ca mắc" />
            <Column field="x5" header="Tỷ lệ tử vong" />
            <Column field="x6" header="Tổng nhân lực y tế" />
            <Column field="x7" header="TP trung ương/tỉnh" />
            <Column field="x8" header="Di+" />
            <Column field="x9" header="Di-" />
            <Column field="x10" header="Si/Di" />
            <Column field="x11" header="RANK" />
            <Column field="x12" header="Chẩn hoá SI" />
        </DataTable>
    )
}
export function TableValidateSub({ data = [] }: any) {
    return (
        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
            <Column field="x0" header="Tỉnh" />
            <Column field="x1" header="Số ca nhiễm mới" />
            <Column field="x2" header="Tổng số ca" />
            <Column field="x3" header="Tỷ lệ ca nhiem" />
            <Column field="x4" header="Tỷ lệ ca mắc" />
            <Column field="x5" header="Tỷ lệ tử vong" />
            <Column field="x6" header="Tổng nhân lực y tế" />
            <Column field="x7" header="TP trung ương/tỉnh" />
            <Column field="x8" header="Di+" />
            <Column field="x9" header="Di-" />
            <Column field="x10" header="Si/Di" />
            <Column field="x11" header="RANK" />
            <Column field="x12" header="Chẩn hoá SI" />
        </DataTable>
    )
}
export const InputNumberAddSub = React.forwardRef(({ style, ...rest }: any, ref) => {
    React.useImperativeHandle(ref, () => ({
        getValue: () => value,
        setValue
    }))
    const [value, setValue] = useState<any>(0.5)
    return (

        <InputNumber
            value={value}
            onValueChange={(e) => setValue(e.value)}
            inputId="minmaxfraction"
            maxFractionDigits={5}
            style={{
                margin: 5,
                width: '90%',
                ...style
            }}
            {...rest}
        />

    )
})
