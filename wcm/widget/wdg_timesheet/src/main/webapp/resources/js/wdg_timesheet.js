var MyWidget = SuperWidget.extend({
    //variáveis da widget
    searchFilter: [],
    projectStatusFilter: [],
    systemFilter: [],
    calendarMonth: 0,
    calendarYear: 0,
    firstDayMonth: function (day) { return new Date(day.getFullYear(), day.getMonth(), 1) },
    diffOfDaysToStartOfCalendar: function (day) { return MyWidget.firstDayMonth(day).getDay() - 1 },
    startOfCalendar: function (day) { return MyWidget.firstDayMonth(day).getDay() == 0 ? MyWidget.firstDayMonth(day) : new Date(day.getFullYear(), day.getMonth(), - MyWidget.diffOfDaysToStartOfCalendar(day)) },
    lastDayMonth: function (day) { return new Date(day.getFullYear(), day.getMonth() + 1, 0) },
    diffOfDaysToEndOfCalendar: function (day) { return 5 - MyWidget.lastDayMonth(day).getDay() },
    endOfCalendar: function (day) { return MyWidget.lastDayMonth(day) == 0 ? MyWidget.lastDayMonth(day) : new Date(MyWidget.lastDayMonth(day).getFullYear(), MyWidget.lastDayMonth(day).getMonth() + 1, MyWidget.diffOfDaysToEndOfCalendar(day) + 1) },
    calendarUpdate: function (dateCalendar) {
        const today = new Date()
        if (!(dateCalendar instanceof Date))
            dateCalendar = today
        const endOfCalendar = MyWidget.endOfCalendar(dateCalendar)
        let day = MyWidget.startOfCalendar(dateCalendar)
        let html = ''
        while (day <= endOfCalendar) {
            html += day.getDay() === 0 ? '<tr>' : ''
            html += '<td'
            if (day.getMonth() !== today.getMonth() || day.getDay() === 0 || (day.getDate() == today.getDate() && day.getMonth() == today.getMonth() && day.getFullYear() == today.getFullYear())) {
                html += ' class="'
                html += day.getMonth() !== today.getMonth() ? 'other-months ' : ''
                html += day.getDay() === 0 ? 'sunday ' : ''
                html += (day.getDate() == today.getDate() && day.getMonth() == today.getMonth() && day.getFullYear() == today.getFullYear()) ? 'today ' : ''
                html += '"'
            }
            html += `>${day.getDate()}</td>`
            html += day.getDay() === 6 ? '</tr>' : ''
            day.setDate(day.getDate() + 1)
        }
        $('.number-days').empty().append(html)
        MyWidget.calendarMonth = dateCalendar.getMonth()
        MyWidget.calendarYear = dateCalendar.getFullYear()
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][MyWidget.calendarMonth];
        $('#fullmonthandyear').html(`${month} de ${MyWidget.calendarYear}`)
    }, calendarNextMonth: function () {
       MyWidget.calendarUpdate(new Date(MyWidget.calendarYear, MyWidget.calendarMonth + 1, 1))
    },
    calendarReturnMonth: function () {
       MyWidget.calendarUpdate(new Date(MyWidget.calendarYear, MyWidget.calendarMonth, 0))
    },
    //método iniciado quando a widget é carregada
    init: function () {
        MyWidget.calendarUpdate()
        MyWidget.reloadSearchFilter()
        MyWidget.reloadProjectStatusFilter()
        MyWidget.reloadSystemFilter()
    },
    //BIND de eventos
    bindings: {
        local: {
            'SearchFilter': ['change_reloadSearchFilter'],
            'btnreturn':['click_calendarReturnMonth'],
            'btnnext':['click_calendarNextMonth'],
            'btntoday':['click_calendarUpdate'],
        },
        global: {}
    },
    reloadSearchFilter: function (htmlElement, event) {
        MyWidget.searchFilter = []
        $("#inputSearchFilter").val("")
        if ($('#searchFilter').val() == 'c')
            MyWidget.searchFilter.push({
                label: "1  - teste",
                desc: "teste",
                value: 1
            });
        else
            MyWidget.searchFilter.push({
                label: "2  - teste2",
                desc: "teste2",
                value: 2
            });
        $("#inputSearchFilter").autocomplete({
            source: MyWidget.searchFilter,
            minLength: 3,
            select: function (event, ui) {
                event.preventDefault();
                $("#inputSearchFilter").val(ui.item.label);
            }
        }).focus(function () {
            $(this).val("");
            $(this).autocomplete("search");
        });
    },
    reloadProjectStatusFilter: function (htmlElement, event) {
        MyWidget.projectStatusFilter = []
        MyWidget.projectStatusFilter.push({
            label: " 2  - teste2",
            desc: "teste",
            value: 2
        })
        $("#projectstatus").autocomplete({
            source: MyWidget.projectStatusFilter,
            minLength: 3,
            select: function (event, ui) {
                event.preventDefault();
                $("#projectstatus").val(ui.item.label);
            }
        }).focus(function () {
            $(this).val("");
            $(this).autocomplete("search");
        })
    }, reloadSystemFilter: function (htmlElement) {
        MyWidget.systemFilter = []
        MyWidget.systemFilter.push({
            label: " 2 - teste2",
            desc: "teste",
            value: 2
        })
        $("#systemfilter").autocomplete({
            source: MyWidget.systemFilter,
            minLength: 3,
            select: function (event, ui) {
                event.preventDefault();
                $("#systemfilter").val(ui.item.label);
            }
        }).focus(function () {
            $(this).val("");
            $(this).autocomplete("search");
        })
    }
});

