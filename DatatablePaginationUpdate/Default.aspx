<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="DatatablePaginationUpdate._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <button type="button" class="btn btn-primary btn-sm" id="btn_JSONset">Set</button>

    <div class="row">
        <div class="col-md-12 col-12 mt-5">
            <div class="table-responsive">
                <table class="table table-bordered table-sm w-100" id="TBL_Datatable">
                    <thead class="table-primary">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="StudentUpdateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="HiddenStdId" />
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <label>Name</label>
                            <input type="text" class="form-control form-control-sm" id="StdName" />
                        </div>
                        <div class="col-md-12 col-12">
                            <label>Roll</label>
                            <input type="text" class="form-control form-control-sm" id="StdRoll" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="btnSaveChanges" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <script src="Scripts/UIScripts/DatatableUpdate.js"></script>
</asp:Content>
