import React from "react";
import './home.scss'
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/chartBox";
import { chartBoxUser } from '../../../data.ts'
import { chartBoxRevenue } from '../../../data.ts'
import { chartBoxConversion } from '../../../data.ts'
import { chartBoxProduct } from '../../../data.ts'


// 直接导出了一个函数，而不是一个组件？这里为什么可以这么用
const Home = () => {
    return (
        // <div className="home">Home</div>
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="box box4">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="box box6">
                {/* <ChartBox {...chartBoxProduct} /> */}
            </div>
            <div className="box box7">
                {/* <ChartBox {...chartBoxProduct} /> */}
            </div>
            <div className="box box8">
                {/* <ChartBox {...chartBoxProduct} /> */}
            </div>
            <div className="box box9">
                {/* <ChartBox {...chartBoxProduct} /> */}
            </div>
        </div>
    )
}

export default Home