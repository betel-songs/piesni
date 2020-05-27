/*
 * JS for song_90 generated by Appery.io
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
    "name": "songList",
    "location": "songList.html"
}, {
    "name": "song_38",
    "location": "song_38.html"
}, {
    "name": "song_49",
    "location": "song_49.html"
}, {
    "name": "song_67",
    "location": "song_67.html"
}, {
    "name": "song_65",
    "location": "song_65.html"
}, {
    "name": "song_73",
    "location": "song_73.html"
}, {
    "name": "song_71",
    "location": "song_71.html"
}, {
    "name": "song_66",
    "location": "song_66.html"
}, {
    "name": "song_64",
    "location": "song_64.html"
}, {
    "name": "song_69",
    "location": "song_69.html"
}, {
    "name": "song_79",
    "location": "song_79.html"
}, {
    "name": "song_55",
    "location": "song_55.html"
}, {
    "name": "song_84",
    "location": "song_84.html"
}, {
    "name": "song_90",
    "location": "song_90.html"
}, {
    "name": "song_82",
    "location": "song_82.html"
}, {
    "name": "song_85",
    "location": "song_85.html"
}, {
    "name": "song_86",
    "location": "song_86.html"
}, {
    "name": "song_61",
    "location": "song_61.html"
}, {
    "name": "song_87",
    "location": "song_87.html"
}, {
    "name": "song_92",
    "location": "song_92.html"
}, {
    "name": "song_62",
    "location": "song_62.html"
}, {
    "name": "song_83",
    "location": "song_83.html"
}, {
    "name": "song_81",
    "location": "song_81.html"
}, {
    "name": "song_91",
    "location": "song_91.html"
}, {
    "name": "song_88",
    "location": "song_88.html"
}, {
    "name": "song_89",
    "location": "song_89.html"
}, {
    "name": "song_93",
    "location": "song_93.html"
}, {
    "name": "song_94",
    "location": "song_94.html"
}, {
    "name": "song_95",
    "location": "song_95.html"
}, {
    "name": "song_98",
    "location": "song_98.html"
}, {
    "name": "song_103",
    "location": "song_103.html"
}, {
    "name": "song_63",
    "location": "song_63.html"
}, {
    "name": "song_72",
    "location": "song_72.html"
}, {
    "name": "song_75",
    "location": "song_75.html"
}, {
    "name": "song_60",
    "location": "song_60.html"
}, {
    "name": "song_74",
    "location": "song_74.html"
}, {
    "name": "song_59",
    "location": "song_59.html"
}, {
    "name": "song_76",
    "location": "song_76.html"
}, {
    "name": "song_77",
    "location": "song_77.html"
}, {
    "name": "song_78",
    "location": "song_78.html"
}, {
    "name": "song_52",
    "location": "song_52.html"
}, {
    "name": "song_54",
    "location": "song_54.html"
}, {
    "name": "song_68",
    "location": "song_68.html"
}, {
    "name": "song_80",
    "location": "song_80.html"
}, {
    "name": "song_70",
    "location": "song_70.html"
}, {
    "name": "song_53",
    "location": "song_53.html"
}, {
    "name": "song_56",
    "location": "song_56.html"
}, {
    "name": "song_57",
    "location": "song_57.html"
}, {
    "name": "song_58",
    "location": "song_58.html"
}];

function song_90_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'html_5': 'song_90_html_5'
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
    Apperyio.CurrentScreen = 'song_90';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var song_90_onLoad = function() {
        song_90_elementsExtraJS();
        song_90_deviceEvents();
        song_90_windowEvents();
        song_90_elementsEvents();
    };
    // screen window events
    function song_90_windowEvents() {
        $('#song_90').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function song_90_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function song_90_elementsExtraJS() {
        // screen (song_90) extra code
    };
    // screen elements handler
    function song_90_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#song_90").on("pagebeforeshow", "#song_90", function(event, ui) {
        Apperyio.CurrentScreen = "song_90";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    song_90_onLoad();
};
$(document).off("pagecreate", "#song_90").on("pagecreate", "#song_90", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    song_90_js();
});