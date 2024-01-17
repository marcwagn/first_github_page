var global_data;

d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
  .then(function(my_data){
        global_data = my_data
        var mySVG = d3.select("svg");
        var circles = mySVG.selectAll()
          .data(my_data);

        circles.join("circle")
            .attr("cx", d => d.Xi)
            .attr("cy", d => d.Yi)
            .attr("r", 5)
            .attr("fill", d => d.color);

        d3.select("svg")
          .selectAll("circle")
          .transition().duration(3000)
          //.ease(d3.easeBounce)
          .attr("cx", d => d.Xf)
          .attr("cy", d => d.Yf);


        d3.selectAll('circle').on('mouseover', function(){
            d3.select(this).transition().attr("r", 20);
          })

        d3.selectAll("circle").on("mouseout", function(){
          d3.select(this).transition().attr("r", 5);
        });

   })
   .catch(function(error){
        console.log(error)
   });
