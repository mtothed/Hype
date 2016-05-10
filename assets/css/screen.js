import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%",
        "height": "100%",
        "maxHeight": "100%",
        "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "maxHeight": "100%",
        "fontFamily": "\"Merriweather\", serif",
        "letterSpacing": 0.01,
        "lineHeight": 1.75,
        "color": "#3A4145",
        "WebkitFontFeatureSettings": "'kern' 1",
        "MozFontFeatureSettings": "'kern' 1",
        "OFontFeatureSettings": "'kern' 1",
        "textRendering": "geometricPrecision"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 40,
        "marginBottom": 1,
        "marginLeft": 40
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "zIndex": 5,
        "width": 240,
        "opacity": 0,
        "background": "#111",
        "marginBottom": 0,
        "textAlign": "left",
        "overflowY": "auto",
        "WebkitTransition": "-webkit-transform 0.5s ease,                        opacity 0.3s ease 0.7s",
        "transition": "transform 0.5s ease,                        opacity 0.3s ease 0.7s"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent",
        "color": "#4A4A4A",
        "transition": "color 0.3s ease"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0,
        "color": "#111"
    },
    "abbr[title]": {
        "borderBottom": "1px dotted"
    },
    "b": {
        "fontWeight": "bold"
    },
    "strong": {
        "fontWeight": "bold"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "WebkitFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "OFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "color": "#2E2E2E",
        "lineHeight": 1.15,
        "fontFamily": "\"Open Sans\", sans-serif",
        "textRendering": "geometricPrecision",
        "letterSpacing": -2,
        "textIndent": -3
    },
    "mark": {
        "background": "#ff0",
        "color": "#000",
        "backgroundColor": "#fdffb6"
    },
    "small": {
        "fontSize": "80%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 1,
        "display": "block",
        "border": 0,
        "borderTop": "#EFEFEF 1px solid",
        "marginTop": 3.2,
        "marginRight": 0,
        "marginBottom": 3.2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "Inconsolata, monospace, sans-serif",
        "fontSize": 0.9,
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": 0,
        "border": "#E3EDF3 1px solid",
        "width": "100%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "whiteSpace": "pre",
        "background": "#F7FAFB",
        "borderRadius": 3
    },
    "code": {
        "fontFamily": "Inconsolata, monospace, sans-serif",
        "fontSize": 0.85,
        "paddingTop": 1,
        "paddingRight": 3,
        "paddingBottom": 1,
        "paddingLeft": 3,
        "whiteSpace": "pre-wrap",
        "border": "#E3EDF3 1px solid",
        "background": "#F7FAFB",
        "borderRadius": 2,
        "WebkitFontFeatureSettings": "\"liga\" 0",
        "MozFontFeatureSettings": "\"liga\" 0",
        "fontFeatureSettings": "\"liga\" 0"
    },
    "kbd": {
        "fontFamily": "monospace, monospace",
        "fontSize": 0.9,
        "display": "inline-block",
        "marginBottom": 0.4,
        "paddingTop": 1,
        "paddingRight": 8,
        "paddingBottom": 1,
        "paddingLeft": 8,
        "border": "#CCC 1px solid",
        "color": "#666",
        "textShadow": "#FFF 0 1px 0",
        "fontWeight": 700,
        "background": "#F4F4F4",
        "borderRadius": 4,
        "boxShadow": "0 1px 0 rgba(0, 0, 0, 0.2),        0 1px 0 0 #fff inset"
    },
    "samp": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none"
    },
    "textarea": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto"
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "textfield"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "border": "1px solid #c0c0c0",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625
    },
    "legend": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginTop": 1.75,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": 0,
        "width": "100%",
        "maxWidth": "100%",
        "backgroundColor": "transparent"
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "[class^=\"icon-\"]:before": {
        "fontFamily": "\"casper-icons\", \"Open Sans\", sans-serif",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "textDecoration": "none !important",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "[class*=\" icon-\"]:before": {
        "fontFamily": "\"casper-icons\", \"Open Sans\", sans-serif",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "textDecoration": "none !important",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-ghost:before": {
        "content": "\\f600"
    },
    "icon-feed:before": {
        "content": "\\f601"
    },
    "icon-twitter:before": {
        "content": "\\f602"
    },
    "icon-google-plus:before": {
        "content": "\\f603"
    },
    "icon-facebook:before": {
        "content": "\\f604"
    },
    "icon-arrow-left:before": {
        "content": "\\f605"
    },
    "icon-stats:before": {
        "content": "\\f606"
    },
    "icon-location:before": {
        "content": "\\f607",
        "marginLeft": -3
    },
    "icon-link:before": {
        "content": "\\f608"
    },
    "icon-menu:before": {
        "content": "\\f609"
    },
    "::-moz-selection": {
        "background": "#D6EDFF"
    },
    "::selection": {
        "background": "#D6EDFF"
    },
    "h2": {
        "WebkitFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "OFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "color": "#2E2E2E",
        "lineHeight": 1.15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\", sans-serif",
        "textRendering": "geometricPrecision",
        "letterSpacing": -1
    },
    "h3": {
        "WebkitFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "OFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "color": "#2E2E2E",
        "lineHeight": 1.15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\", sans-serif",
        "textRendering": "geometricPrecision"
    },
    "h4": {
        "WebkitFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "OFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "color": "#2E2E2E",
        "lineHeight": 1.15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\", sans-serif",
        "textRendering": "geometricPrecision"
    },
    "h5": {
        "WebkitFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "OFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "color": "#2E2E2E",
        "lineHeight": 1.15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\", sans-serif",
        "textRendering": "geometricPrecision"
    },
    "h6": {
        "WebkitFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "OFontFeatureSettings": "'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1",
        "color": "#2E2E2E",
        "lineHeight": 1.15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\", sans-serif",
        "textRendering": "geometricPrecision"
    },
    "p": {
        "WebkitFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "OFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": 0,
        "textRendering": "geometricPrecision"
    },
    "ul": {
        "WebkitFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "OFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": 0,
        "textRendering": "geometricPrecision",
        "paddingLeft": 3
    },
    "ol": {
        "WebkitFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "OFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": 0,
        "textRendering": "geometricPrecision",
        "paddingLeft": 3
    },
    "dl": {
        "WebkitFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "MozFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "OFontFeatureSettings": "'liga' 1, 'onum' 1, 'kern' 1",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": 0,
        "textRendering": "geometricPrecision"
    },
    "ol ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "paddingLeft": 2
    },
    "ul ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "paddingLeft": 2
    },
    "ul ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "paddingLeft": 2
    },
    "ol ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "paddingLeft": 2
    },
    "dl dt": {
        "float": "left",
        "width": 180,
        "overflow": "hidden",
        "clear": "left",
        "textAlign": "right",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "fontWeight": 700,
        "marginBottom": 1
    },
    "dl dd": {
        "marginLeft": 200,
        "marginBottom": 1
    },
    "li": {
        "marginTop": 0.4,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0
    },
    "li li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "blockquote": {
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginTop": 1.75,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": -2.2,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.75,
        "borderLeft": "#4A4A4A 0.4em solid"
    },
    "blockquote p": {
        "marginTop": 0.8,
        "marginRight": 0,
        "marginBottom": 0.8,
        "marginLeft": 0,
        "fontStyle": "italic"
    },
    "blockquote small": {
        "display": "inline-block",
        "marginTop": 0.8,
        "marginRight": 0,
        "marginBottom": 0.8,
        "marginLeft": 1.5,
        "fontSize": 0.9,
        "color": "#CCC"
    },
    "blockquote small:before": {
        "content": "\\2014 \\00A0"
    },
    "blockquote cite": {
        "fontWeight": 700
    },
    "blockquote cite a": {
        "fontWeight": "normal"
    },
    "tt": {
        "paddingTop": 1,
        "paddingRight": 3,
        "paddingBottom": 1,
        "paddingLeft": 3,
        "fontFamily": "Inconsolata, monospace, sans-serif",
        "fontSize": 0.85,
        "whiteSpace": "pre-wrap",
        "border": "#E3EDF3 1px solid",
        "background": "#F7FAFB",
        "borderRadius": 2,
        "WebkitFontFeatureSettings": "\"liga\" 0",
        "MozFontFeatureSettings": "\"liga\" 0",
        "fontFeatureSettings": "\"liga\" 0"
    },
    "pre code": {
        "fontSize": "inherit",
        "whiteSpace": "pre-wrap",
        "background": "transparent",
        "border": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "pre tt": {
        "fontSize": "inherit",
        "whiteSpace": "pre-wrap",
        "background": "transparent",
        "border": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "table th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 20,
        "textAlign": "left",
        "verticalAlign": "top",
        "borderTop": "#EFEFEF 1px solid",
        "color": "#000"
    },
    "table td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 20,
        "textAlign": "left",
        "verticalAlign": "top",
        "borderTop": "#EFEFEF 1px solid"
    },
    "table caption + thead tr:first-child th": {
        "borderTop": 0
    },
    "table caption + thead tr:first-child td": {
        "borderTop": 0
    },
    "table colgroup + thead tr:first-child th": {
        "borderTop": 0
    },
    "table colgroup + thead tr:first-child td": {
        "borderTop": 0
    },
    "table thead:first-child tr:first-child th": {
        "borderTop": 0
    },
    "table thead:first-child tr:first-child td": {
        "borderTop": 0
    },
    "table tbody + tbody": {
        "borderTop": "#EFEFEF 2px solid"
    },
    "table table table": {
        "backgroundColor": "#FFF"
    },
    "table tbody > tr:nth-child(odd) > td": {
        "backgroundColor": "#F6F6F6"
    },
    "table tbody > tr:nth-child(odd) > th": {
        "backgroundColor": "#F6F6F6"
    },
    "tableplain tbody > tr:nth-child(odd) > td": {
        "background": "transparent"
    },
    "tableplain tbody > tr:nth-child(odd) > th": {
        "background": "transparent"
    },
    "iframe": {
        "display": "block",
        "marginTop": 1.75,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": 0
    },
    "fluid-width-video-wrapper": {
        "display": "block",
        "marginTop": 1.75,
        "marginRight": 0,
        "marginBottom": 1.75,
        "marginLeft": 0
    },
    "fluid-width-video-wrapper iframe": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "clearfix:before": {
        "content": " ",
        "display": "table"
    },
    "clearfix:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "clearfix": {
        "zoom": 1
    },
    "hidden": {
        "textIndent": -9999,
        "visibility": "hidden",
        "display": "none"
    },
    "inner": {
        "position": "relative",
        "width": "80%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "vertical": {
        "display": "table-cell",
        "verticalAlign": "middle"
    },
    "site-wrapper": {
        "position": "relative",
        "zIndex": 10,
        "minHeight": "100%",
        "background": "#fff",
        "WebkitTransition": "-webkit-transform 0.5s ease",
        "transition": "transform 0.5s ease"
    },
    "bodynav-opened site-wrapper": {
        "overflowX": "hidden",
        "WebkitTransform": "translate3D(-240px, 0, 0)",
        "MsTransform": "translate3D(-240px, 0, 0)",
        "transform": "translate3D(-240px, 0, 0)",
        "WebkitTransition": "-webkit-transform 0.3s ease",
        "transition": "transform 0.3s ease"
    },
    "top-bar": {
        "backgroundColor": "white !important"
    },
    "top-bar ul": {
        "backgroundColor": "white !important"
    },
    "main-header": {
        "position": "relative",
        "display": "table",
        "width": "100%",
        "height": 50 * vh,
        "textAlign": "center",
        "background": "#222 no-repeat center center",
        "backgroundSize": "cover",
        "overflow": "hidden"
    },
    "main-header inner": {
        "width": "80%"
    },
    "main-nav": {
        "position": "relative",
        "paddingTop": 35,
        "paddingRight": 40,
        "paddingBottom": 35,
        "paddingLeft": 40,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "main-nav a": {
        "textDecoration": "none",
        "fontFamily": "'Open Sans', sans-serif"
    },
    "bodynav-opened nav-cover": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 240,
        "bottom": 0,
        "zIndex": 200
    },
    "bodynav-closed nav": {
        "WebkitTransform": "translate3D(97px, 0, 0)",
        "MsTransform": "translate3D(97px, 0, 0)",
        "transform": "translate3D(97px, 0, 0)"
    },
    "bodynav-opened nav": {
        "opacity": 1,
        "WebkitTransition": "-webkit-transform 0.3s ease,                        opacity 0s ease 0s",
        "transition": "transform 0.3s ease,                        opacity 0s ease 0s",
        "WebkitTransform": "translate3D(0, 0, 0)",
        "MsTransform": "translate3D(0, 0, 0)",
        "transform": "translate3D(0, 0, 0)"
    },
    "nav-title": {
        "position": "absolute",
        "top": 45,
        "left": 30,
        "fontSize": 16,
        "fontWeight": 100,
        "textTransform": "uppercase",
        "color": "#fff"
    },
    "nav-close": {
        "position": "absolute",
        "top": 38,
        "right": 25,
        "width": 20,
        "height": 20,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 10
    },
    "nav-close:focus": {
        "outline": 0
    },
    "nav-close:before": {
        "content": "''",
        "position": "absolute",
        "top": 15,
        "width": 20,
        "height": 1,
        "background": "rgb(150,150,150)",
        "WebkitTransition": "background 0.15s ease",
        "transition": "background 0.15s ease",
        "WebkitTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "nav-close:after": {
        "content": "''",
        "position": "absolute",
        "top": 15,
        "width": 20,
        "height": 1,
        "background": "rgb(150,150,150)",
        "WebkitTransition": "background 0.15s ease",
        "transition": "background 0.15s ease",
        "WebkitTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "nav-close:hover:before": {
        "background": "rgb(255,255,255)"
    },
    "nav-close:hover:after": {
        "background": "rgb(255,255,255)"
    },
    "nav ul": {
        "paddingTop": 90,
        "paddingRight": "9%",
        "paddingBottom": "5%",
        "paddingLeft": "9%",
        "listStyle": "none",
        "counterReset": "item"
    },
    "nav li:before": {
        "display": "block",
        "float": "right",
        "paddingRight": "4%",
        "paddingLeft": 5,
        "textAlign": "right",
        "verticalAlign": "bottom",
        "color": "#B8B8B8",
        "content": "counter(item, lower-roman)",
        "counterIncrement": "item"
    },
    "nav li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "nav li a": {
        "textDecoration": "none",
        "lineHeight": 1.4,
        "display": "block",
        "paddingTop": 0.6,
        "paddingRight": "4%",
        "paddingBottom": 0.6,
        "paddingLeft": "4%",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "nav li a:after": {
        "display": "inline-block",
        "content": " .......................................................",
        "color": "rgba(255,255,255,0.2)",
        "marginLeft": 5
    },
    "nav nav-current:before": {
        "color": "#fff"
    },
    "nav nav-current a:after": {
        "content": " ",
        "borderBottom": "rgba(255,255,255,0.5) 1px solid",
        "width": "100%",
        "height": 1
    },
    "nav a:link": {
        "color": "#B8B8B8"
    },
    "nav a:visited": {
        "color": "#B8B8B8"
    },
    "nav linav-current a": {
        "color": "#fff"
    },
    "nav a:hover": {
        "color": "#fff"
    },
    "nav a:active": {
        "color": "#fff"
    },
    "nav a:focus": {
        "color": "#fff"
    },
    "subscribe-button": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "block",
        "position": "absolute",
        "bottom": 30,
        "left": 30,
        "right": 30,
        "height": 38,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "color": "#111 !important",
        "textAlign": "center",
        "fontSize": 12,
        "fontFamily": "\"Open Sans\", sans-serif",
        "textTransform": "uppercase",
        "textDecoration": "none",
        "lineHeight": 35,
        "borderRadius": 3,
        "background": "#fff",
        "transition": "all ease 0.3s"
    },
    "subscribe-button:before": {
        "fontSize": 9,
        "marginRight": 6
    },
    "scroll-down": {
        "display": "block",
        "position": "absolute",
        "zIndex": 100,
        "bottom": 45,
        "left": "50%",
        "marginLeft": -16,
        "width": 34,
        "height": 34,
        "fontSize": 34,
        "textAlign": "center",
        "textDecoration": "none",
        "color": "rgba(255,255,255,0.7)",
        "WebkitTransform": "rotate(-90deg)",
        "MsTransform": "rotate(-90deg)",
        "transform": "rotate(-90deg)",
        "WebkitAnimation": "bounce 4s 2s infinite",
        "animation": "bounce 4s 2s infinite"
    },
    "scroll-down:hover": {
        "color": "#fff",
        "WebkitAnimation": "none",
        "animation": "none"
    },
    "home-template main-header:after": {
        "display": "block",
        "content": " ",
        "width": 150,
        "height": 130,
        "borderRadius": "100%",
        "position": "absolute",
        "bottom": 0,
        "left": "50%",
        "marginLeft": -75,
        "background": "radial-gradient(ellipse at center,  rgba(0,0,0,0.15) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%)"
    },
    "no-cover scroll-down": {
        "display": "none"
    },
    "no-covermain-header:after": {
        "display": "none"
    },
    "archive-template scroll-down": {
        "display": "none"
    },
    "archive-template main-header:after": {
        "display": "none"
    },
    "blog-logo": {
        "display": "block",
        "float": "left",
        "background": "none !important",
        "border": "none !important"
    },
    "blog-logo img": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "block",
        "height": 124,
        "width": "auto",
        "borderRadius": "100%",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "menu-button": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "inline-block",
        "float": "right",
        "height": 38,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "borderStyle": "solid",
        "borderWidth": 1,
        "opacity": 1,
        "textAlign": "center",
        "fontSize": 12,
        "textTransform": "uppercase",
        "lineHeight": 35,
        "whiteSpace": "nowrap",
        "borderRadius": 3,
        "transition": "all 0.5s ease"
    },
    "menu-button:before": {
        "fontSize": 12,
        "fontWeight": "bold",
        "marginRight": 6,
        "position": "relative",
        "top": 1
    },
    "menu-button:hover": {
        "background": "#fff"
    },
    "menu-button:focus": {
        "outline": 0
    },
    "nav-closed menu-button": {
        "color": "#2199e8",
        "borderColor": "#2199e8"
    },
    "nav-closed menu-button:hover": {
        "color": "#222"
    },
    "nav-closed no-cover menu-button": {
        "borderColor": "#BFC8CD",
        "color": "#9EABB3"
    },
    "nav-closed no-cover menu-button:hover": {
        "borderColor": "#555",
        "color": "#555"
    },
    "nav-opened menu-button": {
        "paddingTop": 0,
        "paddingRight": 12,
        "paddingBottom": 0,
        "paddingLeft": 12,
        "background": "#111",
        "borderColor": "#111",
        "color": "#fff",
        "WebkitTransform": "translate3D(94px, 0, 0)",
        "MsTransform": "translate3D(94px, 0, 0)",
        "transform": "translate3D(94px, 0, 0)",
        "transition": "all 0.3s ease"
    },
    "nav-opened menu-button word": {
        "opacity": 0,
        "transition": "all 0.3s ease"
    },
    "main-navoverlay": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "height": 90,
        "border": "none",
        "background": "white"
    },
    "no-cover main-navoverlay": {
        "background": "none"
    },
    "page-title": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "letterSpacing": -1,
        "fontWeight": 700,
        "fontFamily": "\"Open Sans\", sans-serif",
        "color": "#fff"
    },
    "page-description": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.5,
        "fontWeight": 700,
        "letterSpacing": 0.01,
        "color": "#2199e8"
    },
    "no-covermain-header": {
        "minHeight": 160,
        "maxHeight": 40 * vh,
        "background": "#f5f8fa"
    },
    "no-cover page-title": {
        "color": "rgba(0,0,0,0.8)"
    },
    "no-cover page-description": {
        "color": "rgba(0,0,0,0.5)"
    },
    "home-template page-title": {
        "WebkitAnimation": "fade-in-down 0.6s",
        "animation": "fade-in-down 0.6s",
        "WebkitAnimationDelay": "0.2s",
        "animationDelay": "0.2s"
    },
    "home-template page-description": {
        "WebkitAnimation": "fade-in-down 0.9s",
        "animation": "fade-in-down 0.9s",
        "WebkitAnimationDelay": "0.1s",
        "animationDelay": "0.1s"
    },
    "post": {
        "position": "relative",
        "width": "70%",
        "marginTop": 4,
        "marginRight": "auto",
        "marginBottom": 4,
        "marginLeft": "auto",
        "paddingBottom": 4,
        "borderBottom": "#EBF2F6 1px solid",
        "wordWrap": "break-word"
    },
    "post-image": {
        "width": 138,
        "height": 138,
        "float": "left",
        "marginRight": "2%",
        "marginBottom": "1%"
    },
    "post-header": {
        "marginTop": 50,
        "marginBottom": "7%"
    },
    "post:after": {
        "display": "block",
        "content": "",
        "width": 7,
        "height": 7,
        "border": "#E7EEF2 1px solid",
        "position": "absolute",
        "bottom": -5,
        "left": "50%",
        "marginLeft": -5,
        "background": "#FFF",
        "borderRadius": "100%",
        "boxShadow": "#FFF 0 0 0 5px"
    },
    "body:not(post-template) post-title": {},
    "post-title": {
        "fontSize": 1.8
    },
    "post-title a": {
        "textDecoration": "none"
    },
    "post-excerpt p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.7
    },
    "read-more": {
        "textDecoration": "none"
    },
    "post-meta": {
        "display": "block",
        "marginTop": 1.75,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\", sans-serif",
        "lineHeight": 2.2,
        "color": "#9EABB3"
    },
    "author-thumb": {
        "width": 24,
        "height": 24,
        "float": "left",
        "marginRight": 9,
        "borderRadius": "100%"
    },
    "post-meta a": {
        "color": "#9EABB3",
        "textDecoration": "none"
    },
    "post-meta a:hover": {
        "textDecoration": "underline"
    },
    "user-meta": {
        "position": "relative",
        "paddingTop": 0.3,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 100,
        "minHeight": 77
    },
    "post-date": {
        "display": "inline-block",
        "marginLeft": 8,
        "paddingLeft": 12,
        "borderLeft": "#d5dbde 1px solid",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap"
    },
    "user-image": {
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "user-name": {
        "display": "block",
        "fontWeight": 700
    },
    "user-bio": {
        "display": "block",
        "maxWidth": 440,
        "lineHeight": 1.5
    },
    "publish-meta": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "paddingTop": 4.3,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "textAlign": "right"
    },
    "publish-heading": {
        "display": "block",
        "fontWeight": 700
    },
    "publish-date": {
        "display": "block",
        "lineHeight": 1.5
    },
    "post-template post-title-cover": {
        "marginBottom": 3.4
    },
    "post-template post-title": {
        "marginBottom": 0
    },
    "post-template post-meta": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "post-template post-date": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": "none"
    },
    "post-template content": {
        "overflow": "hidden"
    },
    "post-template post": {
        "marginTop": 0,
        "borderBottom": "none",
        "paddingBottom": 0
    },
    "post-template post:after": {
        "display": "none"
    },
    "post-content img": {
        "display": "block",
        "maxWidth": "126%",
        "height": "auto",
        "paddingTop": 0.6,
        "paddingRight": 0,
        "paddingBottom": 0.6,
        "paddingLeft": 0,
        "position": "relative",
        "left": "50%",
        "WebkitTransform": "translateX(-50%)",
        "MsTransform": "translateX(-50%)",
        "transform": "translateX(-50%)"
    },
    "footnotes": {
        "fontStyle": "italic",
        "lineHeight": 1.6
    },
    "footnotes li": {
        "marginTop": 0.6,
        "marginRight": 0,
        "marginBottom": 0.6,
        "marginLeft": 0
    },
    "footnotes p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footnotes p a:last-child": {
        "textDecoration": "none"
    },
    "post-footer": {
        "position": "relative",
        "marginTop": 6,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderTop": "#EBF2F6 1px solid"
    },
    "post-footer h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "post-footer p": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "lineHeight": 1.75
    },
    "author-meta": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 1.6,
        "marginRight": 0,
        "marginBottom": 1.6,
        "marginLeft": 0,
        "listStyle": "none",
        "lineHeight": 1,
        "fontStyle": "italic",
        "color": "#9EABB3"
    },
    "author-meta a": {
        "color": "#9EABB3",
        "textDecoration": "none"
    },
    "author-meta a:hover": {
        "color": "#111"
    },
    "post-loop": {
        "marginBottom": "5%"
    },
    "post-footer author": {
        "marginRight": 180
    },
    "post-footer h4 a": {
        "color": "#2e2e2e",
        "textDecoration": "none"
    },
    "post-footer h4 a:hover": {
        "textDecoration": "underline"
    },
    "post-footer share": {
        "position": "absolute",
        "top": 6,
        "right": 0
    },
    "post-footer share a": {
        "display": "inline-block",
        "marginTop": 1,
        "marginRight": 1.6,
        "marginBottom": 1.6,
        "marginLeft": 0,
        "color": "#BBC7CC",
        "textDecoration": "none"
    },
    "post-footer share icon-twitter:hover": {
        "color": "#55acee"
    },
    "post-footer share icon-facebook:hover": {
        "color": "#3b5998"
    },
    "post-footer share icon-google-plus:hover": {
        "color": "#dd4b39"
    },
    "post-headmain-header": {
        "height": 65 * vh,
        "minHeight": 180
    },
    "no-coverpost-headmain-header": {
        "height": 85,
        "minHeight": 0,
        "marginBottom": 0,
        "background": "transparent"
    },
    "tag-headmain-header": {
        "height": 40 * vh,
        "minHeight": 180
    },
    "author-headmain-header": {
        "height": 40 * vh,
        "minHeight": 180
    },
    "no-coverauthor-headmain-header": {
        "height": 10 * vh,
        "minHeight": 100,
        "background": "transparent"
    },
    "author-profile": {
        "borderBottom": "#EBF2F6 1px solid",
        "textAlign": "center"
    },
    "author-profile:after": {
        "display": "block",
        "content": "",
        "width": 7,
        "height": 7,
        "border": "#E7EEF2 1px solid",
        "position": "absolute",
        "bottom": -5,
        "left": "50%",
        "marginLeft": -5,
        "background": "#FFF",
        "borderRadius": "100%",
        "boxShadow": "#FFF 0 0 0 5px"
    },
    "author-image": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "block",
        "position": "absolute",
        "top": -40,
        "left": "50%",
        "marginLeft": -40,
        "width": 80,
        "height": 80,
        "borderRadius": "100%",
        "overflow": "hidden",
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "background": "#fff",
        "zIndex": 2,
        "boxShadow": "#E7EEF2 0 0 0 1px"
    },
    "author-image img": {
        "position": "relative",
        "display": "block",
        "width": "100%",
        "height": "100%",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "borderRadius": "100%"
    },
    "author-profile author-image": {
        "position": "relative",
        "left": "auto",
        "top": "auto",
        "width": 120,
        "height": 120,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "marginTop": -100,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "boxShadow": "none"
    },
    "author-title": {
        "marginTop": 1.5,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "author-bio": {
        "lineHeight": 1.5,
        "fontWeight": 200,
        "color": "#50585D",
        "letterSpacing": 0,
        "textIndent": 0
    },
    "author-profile author-meta": {
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "fontFamily": "\"Merriweather\", serif",
        "letterSpacing": 0.01
    },
    "author-meta span": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 1,
        "marginLeft": 0,
        "wordWrap": "break-word"
    },
    "archive-template author-profile author-meta": {
        "display": "none"
    },
    "read-next": {
        "display": "flex",
        "WebkitBoxAlign": "stretch",
        "WebkitAlignItems": "stretch",
        "MsFlexAlign": "stretch",
        "alignItems": "stretch",
        "marginTop": 10
    },
    "read-next-story": {
        "display": "flex",
        "WebkitBoxFlex": 1,
        "WebkitFlexGrow": 1,
        "MsFlexPositive": 1,
        "flexGrow": 1,
        "minWidth": "50%",
        "textDecoration": "none",
        "position": "relative",
        "textAlign": "center",
        "color": "#fff",
        "background": "#222 no-repeat center center",
        "backgroundSize": "cover",
        "overflow": "hidden"
    },
    "read-next-story:hover:before": {
        "background": "rgba(0,0,0,0.8)",
        "transition": "all 0.2s ease"
    },
    "read-next-story:hover post:before": {
        "color": "#222",
        "background": "#fff",
        "transition": "all 0.2s ease"
    },
    "read-next-story:before": {
        "content": "",
        "display": "block",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "background": "rgba(0,0,0,0.7)",
        "transition": "all 0.5s ease"
    },
    "read-next-story post": {
        "paddingTop": 6,
        "paddingBottom": 6
    },
    "read-next-story post:before": {
        "content": "Read This Next",
        "paddingTop": 4,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "textTransform": "uppercase",
        "fontFamily": "\"Open Sans\", sans-serif",
        "color": "rgba(255,255,255,0.8)",
        "border": "rgba(255,255,255,0.5) 1px solid",
        "borderRadius": 4,
        "transition": "all 0.5s ease"
    },
    "read-next-storyprev post:before": {
        "content": "Te puede interesar"
    },
    "read-next-story h2": {
        "marginTop": 1,
        "color": "#fff"
    },
    "read-next-story p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "rgba(255,255,255,0.8)"
    },
    "read-next-storyno-cover": {
        "background": "#f5f8fa"
    },
    "read-next-storyno-cover:before": {
        "display": "none"
    },
    "read-next-storyno-cover post:before": {
        "color": "rgba(0,0,0,0.5)",
        "borderColor": "rgba(0,0,0,0.2)"
    },
    "read-next-storyno-cover h2": {
        "color": "rgba(0,0,0,0.8)"
    },
    "read-next-storyno-cover p": {
        "color": "rgba(0,0,0,0.5)"
    },
    "read-next-storyno-cover + read-next-storyno-cover": {
        "borderLeft": "rgba(0,0,100,0.04) 1px solid",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "read-next + site-footer": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "gist table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textRendering": "auto"
    },
    "gist td": {
        "lineHeight": 1.4
    },
    "gist line-number": {
        "minWidth": 25
    },
    "content embedPastebin": {
        "marginBottom": 1.75
    },
    "content-main-loop": {
        "marginTop": 5
    },
    "pagination": {
        "position": "relative",
        "marginTop": 4,
        "marginRight": "auto",
        "marginBottom": 4,
        "marginLeft": "auto",
        "fontFamily": "\"Open Sans\", sans-serif",
        "color": "#9EABB3",
        "textAlign": "center"
    },
    "pagination a": {
        "color": "#9EABB3",
        "transition": "all 0.2s ease"
    },
    "older-posts": {
        "position": "absolute",
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "border": "#bfc8cd 1px solid",
        "textDecoration": "none",
        "borderRadius": 4,
        "transition": "border 0.3s ease",
        "right": 0
    },
    "newer-posts": {
        "position": "absolute",
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "border": "#bfc8cd 1px solid",
        "textDecoration": "none",
        "borderRadius": 4,
        "transition": "border 0.3s ease",
        "left": 0
    },
    "page-number": {
        "display": "inline-block",
        "paddingTop": 2,
        "paddingRight": 0,
        "paddingBottom": 2,
        "paddingLeft": 0,
        "minWidth": 100
    },
    "older-posts:hover": {
        "color": "#889093",
        "borderColor": "#98a0a4"
    },
    "newer-posts:hover": {
        "color": "#889093",
        "borderColor": "#98a0a4"
    },
    "extra-pagination": {
        "display": "none",
        "borderBottom": "#EBF2F6 1px solid"
    },
    "extra-pagination:after": {
        "display": "block",
        "content": "",
        "width": 7,
        "height": 7,
        "border": "#E7EEF2 1px solid",
        "position": "absolute",
        "bottom": -5,
        "left": "50%",
        "marginLeft": -5,
        "background": "#FFF",
        "borderRadius": "100%",
        "boxShadow": "#FFF 0 0 0 5px"
    },
    "extra-pagination pagination": {
        "width": "auto"
    },
    "archive-template main-header": {
        "maxHeight": 30 * vh
    },
    "archive-template extra-pagination": {
        "display": "block"
    },
    "site-footer": {
        "position": "relative",
        "marginTop": 8,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 1,
        "paddingRight": 15,
        "paddingBottom": 1,
        "paddingLeft": 15,
        "fontFamily": "\"Open Sans\", sans-serif",
        "lineHeight": 1.75,
        "color": "#BBC7CC"
    },
    "site-footer a": {
        "color": "#BBC7CC",
        "textDecoration": "none",
        "fontWeight": "bold"
    },
    "site-footer a:hover": {
        "borderBottom": "#bbc7cc 1px solid"
    },
    "poweredby": {
        "display": "block",
        "width": "45%",
        "float": "right",
        "textAlign": "right"
    },
    "copyright": {
        "display": "block",
        "width": "45%",
        "float": "left"
    }
});