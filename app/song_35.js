/*
 * JS for song_35 generated by Appery.io
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
    "name": "song_20",
    "location": "song_20.html"
}, {
    "name": "song_16",
    "location": "song_16.html"
}, {
    "name": "song_3",
    "location": "song_3.html"
}, {
    "name": "song_13",
    "location": "song_13.html"
}, {
    "name": "song_4",
    "location": "song_4.html"
}, {
    "name": "song_5",
    "location": "song_5.html"
}, {
    "name": "song_7",
    "location": "song_7.html"
}, {
    "name": "song_39",
    "location": "song_39.html"
}, {
    "name": "song_2",
    "location": "song_2.html"
}, {
    "name": "song_14",
    "location": "song_14.html"
}, {
    "name": "song_28",
    "location": "song_28.html"
}, {
    "name": "song_50",
    "location": "song_50.html"
}, {
    "name": "song_17",
    "location": "song_17.html"
}, {
    "name": "song_48",
    "location": "song_48.html"
}, {
    "name": "songList",
    "location": "songList.html"
}, {
    "name": "song_18",
    "location": "song_18.html"
}, {
    "name": "song_32",
    "location": "song_32.html"
}, {
    "name": "song_34",
    "location": "song_34.html"
}, {
    "name": "song_35",
    "location": "song_35.html"
}, {
    "name": "song_40",
    "location": "song_40.html"
}, {
    "name": "song_46",
    "location": "song_46.html"
}, {
    "name": "song_21",
    "location": "song_21.html"
}, {
    "name": "song_11",
    "location": "song_11.html"
}, {
    "name": "song_27",
    "location": "song_27.html"
}, {
    "name": "song_29",
    "location": "song_29.html"
}, {
    "name": "song_33",
    "location": "song_33.html"
}, {
    "name": "song_31",
    "location": "song_31.html"
}, {
    "name": "song_19",
    "location": "song_19.html"
}, {
    "name": "song_36",
    "location": "song_36.html"
}, {
    "name": "song_47",
    "location": "song_47.html"
}, {
    "name": "song_30",
    "location": "song_30.html"
}, {
    "name": "song_45",
    "location": "song_45.html"
}, {
    "name": "song_26",
    "location": "song_26.html"
}, {
    "name": "song_25",
    "location": "song_25.html"
}, {
    "name": "song_9",
    "location": "song_9.html"
}, {
    "name": "song_8",
    "location": "song_8.html"
}, {
    "name": "song_10",
    "location": "song_10.html"
}, {
    "name": "song_22",
    "location": "song_22.html"
}, {
    "name": "song_24",
    "location": "song_24.html"
}, {
    "name": "song_37",
    "location": "song_37.html"
}, {
    "name": "song_23",
    "location": "song_23.html"
}, {
    "name": "song_15",
    "location": "song_15.html"
}, {
    "name": "song_42",
    "location": "song_42.html"
}, {
    "name": "song_1",
    "location": "song_1.html"
}, {
    "name": "song_44",
    "location": "song_44.html"
}, {
    "name": "song_41",
    "location": "song_41.html"
}, {
    "name": "song_12",
    "location": "song_12.html"
}, {
    "name": "song_6",
    "location": "song_6.html"
}, {
    "name": "song_43",
    "location": "song_43.html"
}, {
    "name": "song_51",
    "location": "song_51.html"
}];

function song_35_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'html_5': 'song_35_html_5'
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
    Apperyio.CurrentScreen = 'song_35';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var song_35_onLoad = function() {
        song_35_elementsExtraJS();
        song_35_deviceEvents();
        song_35_windowEvents();
        song_35_elementsEvents();
    };
    // screen window events
    function song_35_windowEvents() {
        $('#song_35').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function song_35_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function song_35_elementsExtraJS() {
        // screen (song_35) extra code
    };
    // screen elements handler
    function song_35_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#song_35").on("pagebeforeshow", "#song_35", function(event, ui) {
        Apperyio.CurrentScreen = "song_35";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    song_35_onLoad();
};
$(document).off("pagecreate", "#song_35").on("pagecreate", "#song_35", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    song_35_js();
});