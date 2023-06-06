import React, { useEffect, useState, CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { DataTable, } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Outlet, Link } from "react-router-dom";

function App() {
    const random = () => Math.floor(Math.random() * 100)
    const [products, setProducts] = useState([
        {
            a: 1,
            b: "Tp HCM",
            c: 270,
            d: 610064,
            e: 0.000029,
            f: 0.3278,
            g: 0.0333,
            h: 30078,
            i: 'Thành phố',
            i2: -78,
            j: 30000
        },
        {
            a: 2,
            b: "Sơn La",
            c: 10,
            d: 150838,
            e: 0.000008,
            f: 0.1989,
            g: 0,
            h: 2129,
            i: 'Tỉnh',
            i2: -129,
            j: 2000
        },
    ]);
    const [products2, setProducts2] = useState([
        {
            a: 1,
            b: "Nghệ An",
            c: 50,
            d: 485595,
            e: 0.000015,
            f: 0.2471,
            g: 0.0003,
            h: 6552,
            i: 'Thành phố',
            i2: 448,
            j: 7000
        },
        {
            a: 2,
            b: "Hà Nội",
            c: 420,
            d: 1605587,
            e: 0.000050,
            f: 0.3114,
            g: 0.008,
            h: 17858,
            i: 'Thủ đô',
            i2: 142,
            j: 18000
        },
        {
            a: 3,
            b: "Phú Thọ",
            c: 210,
            d: 321734,
            e: 0.00140,
            f: 0.2487,
            g: 0.0003,
            h: 3387,
            i: 'Tỉnh',
            i2: 613,
            j: 4000
        },

    ]);
    return (
        <div className="App" style={{ padding: 10, borderWidth: 20, borderStyle: 'solid', borderRadius: 10 }} >
            <BlockUI style={{ borderColor: 'red' }}>
                <Link to="/table1">go Table1</Link>
                <Button disabled label="PHÂN BỔ NGUỒN LỰC Y TẾ" style={{ width: '100%', borderRadius: 0, backgroundColor: 'blue' }} />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <h3>Nhập ngưỡng quyết định phân bổ</h3>
                    <InputNumber value={0.5} inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={{ marginLeft: 30 }} />
                    <Button label="Làm mới" style={{ width: 180, marginLeft: 50 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: 10, marginTop: 80 }}>
                    <h3>Kết quả:<span style={{ color: 'green', marginLeft: 10 }}>2 Tỉnh/tp  </span> có thể cung cấp nguồn lực bác sĩ:</h3>
                </div>
                <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="a" align={'center'} header="STT"    ></Column>
                    <Column field="b" align={'center'} header="Tỉnh/TP" ></Column>
                    <Column field="c" align={'center'} header="Số ca nhiễm" ></Column>
                    <Column field="d" align={'center'} header="Tồng số ca" ></Column>
                    <Column field="e" align={'center'} header="Tỷ lệ ca nhiễm/Số cư dân" ></Column>
                    <Column field="f" align={'center'} header="Tỷ lệ ca nặng/Tổng ca" ></Column>
                    <Column field="g" align={'center'} header="Tỷ lệ tử vong/Tổng ca" ></Column>
                    <Column field="h" align={'center'} header="Tổng nguồn lực bác sĩ" ></Column>
                    <Column field="i" align={'center'} header="Loại TP/Tỉnh" ></Column>
                    <Column field="i2" align={'center'} header="Nguồn lực phân bổ" ></Column>
                    <Column field="j" align={'center'} header="Nguồn lực sau phân bổ" ></Column>
                </DataTable>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: 10, marginTop: 80 }}>
                    <h3>Kết quả:<span style={{ color: 'red', marginLeft: 10 }}>2 Tỉnh/tp  </span> có thể cung cấp nguồn lực bác sĩ:</h3>
                </div>
                <DataTable value={products2} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="a" align={'center'} header="STT"  ></Column>
                    <Column field="b" align={'center'} header="Tỉnh/TP" ></Column>
                    <Column field="c" align={'center'} header="Số ca nhiễm" ></Column>
                    <Column field="d" align={'center'} header="Tồng số ca" ></Column>
                    <Column field="e" align={'center'} header="Tỷ lệ ca nhiễm/Số cư dân" ></Column>
                    <Column field="f" align={'center'} header="Tỷ lệ ca nặng/Tổng ca" ></Column>
                    <Column field="g" align={'center'} header="Tỷ lệ tử vong/Tổng ca" ></Column>
                    <Column field="h" align={'center'} header="Tổng nguồn lực bác sĩ" ></Column>
                    <Column field="i" align={'center'} header="Loại TP/Tỉnh" ></Column>
                    <Column field="i2" align={'center'} header="Nguồn lực phân bổ" ></Column>
                    <Column field="j" align={'center'} header="Nguồn lực sau phân bổ" ></Column>
                </DataTable>

            </BlockUI >
        </div >
    );
}

export default App;
const styleApp: Record<string, CSSProperties> = {
    input: {
        margin: 5,
        width: '90%'
    },
    rowItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
}