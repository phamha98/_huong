import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { BlockUI } from 'primereact/blockui'
import { Button } from 'primereact/button'
import TableInput from './components/TableInput'
import TableValidate1 from './components/TableValidate1'
import Title from './components/Title'
import TableValidate2 from './components/TableValidate2'
import TableValidate3 from './components/TableValidate3'
import TableValidate4 from './components/TableValidate4'
import TableValidate5 from './components/TableValidate5'
import { theCity } from './theCity'
import { isArray } from 'underscore'
import { TableValidate6, TableTrongSo, TableValidate6MinMax, TableValidate7, TableValidateAdd, TableValidateSub, InputNumberAddSub } from './components'
import moment from 'moment'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
// import XLSX_Style from 'xlsx-style';

function getRI(n: number) {
    if (n < 1 || n > 15) return
    const Table = [0.00, 0.00, 0.58, 0.90, 1.12, 1.24, 1.32, 1.41, 1.45, 1.49, 1.51, 1.48, 1.56, 1.57, 1.58]
    let ob: any = {}
    Table.forEach((ri, index) => {
        ob[index + 1] = ri
    })
    return ob[n]

}
function sumArray(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const convertAnToField = (data: any[]) => {
    let res: any[] = []
    let newData = [...data]
    newData.forEach((arr, row) => {
        let rn = {
            so_ca_nhiem: arr[0],
            tong_so_ca: arr[1],
            ti_le_ca_nhiem: arr[2],
            ti_le_ca_nang: arr[3],
            ti_le_tu_vong: arr[4],
            tong_nguon_luc: arr[5],
            ti_le_tinh: arr[6],
        }
        res.push(rn)
    })
    return res
}
const convertAnToField2 = (data: any[]) => {
    let res: any[] = []
    let newData = [...data]
    newData.forEach((arr, row) => {
        let rn = {
            so_ca_nhiem: arr[0],
            tong_so_ca: arr[1],
            ti_le_ca_nhiem: arr[2],
            ti_le_ca_nang: arr[3],
            ti_le_tu_vong: arr[4],
            tong_nguon_luc: arr[5],
            ti_le_tinh: arr[6],
            trong_so: (sumArray(arr) / arr.length),
        }
        res.push(rn)
    })
    return res
}
const convertAnToField3 = (data: any[]) => {
    let res: any[] = []
    let newData = [...data]
    newData.forEach((arr, row) => {
        let rn = {
            so_ca_nhiem: arr[0],
            tong_so_ca: arr[1],
            ti_le_ca_nhiem: arr[2],
            ti_le_ca_nang: arr[3],
            ti_le_tu_vong: arr[4],
            tong_nguon_luc: arr[5],
            ti_le_tinh: arr[6],
            tong_trong_so: arr[7],
            trong_so: arr[8],
            vector: arr[9],
        }
        res.push(rn)
    })
    return res
}
const LamTron = (value: number) => {
    if (value > 9 || value < (1 / 9)) alert(`value > 9 || value < (1 / 9)`)
    let arr = [1 / 9, 1 / 8, 1 / 7, 1 / 6, 1 / 5, 1 / 4, 1 / 3, 1 / 2, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    let cx = Math.abs(9 - value)
    let n = value
    arr.forEach(i => {
        let ci = Math.abs(i - value)
        if (ci < cx || ci == cx) { cx = ci; n = i }
    })
    return n
}
const numberRound = (v: number,n=6) => parseFloat(v.toFixed(n))

export default function App() {
    const _arr1 = useRef<any>([])
    const numberPhanBo = useRef<any>(null)
    const numberPhanBoPage3 = useRef<any>(null)
    const inputRef = useRef<any>()
    const inputRefPage2 = useRef<any>()
    const [data1, setData1] = useState<any>([])
    const [data2, setData2] = useState<any>([])
    const [data3, setData3] = useState<any>([])
    const [alertRI, setAlertRI] = useState('')
    const [result, setResult] = useState<any>(null)
    const [data4, setData4] = useState(theCity.map(i => ({ ...i, x1: 0, x2: 0, x3: 0, x4: 0, x5: 0, })))
    const [data5, setData5] = useState<any[]>([])
    const [data6, setData6] = useState<any[]>([])
    const [data7, setData7] = useState<any[]>([])
    const [data8, setData8] = useState<any[]>([])
    const [dataAdd, setDataAdd] = useState<any[]>([])
    const [dataSub, setDataSub] = useState<any[]>([])
    const [SI, setSI] = useState<any>(0)

    const [data6_minMax, setData6_minMax] = useState<any[]>([])
    const [dataTrongSo, setDataTrongSo] = useState<any[]>([])
    const dataTrongSoRef = useRef<any[]>([])

    const _funcClear = () => {
        setData1([])
        setData2([])
        setData3([])
        setAlertRI('')
        setResult([])
        setData5([])
        setData6([])
        setData7([])
        setData8([])
        setDataAdd([])
        setDataSub([])
        setData6_minMax([])
        // setDataTrongSo([])
        // setData4(theCity.map(i => ({ ...i, x1: 0, x2: 0, x3: 0, x4: 0, x5: 0, })))
    }
    const [dev, setDev] = useState(false)
    const [navigation, setNavigation] = useState(0)
    const _funcKiemTraTrongSo = async (e?: any) => {

        let data = inputRef.current?.getValue() ?? e

        console.log('data', data)
        const {
            so_ca_nhiem,
            tong_so_ca,
            ti_le_ca_nhiem,
            ti_le_ca_nang,
            ti_le_tu_vong,
            tong_nguon_luc,
            ti_le_tinh
        } = data
        //khong duoc <=0
        let sum_tile =
            so_ca_nhiem +
            tong_so_ca +
            ti_le_ca_nhiem +
            ti_le_ca_nang +
            ti_le_tu_vong +
            tong_nguon_luc +
            ti_le_tinh
        if (sum_tile != 1) return alert('Bạn phải nhập tổng các trọng số =1')
        setTimeout(() => {

            inputRefPage2.current?.setValue(data)
        }, 300);
        let x = [
            so_ca_nhiem,
            tong_so_ca,
            ti_le_ca_nhiem,
            ti_le_ca_nang,
            ti_le_tu_vong,
            tong_nguon_luc,
            ti_le_tinh
        ]
        console.log('x', x)
        await setDataTrongSo(x)
        dataTrongSoRef.current = x
        // let x = [0.2, 0.05, 0.15, 0.15, 0.05, 0.25, 0.15]
        var n = 7
        var arr = new Array(n)
        for (var i = 0; i < n; i++) {
            arr[i] = new Array(n)
        }
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                arr[i][j] = parseFloat((x[i] / x[j]).toFixed(2))
            }
        }
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                arr[i][j] = numberRound(LamTron(arr[i][j]))
            }
        }

        let arr1 = JSON.parse(JSON.stringify(arr))
        setData1(convertAnToField(arr1))

        let sum = new Array(n)
        for (var i = 0; i < n; i++) {
            sum[i] = 0
        }

        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                sum[j] = sum[j] + arr[i][j]
                //   sum[j]=sum[j]
                //lam tron 6 chu so
            }

        }

        console.log('sum', sum)

        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                arr[i][j] = numberRound((arr[i][j] / sum[j]))
            }
        }
        let trong_so = new Array(n)
        for (var i = 0; i < n; i++) {
            trong_so[i] = 0
        }
        for (var i = 0; i < n; i++) {
            let sum = 0
            for (var j = 0; j < n; j++) {
                sum = sum + arr[i][j]
            }
            trong_so[i] = numberRound(sum / n)
        }
        console.log('trong_so', trong_so)
        // console.log('arr1', arr1)
        // console.log('trong_so', trong_so)
        let arr2 = [...arr]
        setData2(convertAnToField2(arr2))






        let arr3 = new Array(7)
        for (var i = 0; i < n; i++) {
            arr3[i] = new Array(10)
        }
        // console.log('1111')
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < 10; j++) {
                if (j <= 7) {
                    arr3[i][j] = numberRound((arr1[i][j] * trong_so[j]))
                }
                let ss = 0
                for (let k = 0; k < n; k++) {
                    ss = ss + arr3[i][k]
                }
                arr3[i][7] = numberRound(ss)
                arr3[i][8] = trong_so[i]
                arr3[i][9] = numberRound(arr3[i][7] / arr3[i][8])
            }
        }
        // 
        // console.log('arr3', arr3)
        setData3(convertAnToField3(arr3))

        let sum_lmax = 0
        for (var i = 0; i < n; i++) {
            sum_lmax = sum_lmax + arr3[i][9]
        }
        let lmax = sum_lmax / n
        let CI = (lmax - n) / (n - 1)
        let RI = getRI(n)
        let CR = numberRound(CI / RI)
        if (CR < 0.1) {
            setAlertRI(`Độ tin cậy các trọng số =${CR} (Hợp lệ)`)
            setResult({
                CR, lmax, CI, RI,
            })


            _funcXepHangTP()

        }
        else setAlertRI(`Độ tin cậy các trọng số =${CR} (Không hợp lệ)`)
        setNavigation(1)
    }
    console.log('dataTrongSo', dataTrongSo)

    const _funcXepHangTP = async () => {
        let result: any = { x0: "Tổng", x1: 0, x2: 0, x3: 0, x4: 0, x5: 0, x6: 0, x7: 0, }
        data4.forEach(item => {
            result.x1 = result.x1 + Math.pow(item.x1, 2)
            result.x2 = result.x2 + Math.pow(item.x2, 2)
            result.x3 = result.x3 + Math.pow(item.x3, 2)
            if (item.x4 != 0) {
                // console.log('x4444444', item.x4)
                result.x4 = result.x4 + Math.pow(item.x4, 2)

            }
            result.x5 = result.x5 + Math.pow(item.x5, 2)
            result.x6 = result.x6 + Math.pow(item.x6, 2)
            result.x7 = result.x7 + Math.pow(item.x7, 2)
        })
        let resultSqrt: any = {
            x0: "Tổng",
            x1: numberRound(Math.sqrt(result.x1)),
            x2: numberRound(Math.sqrt(result.x2)),
            x3: numberRound(Math.sqrt(result.x3)),
            x4: numberRound(Math.sqrt(result.x4)),
            x5: numberRound(Math.sqrt(result.x5)),
            x6: numberRound(Math.sqrt(result.x6)),
            x7: numberRound(Math.sqrt(result.x7)),
        }
        // console.log('resultSqrt', resultSqrt)

        // setData4([...data4, resultSqrt])
        let _data5: any[] = []
        data4.forEach(item => _data5.push({
            x0: item.x0,
            x1: numberRound(item.x1 / resultSqrt.x1),
            x2: numberRound(item.x2 / resultSqrt.x2),
            x3: numberRound(item.x3 / resultSqrt.x3),
            x4: resultSqrt.x4 == 0 ? 0 : numberRound(item.x4 / resultSqrt.x4),
            x5: numberRound(item.x5 / resultSqrt.x5),
            x6: numberRound(item.x6 / resultSqrt.x6),
            x7: numberRound(item.x7 / resultSqrt.x7),
        }))
        console.log('_data5_data5', _data5)
        console.log('dataTrongSoRef.current', dataTrongSoRef.current)
        setData5(_data5)
        let _data6: any[] = []
        _data5.forEach(item => _data6.push({
            x0: item.x0,
            x1: numberRound(item.x1 * dataTrongSoRef.current[(1 - 1)]),
            x2: numberRound(item.x2 * dataTrongSoRef.current[(2 - 1)]),
            x3: numberRound(item.x3 * dataTrongSoRef.current[(3 - 1)]),
            x4: numberRound(item.x4 * dataTrongSoRef.current[(4 - 1)]),
            x5: numberRound(item.x5 * dataTrongSoRef.current[(5 - 1)]),
            x6: numberRound(item.x6 * dataTrongSoRef.current[(6 - 1)]),
            x7: numberRound(item.x7 * dataTrongSoRef.current[(7 - 1)]),
        }))
        setData6(_data6)


        let min: any = { ..._data6[0], x0: 'min' }
        let max: any = { ..._data6[0], x0: 'max' }
        _data6.forEach(item => {
            if (item.x1 < min.x1) min.x1 = item.x1
            if (item.x2 < min.x2) min.x2 = item.x2
            if (item.x3 < min.x3) min.x3 = item.x3
            if (item.x4 < min.x4) min.x4 = item.x4
            if (item.x5 < min.x5) min.x5 = item.x5
            if (item.x6 < min.x6) min.x6 = item.x6
            if (item.x7 < min.x7) min.x7 = item.x7
            //
            if (item.x1 > max.x1) max.x1 = item.x1
            if (item.x2 > max.x2) max.x2 = item.x2
            if (item.x3 > max.x3) max.x3 = item.x3
            if (item.x4 > max.x4) max.x4 = item.x4
            if (item.x5 > max.x5) max.x5 = item.x5
            if (item.x6 > max.x6) max.x6 = item.x6
            if (item.x7 > max.x7) max.x7 = item.x7
        })
        Object.entries(min).forEach(i => {
            //5
            if (min.x6 < max.x6) {
                let temp_min = min.x6
                min.x6 = max.x6
                max.x6 = temp_min
            }
        })
        setData6_minMax([min, max])
        let _data7: any[] = []
        console.log('_data6', _data6)
        console.log('min', min)
        console.log('max', max)
        _data6.forEach(item => {
            let ob: any = { ...item, x8: 0, x9: 0, x10: 0 }
            for (var i = 1; i <= 7; i++) {

                ob.x8 = ob.x8 + Math.pow((item[`x${i}`] - min[`x${i}`]), 2)
                ob.x9 = ob.x9 + Math.pow((item[`x${i}`] - max[`x${i}`]), 2)
            }
            ob.x8 = numberRound(Math.sqrt(ob.x8))
            ob.x9 = numberRound(Math.sqrt(ob.x9))
            ob.x10 = numberRound(ob.x9 / (ob.x8 + ob.x9))
            _data7.push(ob)
        })
        //console.log('na2==>>data7', _data7)
        _data7.sort((a, b) => b.x10 - a.x10)
        //console.log('na2==>>data7', _data7)
        //console.log('na2==>>data7=====', data7)
        let si = 0
        _data7.forEach(i => {
            si = si + i.x10
        })
        await setData7(_data7.map((i, j) => ({ ...i, x11: _data7.length - j, x12: numberRound(i.x10 / si) })))
        let _data8:any=[]
        _data7.forEach(i=>{
            let old=data4.find(k=>k.x0==i.x0)??{x0:'nodata'}
            _data8.push({...old,x8:i.x10})
        })
        await setData8(_data8)

        setSI(si)

        ////
    }
    console.log('||||||data7', data7)
    const _funcChiaPhanBo = (e?: any) => {
        setNavigation(2)
        let nguong = numberPhanBo.current?.getValue() ?? e
        setTimeout(() => {
            numberPhanBoPage3.current?.setValue(nguong)
        }, 300);

        console.log('nguong', nguong)
        console.log('data7', data7)
        //
        let _dataAdd:any=[]
        data7.filter(({ x10 }) => nguong < x10).forEach(i=>{
            let old:any=data4.find(k=>k.x0==i.x0)??{x0:'nodata'}
            _dataAdd.push({...old,x9:numberRound(i.x10*old.x6,0),x10:numberRound(old.x6+i.x10*old.x6,0)})
        })
        setDataAdd(_dataAdd)
        //
        let _dataSub:any=[]
        data7.filter(({ x10 }) => nguong > x10).forEach(i=>{
            let old:any=data4.find(k=>k.x0==i.x0)??{x0:'nodata'}
            _dataSub.push({...old,x9:numberRound(-i.x10*old.x6,0),x10:numberRound(old.x6-i.x10*old.x6,0)})
        })
        setDataSub(_dataSub)
     //
    }
    const _funcChiaPhanBoPage2 = () => {
        let nguong = numberPhanBoPage3.current?.getValue()
        _funcChiaPhanBo(nguong)
    }
    useEffect(() => {
        const getData = async () => {

            let dataCovid = []
            fetch("https://covid19.vnanet.vn", {
                // method: 'GET',
                // redirect: 'follow',
                // headers: {
                //     'Access-Control-Allow-Origin': '*',
                //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                //     "Access-Control-Allow-Credentials": "true"
                // }
                mode: 'cors'
            })
                .then(response => response.text())
                .then(html => {
                    // console.log('html', html);
                    console.log('html.length', html.length);
                    const pattern = /var dataVietnam = (\[.*?\]);/gs;
                    const matches = pattern.exec(html);
                    if (matches && matches.length > 1) {
                        const dataVietnamJson = matches[1];
                        // Parse the dataVietnam variable as JSON
                        dataCovid = JSON.parse(dataVietnamJson);
                        if (isArray(dataCovid)) {
                            let obCovid: any = {}
                            dataCovid.forEach(i => {
                                obCovid[i?.city] = i
                            })
                            console.log('dataCovid', dataCovid);
                            console.log('obCovid', obCovid);
                            /**
                             * 
                             * city
                             * dangDieuTri
                             * homNay
                             * khoi
                             * soCaNhiem
                             * tiem
                             * tuVong
                             */
                            let _new_data4 = data4.map(item => {
                                let city = obCovid[item?.x0] ?? {}
                                return {
                                    ...item,
                                    x1: city?.homNay,
                                    x2: city?.soCaNhiem,
                                    x3: numberRound(city?.soCaNhiem / item?.x9),
                                    x4: numberRound(city?.dangDieuTri / city?.soCaNhiem),
                                    x5: numberRound(city?.tuVong / city?.soCaNhiem),
                                }
                            })
                            setData4(_new_data4)
                        }
                    } else {
                        console.log('dataVietnam not found.');
                    }
                })
                .catch(error => console.log('error=>>>>>>', error));
        }
        getData()
    }, [])
    const _funcGoBack = () => {
        switch (navigation) {
            case 0:

                break;
            case 1:
                let data = inputRefPage2.current?.getValue()
                setTimeout(() => {
                    inputRef.current?.setValue(data)
                }, 300);
                _funcClear()
                setNavigation(0)
                break;
            case 2:
                setNavigation(1)
                let nguong = numberPhanBoPage3.current?.getValue()
                setTimeout(() => {
                    numberPhanBo.current?.setValue(nguong)
                }, 300);
                break;

            default:
                break;
        }
    }
    const _funcKiemTraTrongSoPage2 = () => {
        let data = inputRefPage2.current?.getValue()
        _funcKiemTraTrongSo(data)
    }
    const _funcExport = async (arr: any[], fileName: string) => {
        let csvData = arr.map(i => ({
            "Tỉnh": i.x0,
            "Số ca nhiễm mới": i.x1,
            "Tổng số ca": i.x2,
            "Tỷ lệ ca nhiem": i.x3,
            "Tỷ lệ ca mắc": i.x4,
            "Tỷ lệ tử vong": i.x5,
            "Tổng nhân lực y tế": i.x6,
            "TP trung ương/tỉnh": i.x7,
            "Nguồn lực phân bổ": i.x9,
            "Nguồn lực sau phân bổ": i.x10,
            "Tính tương đồng": i.x8,
        }))
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    /***** */
    // const handleExport = () => {
    //     // Create a new workbook
    //     const workbook = XLSX_Style.utils.book_new();

    //     // Create a new worksheet
    //     const worksheet = XLSX_Style.utils.aoa_to_sheet([
    //         ['Name', 'Age', 'Country'],
    //         ['John Doe', 25, 'USA'],
    //         ['Jane Smith', 30, 'Canada'],
    //         ['Bob Johnson', 35, 'Australia']
    //     ]);

    //     // Apply custom styles to the cells
    //     const styles = {
    //         header: {
    //             font: { bold: true },
    //             fill: { fgColor: { rgb: 'FFFF0000' } } // Red background color
    //         },
    //         cell: {
    //             fill: { fgColor: { rgb: 'FF00FF00' } } // Green background color
    //         }
    //     };

    //     // Apply styles to specific cells
    //     XLSX_Style.utils.sheet_add_aoa(worksheet, [
    //         ['Name', 'Age', 'Country'],
    //         ['John Doe', { t: 'n', v: 25, s: styles.cell }, 'USA'],
    //         ['Jane Smith', { t: 'n', v: 30, s: styles.cell }, 'Canada'],
    //         ['Bob Johnson', { t: 'n', v: 35, s: styles.cell }, 'Australia']
    //     ]);

    //     // Apply styles to header row
    //     XLSX_Style.utils.sheet_set_range_style(worksheet, 'A1:C1', styles.header);

    //     // Add the worksheet to the workbook
    //     XLSX_Style.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    //     // Save the workbook to a file
    //     XLSX_Style.writeFile(workbook, 'output.xlsx');
    // };
    return (
        <div
            className='App'
            style={{
                padding: 10,
                // borderWidth: 20,
                borderStyle: 'solid',
                borderRadius: 10
            }}
        >
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1100,
                width: `100%`,
                display: 'flex',
                height: 50,
            }}>
                {navigation != 0 && <Button onClick={_funcGoBack} label='Quay lại' style={{ width: 150, borderRadius: 0, }} />}
                <Button disabled label="PHÂN BỔ NGUỒN LỰC Y TẾ" style={{ width: '100%', borderRadius: 0, backgroundColor: 'blue' }} />
            </div>
            <div style={{ height: 50, backgroundColor: '#fff' }} />
            {/* **************************************************************************************************************** */}
            {
                navigation == 0 &&
                <BlockUI style={{ borderColor: 'red' }}>
                    <Title title={`Thống kê tình hình dịch bệnh của 63 tình thành trên cả nước hôm nay ${moment().format('DD/MM/YYYY')}`} />
                    <TableValidate4 data={data4.map((i, index) => ({ ...i, x7: i?.x7 == 4 ? "Trung ương" : "Tỉnh", index: index + 1 }))} />

                    <div style={{ height: 50 }} />
                    <TableInput ref={inputRef} />
                    <Button onClick={_funcKiemTraTrongSo} label='Kiểm tra trọng số' style={{ marginTop: 50, marginBottom: 300 }} />
                </BlockUI>
            }
            {/* **************************************************************************************************************** */}
            {/* **************************************************************************************************************** */}

            {
                navigation == 1 &&
                <BlockUI style={{ borderColor: 'red' }}>
                    <Title title={`Thống kê tình hình dịch bệnh của 63 tình thành trên cả nước hôm nay ${moment().format('DD/MM/YYYY')}`} />
                    <TableValidate4 data={data4.map((i, index) => ({ ...i, x7: i?.x7 == 4 ? "Trung ương" : "Tỉnh", index: index + 1 }))} />
                    <TableInput ref={inputRefPage2} />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -50, marginBottom: 50, marginRight: 40 }}>
                        <Button onClick={_funcKiemTraTrongSoPage2} label="Kiểm tra" style={{ width: 150 }} />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        margin: 10,
                        marginBottom: 20,
                        borderTop: '1px solid #000'
                    }}>
                        <h3>Kết quả:<span style={{ color: 'green', marginLeft: 20 }}>{alertRI}</span></h3>
                        <Title style={{ marginTop: 0 }} title={`Bảng xếp hạng các thành phố có nguy cơ dịch bệnh`} />
                    </div>
                    {/* <Button onClick={_funcKiemTraTrongSo} label='_funcKiemTraTrongSo' />
                    <Button onClick={() => setDev(prev => !prev)} label={!dev ? "Pro" : 'Dev'} /> */}
                    {dev && <>
                        {/* <Title title="B1" />
                        <TableValidate1 data={data1} />
                        <TableValidate2 data={data2} />
                        <TableValidate3 data={data3} /> */}
                        {/* <Title title={alertRI} /> */}
                        {result &&
                            <>
                                <Title title={`CR=${result?.CR} `} />
                                <Title title={` CI=${result?.CI}  `} />
                                <Title title={`  RI=${result?.RI}  `} />
                                <Title title={`  lmax=${result?.lmax}; `} />
                            </>
                        }
                        <Title title={`Tổng  Si =${numberRound(SI)}`} />
                    </>
                    }
                    {/* <Button onClick={_funcXepHangTP} label='_funcXepHangTP' /> */}
                    {dev && <TableTrongSo data={dataTrongSo} />}


                    {dev && <>
                    <TableValidate5 data={data5} />
                        <TableValidate6 data={data6} />
                        <TableValidate6MinMax data={data6_minMax} />
                        {/* <TableValidate7 data={data7} /> */}
                    </>
                    }
                    {dev&&<TableValidate7 data={data7} />}
                    <TableValidate4 data={data8.map((i, index) => ({ ...i, x7: i?.x7 == 4 ? "Trung ương" : "Tỉnh", index: index + 1 }))} x8={true} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: 10,
                        marginTop: 50,
                        marginBottom: 250
                    }}>
                        <h3 style={{ width: '30%', textAlign: 'left' }}>Nhập ngưỡng quyết định phân bổ</h3>
                        <InputNumberAddSub ref={numberPhanBo} style={{ marginLeft: 30, width: 200 }} />
                        <Button onClick={_funcChiaPhanBo} label="Kết quả" style={{ width: 180, marginLeft: 50 }} />
                    </div>
                </BlockUI>
            }
            {/* **************************************************************************************************************** */}
            {/* **************************************************************************************************************** */}
            {/* **************************************************************************************************************** */}
            {
                navigation == 2 &&
                <BlockUI style={{ borderColor: 'red' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: 10,
                        marginTop: 10,
                        marginBottom: 100
                    }}>
                        <h3 style={{ width: '30%', textAlign: 'left' }}>Nhập ngưỡng quyết định phân bổ</h3>
                        <InputNumberAddSub ref={numberPhanBoPage3} style={{ marginLeft: 30, width: 200 }} />
                        <Button onClick={_funcChiaPhanBoPage2} label="Làm mới" style={{ width: 180, marginLeft: 50 }} />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        margin: 10,
                        borderTop: '1px solid #000'
                    }}>
                        <h3>Kết quả:<span style={{ color: 'green', marginLeft: 10, marginRight: 10 }}>{`${dataSub.length} tỉnh `}</span>{`có thể cung cấp nguồn lực bác sĩ:`}</h3>
                    </div>
                    {/* <TableValidateAdd data={dataAdd} /> */}
                    <TableValidate4
                    
                    data={dataSub.map((i, index) => ({ ...i, x7: i?.x7 == 4 ? "Trung ương" : "Tỉnh", index: index + 1 }))} 
                    x9 x10/>

                    
                    <Button onClick={() => _funcExport(dataSub, JSON.stringify(`${dataSub.length} tỉnh có thể cung cấp nguồn lực bác sĩ:`))} label="Xuất ra excel" style={{ width: 180, marginLeft: 50 }} />
                    <div style={{ height: 150 }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        margin: 10,
                        paddingTop: 30,
                        borderTop: '1px solid #000'
                    }}>
                        <h3>Kết quả:<span style={{ color: 'red', marginLeft: 10, marginRight: 10 }}>{`${dataAdd.length} tỉnh `}</span>{` cần nguồn lực bác sĩ:`}</h3>
                    </div>
                    {/* <TableValidateSub data={dataSub} /> */}
                    <TableValidate4
                    
                    data={dataAdd.map((i, index) => ({ ...i, x7: i?.x7 == 4 ? "Trung ương" : "Tỉnh", index: index + 1 }))} 
                    x9 x10/>

                    <Button onClick={() => _funcExport(dataAdd, JSON.stringify(`${dataAdd.length} tỉnh cần nguồn lực bác sĩ:`))} label="Xuất ra excel" style={{ width: 180, marginLeft: 50 }} />
                </BlockUI>
            }
        </div >
    )
}


