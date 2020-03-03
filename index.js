$(document).ready(function() {

    let state = {
        path: "",
        params: ""
    };

    window.history.replaceState(state, null, "");

    let setState = function(path, params) {
        // if (state.path == path && state.params == params)
        //     return;

        state.path = path;
        state.params = params;

        //window.location.hash = path;
        console.log("#" + path)
        window.history.pushState(state, null, "#" + path);
        //window.history.replaceState(undefined, undefined, "#" + path)
    };

    $("#link1").click(function() {
        setState("link1", "param1=value1&param2=2");
    });

    $("#link2").click(function() {
        setState("link2", "param2=value2&param3=3");
    });

    $("#link3").click(function() {
        setState("link3", "param3=value3&param4=4");
    });

    let setLocation = function(state) {
        console.log(state);
    };

    window.onpopstate = function(event) {
        // Back, forward, etc.
        if (event.state)
            state = event.state;

        setLocation(state);
    };

});