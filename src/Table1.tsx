import React, { useEffect, useState, CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { DataTable, } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Outlet, Link } from "react-router-dom";
const pageLeft = [
    'Số ca nhiễm',
    'Tổng số ca',
    'Tỷ lệ ca nặng',
    'Tổng nhân lực y tế',
    'TP trung ương / tỉnh',
]
const pageRight = [
    'Tỷ lệ ca nhiễm/Số cư dân',
    'Tỷ lệ ca nặng/Tổng ca',
    'Tỷ lệ ca tử vong/Tổng ca',
]
function App() {
    const random = () => Math.floor(Math.random() * 100)
    const [products, setProducts] = useState([
        { a: 1, b: "Hà Nội", c: random(), d: random(), e: random(), f: random(), g: random(), h: random(), i: 'Thành phố' },
        { a: 2, b: "Hà Nan", c: random(), d: random(), e: random(), f: random(), g: random(), h: random(), i: 'Tỉnh' },
        { a: 3, b: "Hà Tây", c: random(), d: random(), e: random(), f: random(), g: random(), h: random(), i: 'Tỉnh' },
        { a: 4, b: "Hà Tình", c: random(), d: random(), e: random(), f: random(), g: random(), h: random(), i: 'Tỉnh' },
        { a: 5, b: "Hà Đông", c: random(), d: random(), e: random(), f: random(), g: random(), h: random(), i: 'Tỉnh' },

    ]);
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);


    return (
        <div className="App" style={{ padding: 10, borderWidth: 20, borderStyle: 'solid', borderRadius: 10 }} >
            <BlockUI style={{ borderColor: 'red' }}>
                <Link to="/table2">go Table2</Link>
                <Button disabled label="PHÂN BỔ NGUỒN LỰC Y TẾ" style={{ width: '100%', borderRadius: 0, backgroundColor: 'blue' }} />
                <h3 style={{ marginTop: 20, marginBottom: 20 }} >
                    Thống kê tình hình dịch bệnh của 63 tình thành trên cả nước hôm nay (10/05/2023)
                </h3>
                <DataTable
                    onSelectionChange={(e) => {
                        console.log('123123', e.value)
                    }}
                    selectionMode="single"
                    value={products} tableStyle={{ minWidth: '50rem' }}>
                    <Column

                        field="a" align={'center'} header="STT"    ></Column>
                    <Column field="b" align={'center'} header="Tỉnh/TP" ></Column>
                    <Column field="c" align={'center'} header="Số ca nhiễm" ></Column>
                    <Column field="d" align={'center'} header="Tồng số ca" ></Column>
                    <Column field="e" align={'center'} header="Tỷ lệ ca nhiễm/Số cư dân" ></Column>
                    <Column field="f" align={'center'} header="Tỷ lệ ca nặng/Tổng ca" ></Column>
                    <Column field="g" align={'center'} header="Tỷ lệ tử vong/Tổng ca" ></Column>
                    <Column field="h" align={'center'} header="Tổng nguồn lực bác sĩ" ></Column>
                    <Column field="i" align={'center'} header="Loại TP/Tỉnh" ></Column>
                </DataTable>
                <table style={{ width: '100%', padding: 10 }}>
                    <tr style={{ textAlign: 'left' }}>
                        <th>
                            <h3>Nhập trọng số cho các tiêu chí </h3>
                        </th>
                    </tr>
                    {/* ////////////// */}
                    <td style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                        <tr style={styleApp.rowItem}>
                            <td style={{ flex: 1 }}>{pageLeft[0]}</td>
                            <td style={{ flex: 2 }}><InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={styleApp.input} /></td>
                        </tr>
                        <tr style={styleApp.rowItem}>
                            <td style={{ flex: 1 }}>{pageLeft[1]}</td>
                            <td style={{ flex: 2 }}><InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={styleApp.input} /></td>
                        </tr>
                        <tr style={styleApp.rowItem}>
                            <td style={{ flex: 1 }}>{pageLeft[2]}</td>
                            <td style={{ flex: 2 }}><InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={styleApp.input} /></td>
                        </tr>
                        <tr style={styleApp.rowItem}>
                            <td style={{ flex: 1 }}>{pageLeft[3]}</td>
                            <td style={{ flex: 2 }}><InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={styleApp.input} /></td>
                        </tr>
                    </td>
                    {/* ////////////// */}
                    <td style={{ flex: 1, backgroundColor: '#fff' }}>
                        <tr style={styleApp.rowItem}>
                            <td style={{ flex: 1 }}>{pageRight[0]}</td>
                            <td style={{ flex: 2 }}><InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={styleApp.input} /></td>
                        </tr>
                        <tr style={styleApp.rowItem}>
                            <td style={{ flex: 1 }}>{pageRight[1]}</td>
                            <td style={{ flex: 2 }}><InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={styleApp.input} /></td>
                        </tr>
                        <tr style={styleApp.rowItem}>
                            <td style={{ flex: 1 }}>{pageRight[2]}</td>
                            <td style={{ flex: 2 }}><InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={styleApp.input} /></td>
                        </tr>
                        {/* <tr style={styleApp.rowItem}>
              <td>{''}</td>
              <td><InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={styleApp.input} /></td>
            </tr> */}
                    </td>
                </table>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30, marginBottom: 50, marginRight: 10 }}>
                    <Button label="Làm mới" style={{ width: 150 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: 10 }}>
                    <h3>Kết quả:<span style={{ color: 'green', marginLeft: 20 }}>Độ tin cậy các trọng số =0 (Hợp lệ)</span></h3>
                    <h3 style={{ marginTop: 0 }}>Bảng xếp hạng các thành phố có nguy cơ dịch bệnh</h3>
                </div>
                <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="a" align={'center'} header="STT"  ></Column>
                    <Column field="b" align={'center'} header="Tỉnh/TP" ></Column>
                    <Column field="c" align={'center'} header="Số ca nhiễm" ></Column>
                    <Column field="d" align={'center'} header="Tồng số ca" ></Column>
                    <Column field="e" align={'center'} header="Tỷ lệ ca nhiễm/Số cư dân" ></Column>
                    <Column field="f" align={'center'} header="Tỷ lệ ca nặng/Tổng ca" ></Column>
                    <Column field="g" align={'center'} header="Tỷ lệ tử vong/Tổng ca" ></Column>
                    <Column field="h" align={'center'} header="Tổng nguồn lực bác sĩ" ></Column>
                    <Column field="i" align={'center'} header="Loại TP/Tỉnh" ></Column>
                    <Column field="i" align={'center'} header="Chuẩn hoá similarity" ></Column>
                </DataTable>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <h3>Nhập ngưỡng quyết định phân bổ</h3>
                    <InputNumber inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} style={{ marginLeft: 30 }} />
                    <Button label="Kết quả" style={{ width: 180, marginLeft: 50 }} />
                </div>
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