<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
    data-params="MyWidget.instance()">
    <div class="row">
        <div class="col-md-8">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h2 class="panel-title"><i class="flaticon flaticon-group-person icon-xl"></i>
                        Meus Projetos</h2>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="searchFilter">Buscar Por</label>
                            <div class="input-search">
                                <select id="searchFilter" data-SearchFilter>
                                    <option value="c">cliente</option>
                                    <option value="p">Projeto</option>
                                </select>
                                <input id="inputSearchFilter" type="text" class="form-control filter-process-input"
                                    placeholder="...">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="projectstatus">Status do Projeto</label>
                            <input id="projectstatus" type="text" class="form-control " placeholder="Pesquisar..">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="systemfilter">Filtros do Sistema</label>
                            <input id="systemfilter" type="text" class="form-control " placeholder="Pesquisar..">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h2 class="panel-title"><i class="flaticon flaticon-group-person icon-xl"></i>
                        Calendário</h2>
                </div>
                <div class="panel-body">
                    <table class="col-md-12">
                        <thead class="days-week">
                            <tr>
                                <th>Dom.</th>
                                <th>Seg.</th>
                                <th>Ter.</th>
                                <th>Qua.</th>
                                <th>Qui.</th>
                                <th>Sex.</th>
                                <th>Sab.</th>
                            </tr>
                        </thead>
                        <tbody class="number-days">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>