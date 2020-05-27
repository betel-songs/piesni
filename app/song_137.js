/*
 * JS for song_137 generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '0c2b18ad-30dc-4103-ae45-9fdf77d705b4';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "song_137",
    "location": "song_137.html"
}, {
    "name": "songList",
    "location": "songList.html"
}, {
    "name": "song_99",
    "location": "song_99.html"
}, {
    "name": "song_109",
    "location": "song_109.html"
}, {
    "name": "song_101",
    "location": "song_101.html"
}, {
    "name": "song_107",
    "location": "song_107.html"
}, {
    "name": "song_106",
    "location": "song_106.html"
}, {
    "name": "song_111",
    "location": "song_111.html"
}, {
    "name": "song_112",
    "location": "song_112.html"
}, {
    "name": "song_105",
    "location": "song_105.html"
}, {
    "name": "song_116",
    "location": "song_116.html"
}, {
    "name": "song_108",
    "location": "song_108.html"
}, {
    "name": "song_118",
    "location": "song_118.html"
}, {
    "name": "song_119",
    "location": "song_119.html"
}, {
    "name": "song_123",
    "location": "song_123.html"
}, {
    "name": "song_122",
    "location": "song_122.html"
}, {
    "name": "song_128",
    "location": "song_128.html"
}, {
    "name": "song_136",
    "location": "song_136.html"
}, {
    "name": "song_125",
    "location": "song_125.html"
}, {
    "name": "song_134",
    "location": "song_134.html"
}, {
    "name": "song_130",
    "location": "song_130.html"
}, {
    "name": "song_126",
    "location": "song_126.html"
}, {
    "name": "song_120",
    "location": "song_120.html"
}, {
    "name": "song_124",
    "location": "song_124.html"
}, {
    "name": "song_97",
    "location": "song_97.html"
}, {
    "name": "song_110",
    "location": "song_110.html"
}, {
    "name": "song_131",
    "location": "song_131.html"
}, {
    "name": "song_121",
    "location": "song_121.html"
}, {
    "name": "song_133",
    "location": "song_133.html"
}, {
    "name": "song_127",
    "location": "song_127.html"
}, {
    "name": "song_129",
    "location": "song_129.html"
}, {
    "name": "song_113",
    "location": "song_113.html"
}, {
    "name": "song_132",
    "location": "song_132.html"
}, {
    "name": "song_117",
    "location": "song_117.html"
}, {
    "name": "song_135",
    "location": "song_135.html"
}, {
    "name": "song_102",
    "location": "song_102.html"
}, {
    "name": "song_115",
    "location": "song_115.html"
}, {
    "name": "song_100",
    "location": "song_100.html"
}, {
    "name": "song_114",
    "location": "song_114.html"
}, {
    "name": "song_96",
    "location": "song_96.html"
}, {
    "name": "song_104",
    "location": "song_104.html"
}];

function song_137_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'html_5': 'song_137_html_5'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'song_137';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var song_137_onLoad = function() {
        song_137_elementsExtraJS();
        song_137_deviceEvents();
        song_137_windowEvents();
        song_137_elementsEvents();
    };
    // screen window events
    function song_137_windowEvents() {
        $('#song_137').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function song_137_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function song_137_elementsExtraJS() {
        // screen (song_137) extra code
    };
    // screen elements handler
    function song_137_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#song_137").on("pagebeforeshow", "#song_137", function(event, ui) {
        Apperyio.CurrentScreen = "song_137";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    song_137_onLoad();
};
$(document).off("pagecreate", "#song_137").on("pagecreate", "#song_137", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    song_137_js();
});