
import React from 'react';
// import d3 from '~/utils/d3.min';
import './pieChart.scss';
export default class PieChart extends React.Component {
    componentWillMount() {

    }
    componentDidMount() {
        this.dashboard(this.pieChart)
        
    }
    dashboard=(Ele)=> {
        let width = 580;
        let height = 450;
        let radius = Math.min(width, height)/2;
        let color = d3.scale.category20c();

        //创建计算弧形路径的函数
        let arc = d3.svg.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 30);
        let outerArc = d3.svg.arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9);
        //mock 
        var dataSet = [
            {name: '购物', value: 134},
            {name: '日常饮食', value: 300},
            {name: '医药', value: 100},
            {name: '交通', value: 402},
            {name: '杂费', value: 983}
        ];
        // var dataSet = [ 983, 200, 909, 100, 400];
        


        let pie = d3.layout.pie()
            .sort(null)
            .value(d=> {
                return d.value;
            });

        let pieData = pie(dataSet);

        let svg = d3.select(Ele)
            .attr('width', width)
            .attr('height', height)
            .append('g');

        svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            
            
        svg.append('g').attr('class', 'slices');
        svg.append('g').attr('class', 'lines');
        svg.append('g').attr('class', 'labels');


        //填充pie
        svg.select(".slices").selectAll("path.slice")
            .data(pieData)
            .enter()
            .insert("path")
            .style("fill", function(d, i) { 
                return color(i);
            })
            .attr('d', function(d){
                return arc(d);
            })
            .attr("class", "slice");

        // svg.select('.labels').selectAll('text')
        //     .data(pie(dataSet), name)
        //     .enter()
        //     .append('text')
        //     .attr('transform', function(d){
        //         return 'translate(' + arc.centroid(d) + ')';
        //     })
        //     // .attr("dy", ".35em")
        //     // .attr('text-anchor', 'middle');
        //     .text(function(d) {
        //         return d.data.name;
        //     })

        let text = svg.select(".labels").selectAll("text")
            .data(pieData);

        text.enter()
            .append("text")
            .attr("dy", ".35em")
            .text(function(d) {
                return d.data.name;
            });

        text.transition().duration(1000)
            .attrTween('transform', d=> {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    var d2 = interpolate(t);
                    var pos = outerArc.centroid(d2);
                    pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                    return "translate("+ pos +")";
                };
		    })
		    .styleTween("text-anchor", d => {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    var d2 = interpolate(t);
                    return midAngle(d2) < Math.PI ? "start":"end";
                };
            });
        text.exit()
            .remove();

        svg.select('.lines').selectAll('polyline')
            .data(pie(dataSet), name)
            .enter()
            .append('polyline')
            .transition().duration(1000)
            .attrTween('points', d=> {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    var d2 = interpolate(t);
                    var pos = outerArc.centroid(d2);
                    pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                    return [arc.centroid(d2), outerArc.centroid(d2), pos];
                };			
            });
        

            function midAngle(d){
                return d.startAngle + (d.endAngle - d.startAngle)/2;
            }

            function getColor(idx) {
                var palette = [
                 '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
                 '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
                 '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
                 '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
                ]
                return palette[idx % palette.length];
            }
        
    }

    render() {
        return (
            <div className="pie-chart"  style={{'textAlign': 'center'}}>
                <div id="dashboard">
                    <svg width="100%" height="100%" ref={pieChart => this.pieChart=pieChart}></svg>
                </div>
            </div>
        );
    }
}