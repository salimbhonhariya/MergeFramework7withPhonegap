// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        //// TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        //var element = document.getElementById("deviceready");
        //element.innerHTML = 'Device Ready';
        //element.className += ' ready';

        $('#getcredentials').click(savecredentials);

        alert("Device ready");
        initialize();


    }

    

    function initialize() {
        if (window.localStorage.getItem('username')) {

            var user = window.localStorage.getItem('username');
            var email = window.localStorage.getItem('email');
            var typeofcredential = window.localStorage.getItem('typeofcredential');

            //user = "todd@zipforms.net";
            //email = "password";
            //typeofcredential = "1";


            //for production
            var targetUrl = "https://m.zipformonline.com/login.aspx?usr=" + user + "&pwd=" + email + "&assoc=" + typeofcredential;
            //window.location.replace(targetUrl);
            //most working
                                        //window.location.replace(targetUrl);
            // window.location.href = targetUrl;
            // window.open(targetUrl,null, "location=no");
            window.open(targetUrl, '_system');
            //thehrefFunction(targetUrl);
            // $('#index').show();
        }
        else {
            showcredentialpage();
            //show login page of the application, user is logging first time in application.
            // $.mobile.changePage("#one", { reverse: false, transition: "slide" });
        }
    }


    function thehrefFunction(link) {
        // return true or false, depending on whether you want to allow the `href` property to follow through or not
        // window.open(link, '_system');
        $('#credentials').hide();
        $("#indexiframe").attr("src", "http://m.zipformonline.com/login.aspx?usr=" + user + "&pwd=" + email + "&assoc=" + typeofcredential);
        $("#indexiframe").attr('target', "_system");
        $("#index").show();
    }

    function showcredentialpage() {


        alert("show credential method invoked");

        if (localStorage.getItem("username") === null) {
            $("#index").hide();
            $("#credential").show();
            // savecredentials();
        }
        else {
            retrievecredentialsfromstorage();
        }
    }

    function savecredentials() {
        // alert("save credential method invoked");

        //var username = $('#username').val();
        //if username is empty
        if ($("#username").val() === '') {
            $('#alert').html("<strong>Warning!</strong> You left the username empty");
            $('#alert').fadeIn().delay(1000).fadeOut();
            return false;
        }

        // var username = $('#email').val();
        //if the email is empty
        if ($("#email").val() === '') {
            $('#alert').html("<strong>Warning!</strong> You left the email empty");
            $('#alert').fadeIn().delay(1000).fadeOut();
            return false;
        }

        var uname = $("[name='username']").val();
        var _email = $("[name='email']").val();
        var typeofcredential = getcredentialtypechecked();
        //alert("Inserting into local storage");

        window.localStorage["username"] = uname;
        window.localStorage["email"] = _email;
        window.localStorage["typeofcredential"] = typeofcredential;

        alert("Inserted into local storage username:  " + uname + " and email:  " + _email + "" + typeofcredential);
    }


    function getcredentialtypechecked() {
        var credentialchecked;
        if (document.getElementById("radio-choice-v-6a").checked) {
            //credentialchecked = "zipformcredentialckecked";
            credentialchecked = "0";
        } else if (document.getElementById("radio-choice-v-6b").checked) {
            credentialchecked = "1";
            //credentialchecked = "carcredentialchecked";
        } else {
            credentialchecked = "2";
            //credentialchecked = "othercredentialchecked";
        }
        return credentialchecked;
    }

    function retrievecredentialsfromstorage() {
        //alert("retrieve credentials froms storage method invoked");
        //alert("Reading from local storage");
        var user = window.localStorage.getItem('username');
        var email = window.localStorage.getItem('email');
        var typeofcredential = window.localStorage.getItem('typeofcredential');

        //alert("Retrieving username: " + window.localStorage.getItem("username"));
        // alert("Retrieving email: " + window.localStorage.getItem("email"));

        $('#credentials').hide();
        //$('#maincontent').hide();
        $('#index').show();


        document.getElementById("username").value = user;
        document.getElementById("email").value = email;

        // check which radio button to check while loading the page
        if (typeofcredential) {
            //document.getElementById("typeofcredential").value = getwhichcheckboxchecked();
            getwhichcheckboxchecked();
        }

       // return false;
    }

    function getwhichcheckboxchecked() {
        {
            var typeofcredential = window.localStorage.getItem('typeofcredential');

            if (typeofcredential === "zipformcredentialckecked") {
                document.getElementById("radio-choice-v-6a").checked = true;

                //"zipformcredentialckecked";
            } else if (typeofcredential === "carcredentialchecked") {
                document.getElementById("radio-choice-v-6b").checked = true;
                //"carcredentialchecked";
            } else {
                document.getElementById("radio-choice-v-6c").checked = true;
                //"othercredentialchecked";
            }
        }

    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }

  

} )();