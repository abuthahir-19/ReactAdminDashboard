import { ChartComponent, Inject, DataLabel, SeriesCollectionDirective, SeriesDirective, Category, Tooltip, SplineAreaSeries } from '@syncfusion/ej2-react-charts';

const SplineChart = ({ dataSource, fillColor, borderColor, toolTipColor}) => {
    return (
        <ChartComponent
            style={{ height: '300px', width: '100%' }}
            primaryXAxis={{ majorTickLines: { width: 0 }, valueType: "Category", majorGridLines: { width: 0 }, labelStyle: { fontFamily: 'sans-serif', size: '13px' } }}
            primaryYAxis={{
                majorTickLines: { width: 0 }, minimum: 0, maximum: 60, labelStyle: { fontFamily:'sans-serif', size: '13px' }, titleStyle: { size: '13px' }
            }} tooltip={{ enable: true, shared: true, enableMarker: false, fill: `${toolTipColor}` }} chartArea={{ border: { width: 0 } }}>
            <Inject services={[SplineAreaSeries, Category, Tooltip, DataLabel]} />
            <SeriesCollectionDirective>
                <SeriesDirective type="SplineArea" dataSource={dataSource} xName="month" yName="att" name="Attended" width={2.5} marker={{ visible: false }} fill={fillColor} opacity={0.3} border={{ width: 2.75, color: `${borderColor}` }}></SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );
}

export default SplineChart;