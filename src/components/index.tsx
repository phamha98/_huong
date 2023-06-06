
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
            <Column field="x8" header="x8" />
            <Column field="x9" header="x9" />
            <Column field="x10" header="x10" />
            <Column field="x11" header="x11" />
        </DataTable>
    )
}
export function TableValidateAdd({ data = [] }: any) {
    return (
        <>
            <Title title={`Cần phân bổ`} />
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column field="x0" header="x0" />
                <Column field="x1" header="x1" />
                <Column field="x2" header="x2" />
                <Column field="x3" header="x3" />
                <Column field="x4" header="x4" />
                <Column field="x5" header="x5" />
                <Column field="x6" header="x6" />
                <Column field="x7" header="x7" />
                <Column field="x8" header="x8" />
                <Column field="x9" header="x9" />
                <Column field="x10" header="x10" />
                <Column field="x11" header="x11" />
                <Column field="x12" header="Chuan hoa si" />
            </DataTable>
        </>
    )
}
export function TableValidateSub({ data = [] }: any) {
    return (
        <>
            <Title title={`Bị phân bổ`} />
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column field="x0" header="x0" />
                <Column field="x1" header="x1" />
                <Column field="x2" header="x2" />
                <Column field="x3" header="x3" />
                <Column field="x4" header="x4" />
                <Column field="x5" header="x5" />
                <Column field="x6" header="x6" />
                <Column field="x7" header="x7" />
                <Column field="x8" header="x8" />
                <Column field="x9" header="x9" />
                <Column field="x10" header="x10" />
                <Column field="x11" header="x11" />
                <Column field="x12" header="Chuan hoa si" />
            </DataTable>
        </>
    )
}
export const InputNumberAddSub = React.forwardRef(({ }: any, ref) => {
    React.useImperativeHandle(ref, () => ({
        getValue: () => value
    }))
    const [value, setValue] = useState<any>(0.5)
    return (
        <>
            <Title title={`nhap nguong phân bổ`} />
            <InputNumber
                value={value}
                onValueChange={(e) => setValue(e.value)}
                inputId="minmaxfraction"
                maxFractionDigits={5}
                style={{
                    margin: 5,
                    width: '90%'
                }}
            />
        </>
    )
})
