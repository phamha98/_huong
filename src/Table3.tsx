import React, { useRef, useState } from 'react'
import './App.css'
import { BlockUI } from 'primereact/blockui'
import { Button } from 'primereact/button'
import TableInput from './components/TableInput'
import TableValidate1 from './components/TableValidate1'
import Title from './components/Title'
import TableValidate2 from './components/TableValidate2'
import TableValidate3 from './components/TableValidate3'
import TableValidate4 from './components/TableValidate4'
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
function App() {
    const _arr1 = useRef<any>([])
    const inputRef = useRef<any>()
    const [data1, setData1] = useState<any>([])
    const [data2, setData2] = useState<any>([])
    const [data3, setData3] = useState<any>([])
    // console.log('=>>>>>.', (0.15 / 0.2).toFixed(2))
    const Run = () => {
        let data = inputRef.current?.getValue()
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
        let x = [
            so_ca_nhiem,
            tong_so_ca,
            ti_le_ca_nhiem,
            ti_le_ca_nang,
            ti_le_tu_vong,
            tong_nguon_luc,
            ti_le_tinh
        ]
        // let x = [0.2, 0.05, 0.15, 0.15, 0.05, 0.25, 0.15]
        var n = 7
        var arr = new Array(n)
        for (var i = 0; i < n; i++) {
            arr[i] = new Array(n)
        }
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                arr[i][j] = (x[i] / x[j]).toFixed(2)
            }
        }
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                arr[i][j] = LamTron(arr[i][j])
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
                arr[i][j] = arr[i][j] / sum[j]
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
            trong_so[i] = sum / n
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
                    arr3[i][j] = arr1[i][j] * trong_so[j]
                }
                let ss = 0
                for (let k = 0; k < n; k++) {
                    ss = ss + arr3[i][k]
                }
                arr3[i][7] = ss
                arr3[i][8] = trong_so[i]
                arr3[i][9] = arr3[i][7] / arr3[i][8]
            }
        }
        // console.log('arr', arr)
        // console.log('arr3', arr3)
        setData3(convertAnToField3(arr3))

        let sum_lmax = 0
        for (var i = 0; i < n; i++) {
            sum_lmax = sum_lmax + arr3[i][9]
        }
        let lmax = sum_lmax / n
        let CI = (lmax - n) / (n - 1)
        let RI = getRI(n)
        let CR = CI / RI
        if (CR < 0.1) {
            setAlertRI('Hợp lệ')
            setResult({
                CR, lmax, CI, RI,
            })
        }
        else setAlertRI('Không hợp lệ,vui lòng nhập lại')
    }
    const [alertRI, setAlertRI] = useState('Thông báo')
    const [result, setResult] = useState<any>(null)



    let _data4 = [
        { x0: 'Hà Nội', x1: 420, x2: 1605587, x3: 0.000050, x4: 0.3114, x5: 0.0008, x6: 17858, x7: 3 },
        { x0: 'TP.HCM', x1: 270, x2: 610064, x3: 0.000029, x4: 0.3278, x5: 0.0333, x6: 30078, x7: 2 },
        { x0: 'Phú Thọ', x1: 210, x2: 321734, x3: 0.000140, x4: 0.2487, x5: 0.0003, x6: 3387, x7: 1 },
        { x0: 'Nghệ An', x1: 50, x2: 485595, x3: 0.000015, x4: 0.2471, x5: 0.0003, x6: 6552, x7: 1 },
        { x0: 'Sơn La', x1: 10, x2: 150838, x3: 0.000008, x4: 0.1989, x5: 0.0000, x6: 2129, x7: 1 },
    ]
    const Run2 = () => {
        let result: any = { x0: "Tổng", x1: 0, x2: 0, x3: 0, x4: 0, x5: 0, x6: 0, x7: 0, }
        _data4.forEach(item => {
            result.x1 = result.x1 + Math.pow(item.x1, 2)
            result.x2 = result.x2 + Math.pow(item.x2, 2)
            result.x3 = result.x3 + Math.pow(item.x3, 2)
            result.x4 = result.x4 + Math.pow(item.x4, 2)
            result.x5 = result.x5 + Math.pow(item.x5, 2)
            result.x6 = result.x6 + Math.pow(item.x6, 2)
            result.x7 = result.x7 + Math.pow(item.x7, 2)
        })
        let resultNew: any = {
            x0: "Tổng",
            x1: Math.sqrt(result.x1),
            x2: Math.sqrt(result.x2),
            x3: Math.sqrt(result.x3),
            x4: Math.sqrt(result.x4),
            x5: Math.sqrt(result.x5),
            x6: Math.sqrt(result.x6),
            x7: Math.sqrt(result.x7),
        }

        setData4([..._data4, resultNew])
    }
    const [data4, setData4] = useState(_data4)
    const [data5, setData5] = useState([])
    return (
        <div
            className='App'
            style={{
                padding: 10,
                borderWidth: 20,
                borderStyle: 'solid',
                borderRadius: 10
            }}
        >
            <BlockUI style={{ borderColor: 'red' }}>
                <TableInput ref={inputRef} />
                <Button onClick={Run} label='Run' />
                <Title title="B1" />
                <TableValidate1 data={data1} />
                <TableValidate2 data={data2} />
                <TableValidate3 data={data3} />
                <Title title={alertRI} />
                {result &&
                    <>
                        <Title title={`CR=${result?.CR} `} />
                        <Title title={` CI=${result?.CI}  `} />
                        <Title title={`  RI=${result?.RI}  `} />
                        <Title title={`  lmax=${result?.lmax}; `} />
                    </>
                }
                <Button onClick={Run2} label='Run2' />
                <TableValidate4 data={data4} />
                <TableValidate4 data={data4} />
            </BlockUI>
        </div>
    )
}

export default App
