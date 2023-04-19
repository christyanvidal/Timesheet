var MyWidget = SuperWidget.extend({
    //variáveis da widget
    myTable: null,
    tableData: null,
    dataInit: null,
    searchFilter: [],
    projectStatusFilter: [],
    systemFilter: [],
    calendarMonth: 0,
    calendarYear: 0,
    firstDayMonth: function (day) { return new Date(day.getFullYear(), day.getMonth(), 1) },
    diffOfDaysToStartOfCalendar: function (day) { return this.firstDayMonth(day).getDay() - 1 },
    startOfCalendar: function (day) { return this.firstDayMonth(day).getDay() == 0 ? this.firstDayMonth(day) : new Date(day.getFullYear(), day.getMonth(), - this.diffOfDaysToStartOfCalendar(day)) },
    lastDayMonth: function (day) { return new Date(day.getFullYear(), day.getMonth() + 1, 0) },
    diffOfDaysToEndOfCalendar: function (day) { return 5 - this.lastDayMonth(day).getDay() },
    endOfCalendar: function (day) { return this.lastDayMonth(day) == 0 ? this.lastDayMonth(day) : new Date(this.lastDayMonth(day).getFullYear(), this.lastDayMonth(day).getMonth() + 1, this.diffOfDaysToEndOfCalendar(day) + 1) },
    calendarUpdate: function (dateCalendar) {
        const today = new Date()
        if (!(dateCalendar instanceof Date))
            dateCalendar = today
        const endOfCalendar = this.endOfCalendar(dateCalendar)
        let day = this.startOfCalendar(dateCalendar)
        let html = ''
        while (day <= endOfCalendar) {
            html += day.getDay() === 0 ? '<tr>' : ''
            html += '<td'
            if (day.getMonth() !== today.getMonth() || day.getDay() === 0 || (day.getDate() == today.getDate() && day.getMonth() == today.getMonth() && day.getFullYear() == today.getFullYear()) || this.dateFilterCalendar) {
                html += ' class="'
                html += day.getMonth() !== today.getMonth() ? 'other-months ' : ''
                html += day.getDay() === 0 ? 'sunday ' : ''
                html += (day.getDate() == today.getDate() && day.getMonth() == today.getMonth() && day.getFullYear() == today.getFullYear()) ? 'today ' : ''
                if (this.dateFilterCalendar)
                    html += (day.getDate() == this.dateFilterCalendar.getDate() && day.getMonth() == this.dateFilterCalendar.getMonth() && day.getFullYear() == this.dateFilterCalendar.getFullYear()) ? 'selected-day ' : ''
                html += '"'
            }
            html += ` data-daycalendar>${day.getDate()}</td>`
            html += day.getDay() === 6 ? '</tr>' : ''
            day.setDate(day.getDate() + 1)
        }
        $('.number-days').empty().append(html)
        this.calendarMonth = dateCalendar.getMonth()
        this.calendarYear = dateCalendar.getFullYear()
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][this.calendarMonth];
        $('#fullmonthandyear').html(`${month} de ${this.calendarYear}`)
    }, calendarNextMonth: function () {
        this.calendarUpdate(new Date(this.calendarYear, this.calendarMonth + 1, 1))
    },
    calendarReturnMonth: function () {
        this.calendarUpdate(new Date(this.calendarYear, this.calendarMonth, 0))
    },
    //método iniciado quando a widget é carregada
    init: function () {
        this.calendarUpdate()
        this.loadTable()
        this.loadSearchFilter()
        this.loadProjectStatusFilter()
        this.loadSystemFilter()
    },
    bindings: {
        local: {
            'selectSearchFilter': ['change_loadSearchFilter'],
            'btnreturn': ['click_calendarReturnMonth'],
            'btnnext': ['click_calendarNextMonth'],
            'btntoday': ['click_calendarUpdate'],
            'searchfilter': ['blur_filterTable'],
            'statusfilter': ['blur_filterTable'],
            'daycalendar': ['click_selectDayCalendar']
        },
        global: {}
    },
    loadSearchFilter: function (htmlElement, event) {
        var that = this
        this.searchFilter = []
        $("#inputSearchFilter").val("")
        $.each(this.dataInit, function (index) {
            if (that.searchFilter.findIndex((el) => { return el.label == this.name }) == -1)
                if ($('#searchFilter').val() == 'c')
                    that.searchFilter.push({
                        label: this.name,
                    });
                else
                    that.searchFilter.push({
                        label: this.project,
                    });
        })
        $("#inputSearchFilter").autocomplete({
            source: this.searchFilter,
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
    loadProjectStatusFilter: function (htmlElement, event) {
        var that = this
        this.projectStatusFilter = []
        $.each(this.dataInit, function (index) {
            if (that.projectStatusFilter.findIndex((el) => { return el.label == this.status }) == -1)
                that.projectStatusFilter.push({
                    label: this.status,
                })
        })
        $("#projectstatus").autocomplete({
            source: this.projectStatusFilter,
            minLength: 3,
            select: function (event, ui) {
                event.preventDefault();
                $("#projectstatus").val(ui.item.label);
            }
        }).focus(function () {
            $(this).val("");
            $(this).autocomplete("search");
        })
    },
    loadSystemFilter: function (htmlElement) {
        this.systemFilter = []
        this.systemFilter.push({
            label: " 2 - teste2",
            desc: "teste",
            value: 2
        })
        $("#systemfilter").autocomplete({
            source: this.systemFilter,
            minLength: 3,
            select: function (event, ui) {
                event.preventDefault();
                $("#systemfilter").val(ui.item.label);
            }
        }).focus(function () {
            $(this).val("");
            $(this).autocomplete("search");
        })
    },
    loadTable: function () {
        var that = this
        var mydata = [{ id: 1, name: "teste", project: "Projeto 1", date: new Date("2023-03-12T00:00:00-03:00"), status: "fechado" }, { id: 2, name: "teste2", project: "projeto 2", date: new Date("2023-04-19T00:00:00-03:00"), status: "aberto" }]
        this.myTable = FLUIGC.datatable('#agendas', {
            dataRequest: mydata,
            renderContent: ['id', 'name', 'project', 'date', 'status'],
            header: [
                { 'title': 'Código' },
                { 'title': 'Nome' },
                { 'title': 'Projeto' },
                { 'title': 'Data' },
                { 'title': 'Status' }
            ],
            search: {
                enabled: false
            }
        }, function (err, data) {
            if (data) {
                that.dataInit = data;
            }
            else if (err) {
                FLUIGC.toast({
                    message: err,
                    type: 'danger'
                });
            }
        });
    },
    filterTable: function () {
        var that = this
        this.myTable.reload(
            this.dataInit.filter(
                function (el) {
                    return (!$('#inputSearchFilter').val() ?
                        true : $('#searchFilter').val() == 'c' ?
                            el.name.toUpperCase() == $('#inputSearchFilter').val().toUpperCase() :
                            el.project.toUpperCase() == $('#inputSearchFilter').val().toUpperCase())
                        && (!$('#projectstatus').val() ?
                            true : el.status.toUpperCase() == $('#projectstatus').val().toUpperCase())
                        && (!that.dateFilterCalendar ?
                            true : el.date.getDate() == that.dateFilterCalendar.getDate() && el.date.getMonth() == that.dateFilterCalendar.getMonth() && el.date.getFullYear() == that.dateFilterCalendar.getFullYear())
                }
            )
        )
    },
    selectDayCalendar: function (htmlElement) {
        if ($(htmlElement).is(".selected-day")) {
            this.dateFilterCalendar = null
            $(htmlElement).removeClass("selected-day")
        } else {
            this.dateFilterCalendar = new Date(this.calendarYear, this.calendarMonth, $(htmlElement).text())
            $(htmlElement).closest('tbody').find('.selected-day').removeClass('selected-day')
            $(htmlElement).addClass("selected-day")
        }
        this.filterTable()
    }
});