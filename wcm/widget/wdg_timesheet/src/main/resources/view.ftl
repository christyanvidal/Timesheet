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
                            <div class="search-options-field">
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <select class="form-control input-lg filter-type" id="filter_type"
                                            data-filter-type="">
                                            <option value="byProcesses">Por processos</option>
                                            <option value="byRequests">Por solicitações</option>
                                        </select>
                                    </span>
                                    <div id="div_filter_by_processes">
                                        <input type="text" class="form-control input-lg filter-process"
                                            id="filter_by_processes" data-processes-autocomplete=""
                                            placeholder="Digite a descrição do processo para procurar..."
                                            style="display: none;">
                                        <div class="bootstrap-tagsinput"><span class="fluig-typeahead"
                                                style="position: relative; display: inline-block; direction: ltr;"><input
                                                    type="text" size="1"
                                                    style="width: 1380.67px; position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0px 0px / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);"
                                                    class="tt-hint" readonly="" autocomplete="off" spellcheck="false"
                                                    tabindex="-1"><input type="text" size="1"
                                                    placeholder="Digite a descrição do processo para procurar..."
                                                    style="width: 1369.33px;" class="tt-input" autocomplete="off"
                                                    spellcheck="false" dir="auto">
                                                <pre aria-hidden="true"
                                                    style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Open Sans&quot;, Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
                                                <span class="tt-dropdown-menu" data-tt-dropdown-menu=""
                                                    style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;">
                                                    <div class="tt-dataset-tagAutocomplete1681326648394"></div>
                                                </span>
                                            </span></div>
                                    </div>
                                    <input type="text" class="form-control input-lg filter-process"
                                        id="filter_by_requests" data-requests="" min="1"
                                        placeholder="Digite o número da solicitação e pressione Enter para selecionar"
                                        style="display: none;">
                                </div>
                                <div class="input-group search-items-selected" style="display: none;">
                                    <label class="control-label">Selecionados: </label>
                                    <div class="flex flex-row flex-wrap" id="filter_items"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="filtrosdosistema">Filtros do Sistema</label>
                            <form role="form" autocomplete="off">
                                    <div class="form-group has-feedback">
                                            <input name="search-form-example" class="form-control" type="text"
                                        placeholder="">
                                            <i class="flaticon flaticon-search icon-sm form-control-feedback"
                                        aria-hidden="true"></i>
                                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="panel panel-success">
        <div class="row">
            <label for="botao">Buscar por</label>
            <div class="col-md-1">
                <div class="btn-group">
                        <button type="button" class="btn btn-danger">Buscar</button>
                        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                            <span class="caret"></span>
                            <span class="sr-only">Toggle Dropdown</span>
                            </button>
                        <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Nome </a></li>
                                <li><a href="#">Email</a></li>
                                <li><a href="#">Setor</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                </div>
            </div>
            <div class="col-md-5">
                <label for="pequisar"></label>
            </div>
            <div class="col-md-6">
                <label for="statusprojeto">Status do Projeto</label>
                <form role="form" autocomplete="off">
                        <div class="form-group has-feedback">
                                <input name="search-form-example" class="form-control" type="text"
                            placeholder="Search...">
                                <i class="flaticon flaticon-search icon-sm form-control-feedback"
                            aria-hidden="true"></i>
                            </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <label for="filtrosdosistema">Filtros do Sistema</label>
                <form role="form" autocomplete="off">
                        <div class="form-group has-feedback">
                                <input name="search-form-example" class="form-control" type="text" placeholder="">
                                <i class="flaticon flaticon-search icon-sm form-control-feedback"
                            aria-hidden="true"></i>
                            </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Split button -->


</div>