import { InputNumber } from 'primereact/inputnumber';
import React, { useEffect, useState, CSSProperties } from 'react';
import { StringApp } from '../assets';
import Title from './Title';


const TableInput = React.forwardRef(({ }: any, ref) => {
    React.useImperativeHandle(ref, () => ({
        getValue: () => {
            return {
                so_ca_nhiem,
                tong_so_ca,
                ti_le_ca_nhiem,
                ti_le_ca_nang,
                ti_le_tu_vong,
                tong_nguon_luc,
                ti_le_tinh,
            }
        }
    }))
    const [so_ca_nhiem, set_so_ca_nhiem] = useState<any>(0.2)
    const [tong_so_ca, set_tong_so_ca] = useState<any>(0.05)
    const [ti_le_ca_nhiem, set_ti_le_ca_nhiem] = useState<any>(0.15)
    const [ti_le_ca_nang, set_ti_le_ca_nang] = useState<any>(0.15)
    const [ti_le_tu_vong, set_ti_le_tu_vong] = useState<any>(0.05)
    const [tong_nguon_luc, set_tong_nguon_luc] = useState<any>(0.25)
    const [ti_le_tinh, set_ti_le_tinh] = useState<any>(0.15)
    return (
        <table style={{ width: '100%', padding: 10 }}>
            <tr style={{ textAlign: 'left' }}>
                <Title title="Nhập trọng số cho các tiêu chí " />
            </tr>
            <td style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                <tr style={styleApp.rowItem}>
                    <td style={{ flex: 1 }}>{StringApp.so_ca_nhiem}</td>
                    <td style={{ flex: 2 }}><InputNumber value={so_ca_nhiem} onValueChange={(e) => set_so_ca_nhiem(e.value)} inputId="minmaxfraction" maxFractionDigits={5} style={styleApp.input} /></td>
                </tr>
                <tr style={styleApp.rowItem}>
                    <td style={{ flex: 1 }}>{StringApp.tong_so_ca}</td>
                    <td style={{ flex: 2 }}><InputNumber value={tong_so_ca} onValueChange={(e) => set_tong_so_ca(e.value)} inputId="minmaxfraction" maxFractionDigits={5} style={styleApp.input} /></td>
                </tr>
                <tr style={styleApp.rowItem}>
                    <td style={{ flex: 1 }}>{StringApp.ti_le_ca_nhiem}</td>
                    <td style={{ flex: 2 }}><InputNumber value={ti_le_ca_nhiem} onValueChange={(e) => set_ti_le_ca_nhiem(e.value)} inputId="minmaxfraction" maxFractionDigits={5} style={styleApp.input} /></td>
                </tr>
                <tr style={styleApp.rowItem}>
                    <td style={{ flex: 1 }}>{StringApp.ti_le_ca_nang}</td>
                    <td style={{ flex: 2 }}><InputNumber value={ti_le_ca_nang} onValueChange={(e) => set_ti_le_ca_nang(e.value)} inputId="minmaxfraction" maxFractionDigits={5} style={styleApp.input} /></td>
                </tr>
            </td>
            <td style={{ flex: 1, backgroundColor: '#fff' }}>
                <tr style={styleApp.rowItem}>
                    <td style={{ flex: 1 }}>{StringApp.ti_le_tu_vong}</td>
                    <td style={{ flex: 2 }}><InputNumber value={ti_le_tu_vong} onValueChange={(e) => set_ti_le_tu_vong(e.value)} inputId="minmaxfraction" maxFractionDigits={5} style={styleApp.input} /></td>
                </tr>
                <tr style={styleApp.rowItem}>
                    <td style={{ flex: 1 }}>{StringApp.tong_nguon_luc}</td>
                    <td style={{ flex: 2 }}><InputNumber value={tong_nguon_luc} onValueChange={(e) => set_tong_nguon_luc(e.value)} inputId="minmaxfraction" maxFractionDigits={5} style={styleApp.input} /></td>
                </tr>
                <tr style={styleApp.rowItem}>
                    <td style={{ flex: 1 }}>{StringApp.ti_le_tinh}</td>
                    <td style={{ flex: 2 }}><InputNumber value={ti_le_tinh} onValueChange={(e) => set_ti_le_tinh(e.value)} inputId="minmaxfraction" maxFractionDigits={5} style={styleApp.input} /></td>
                </tr>
            </td>
        </table>
    )
}
)
export default TableInput
const styleApp: Record<string, CSSProperties> = {
    input: {
        margin: 5,
        width: '90%'
    },
    rowItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
}