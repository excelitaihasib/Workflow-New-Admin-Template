$(document).ready(function() {
    // $("#basic-datatable").DataTable({
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // });
    $("#datatable-buttons").DataTable({        
        lengthChange: !1,
        buttons: [{
            extend: "copy",
            className: "btn-light"
        }, {
            extend: "print",
            className: "btn-light"
        }, {
            extend: "pdf",
            className: "btn-light"
        }],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");



    $("#datatable-buttons2").DataTable({        
        lengthChange: !1,
        buttons: [{
            extend: "copy",
            className: "btn-light"
        }, {
            extend: "print",
            className: "btn-light"
        }, {
            extend: "pdf",
            className: "btn-light"
        }],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }).buttons().container().appendTo("#datatable-buttons2_wrapper .col-md-6:eq(0)");

    $("#datatable-buttons3").DataTable({        
        lengthChange: !1,
        buttons: [{
            extend: "copy",
            className: "btn-light"
        }, {
            extend: "print",
            className: "btn-light"
        }, {
            extend: "pdf",
            className: "btn-light"
        }],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }).buttons().container().appendTo("#datatable-buttons3_wrapper .col-md-6:eq(0)");



    $("#datatable-buttons4").DataTable({        
        lengthChange: !1,
        buttons: [{
            extend: "copy",
            className: "btn-light"
        }, {
            extend: "print",
            className: "btn-light"
        }, {
            extend: "pdf",
            className: "btn-light"
        }],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }).buttons().container().appendTo("#datatable-buttons4_wrapper .col-md-6:eq(0)");


    $("#datatable-buttons5").DataTable({        
        lengthChange: !1,
        buttons: [{
            extend: "copy",
            className: "btn-light"
        }, {
            extend: "print",
            className: "btn-light"
        }, {
            extend: "pdf",
            className: "btn-light"
        }],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }).buttons().container().appendTo("#datatable-buttons5_wrapper .col-md-6:eq(0)");


    // $(".datatable-buttons2").DataTable({        
    //     lengthChange: !1,
    //     buttons: [{
    //         extend: "copy",
    //         className: "btn-light"
    //     }, {
    //         extend: "print",
    //         className: "btn-light"
    //     }, {
    //         extend: "pdf",
    //         className: "btn-light"
    //     }],
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // }).buttons().container().appendTo(".datatable-buttons_wrapper2 .col-md-6:eq(0)");


    // $("#selection-datatable").DataTable({
    //     select: {
    //         style: "multi"
    //     },
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // }), $("#key-datatable").DataTable({
    //     keys: !0,
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // }), 
    
    // // a.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), 
    
    // $("#alternative-page-datatable").DataTable({
    //     pagingType: "full_numbers",
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // }), $("#scroll-vertical-datatable").DataTable({
    //     scrollY: "350px",
    //     scrollCollapse: !0,
    //     paging: !1,
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // }), $("#scroll-horizontal-datatable").DataTable({
    //     scrollX: !0,
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // }), $("#complex-header-datatable").DataTable({
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     },
    //     columnDefs: [{
    //         visible: !1,
    //         targets: -1
    //     }]
    // }), $("#row-callback-datatable").DataTable({
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     },
    //     createdRow: function(a, e, t) {
    //         15e4 < +e[5].replace(/[\$,]/g, "") && $("td", a).eq(5).addClass("text-danger")
    //     }
    // }), $("#state-saving-datatable").DataTable({
    //     stateSave: !0,
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // }), $(".dataTables_length select").addClass("form-select form-select-sm"), $(".dataTables_length select").removeClass("custom-select custom-select-sm"), $(".dataTables_length label").addClass("form-label")
});