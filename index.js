$(document).ready(function() {

    let setLocation = function(state) {
        console.log(state);

        let url = state.path;
        let data = state.params;

        console.log("loading", url)

        $.ajax({
            url: url,
            data: data,
            method: "POST",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success(data) {
                $("#container").html(data);
            }
        });
    };

    let state = {};

    let setState = function(path, params) {
        state.path = path;
        state.params = params;

        console.log("setState", state);
        window.history.pushState(state, null, "#" + path);

        setLocation(state);
    };

    let resetState = function() {
        state.path = "";
        state.params = "";
        history.replaceState(state, null, "");
    };

    // Page reload
    if (window.performance.navigation.type === PerformanceNavigation.TYPE_RELOAD) {
        setLocation(window.history.state);
    }
    else if (window.location.hash) {
        // Page load with hash
        setState(window.location.hash.split("#")[1], ""); // TODO: params
    }
    else {
        // Initial page load
        resetState();
    }

    window.onpopstate = function(event) {
        // Back, forward, etc.
        if (event.state) {
            console.log("popstate")
            state = event.state;
            setLocation(state);
        }
    };

    $("#link1").click(function() {
        setState("page1.aspx", "param1=value1&param2=value2");
    });

    $("#link2").click(function() {
        setState("page2.aspx", "param2=value2&param3=value3");
    });

    $("#link3").click(function() {
        setState("page3.aspx", "param3=value3&param4=value4");
    });

});