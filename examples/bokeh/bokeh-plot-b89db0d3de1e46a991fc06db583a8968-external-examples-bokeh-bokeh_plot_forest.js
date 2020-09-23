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
    
      
      
    
      var element = document.getElementById("76edc5e7-4de4-426e-a6bf-56c21e87c91b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '76edc5e7-4de4-426e-a6bf-56c21e87c91b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ab20774d-43e9-4cae-913d-b24d67f80899":{"roots":{"references":[{"attributes":{"formatter":{"id":"68384"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"68379"}},"id":"68232","type":"LinearAxis"},{"attributes":{"data":{},"selected":{"id":"68401"},"selection_policy":{"id":"68402"}},"id":"68295","type":"ColumnDataSource"},{"attributes":{},"id":"68412","type":"UnionRenderers"},{"attributes":{},"id":"68242","type":"SaveTool"},{"attributes":{},"id":"68239","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68282","type":"Circle"},{"attributes":{"callback":null},"id":"68243","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68281","type":"Circle"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"68393"},"selection_policy":{"id":"68394"}},"id":"68275","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68275"}},"id":"68279","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68277","type":"Line"},{"attributes":{"overlay":{"id":"68245"}},"id":"68240","type":"LassoSelectTool"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68276","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68286","type":"Line"},{"attributes":{},"id":"68409","type":"Selection"},{"attributes":{"data_source":{"id":"68315"},"glyph":{"id":"68316"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68317"},"selection_glyph":null,"view":{"id":"68319"}},"id":"68318","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68295"},"glyph":{"id":"68296"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68297"},"selection_glyph":null,"view":{"id":"68299"}},"id":"68298","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"68407"},"selection_policy":{"id":"68408"}},"id":"68310","type":"ColumnDataSource"},{"attributes":{},"id":"68237","type":"PanTool"},{"attributes":{"source":{"id":"68370"}},"id":"68374","type":"CDSView"},{"attributes":{"data_source":{"id":"68370"},"glyph":{"id":"68371"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68372"},"selection_glyph":null,"view":{"id":"68374"}},"id":"68373","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68403"},"selection_policy":{"id":"68404"}},"id":"68300","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"68385"},"selection_policy":{"id":"68386"}},"id":"68255","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"68431"},"selection_policy":{"id":"68432"}},"id":"68370","type":"ColumnDataSource"},{"attributes":{},"id":"68415","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68395"},"selection_policy":{"id":"68396"}},"id":"68280","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68280"},"glyph":{"id":"68281"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68282"},"selection_glyph":null,"view":{"id":"68284"}},"id":"68283","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68300"},"glyph":{"id":"68301"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68302"},"selection_glyph":null,"view":{"id":"68304"}},"id":"68303","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68367","type":"Line"},{"attributes":{"toolbar":{"id":"68437"},"toolbar_location":"above"},"id":"68438","type":"ToolbarBox"},{"attributes":{"source":{"id":"68280"}},"id":"68284","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68346","type":"Line"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"68429"},"selection_policy":{"id":"68430"}},"id":"68365","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68285"}},"id":"68289","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68371","type":"Circle"},{"attributes":{"toolbars":[{"id":"68246"}],"tools":[{"id":"68236"},{"id":"68237"},{"id":"68238"},{"id":"68239"},{"id":"68240"},{"id":"68241"},{"id":"68242"},{"id":"68243"}]},"id":"68437","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68296","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68372","type":"Circle"},{"attributes":{"source":{"id":"68270"}},"id":"68274","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68362","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68257","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68301","type":"Line"},{"attributes":{"source":{"id":"68360"}},"id":"68364","type":"CDSView"},{"attributes":{"source":{"id":"68295"}},"id":"68299","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68366","type":"Line"},{"attributes":{"source":{"id":"68355"}},"id":"68359","type":"CDSView"},{"attributes":{},"id":"68404","type":"UnionRenderers"},{"attributes":{},"id":"68413","type":"Selection"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"68415"},"selection_policy":{"id":"68416"}},"id":"68330","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68355"},"glyph":{"id":"68356"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68357"},"selection_glyph":null,"view":{"id":"68359"}},"id":"68358","type":"GlyphRenderer"},{"attributes":{},"id":"68416","type":"UnionRenderers"},{"attributes":{},"id":"68226","type":"LinearScale"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68306","type":"Line"},{"attributes":{"axis":{"id":"68228"},"ticker":null},"id":"68231","type":"Grid"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68271","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68425"},"selection_policy":{"id":"68426"}},"id":"68355","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"68397"},"selection_policy":{"id":"68398"}},"id":"68285","type":"ColumnDataSource"},{"attributes":{},"id":"68414","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68365"},"glyph":{"id":"68366"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68367"},"selection_glyph":null,"view":{"id":"68369"}},"id":"68368","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68287","type":"Line"},{"attributes":{},"id":"68241","type":"UndoTool"},{"attributes":{"data_source":{"id":"68290"},"glyph":{"id":"68291"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68292"},"selection_glyph":null,"view":{"id":"68294"}},"id":"68293","type":"GlyphRenderer"},{"attributes":{},"id":"68224","type":"LinearScale"},{"attributes":{"source":{"id":"68365"}},"id":"68369","type":"CDSView"},{"attributes":{"overlay":{"id":"68244"}},"id":"68238","type":"BoxZoomTool"},{"attributes":{},"id":"68411","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68297","type":"Circle"},{"attributes":{},"id":"68408","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"68399"},"selection_policy":{"id":"68400"}},"id":"68290","type":"ColumnDataSource"},{"attributes":{},"id":"68403","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68291","type":"Line"},{"attributes":{},"id":"68229","type":"BasicTicker"},{"attributes":{"source":{"id":"68290"}},"id":"68294","type":"CDSView"},{"attributes":{},"id":"68405","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68311","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68352","type":"Line"},{"attributes":{"data_source":{"id":"68305"},"glyph":{"id":"68306"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68307"},"selection_glyph":null,"view":{"id":"68309"}},"id":"68308","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68292","type":"Line"},{"attributes":{"source":{"id":"68350"}},"id":"68354","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68236"},{"id":"68237"},{"id":"68238"},{"id":"68239"},{"id":"68240"},{"id":"68241"},{"id":"68242"},{"id":"68243"}]},"id":"68246","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68272","type":"Line"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"68423"},"selection_policy":{"id":"68424"}},"id":"68350","type":"ColumnDataSource"},{"attributes":{},"id":"68406","type":"UnionRenderers"},{"attributes":{"source":{"id":"68300"}},"id":"68304","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68356","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68256","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68302","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68307","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68357","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68347","type":"Line"},{"attributes":{},"id":"68417","type":"Selection"},{"attributes":{"axis":{"id":"68232"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"68235","type":"Grid"},{"attributes":{"source":{"id":"68345"}},"id":"68349","type":"CDSView"},{"attributes":{"data_source":{"id":"68255"},"glyph":{"id":"68256"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68257"},"selection_glyph":null,"view":{"id":"68259"}},"id":"68258","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68275"},"glyph":{"id":"68276"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68277"},"selection_glyph":null,"view":{"id":"68279"}},"id":"68278","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68361","type":"Line"},{"attributes":{"data_source":{"id":"68285"},"glyph":{"id":"68286"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68287"},"selection_glyph":null,"view":{"id":"68289"}},"id":"68288","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68351","type":"Line"},{"attributes":{"data_source":{"id":"68360"},"glyph":{"id":"68361"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68362"},"selection_glyph":null,"view":{"id":"68364"}},"id":"68363","type":"GlyphRenderer"},{"attributes":{},"id":"68410","type":"UnionRenderers"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"68427"},"selection_policy":{"id":"68428"}},"id":"68360","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"68383"},"ticker":{"id":"68229"}},"id":"68228","type":"LinearAxis"},{"attributes":{"source":{"id":"68265"}},"id":"68269","type":"CDSView"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68405"},"selection_policy":{"id":"68406"}},"id":"68305","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68340"}},"id":"68344","type":"CDSView"},{"attributes":{},"id":"68407","type":"Selection"},{"attributes":{"data_source":{"id":"68350"},"glyph":{"id":"68351"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68352"},"selection_glyph":null,"view":{"id":"68354"}},"id":"68353","type":"GlyphRenderer"},{"attributes":{},"id":"68236","type":"ResetTool"},{"attributes":{"source":{"id":"68305"}},"id":"68309","type":"CDSView"},{"attributes":{},"id":"68391","type":"Selection"},{"attributes":{},"id":"68418","type":"UnionRenderers"},{"attributes":{"source":{"id":"68260"}},"id":"68264","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68312","type":"Circle"},{"attributes":{},"id":"68386","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68245","type":"PolyAnnotation"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"68417"},"selection_policy":{"id":"68418"}},"id":"68335","type":"ColumnDataSource"},{"attributes":{},"id":"68392","type":"UnionRenderers"},{"attributes":{},"id":"68428","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68320"},"glyph":{"id":"68321"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68322"},"selection_glyph":null,"view":{"id":"68324"}},"id":"68323","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68330"},"glyph":{"id":"68331"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68332"},"selection_glyph":null,"view":{"id":"68334"}},"id":"68333","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68262","type":"Line"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"68391"},"selection_policy":{"id":"68392"}},"id":"68270","type":"ColumnDataSource"},{"attributes":{},"id":"68385","type":"Selection"},{"attributes":{"data_source":{"id":"68270"},"glyph":{"id":"68271"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68272"},"selection_glyph":null,"view":{"id":"68274"}},"id":"68273","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68342","type":"Circle"},{"attributes":{},"id":"68424","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"68389"},"selection_policy":{"id":"68390"}},"id":"68265","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68317","type":"Line"},{"attributes":{},"id":"68427","type":"Selection"},{"attributes":{},"id":"68419","type":"Selection"},{"attributes":{},"id":"68390","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"68413"},"selection_policy":{"id":"68414"}},"id":"68325","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68267","type":"Circle"},{"attributes":{},"id":"68420","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68265"},"glyph":{"id":"68266"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68267"},"selection_glyph":null,"view":{"id":"68269"}},"id":"68268","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"68438"},{"id":"68436"}]},"id":"68439","type":"Column"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68331","type":"Line"},{"attributes":{"below":[{"id":"68228"}],"center":[{"id":"68231"},{"id":"68235"}],"left":[{"id":"68232"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"68258"},{"id":"68263"},{"id":"68268"},{"id":"68273"},{"id":"68278"},{"id":"68283"},{"id":"68288"},{"id":"68293"},{"id":"68298"},{"id":"68303"},{"id":"68308"},{"id":"68313"},{"id":"68318"},{"id":"68323"},{"id":"68328"},{"id":"68333"},{"id":"68338"},{"id":"68343"},{"id":"68348"},{"id":"68353"},{"id":"68358"},{"id":"68363"},{"id":"68368"},{"id":"68373"}],"title":{"id":"68375"},"toolbar":{"id":"68246"},"toolbar_location":null,"x_range":{"id":"68377"},"x_scale":{"id":"68224"},"y_range":{"id":"68378"},"y_scale":{"id":"68226"}},"id":"68219","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"68325"},"glyph":{"id":"68326"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68327"},"selection_glyph":null,"view":{"id":"68329"}},"id":"68328","type":"GlyphRenderer"},{"attributes":{},"id":"68393","type":"Selection"},{"attributes":{"data_source":{"id":"68310"},"glyph":{"id":"68311"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68312"},"selection_glyph":null,"view":{"id":"68314"}},"id":"68313","type":"GlyphRenderer"},{"attributes":{},"id":"68394","type":"UnionRenderers"},{"attributes":{"source":{"id":"68310"}},"id":"68314","type":"CDSView"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"68409"},"selection_policy":{"id":"68410"}},"id":"68315","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68325"}},"id":"68329","type":"CDSView"},{"attributes":{},"id":"68400","type":"UnionRenderers"},{"attributes":{"bounds":"auto","min_interval":1},"id":"68377","type":"DataRange1d"},{"attributes":{"source":{"id":"68335"}},"id":"68339","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68332","type":"Line"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"68387"},"selection_policy":{"id":"68388"}},"id":"68260","type":"ColumnDataSource"},{"attributes":{},"id":"68421","type":"Selection"},{"attributes":{"children":[[{"id":"68219"},0,0]]},"id":"68436","type":"GridBox"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68321","type":"Line"},{"attributes":{},"id":"68429","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68341","type":"Circle"},{"attributes":{},"id":"68395","type":"Selection"},{"attributes":{},"id":"68384","type":"BasicTickFormatter"},{"attributes":{},"id":"68422","type":"UnionRenderers"},{"attributes":{},"id":"68426","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"68421"},"selection_policy":{"id":"68422"}},"id":"68345","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68255"}},"id":"68259","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68336","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68337","type":"Line"},{"attributes":{},"id":"68388","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"68411"},"selection_policy":{"id":"68412"}},"id":"68320","type":"ColumnDataSource"},{"attributes":{},"id":"68383","type":"BasicTickFormatter"},{"attributes":{},"id":"68399","type":"Selection"},{"attributes":{"data_source":{"id":"68260"},"glyph":{"id":"68261"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68262"},"selection_glyph":null,"view":{"id":"68264"}},"id":"68263","type":"GlyphRenderer"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"68379","type":"FixedTicker"},{"attributes":{},"id":"68387","type":"Selection"},{"attributes":{"source":{"id":"68330"}},"id":"68334","type":"CDSView"},{"attributes":{},"id":"68423","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68322","type":"Line"},{"attributes":{},"id":"68389","type":"Selection"},{"attributes":{"text":"94.0% HDI"},"id":"68375","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68327","type":"Circle"},{"attributes":{"data_source":{"id":"68340"},"glyph":{"id":"68341"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68342"},"selection_glyph":null,"view":{"id":"68344"}},"id":"68343","type":"GlyphRenderer"},{"attributes":{},"id":"68402","type":"UnionRenderers"},{"attributes":{},"id":"68430","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68244","type":"BoxAnnotation"},{"attributes":{},"id":"68425","type":"Selection"},{"attributes":{"source":{"id":"68320"}},"id":"68324","type":"CDSView"},{"attributes":{},"id":"68431","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68326","type":"Circle"},{"attributes":{"source":{"id":"68315"}},"id":"68319","type":"CDSView"},{"attributes":{},"id":"68397","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68266","type":"Circle"},{"attributes":{"data_source":{"id":"68345"},"glyph":{"id":"68346"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68347"},"selection_glyph":null,"view":{"id":"68349"}},"id":"68348","type":"GlyphRenderer"},{"attributes":{},"id":"68401","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68419"},"selection_policy":{"id":"68420"}},"id":"68340","type":"ColumnDataSource"},{"attributes":{},"id":"68396","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68316","type":"Line"},{"attributes":{},"id":"68432","type":"UnionRenderers"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"68378","type":"DataRange1d"},{"attributes":{},"id":"68398","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68261","type":"Line"},{"attributes":{"data_source":{"id":"68335"},"glyph":{"id":"68336"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68337"},"selection_glyph":null,"view":{"id":"68339"}},"id":"68338","type":"GlyphRenderer"}],"root_ids":["68439"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"ab20774d-43e9-4cae-913d-b24d67f80899","root_ids":["68439"],"roots":{"68439":"76edc5e7-4de4-426e-a6bf-56c21e87c91b"}}];
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