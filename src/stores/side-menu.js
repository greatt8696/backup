import { atom } from "recoil";
const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/",
        title: "Home",
      },
      {
        icon: "Home",
        title: "재활용 거래 플랫폼",
        subMenu: [
          {
            icon: "Home",
            pathname: "/dashboard-overview-1",
            title: "서울 거래소",
          },
          {
            icon: "Home",
            pathname: "/dashboard-overview-2",
            title: "인천 거래소",
          },
          {
            icon: "Home",
            pathname: "/dashboard-overview-3",
            title: "대전 거래소",
          },
          {
            icon: "Home",
            pathname: "/dashboard-overview-4",
            title: "대구 거래소",
          },
        ],
      },
      {
        icon: "Box",
        title: "그린 식목 사업",
        pathname: "/simple-menu/dashboard-overview-1",
      },
      {
        icon: "ShoppingBag",
        title: "재활용응용사업펀딩",
        pathname: "/simple-menu/dashboard-overview-1",
        // subMenu: [
        //   {
        //     icon: "",
        //     pathname: "/categories",
        //     title: "Categories",
        //   },
        //   {
        //     icon: "",
        //     pathname: "/add-product",
        //     title: "Add Product",
        //   },
        //   {
        //     icon: "",
        //     pathname: "/products",
        //     title: "Products",
        //     subMenu: [
        //       {
        //         icon: "",
        //         pathname: "/product-list",
        //         title: "Product List",
        //       },
        //       {
        //         icon: "",
        //         pathname: "/product-grid",
        //         title: "Product Grid",
        //       },
        //     ],
        //   },
        //   {
        //     icon: "",
        //     pathname: "/transactions",
        //     title: "Transactions",
        //     subMenu: [
        //       {
        //         icon: "",
        //         pathname: "/transaction-list",
        //         title: "Transaction List",
        //       },
        //       {
        //         icon: "",
        //         pathname: "/transaction-detail",
        //         title: "Transaction Detail",
        //       },
        //     ],
        //   },
        //   {
        //     icon: "",
        //     pathname: "/sellers",
        //     title: "Sellers",
        //     subMenu: [
        //       {
        //         icon: "",
        //         pathname: "/seller-list",
        //         title: "Seller List",
        //       },
        //       {
        //         icon: "",
        //         pathname: "/seller-detail",
        //         title: "Seller Detail",
        //       },
        //     ],
        //   },
        //   {
        //     icon: "",
        //     pathname: "/reviews",
        //     title: "Reviews",
        //   },
        // ],
      },
      {
        icon: "HardDrive",
        pathname: "/file-manager",
        title: "ESG 포인트",
      },
      {
        icon: "MessageSquare",
        pathname: "/chat",
        title: "채팅",
      },
      {
        icon: "FileText",
        pathname: "/post",
        title: "게시판",
      },
      {
        icon: "Calendar",
        pathname: "/calendar",
        title: "달력",
      },
      "devider",
      {
        icon: "Edit",
        title: "저장소",
        subMenu: [
          {
            icon: "",
            pathname: "/crud-data-list",
            title: "Data List",
          },
          {
            icon: "",
            pathname: "/crud-form",
            title: "Form",
          },
        ],
      },
      {
        icon: "Users",
        title: "유저",
        subMenu: [
          {
            icon: "",
            pathname: "/users-layout-1",
            title: "Layout 1",
          },
          {
            icon: "",
            pathname: "/users-layout-2",
            title: "Layout 2",
          },
          {
            icon: "",
            pathname: "/users-layout-3",
            title: "Layout 3",
          },
        ],
      },
      {
        icon: "Trello",
        title: "기획자 프로필",
        subMenu: [
          {
            icon: "",
            pathname: "/profile-overview-1",
            title: "Overview 1",
          },
          {
            icon: "",
            pathname: "/profile-overview-2",
            title: "Overview 2",
          },
          {
            icon: "",
            pathname: "/profile-overview-3",
            title: "Overview 3",
          },
        ],
      },
      // {
      //   icon: "Layout",
      //   title: "Pages",
      //   subMenu: [
      //     {
      //       icon: "",
      //       title: "Wizards",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Blog",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Pricing",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/pricing-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/pricing-layout-2",
      //           title: "Layout 2",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Invoice",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/invoice-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/invoice-layout-2",
      //           title: "Layout 2",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "FAQ",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "login",
      //       title: "Login",
      //     },
      //     {
      //       icon: "",
      //       pathname: "register",
      //       title: "Register",
      //     },
      //     {
      //       icon: "",
      //       pathname: "error-page",
      //       title: "Error Page",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/update-profile",
      //       title: "Update profile",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/change-password",
      //       title: "Change Password",
      //     },
      //   ],
      // },
      //       "devider",
      //       {
      //         icon: "Inbox",
      //         title: "Components",
      //         subMenu: [
      //           {
      //             icon: "",
      //             title: "Table",
      //             subMenu: [
      //               {
      //                 icon: "",
      //                 pathname: "/regular-table",
      //                 title: "Regular Table",
      //               },
      //               {
      //                 icon: "",
      //                 pathname: "/tabulator",
      //                 title: "Tabulator",
      //               },
      //             ],
      //           },
      //           {
      //             icon: "",
      //             title: "Overlay",
      //             subMenu: [
      //               {
      //                 icon: "",
      //                 pathname: "/modal",
      //                 title: "Modal",
      //               },
      //               {
      //                 icon: "",
      //                 pathname: "/slide-over",
      //                 title: "Slide Over",
      //               },
      //               {
      //                 icon: "",
      //                 pathname: "/notification",
      //                 title: "Notification",
      //               },
      //             ],
      //           },
      //           {
      //             icon: "",
      //             pathname: "/tab",
      //             title: "Tab",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/accordion",
      //             title: "Accordion",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/button",
      //             title: "Button",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/alert",
      //             title: "Alert",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/progress-bar",
      //             title: "Progress Bar",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/tooltip",
      //             title: "Tooltip",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/dropdown",
      //             title: "Dropdown",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/typography",
      //             title: "Typography",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/icon",
      //             title: "Icon",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/loading-icon",
      //             title: "Loading Icon",
      //           },
      //         ],
      //       },
      //       {
      //         icon: "Sidebar",
      //         title: "Forms",
      //         subMenu: [
      //           {
      //             icon: "",
      //             pathname: "/regular-form",
      //             title: "Regular Form",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/datepicker",
      //             title: "Datepicker",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/tom-select",
      //             title: "Tom Select",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/file-upload",
      //             title: "File Upload",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/wysiwyg-editor",
      //             title: "Wysiwyg Editor",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/validation",
      //             title: "Validation",
      //           },
      //         ],
      //       },
      //       {
      //         icon: "HardDrive",
      //         title: "Widgets",
      //         subMenu: [
      //           {
      //             icon: "",
      //             pathname: "/chart",
      //             title: "Chart",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/slider",
      //             title: "Slider",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/image-zoom",
      //             title: "Image Zoom",
      //           },
      //         ],
      //       },
    ],
  },
});

export { sideMenu };
