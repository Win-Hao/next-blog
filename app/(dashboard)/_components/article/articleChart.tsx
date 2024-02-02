'use client'
import React from 'react';
import {CateArtCount} from '@/types'
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid} from "recharts";
import {Card} from "@/components/ui/card";

interface ArticleChartProps {
    CateArtCount: CateArtCount[],

}

const CustomTooltip = ({active, payload, label}: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};
const ArticleChart = ({CateArtCount}: ArticleChartProps) => {
    return (
        <Card>
            <ResponsiveContainer width='100%' height={600}>
                <BarChart
                    width={300}
                    height={300}
                    data={CateArtCount}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="category_title"/>
                    <YAxis/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Legend/>
                    <Bar dataKey="articles_count" barSize={60} stackId="a" fill="#8884d8"/>
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default ArticleChart;
