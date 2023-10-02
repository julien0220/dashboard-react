import React from "react";
import './home.scss'
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/chartBox";
import { chartBoxUser } from '../../../data.ts';
import { chartBoxRevenue } from '../../../data.ts';
import { chartBoxConversion } from '../../../data.ts';
import { chartBoxProduct } from '../../../data.ts';
import { barChartBoxVisit, barChartBoxRevenue } from '../../../data.ts';
import BarChartBox from "../../components/barChartBox/BarChartBox.tsx";


// 直接导出了一个函数，而不是一个组件？这里为什么可以这么用
const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="box box4">
                <div />
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="box box7">
                <div />
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxVisit} />
            </div>
        </div>
    )
}

export default Home