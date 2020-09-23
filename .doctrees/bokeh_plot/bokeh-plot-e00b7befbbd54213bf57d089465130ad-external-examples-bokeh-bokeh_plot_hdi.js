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
    
      
      
    
      var element = document.getElementById("741b9cb4-7f48-4e06-9e0e-3d687d3cd0dd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '741b9cb4-7f48-4e06-9e0e-3d687d3cd0dd' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0b3ab8e4-5c14-4e49-a2ee-bf1824dba85b":{"roots":{"references":[{"attributes":{"source":{"id":"69047"}},"id":"69051","type":"CDSView"},{"attributes":{"source":{"id":"69042"}},"id":"69046","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"69049","type":"Line"},{"attributes":{},"id":"69029","type":"SaveTool"},{"attributes":{},"id":"69026","type":"WheelZoomTool"},{"attributes":{},"id":"69023","type":"ResetTool"},{"attributes":{},"id":"69058","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"69044","type":"Patch"},{"attributes":{"overlay":{"id":"69031"}},"id":"69025","type":"BoxZoomTool"},{"attributes":{},"id":"69059","type":"UnionRenderers"},{"attributes":{},"id":"69055","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"69032","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"69031","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"69042"},"glyph":{"id":"69043"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69044"},"selection_glyph":null,"view":{"id":"69046"}},"id":"69045","type":"GlyphRenderer"},{"attributes":{},"id":"69028","type":"UndoTool"},{"attributes":{},"id":"69013","type":"LinearScale"},{"attributes":{"formatter":{"id":"69055"},"ticker":{"id":"69016"}},"id":"69015","type":"LinearAxis"},{"attributes":{},"id":"69060","type":"Selection"},{"attributes":{},"id":"69011","type":"LinearScale"},{"attributes":{},"id":"69061","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"gJlEz3OKyr921N46+kXIv6588abABsa/KZJ8E8fMw7/lFICADZjBv8YJ+Nsn0b6/RsTgt7R8ur9KWbqUwTK2v9LIhHJO87G/uCWAorZ8q7/Ybthh0CejvwDaJEbUz5W/gAFxMR/odb+A3lFTiWOFP8C06huRs5o/GIg0xa5FpT/QAJL6lBytPzziBpc9b7I/jOnTr7BFtj9YFrDHoxG6P6hom94W070/NvBK+gTFwD/Wvs+EPpvCPzgg3A44bMQ/VBRwmPE3xj8um4sha/7HP8i0Lqqkv8k/PWNZMp57yz+3Hem3V8rNP8EClDX9AdA/Ej2Zv98I0T8cUj+HAPbRP2p598zavNI/8XYPnYpq0z8o6KxKhjHUP/8HAz437tQ/+dxxar2h1T+o7araOU3WP69AsbDO8dY/x1zZJZ+Q1z+0SMmKzyrYPxj3Dv4Rydg/S2V/B1Ru2T+kC0hxOvXZP+2uEDiThto/X/w2nAfk2j/+32JIVnDbP1w/4wepJdw/ezVF5obp3D92I1ba+6vdP8Xi2Mqjbt4/OCrpyxkz3z/8jfse+PrfP8m/bhnsY+A/Wn0jwnTa4D/RIFMfuXfhPwis57U5BOI/cLTfoedh4j9zXkOGosTiP4oMjmRjK+M/RsFbVzKW4z+qDWe1kfrjP/3tsk7dXuQ/WVWnwWbX5D+Sp7uew2zlP7+gK0QD4OU/3wFcYdFe5j/LabqwXtfmP3Xab+kDQuc/jCPt23hx5z9RK+IUO9XnP4tOEFE1QOg/V4q2Pvmv6D/SQDpRkkTpPxzXSIegzOk/CbJEZgcz6j93Q95pJ5XqP4LcPZ9ZEes/OtA7WQCJ6z8N79LrdeTrP7XC2uC+EOw/gXyY9AFR7D8TFQ6dLZnsP2yw3Dkt6Ow/mkbkevc87T+yo0NgjpbtPwQfU8CN8+0/7NVgZe1E7j9co7N7lpLuPwoRUHdg1u4/NAlQXmoi7z/um2G+uHXvPyTgBaFez+8/9SXpv0AO8D8CgGA7wDXwP8jIPUG+avA/VcfUrdSe8D/ffnnNr8HwP6cNV8oW8fA/bodN7Uwj8T9BBtfgw2nxP0w+zwIjpfE/xDVDfIDM8T/h1AW3uvPxPzgT5f8fIPI/P5508ytR8j8K0VdzY4byP1Bqd0v/p/I/y9i6/yTF8j+R3ke2lPfyP2+p7jCiCPM/Vp2Ie4MZ8z8mcRAIMkjzP1Y/dTyEbfM/oo4DhvGk8z8hstWRNvHzP51lxksYL/Q/0sfD4TB99D+jj2+3QLL0PymzLO+X0/Q/m6TVTfsU9T/yrYE3Y0/1P3TbI1p1fvU/u1pmSjKg9T/2TuTWZ+P1PzcXM1OvFvY/Oy3aKXdG9j/+jFPkjHP2P7Nqx/4LjPY/A2fgTyuj9j/PMV7qwcX2P5pxIcG/5/Y/+KgPUOoE9z+jSLJ1ox/3PysZWKSBQPc/RLZRawB49z9HxkoOAqj3P9OmNgq91fc/SY24q40D+D/rNTwEgi34P635p5/FVPg/raotTVeB+D+WTZsfQLn4Py7QcTlt+Pg/p2AKRdo3+T+cmxQ5SXX5P85T3wAeqPk/VgeayfTN+T9uhKHPjfz5P3jA1QViMPo/ikfiGGtZ+j+gV//C0ID6PxlH0O9+t/o/ANf36p3r+j+U30rkEhz7P7muAy28R/s/HZPRgyx2+z+cZP4+ZLH7PzCk3MDX6/s/Nru3AL8i/D+mWHtEIVX8P91Vmfb/gfw/BsjCElTE/D+d0ljnnxL9P0VpEtc3SP0/rogs9h+J/T/YAFPrGdD9P4IuejGDE/4/hEw4pxhn/j99X8wFc7D+P8KIJtlq5/4/ESaF4Rou/z+xe6oa2Vr/P/43Ouerj/8/zdVYL4LD/z+zUgbzW/b/P1hXIZkcFABA4fSG9owsAED1AbQRf0QAQJV+qOryWwBAwGpkgehyAEB2xufVX4kAQLiRMuhYnwBAhMxEuNO0AEDcdh5G0MkAQL+Qv5FO3gBALhoom07yAEAnE1hi0AUBQKx7T+fTGAFAvFMOKlkrAUBWm5QqYD0BQH1S4ujoTgFALnn3ZPNfAUBrD9Sef3ABQDMVeJaNgAFAhorjSx2QAUBkbxa/Lp8BQM7DEPDBrQFAw4fS3ta7AUBDu1uLbckBQCfFJDP77g9ACS2FAg3fD0B7M+G6584PQH7YOFyLvg9AERyM5vetD0A1/tpZLZ0PQOp+JbYrjA9AL55r+/J6D0AFXK0pg2kPQGy46kDcVw9AY7MjQf5FD0DqTFgq6TMPQAOFiPycIQ9ArFu0txkPD0Dm0NtbX/wOQLDk/uht6Q5AC5cdX0XWDkD35ze+5cIOQHPXTQZPrw5AgGVfN4GbDkAekmxRfIcOQExddVRAcw5AC8d5QM1eDkBaz3kVI0oOQDp2ddNBNQ5Aq7tseikgDkCsn18K2goOQI0kToNT9Q1A75LG4fbyDUD1pmVo0eMNQG4BaNQS2A1AsftOxWC/DUCQr7Eb0qQNQF6TOXgpjw1AE3/Ey5JyDUAeX52sa1sNQCJGGfd9QA1AfxJmTvInDUBZLFTttRENQMlBc0zF/AxATJdkDQPmDEATqPquo80MQGSC6EzcswxAoAR//QCXDECSdPElzHkMQNi2HqGAXQxAYJILkXQ+DEBI+DbfTB0MQH0VhvOq+gtAzNUXV3LiC0DQx4IOzcoLQL4WNPbBrQtAgadd/IaUC0DMg3OhNHILQGun27GTTgtAio1YwQwqC0D47VKcSgcLQMiYvYRc8gpAUO2yWOLoCkAgrx5fXuEKQIBPd2xjygpAllS30riwCkDGkImYBZYKQPLG7NRgfwpAOPpdHKxnCkAP0C2dGlIKQMgbXlm+QgpA1BAsL4E0CkDFR8WNoyQKQA4iLL9nEgpAhHlvUnAACkB6cVu3K/IJQCINgPGv3wlAclzoIm3HCUAoB1flfbAJQFq49XphmglAx5bQFdp9CUB7D4UEhWMJQIP0VjqDSwlABAJdWA82CUC+TdusESQJQEjPMD/CGAlAX0kJ0nf9CEC/NzuahdoIQBBpde9FvghAWqE7WS2fCEDvREzqVY4IQK9XXMjSgQhACOQMZR1vCEDE0XxYdl4IQAzNTWg1SAhA43dDwUkyCEDbqOxZdxwIQHmtO6ssBAhAn/MbjyXpB0CfopzT5M0HQGe6KC4tsgdAW53iMsWVB0A/8Yf6wnYHQKAXnTzfTQdAXjRubl0bB0BsU6QIlOwGQPUADLhSygZAuEiUVPmqBkDFqS9i9X4GQF6ajtMYUAZAKy3FnGEoBkCmb/5YZfwFQDhEpAMQ2QVAxa/TPsG6BUBw4KXU/qEFQF6fB1FUjwVAFaB0tU56BUB7GWRGI2AFQCthwZXFQwVA2AcvTMssBUAfK+ZvHRcFQOLDj/BZAwVAZv9LdyLyBEBkP7JmHOQEQD8KNDVv1ARAQkiSVNW8BEA/QHiL0J8EQLIRFSz7gARAgVWb1j5lBECHDKRFtkcEQA7Dqdr4IwRAfG0yp64BBEDkDKQWGuQDQK2d/iiZxANAwRNwe1ujA0DQ0LhLz4oDQFcYTQqxdQNAfK6mB+xgA0A64AMKb0wDQP2en0w6MwNAsESxH+MQA0A+PcqhmvICQL4JO0H81wJA+NR982q/AkDqWvDKV6UCQEXFYhLLiwJAFI4+qNBxAkCWDf04RVkCQObhXALIRgJAix9HCAA1AkDygRr9CSUCQCd2mzNVEQJAFVCkBRX7AUBRZliI9+EBQLLcFjynxQFATKR6DMulAUB4e1pQBoIBQL3FJkW5XgFAk71hTBlDAUBmFmhPwzABQBDpJWYkIAFAR6uF5WgHAUAXF95tPu8AQFHDizAD2wBAjpJ0ISfKAEBCN2SEPboAQHtXWdJGqwBAvtV/iEKdAEAT0TAoL5AAQP6k8jYKhABAfel4PtB4AECskMFRomoAQEqYWdacYQBA5pbPNWFSAECsvDQ1cEAAQPYYuVb9KwBAyF+LgEoVAECkIRUrq/v/P6ShOs91y/8/Ej2H7fSZ/z/x8/qFKGf/P0DGlZgQM/8//rNXJa39/j8svUAs/sb+P8nhUK0Dj/4/1iGIqL1V/j9SfeYdLBv+Pz/0aw1P3/0/m4YYdyai/T9mNOxasmP9P6H95rjyI/0/TOIIkefi/D9n4lHjkKD8P/H9wa/uXPw/6jRZ9gAY/D9Uhxe3x9H7Py31/PFCivs/dX4Jp3JB+z8tIz3WVvf6P1Xjl3/vq/o/7b4Zozxf+j/0tcJAPhH6P2vIklj0wfk/UfaJ6l5x+T8=","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"69058"},"selection_policy":{"id":"69059"}},"id":"69042","type":"ColumnDataSource"},{"attributes":{},"id":"69009","type":"DataRange1d"},{"attributes":{"overlay":{"id":"69032"}},"id":"69027","type":"LassoSelectTool"},{"attributes":{},"id":"69024","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"sbaA1aBEA8BCQwUSWW4CwFkJxDQRTALAdR9pvNwZ/L+DVvEy1DD6vwJK8mtAdvm/MqUdE+Sa+L+R+7xAlg/4v5JvbKrkMve/mkpUOS529r8dbiooVUr1v6S0u/UGfPO/Qr67dUdq8L+SJMSCl0vvvx2kLT281+6/XKmDKvSX7r8HxU7H2L3pv/25k7to9ee/ugwTOnbC578Z1sf9EG/nv/+6DizLWue/r8W4Z0Th5r8DWRYLWmbmv/dlOVqBKea/4bJ3OBZR5L9n0Ak4YELfv5aB2Qdff96/XgKQwD+M3b/MuPFpgzTcv6rcelViQdu/zCVY5nse279Waahtt9rav+8Hg4psd9m/xpyYcWUM1L9YHnlzs/jNv3UVfzK+Zcu/RfwBtGhqwr99t1l8YSPCv09t9JIpbsC/8BIKDALIu79K/puGgDa7v0ttp8BPB7u/lirjneciur9LoYICxnOgv7fu8BygZZa/wCT8lX29jD97jvqb7DSdP0zmwh4VBqM/VNxwF4zRpT96Wdw43WqzP2JLvgC3TLs/UubKRlkYwz+hJI8NdpTEP1ykK9VyRdE/TLQl81280T8C9qE+wdvUPwCogHvxGNY/fPDbfqrz2z/3OwMhcvTbPyrI9X/za94//1wXleSA3j8rh+a9Tp3gP+xq7b+OWeE/0D7PE3RQ5D9EFeQamhrlP0zzMn9gMeU/dak4TRWS5T+VOARvXYnoP5sXEyTP8ug/Mm5jybWc6T/BABGOcsTqP0kt3cD9+Oo/Nm7fjtGO7D9ckOFSTtbsP/rLmH4lae0/9QGPIU767j9/qcQT2/3uP6ge1is0k+8/MNL2gELf7z/KplU1ORfwPwcsrICvPfA/JCyur+hS8D/kiHGONdDwP7T66nbs+/A/gp2C5tyE8T//FH70J8DyP31e63bJAfM/32FG5RrT9T/EXf2T2zz2PzaX+69r7vc/fT6Hixlf+D/nNdQ5iRn5P2xZkTmlr/k/hT1Ww+cZ+z/brl0FJ3v7PzMFqoWc5fs/n5lv/d1+/D8VaAB6yBIBQAAZASZWygFAFXWZtV6tAkA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"npL+VL526T98efXbTSPrP07td5bdZ+s/RnDLoRHz8T++VIfmlefyP//aBsrfRPM/Zy1x9o2y8z84gqHfNPjzPzfIyaqNZvQ/s9pV4+jE9D/yyOpr1Vr1P64lIoX8QfY/3yAiRdzK9z/c9k4fGi34P/mWtPAQSvg/qRVf9QJa+D++TizOiZD5P4ERG9GlAvo/0jx7cWIP+j96Co7AOyT6P0BR/DRNKfo/lM4R5q5H+j+/aTp9aWb6P4Kmcamfdfo/SBPicbrr+j/zxf74sxf8P83PBB8UMPw/tP/tB3hO/D/myMGSb3n8P2ukULXTl/w/Rvs0gzCc/D/V8koSqaT8PwKfr24S0fw/Z+zMUXN+/T8absjIdCD+P6kO2BykSf4/POC/dFnZ/j+IZDroyd3+Pyu50GYd+f4/aK+f778h/z8OIMv7Syb/P5bE+oHFJ/8/q+YQw+gu/z979fXnML7/PyMexr800/8/Ev7Kvl4OAECO+pvsNB0AQM2FPSoMJgBAueEuGKMrAEBmceN0q00AQC75AtwybQBAM1c2ysKYAEAleWywo6QAQEa6Ui1XFAFARVsy38UbAUBgH+oTvE0BQIAKuBePYQFACL/tpzq/AUC/MxAiR78BQINc/ze/5gFA0HVRSQ7oAUDl0LzXqRMCQF6t/dcxKwJA2ud5gg6KAkCoglxDU6MCQGpe5g8spgJALxWnqUKyAkATh+CtKxEDQPNiguRZHgNAxm0suZYzA0AYIMJRjlgDQKmlG7gfXwNAx+3bMdqRA0AMMlzKyZoDQH8Z068krQNAP+AxxEnfA0AwlXhiu98DQNXDeoVm8gNARtoeUOj7A0CyaVVNzgUEQAILK+BrDwRACYvrK7oUBEA5YpxjDTQEQK2+uh37PgRAYKegOTdhBEBAhR/9CbAEQJ/Xul1ywARAeJhRucZ0BUBxV//kNo8FQM7l/uua+wVAn8/hYsYXBkB6DXVOYkYGQFtWZE7pawZAYY/V8HnGBkC3a1fByd4GQE2BaiFn+QZAaOZbf7cfB0AKNAA9ZIkIQICMABMr5QhAirrMWq9WCUA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"69060"},"selection_policy":{"id":"69061"}},"id":"69047","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"69047"},"glyph":{"id":"69048"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69049"},"selection_glyph":null,"view":{"id":"69051"}},"id":"69050","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"69015"}],"center":[{"id":"69018"},{"id":"69022"}],"left":[{"id":"69019"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"69045"},{"id":"69050"}],"title":{"id":"69052"},"toolbar":{"id":"69033"},"toolbar_location":"above","x_range":{"id":"69007"},"x_scale":{"id":"69011"},"y_range":{"id":"69009"},"y_scale":{"id":"69013"}},"id":"69006","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"69043","type":"Patch"},{"attributes":{"text":""},"id":"69052","type":"Title"},{"attributes":{},"id":"69057","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"69057"},"ticker":{"id":"69020"}},"id":"69019","type":"LinearAxis"},{"attributes":{},"id":"69016","type":"BasicTicker"},{"attributes":{"callback":null},"id":"69030","type":"HoverTool"},{"attributes":{},"id":"69020","type":"BasicTicker"},{"attributes":{},"id":"69007","type":"DataRange1d"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"69048","type":"Line"},{"attributes":{"axis":{"id":"69015"},"ticker":null},"id":"69018","type":"Grid"},{"attributes":{"axis":{"id":"69019"},"dimension":1,"ticker":null},"id":"69022","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69023"},{"id":"69024"},{"id":"69025"},{"id":"69026"},{"id":"69027"},{"id":"69028"},{"id":"69029"},{"id":"69030"}]},"id":"69033","type":"Toolbar"}],"root_ids":["69006"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"0b3ab8e4-5c14-4e49-a2ee-bf1824dba85b","root_ids":["69006"],"roots":{"69006":"741b9cb4-7f48-4e06-9e0e-3d687d3cd0dd"}}];
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