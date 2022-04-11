import './ChartBar.css'

const ChartBar = (props) => {
    let barFillHeight = '0%';
    if(props.maxValue > 0){
        barFillHeight=Math.round((props.value / props.maxValue) * 100) + '%'; //this gives percent of which the bar is filled
    }
    return (
        <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
                                        {/*Style ocekuva objekt kako vrednost*/}
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
    );
};

export default ChartBar;