(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("e380d8bc-6ad8-4e71-80f2-c0b770fecb4e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e380d8bc-6ad8-4e71-80f2-c0b770fecb4e' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"3ac44ff8-b954-4506-a3fc-8b38fc700564":{"roots":{"references":[{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90516","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90574","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90573","type":"VBar"},{"attributes":{"overlay":{"id":"90482"}},"id":"90477","type":"LassoSelectTool"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90571","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90607"},"selection_policy":{"id":"90608"}},"id":"90572","type":"ColumnDataSource"},{"attributes":{},"id":"90601","type":"Selection"},{"attributes":{"source":{"id":"90572"}},"id":"90576","type":"CDSView"},{"attributes":{},"id":"90592","type":"Selection"},{"attributes":{},"id":"90602","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"90572"},"glyph":{"id":"90573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90574"},"selection_glyph":null,"view":{"id":"90576"}},"id":"90575","type":"GlyphRenderer"},{"attributes":{},"id":"90591","type":"UnionRenderers"},{"attributes":{},"id":"90593","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90577","type":"Span"},{"attributes":{"axis":{"id":"90503"},"dimension":1,"ticker":null},"id":"90506","type":"Grid"},{"attributes":{},"id":"90497","type":"LinearScale"},{"attributes":{},"id":"90508","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90481","type":"BoxAnnotation"},{"attributes":{"text":"mu"},"id":"90580","type":"Title"},{"attributes":{},"id":"90603","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90586"},"selection_policy":{"id":"90587"}},"id":"90526","type":"ColumnDataSource"},{"attributes":{},"id":"90604","type":"UnionRenderers"},{"attributes":{},"id":"90479","type":"SaveTool"},{"attributes":{"below":[{"id":"90499"}],"center":[{"id":"90502"},{"id":"90506"},{"id":"90559"},{"id":"90565"},{"id":"90571"},{"id":"90577"}],"left":[{"id":"90503"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90557"},{"id":"90563"},{"id":"90569"},{"id":"90575"}],"title":{"id":"90580"},"toolbar":{"id":"90517"},"toolbar_location":null,"x_range":{"id":"90457"},"x_scale":{"id":"90495"},"y_range":{"id":"90459"},"y_scale":{"id":"90497"}},"id":"90492","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"90584","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90585"},"ticker":{"id":"90550"}},"id":"90469","type":"LinearAxis"},{"attributes":{"callback":null},"id":"90480","type":"HoverTool"},{"attributes":{"axis":{"id":"90469"},"dimension":1,"ticker":null},"id":"90472","type":"Grid"},{"attributes":{},"id":"90585","type":"BasicTickFormatter"},{"attributes":{},"id":"90466","type":"BasicTicker"},{"attributes":{},"id":"90605","type":"Selection"},{"attributes":{"text":"tau"},"id":"90552","type":"Title"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90482","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90528","type":"VBar"},{"attributes":{},"id":"90606","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90531","type":"Span"},{"attributes":{"source":{"id":"90526"}},"id":"90530","type":"CDSView"},{"attributes":{},"id":"90476","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90534","type":"VBar"},{"attributes":{"data_source":{"id":"90526"},"glyph":{"id":"90527"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90528"},"selection_glyph":null,"view":{"id":"90530"}},"id":"90529","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90539","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90588"},"selection_policy":{"id":"90589"}},"id":"90532","type":"ColumnDataSource"},{"attributes":{},"id":"90500","type":"BasicTicker"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90533","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90600"},"ticker":{"id":"90578"}},"id":"90503","type":"LinearAxis"},{"attributes":{"source":{"id":"90532"}},"id":"90536","type":"CDSView"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90599"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90500"}},"id":"90499","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90540","type":"VBar"},{"attributes":{},"id":"90607","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90527","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90545","type":"VBar"},{"attributes":{"data_source":{"id":"90532"},"glyph":{"id":"90533"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90534"},"selection_glyph":null,"view":{"id":"90536"}},"id":"90535","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90507"},{"id":"90508"},{"id":"90509"},{"id":"90510"},{"id":"90511"},{"id":"90512"},{"id":"90513"},{"id":"90514"}]},"id":"90517","type":"Toolbar"},{"attributes":{},"id":"90608","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90537","type":"Span"},{"attributes":{"axis":{"id":"90499"},"ticker":null},"id":"90502","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90590"},"selection_policy":{"id":"90591"}},"id":"90538","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"90550","type":"FixedTicker"},{"attributes":{"source":{"id":"90538"}},"id":"90542","type":"CDSView"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90565","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90546","type":"VBar"},{"attributes":{"children":[[{"id":"90456"},0,0],[{"id":"90492"},0,1]]},"id":"90612","type":"GridBox"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90559","type":"Span"},{"attributes":{"data_source":{"id":"90538"},"glyph":{"id":"90539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90540"},"selection_glyph":null,"view":{"id":"90542"}},"id":"90541","type":"GlyphRenderer"},{"attributes":{},"id":"90586","type":"Selection"},{"attributes":{"below":[{"id":"90465"}],"center":[{"id":"90468"},{"id":"90472"},{"id":"90531"},{"id":"90537"},{"id":"90543"},{"id":"90549"}],"left":[{"id":"90469"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90529"},{"id":"90535"},{"id":"90541"},{"id":"90547"}],"title":{"id":"90552"},"toolbar":{"id":"90483"},"toolbar_location":null,"x_range":{"id":"90457"},"x_scale":{"id":"90461"},"y_range":{"id":"90459"},"y_scale":{"id":"90463"}},"id":"90456","subtype":"Figure","type":"Plot"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90543","type":"Span"},{"attributes":{},"id":"90507","type":"ResetTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90592"},"selection_policy":{"id":"90593"}},"id":"90544","type":"ColumnDataSource"},{"attributes":{},"id":"90587","type":"UnionRenderers"},{"attributes":{"source":{"id":"90544"}},"id":"90548","type":"CDSView"},{"attributes":{"callback":null},"id":"90514","type":"HoverTool"},{"attributes":{},"id":"90599","type":"BasicTickFormatter"},{"attributes":{"ticks":[0,1,2,3]},"id":"90578","type":"FixedTicker"},{"attributes":{"overlay":{"id":"90515"}},"id":"90509","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"90544"},"glyph":{"id":"90545"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90546"},"selection_glyph":null,"view":{"id":"90548"}},"id":"90547","type":"GlyphRenderer"},{"attributes":{},"id":"90513","type":"SaveTool"},{"attributes":{},"id":"90510","type":"WheelZoomTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90584"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90466"}},"id":"90465","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90549","type":"Span"},{"attributes":{"overlay":{"id":"90516"}},"id":"90511","type":"LassoSelectTool"},{"attributes":{"source":{"id":"90554"}},"id":"90558","type":"CDSView"},{"attributes":{"children":[{"id":"90614"},{"id":"90612"}]},"id":"90615","type":"Column"},{"attributes":{},"id":"90512","type":"UndoTool"},{"attributes":{},"id":"90600","type":"BasicTickFormatter"},{"attributes":{},"id":"90473","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90556","type":"VBar"},{"attributes":{},"id":"90588","type":"Selection"},{"attributes":{},"id":"90461","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90555","type":"VBar"},{"attributes":{},"id":"90474","type":"PanTool"},{"attributes":{},"id":"90459","type":"DataRange1d"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90601"},"selection_policy":{"id":"90602"}},"id":"90554","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"90465"},"ticker":null},"id":"90468","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90562","type":"VBar"},{"attributes":{},"id":"90589","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"90554"},"glyph":{"id":"90555"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90556"},"selection_glyph":null,"view":{"id":"90558"}},"id":"90557","type":"GlyphRenderer"},{"attributes":{},"id":"90478","type":"UndoTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90567","type":"VBar"},{"attributes":{},"id":"90457","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"90613"},"toolbar_location":"above"},"id":"90614","type":"ToolbarBox"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90603"},"selection_policy":{"id":"90604"}},"id":"90560","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90561","type":"VBar"},{"attributes":{},"id":"90463","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"90483"},{"id":"90517"}],"tools":[{"id":"90473"},{"id":"90474"},{"id":"90475"},{"id":"90476"},{"id":"90477"},{"id":"90478"},{"id":"90479"},{"id":"90480"},{"id":"90507"},{"id":"90508"},{"id":"90509"},{"id":"90510"},{"id":"90511"},{"id":"90512"},{"id":"90513"},{"id":"90514"}]},"id":"90613","type":"ProxyToolbar"},{"attributes":{"source":{"id":"90560"}},"id":"90564","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90568","type":"VBar"},{"attributes":{"overlay":{"id":"90481"}},"id":"90475","type":"BoxZoomTool"},{"attributes":{},"id":"90495","type":"LinearScale"},{"attributes":{"data_source":{"id":"90566"},"glyph":{"id":"90567"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90568"},"selection_glyph":null,"view":{"id":"90570"}},"id":"90569","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"90560"},"glyph":{"id":"90561"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90562"},"selection_glyph":null,"view":{"id":"90564"}},"id":"90563","type":"GlyphRenderer"},{"attributes":{},"id":"90590","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90515","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90473"},{"id":"90474"},{"id":"90475"},{"id":"90476"},{"id":"90477"},{"id":"90478"},{"id":"90479"},{"id":"90480"}]},"id":"90483","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90605"},"selection_policy":{"id":"90606"}},"id":"90566","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90566"}},"id":"90570","type":"CDSView"}],"root_ids":["90615"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"3ac44ff8-b954-4506-a3fc-8b38fc700564","root_ids":["90615"],"roots":{"90615":"e380d8bc-6ad8-4e71-80f2-c0b770fecb4e"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();