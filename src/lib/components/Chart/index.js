import React, {Children, cloneElement } from "react";
import PropTypes from "prop-types";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area,
} from "recharts";

const TYPE = {
    LINE: 'line',
    BAR: 'bar',
    LINEAREA: 'linearea',
    STACKBAR: 'stackbar'
};

const Chart = ({
    type,
    responsive= false,
    children,
    width,
    height,
    margin,
    items,
    data,
    ...props
}) => {
    
    const cloneChildElement = (Children)=>{
        const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className='harsh-ui-charts-tooltip'>
                  {
                    payload.map((load)=>{
                      return <p>
                        <div style={{backgroundColor:load.stroke || load.fill}}></div>
                        {`${label} : ${load.value}`}
                      </p>
                    })
                  }
                </div>
              );
            }
        
            return null;
          };

        return Children.map(children, (child, index) =>{
            let custumnProps = {};
            if(child?.type?.name === 'CartesianGrid'){
                custumnProps.strokeDasharray = '1 5';
            }

            if(child?.type?.name === 'Tooltip'){
                custumnProps.content = CustomTooltip;
            }

            return cloneElement(child, {
                ...custumnProps,
                ...child.props,
            key: child?.props?.id || index,
            })
        }
    )}

    const genrateCharts = ()=>{
        switch(type){
            case TYPE.STACKBAR :
            case TYPE.BAR : return (
                <BarChart data={data} width={width || 1000} height={height || 400} margin={margin}>
                    {cloneChildElement(Children)}
                </BarChart>
            )
            case TYPE.LINE : return (
                <LineChart data={data} width={width || 1000} height={height || 400} margin={margin}>
                    {cloneChildElement(Children)}
                </LineChart>
            )
            case TYPE.LINEAREA : return (
                <AreaChart data={data} width={width || 1000} height={height || 400} margin={margin}>
                    {cloneChildElement(Children)}
                </AreaChart>
            )
        }
    };

    return (
        (!responsive) ?
        genrateCharts() :
        (<ResponsiveContainer>
            {genrateCharts()}
        </ResponsiveContainer>))
};

Chart.CartesianGrid = CartesianGrid;
Chart.Bar = Bar;
Chart.Line = Line;
Chart.XAxis = XAxis;
Chart.YAxis = YAxis;
Chart.Tooltip = Tooltip;
Chart.Area = Area;
Chart.Legend = Legend;

Chart.propTypes = {
    type: PropTypes.oneOf([...Object.values(TYPE)]).isRequired,
    responsive: PropTypes.bool,
    data: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.any,
    items: PropTypes.any
}

export default Chart;