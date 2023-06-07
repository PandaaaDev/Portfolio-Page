exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 1388:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 7268:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8903))

/***/ }),

/***/ 8903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Nav_Nav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/Organism/Nav/nav.module.scss
var nav_module = __webpack_require__(4701);
var nav_module_default = /*#__PURE__*/__webpack_require__.n(nav_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Molecules/NavList/NavList.module.scss
var NavList_module = __webpack_require__(1999);
var NavList_module_default = /*#__PURE__*/__webpack_require__.n(NavList_module);
// EXTERNAL MODULE: ./src/components/Atoms/Buttons/NavLink/NavLink.module.scss
var NavLink_module = __webpack_require__(619);
var NavLink_module_default = /*#__PURE__*/__webpack_require__.n(NavLink_module);
;// CONCATENATED MODULE: ./src/components/Atoms/Buttons/NavLink/index.jsx



const NavLink = ({ children , href , nextLink , target ="_self" , handleOnClick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (NavLink_module_default()).link,
        children: nextLink ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            target: target,
            children: children
        }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: href,
            target: target,
            onClick: handleOnClick,
            children: children
        })
    });
};
/* harmony default export */ const Buttons_NavLink = (NavLink);

;// CONCATENATED MODULE: ./src/components/Molecules/NavList/index.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 




const NavList = ({ showMenu , toUpperCase , handleOnClick  })=>{
    // Need to redesign this
    const navigationItems = [
        {
            id: (0,react_.useId)(),
            label: "home",
            link: "#home",
            sameOriginPage: true,
            newPage: false,
            target: "_blank",
            isActive: false
        },
        {
            id: (0,react_.useId)(),
            label: "about me",
            link: "#aboutme",
            sameOriginPage: true,
            newPage: false,
            target: "_blank",
            isActive: false
        },
        {
            id: (0,react_.useId)(),
            label: "experience",
            link: "#experience",
            sameOriginPage: true,
            newPage: false,
            target: "_blank",
            isActive: false
        },
        {
            id: (0,react_.useId)(),
            label: "contact",
            link: "#contact",
            sameOriginPage: true,
            newPage: false,
            target: "_blank",
            isActive: false
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(NavList_module_default()).navbarList} ${showMenu && (NavList_module_default()).show}`,
        children: navigationItems.map((element)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(Buttons_NavLink, {
                href: element.link,
                handleOnClick: handleOnClick,
                nextLink: element.newPage,
                children: element.label
            }, element.id);
        })
    });
};
/* harmony default export */ const Molecules_NavList = (NavList);

// EXTERNAL MODULE: ./src/components/Atoms/Logo/Logo.module.scss
var Logo_module = __webpack_require__(2579);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);
;// CONCATENATED MODULE: ./src/components/Atoms/Logo/Logo.jsx



const Logo = ({ URL , useImg , logoFile , text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Logo_module_default()).wrapper,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            className: (Logo_module_default()).logo,
            href: URL,
            children: useImg ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: logoFile
                }
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: text
                }
            })
        })
    });
};

// EXTERNAL MODULE: ./src/components/Atoms/Buttons/BurgerButton/BurgerMenu.module.scss
var BurgerMenu_module = __webpack_require__(2817);
var BurgerMenu_module_default = /*#__PURE__*/__webpack_require__.n(BurgerMenu_module);
;// CONCATENATED MODULE: ./src/components/Atoms/Buttons/BurgerButton/BurgerButton.jsx


const BurgerButton = ({ showMenu , handleOnClick  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: `${(BurgerMenu_module_default()).burgerMenu} ${showMenu ? (BurgerMenu_module_default()).open : (BurgerMenu_module_default()).close}`,
        onClick: handleOnClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (BurgerMenu_module_default()).burgerBar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (BurgerMenu_module_default()).burgerBar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (BurgerMenu_module_default()).burgerBar
            })
        ]
    });
};
/* harmony default export */ const BurgerButton_BurgerButton = (BurgerButton);

;// CONCATENATED MODULE: ./src/components/Organism/Nav/Nav.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 



// import NavList from './NavList';


const Nav = ()=>{
    const [showMenu, setShowMenu] = (0,react_.useState)(false);
    const toggleMenu = (0,react_.useCallback)(()=>{
        setShowMenu((showMenu)=>!showMenu);
    }, []);
    const closeNav = (0,react_.useCallback)(()=>{
        setShowMenu(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (nav_module_default()).navbar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                URL: "/",
                text: "Panda<span>Dev</span>"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (nav_module_default()).icons,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BurgerButton_BurgerButton, {
                        handleOnClick: toggleMenu,
                        showMenu: showMenu
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Molecules_NavList, {
                        showMenu: showMenu,
                        handleOnClick: closeNav,
                        toUpperCase: false
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Nav_Nav = (Nav);


/***/ }),

/***/ 2817:
/***/ ((module) => {

// Exports
module.exports = {
	"burgerMenu": "BurgerMenu_burgerMenu__2CZ4E",
	"burgerBar": "BurgerMenu_burgerBar__WpGTI",
	"open": "BurgerMenu_open__gK82G",
	"burgerOpen": "BurgerMenu_burgerOpen__WOuya",
	"close": "BurgerMenu_close__xPzs_",
	"burgerClose": "BurgerMenu_burgerClose__U94nU"
};


/***/ }),

/***/ 619:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "NavLink_link__EPcUp"
};


/***/ }),

/***/ 2579:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Logo_wrapper__Y0BXN",
	"logo": "Logo_logo__yGlR4",
	"logoLight": "Logo_logoLight__45z96"
};


/***/ }),

/***/ 1999:
/***/ ((module) => {

// Exports
module.exports = {
	"navbarList": "NavList_navbarList__pWitg",
	"show": "NavList_show__3etMZ",
	"navItem": "NavList_navItem__NPpBp"
};


/***/ }),

/***/ 4701:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "nav_navbar__AGItg",
	"icons": "nav_icons__4PP_U"
};


/***/ }),

/***/ 3620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.jsx","import":"Poppins","arguments":[{"subsets":["latin"],"weight":"400","variable":"--font-poppins","fallback":["system-ui","arial"]}],"variableName":"poppins"}
var target_path_src_app_layout_jsx_import_Poppins_arguments_subsets_latin_weight_400_variable_font_poppins_fallback_system_ui_arial_variableName_poppins_ = __webpack_require__(2650);
var target_path_src_app_layout_jsx_import_Poppins_arguments_subsets_latin_weight_400_variable_font_poppins_fallback_system_ui_arial_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_jsx_import_Poppins_arguments_subsets_latin_weight_400_variable_font_poppins_fallback_system_ui_arial_variableName_poppins_);
// EXTERNAL MODULE: ./src/styles/global.scss
var global = __webpack_require__(3266);
// EXTERNAL MODULE: ./src/components/Organism/Nav/Nav.jsx
var Nav = __webpack_require__(3129);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav);
;// CONCATENATED MODULE: ./src/components/Organism/Footer/Footer.jsx

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Footer"
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/app/layout.jsx





const metadata = {
    title: "PandaDev",
    description: "A portfolio page of a software developer"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: ` ${(target_path_src_app_layout_jsx_import_Poppins_arguments_subsets_latin_weight_400_variable_font_poppins_fallback_system_ui_arial_variableName_poppins_default()).className}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 3129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("C:\\Users\\Juszc\\Desktop\\Portfolio-Page\\src\\components\\Organism\\Nav\\Nav.jsx");


/***/ }),

/***/ 3266:
/***/ (() => {



/***/ })

};
;