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
    
      
      
    
      var element = document.getElementById("4c2f1e36-a2a7-4e89-97ba-2d54a291fa85");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4c2f1e36-a2a7-4e89-97ba-2d54a291fa85' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7a50473f-b6e8-468c-8f3e-879faa78a8a2":{"roots":{"references":[{"attributes":{},"id":"85725","type":"BasicTickFormatter"},{"attributes":{},"id":"85646","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85634","type":"BoxAnnotation"},{"attributes":{},"id":"85728","type":"Selection"},{"attributes":{"callback":null},"id":"85633","type":"HoverTool"},{"attributes":{},"id":"85729","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85635","type":"PolyAnnotation"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85713"},"ticker":{"id":"85623"}},"id":"85622","type":"LinearAxis"},{"attributes":{},"id":"85714","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85682","type":"Circle"},{"attributes":{},"id":"85715","type":"UnionRenderers"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85716"},"selection_policy":{"id":"85717"}},"id":"85690","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85690"}},"id":"85692","type":"CDSView"},{"attributes":{"callback":null},"id":"85669","type":"HoverTool"},{"attributes":{"source":{"id":"85681"}},"id":"85685","type":"CDSView"},{"attributes":{},"id":"85716","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85689","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238711},"id":"85686","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85711"},"ticker":{"id":"85619"}},"id":"85618","type":"LinearAxis"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.17824444314769777},"id":"85687","type":"Span"},{"attributes":{},"id":"85717","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"85690"},"glyph":{"id":"85689"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85692"}},"id":"85691","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"85693","type":"Title"},{"attributes":{"toolbars":[{"id":"85636"},{"id":"85672"}],"tools":[{"id":"85626"},{"id":"85627"},{"id":"85628"},{"id":"85629"},{"id":"85630"},{"id":"85631"},{"id":"85632"},{"id":"85633"},{"id":"85662"},{"id":"85663"},{"id":"85664"},{"id":"85665"},{"id":"85666"},{"id":"85667"},{"id":"85668"},{"id":"85669"}]},"id":"85734","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85688","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85728"},"selection_policy":{"id":"85729"}},"id":"85704","type":"ColumnDataSource"},{"attributes":{},"id":"85713","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85697","type":"Circle"},{"attributes":{"children":[{"id":"85735"},{"id":"85733"}]},"id":"85736","type":"Column"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85696","type":"Circle"},{"attributes":{},"id":"85619","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85726"},"selection_policy":{"id":"85727"}},"id":"85695","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85714"},"selection_policy":{"id":"85715"}},"id":"85681","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85704"}},"id":"85706","type":"CDSView"},{"attributes":{"children":[[{"id":"85609"},0,0],[{"id":"85645"},0,1]]},"id":"85733","type":"GridBox"},{"attributes":{"data_source":{"id":"85695"},"glyph":{"id":"85696"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85697"},"selection_glyph":null,"view":{"id":"85699"}},"id":"85698","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"85622"},"dimension":1,"ticker":null},"id":"85625","type":"Grid"},{"attributes":{"source":{"id":"85695"}},"id":"85699","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85703","type":"Dash"},{"attributes":{"data_source":{"id":"85681"},"glyph":{"id":"85682"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85683"},"selection_glyph":null,"view":{"id":"85685"}},"id":"85684","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.21484300137312468},"id":"85700","type":"Span"},{"attributes":{"end":1,"start":-0.05},"id":"85612","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716425007633},"id":"85701","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85723"},"ticker":{"id":"85655"}},"id":"85654","type":"LinearAxis"},{"attributes":{"below":[{"id":"85654"}],"center":[{"id":"85657"},{"id":"85661"}],"left":[{"id":"85658"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85698"},{"id":"85700"},{"id":"85701"},{"id":"85702"},{"id":"85705"}],"title":{"id":"85707"},"toolbar":{"id":"85672"},"toolbar_location":null,"x_range":{"id":"85646"},"x_scale":{"id":"85650"},"y_range":{"id":"85648"},"y_scale":{"id":"85652"}},"id":"85645","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"85648","type":"DataRange1d"},{"attributes":{"data_source":{"id":"85704"},"glyph":{"id":"85703"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85706"}},"id":"85705","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"85635"}},"id":"85630","type":"LassoSelectTool"},{"attributes":{"text":"mu"},"id":"85707","type":"Title"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85725"},"ticker":{"id":"85659"}},"id":"85658","type":"LinearAxis"},{"attributes":{},"id":"85650","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85683","type":"Circle"},{"attributes":{},"id":"85652","type":"LinearScale"},{"attributes":{},"id":"85610","type":"DataRange1d"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85702","type":"Span"},{"attributes":{},"id":"85723","type":"BasicTickFormatter"},{"attributes":{},"id":"85655","type":"BasicTicker"},{"attributes":{"axis":{"id":"85654"},"ticker":null},"id":"85657","type":"Grid"},{"attributes":{"toolbar":{"id":"85734"},"toolbar_location":"above"},"id":"85735","type":"ToolbarBox"},{"attributes":{"axis":{"id":"85658"},"dimension":1,"ticker":null},"id":"85661","type":"Grid"},{"attributes":{"axis":{"id":"85618"},"ticker":null},"id":"85621","type":"Grid"},{"attributes":{},"id":"85659","type":"BasicTicker"},{"attributes":{"overlay":{"id":"85670"}},"id":"85664","type":"BoxZoomTool"},{"attributes":{},"id":"85663","type":"PanTool"},{"attributes":{},"id":"85631","type":"UndoTool"},{"attributes":{},"id":"85662","type":"ResetTool"},{"attributes":{},"id":"85665","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"85671"}},"id":"85666","type":"LassoSelectTool"},{"attributes":{},"id":"85616","type":"LinearScale"},{"attributes":{},"id":"85667","type":"UndoTool"},{"attributes":{"below":[{"id":"85618"}],"center":[{"id":"85621"},{"id":"85625"}],"left":[{"id":"85622"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85684"},{"id":"85686"},{"id":"85687"},{"id":"85688"},{"id":"85691"}],"title":{"id":"85693"},"toolbar":{"id":"85636"},"toolbar_location":null,"x_range":{"id":"85610"},"x_scale":{"id":"85614"},"y_range":{"id":"85612"},"y_scale":{"id":"85616"}},"id":"85609","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85626"},{"id":"85627"},{"id":"85628"},{"id":"85629"},{"id":"85630"},{"id":"85631"},{"id":"85632"},{"id":"85633"}]},"id":"85636","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85670","type":"BoxAnnotation"},{"attributes":{},"id":"85614","type":"LinearScale"},{"attributes":{"overlay":{"id":"85634"}},"id":"85628","type":"BoxZoomTool"},{"attributes":{},"id":"85627","type":"PanTool"},{"attributes":{},"id":"85626","type":"ResetTool"},{"attributes":{},"id":"85632","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85671","type":"PolyAnnotation"},{"attributes":{},"id":"85629","type":"WheelZoomTool"},{"attributes":{},"id":"85623","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85662"},{"id":"85663"},{"id":"85664"},{"id":"85665"},{"id":"85666"},{"id":"85667"},{"id":"85668"},{"id":"85669"}]},"id":"85672","type":"Toolbar"},{"attributes":{},"id":"85711","type":"BasicTickFormatter"},{"attributes":{},"id":"85726","type":"Selection"},{"attributes":{},"id":"85727","type":"UnionRenderers"},{"attributes":{},"id":"85668","type":"SaveTool"}],"root_ids":["85736"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"7a50473f-b6e8-468c-8f3e-879faa78a8a2","root_ids":["85736"],"roots":{"85736":"4c2f1e36-a2a7-4e89-97ba-2d54a291fa85"}}];
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