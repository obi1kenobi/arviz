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
    
      
      
    
      var element = document.getElementById("93c9fefc-d75d-4a11-9939-7d84157f1290");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '93c9fefc-d75d-4a11-9939-7d84157f1290' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e1e5baf3-cdff-4425-a532-ae637b8994f0":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67495"},{"id":"67496"},{"id":"67497"},{"id":"67498"},{"id":"67499"},{"id":"67500"}]},"id":"67502","type":"Toolbar"},{"attributes":{},"id":"67529","type":"SaveTool"},{"attributes":{},"id":"67526","type":"PanTool"},{"attributes":{},"id":"67483","type":"LinearScale"},{"attributes":{},"id":"67573","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67526"},{"id":"67527"},{"id":"67528"},{"id":"67529"},{"id":"67530"},{"id":"67531"}]},"id":"67533","type":"Toolbar"},{"attributes":{"below":[{"id":"67487"}],"center":[{"id":"67490"},{"id":"67494"},{"id":"67554"}],"left":[{"id":"67491"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67543"}],"title":{"id":"67545"},"toolbar":{"id":"67502"},"x_range":{"id":"67479"},"x_scale":{"id":"67483"},"y_range":{"id":"67481"},"y_scale":{"id":"67485"}},"id":"67478","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"67577"},"selection_policy":{"id":"67578"}},"id":"67556","type":"ColumnDataSource"},{"attributes":{},"id":"67523","type":"BasicTicker"},{"attributes":{},"id":"67550","type":"BasicTickFormatter"},{"attributes":{},"id":"67531","type":"HelpTool"},{"attributes":{"text":""},"id":"67564","type":"Title"},{"attributes":{},"id":"67527","type":"WheelZoomTool"},{"attributes":{"source":{"id":"67556"}},"id":"67560","type":"CDSView"},{"attributes":{},"id":"67514","type":"LinearScale"},{"attributes":{"formatter":{"id":"67548"},"ticker":{"id":"67488"}},"id":"67487","type":"LinearAxis"},{"attributes":{"formatter":{"id":"67573"},"ticker":{"id":"67523"}},"id":"67522","type":"LinearAxis"},{"attributes":{},"id":"67499","type":"ResetTool"},{"attributes":{},"id":"67479","type":"DataRange1d"},{"attributes":{"below":[{"id":"67518"}],"center":[{"id":"67521"},{"id":"67525"}],"left":[{"id":"67522"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67559"}],"title":{"id":"67564"},"toolbar":{"id":"67533"},"x_range":{"id":"67510"},"x_scale":{"id":"67514"},"y_range":{"id":"67512"},"y_scale":{"id":"67516"}},"id":"67509","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"67551","type":"Selection"},{"attributes":{},"id":"67488","type":"BasicTicker"},{"attributes":{},"id":"67481","type":"DataRange1d"},{"attributes":{},"id":"67530","type":"ResetTool"},{"attributes":{"overlay":{"id":"67532"}},"id":"67528","type":"BoxZoomTool"},{"attributes":{},"id":"67510","type":"DataRange1d"},{"attributes":{},"id":"67548","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"67541","type":"Quad"},{"attributes":{},"id":"67516","type":"LinearScale"},{"attributes":{"children":[{"id":"67478"},{"id":"67509"}]},"id":"67561","type":"Row"},{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"67557","type":"Line"},{"attributes":{},"id":"67495","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"67558","type":"Line"},{"attributes":{},"id":"67496","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"67540"},"glyph":{"id":"67541"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67542"},"selection_glyph":null,"view":{"id":"67544"}},"id":"67543","type":"GlyphRenderer"},{"attributes":{},"id":"67485","type":"LinearScale"},{"attributes":{},"id":"67492","type":"BasicTicker"},{"attributes":{},"id":"67498","type":"SaveTool"},{"attributes":{"formatter":{"id":"67571"},"ticker":{"id":"67519"}},"id":"67518","type":"LinearAxis"},{"attributes":{"axis":{"id":"67491"},"dimension":1,"ticker":null},"id":"67494","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67501","type":"BoxAnnotation"},{"attributes":{"source":{"id":"67540"}},"id":"67544","type":"CDSView"},{"attributes":{"text":""},"id":"67545","type":"Title"},{"attributes":{"axis":{"id":"67518"},"ticker":null},"id":"67521","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"67542","type":"Quad"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"67543"}]},"id":"67555","type":"LegendItem"},{"attributes":{},"id":"67512","type":"DataRange1d"},{"attributes":{"formatter":{"id":"67550"},"ticker":{"id":"67492"}},"id":"67491","type":"LinearAxis"},{"attributes":{"data_source":{"id":"67556"},"glyph":{"id":"67557"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67558"},"selection_glyph":null,"view":{"id":"67560"}},"id":"67559","type":"GlyphRenderer"},{"attributes":{},"id":"67500","type":"HelpTool"},{"attributes":{"axis":{"id":"67487"},"ticker":null},"id":"67490","type":"Grid"},{"attributes":{},"id":"67571","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"67522"},"dimension":1,"ticker":null},"id":"67525","type":"Grid"},{"attributes":{},"id":"67577","type":"Selection"},{"attributes":{"items":[{"id":"67555"}]},"id":"67554","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67532","type":"BoxAnnotation"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11],"right":[1,2,3,4,5,6,7,8,9,10,11,12],"top":{"__ndarray__":"2/l+arx0kz+kcD0K16OwP6AaL90kBsE/gZVDi2znyz/2KFyPwvXIP4cW2c73U8M/SgwCK4cWuT9MN4lBYOWwP9v5fmq8dKM/+n5qvHSTiD/6fmq8dJNoP/yp8dJNYmA/","dtype":"float64","order":"little","shape":[12]}},"selected":{"id":"67551"},"selection_policy":{"id":"67552"}},"id":"67540","type":"ColumnDataSource"},{"attributes":{},"id":"67552","type":"UnionRenderers"},{"attributes":{},"id":"67578","type":"UnionRenderers"},{"attributes":{},"id":"67519","type":"BasicTicker"},{"attributes":{"overlay":{"id":"67501"}},"id":"67497","type":"BoxZoomTool"}],"root_ids":["67561"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"e1e5baf3-cdff-4425-a532-ae637b8994f0","root_ids":["67561"],"roots":{"67561":"93c9fefc-d75d-4a11-9939-7d84157f1290"}}];
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