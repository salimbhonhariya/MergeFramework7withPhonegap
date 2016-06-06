// Initialize your app
var myApp = new Framework7({
  
    material: true,
    // Default title for modals
    modalTitle: 'My App',

    // If it is webapp, we can enable hash navigation:
    pushState: true,

    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }

});


// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    domCache: true //enable inline pages, this works only in ios.
});


$$(document).on('pageInit', function (e) {
    alert("my-app.js fired");
    var page = e.detail.page;
   // alert(page.name);
    if (page.name === "index" ) {
        
    }
});

//$$(document).on('pageInit', '.page[data-page="index"]', function (e) {
//    alert("Index page is initialized.");
//// 

//});
myApp.onPageInit("index", function (e) {

    //alert("index page is initialized.");
    //checked the passed parameters before you load it and process.
  //  var parametervalue = Page.query.count;
   // window.open("https://r.zipformplus.com");
  

    //go to database and check the user credentials of based on passed ID

    

})



// Callbacks to run specific code for specific pages, for example for About page:
//myApp.onPageInit('index', function (page) {
//    // run createContentPage func after link was clicked
//    $$('.create-page').on('click', function () {
//        createContentPage();
//    });
//    //alert("onPageInit of framework7 ready");

//});

// Generate dynamic page
//var dynamicPageIndex = 0;
//function createContentPage() {
//    mainView.router.loadContent(


//        '<!-- Top Navbar-->' +
//        '<div class="navbar">' +
//        '  <div class="navbar-inner">' +
//        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
//        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
//        '  </div>' +
//        '</div>' +
//        '<div class="pages">' +
//        '  <!-- Page, data-page contains page name-->' +
//        '  <div data-page="dynamic-pages" class="page">' +
//        '    <!-- Scrollable page content-->' +
//        '    <div class="page-content">' +
//        '      <div class="content-block">' +
//        '        <div class="content-block-inner">' +
//        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
//        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
//        '        </div>' +
//        '      </div>' +
//        '    </div>' +
//        '  </div>' +
//        '</div>'


//    );
//    return;
//}