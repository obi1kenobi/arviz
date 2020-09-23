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
    
      
      
    
      var element = document.getElementById("91fb0f5a-78db-4620-b786-7dc819ff331a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '91fb0f5a-78db-4620-b786-7dc819ff331a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"be64f95e-360e-4cf3-bd75-ec11a39889d6":{"roots":{"references":[{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"100625"},"selection_policy":{"id":"100626"}},"id":"100615","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"100587"},"ticker":null},"id":"100590","type":"Grid"},{"attributes":{},"id":"100592","type":"BasicTicker"},{"attributes":{"axis":{"id":"100591"},"dimension":1,"ticker":null},"id":"100594","type":"Grid"},{"attributes":{},"id":"100600","type":"UndoTool"},{"attributes":{},"id":"100601","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"100595"},{"id":"100596"},{"id":"100597"},{"id":"100598"},{"id":"100599"},{"id":"100600"},{"id":"100601"},{"id":"100602"}]},"id":"100605","type":"Toolbar"},{"attributes":{"formatter":{"id":"100622"},"ticker":{"id":"100588"}},"id":"100587","type":"LinearAxis"},{"attributes":{"data_source":{"id":"100615"},"glyph":{"id":"100614"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"100617"}},"id":"100616","type":"GlyphRenderer"},{"attributes":{},"id":"100588","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"100605"}],"tools":[{"id":"100595"},{"id":"100596"},{"id":"100597"},{"id":"100598"},{"id":"100599"},{"id":"100600"},{"id":"100601"},{"id":"100602"}]},"id":"100631","type":"ProxyToolbar"},{"attributes":{},"id":"100585","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"100603","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"100578"},0,0]]},"id":"100630","type":"GridBox"},{"attributes":{"overlay":{"id":"100604"}},"id":"100599","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"100604","type":"PolyAnnotation"},{"attributes":{},"id":"100579","type":"DataRange1d"},{"attributes":{},"id":"100626","type":"UnionRenderers"},{"attributes":{"below":[{"id":"100587"}],"center":[{"id":"100590"},{"id":"100594"}],"left":[{"id":"100591"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"100616"}],"title":{"id":"100618"},"toolbar":{"id":"100605"},"toolbar_location":null,"x_range":{"id":"100579"},"x_scale":{"id":"100583"},"y_range":{"id":"100581"},"y_scale":{"id":"100585"}},"id":"100578","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"100603"}},"id":"100597","type":"BoxZoomTool"},{"attributes":{},"id":"100622","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"100615"}},"id":"100617","type":"CDSView"},{"attributes":{},"id":"100583","type":"LinearScale"},{"attributes":{},"id":"100595","type":"ResetTool"},{"attributes":{"toolbar":{"id":"100631"},"toolbar_location":"above"},"id":"100632","type":"ToolbarBox"},{"attributes":{},"id":"100596","type":"PanTool"},{"attributes":{},"id":"100581","type":"DataRange1d"},{"attributes":{},"id":"100624","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"100632"},{"id":"100630"}]},"id":"100633","type":"Column"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"100624"},"ticker":{"id":"100592"}},"id":"100591","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"100614","type":"Cross"},{"attributes":{},"id":"100625","type":"Selection"},{"attributes":{"callback":null},"id":"100602","type":"HoverTool"},{"attributes":{},"id":"100598","type":"WheelZoomTool"},{"attributes":{"text":"centered model - non centered model"},"id":"100618","type":"Title"}],"root_ids":["100633"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"be64f95e-360e-4cf3-bd75-ec11a39889d6","root_ids":["100633"],"roots":{"100633":"91fb0f5a-78db-4620-b786-7dc819ff331a"}}];
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