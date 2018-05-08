import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import Moment from 'react-moment';
import 'moment-timezone';
class Calculater extends Component {
    constructor() {
        super()
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this._columns = [
            { key: 'id', name: 'งวดที่' },
            { key: 'ans', name: 'เงินกู้/เงินกู้คงเหลือ' },
            { key: 'ratesum', name: 'ดอกเบี้ย' },
            { key: 'yod', name: 'เงินต้น' },
            { key: 'count', name: 'รวมหัก' }];
        this._rows = []
        this._sumRate = 0
        this._count = 0
        this.state = {
            old: 0,
            rat: 0,
            yod: 0,
            count: 0,
            number1: 0,
            number2: 0,
            operater: null,
            result: 0
        }
    }

    createRows = () => {
        let rows = [];
        let round = (60 - +this.state.old) * 12
        let yod = (Math.ceil(Math.ceil(+this.state.yod / round) / 10)) * 10
        let last = yod - ((yod * round) - +this.state.yod)
        let ans = +this.state.count
        let count = 0
        let ratesum = 0
        for (let i = 0; i < round; i++) {
            ratesum = (+ans * (+this.state.rat / 100) / 365) * 30
            count = yod + ratesum
            if(i === round -1) yod = last
            rows.push({
                id: i + 1,
                ratesum: ratesum,
                count: count,
                ans: ans,
                yod: yod
            });
            ans = ans - yod
            this._sumRate +=ratesum
            this._count +=count
            console.log({ i: i, เงินกู้คงเหลือ: ans, ดอกเบี้ย: ratesum, เงินต้น: yod, รวมหัก: count ,_sumRate:this._sumRate,_count:this._count});
        }
        console.log(rows);

        this._rows = rows;
    };

    rowGetter = (i) => {
        return this._rows[i];
    };

    result() {
        this.createRows();
        this.setState({ operater: true })
    }
    handleNumber1(event) {
        this.setState({ yod: (event.target.value) })
        this.setState({ count: (event.target.value) })
    }
    handleNumber2(event) {
        this.setState({ rat: (event.target.value) })
    }
    handleNumber3(event) {
        this.setState({ old: (event.target.value) })
    }

    render() {
        return (
            <div>
                <h3>ยอดตั้งต้น: <input type="number" step="0.01" onChange={this.handleNumber1.bind(this)} /> </h3>
                <h3>อัตราดอกเบี้ย/ปี(%): <input type="number" step="0.01" onChange={this.handleNumber2.bind(this)} /></h3>
                <h3>อายุผู้กู้: <input type="number" max="60" onChange={this.handleNumber3.bind(this)} /></h3>

                <button onClick={this.result.bind(this)}> คำนวณเงินกู้ </button>
                <br />
                <div >
                    <ReactDataGrid
                        columns={this._columns}
                        rowGetter={this.rowGetter}
                        rowsCount={this._rows.length}
                    />
                </div>
                
                <h3>รวมดอก: </h3>
            </div>
        )
    }
}
export default Calculater;