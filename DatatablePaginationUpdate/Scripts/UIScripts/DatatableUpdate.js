var jsondata = [{ "Id": 1, "Name": "Test 1", "Roll": 1 }, { "Id": 2, "Name": "Test 2", "Roll": 2 }, { "Id": 3, "Name": "Test 3", "Roll": 3 }, { "Id": 4, "Name": "Test 4", "Roll": 4 }, { "Id": 5, "Name": "Test 5", "Roll": 5 }, { "Id": 6, "Name": "Test 6", "Roll": 6 }, { "Id": 7, "Name": "Test 7", "Roll": 7 }, { "Id": 8, "Name": "Test 8", "Roll": 8 }, { "Id": 9, "Name": "Test 9", "Roll": 9 }, { "Id": 10, "Name": "Test 10", "Roll": 10 }, { "Id": 11, "Name": "Test 11", "Roll": 11 }, { "Id": 12, "Name": "Test 12", "Roll": 12 }, { "Id": 13, "Name": "Test 13", "Roll": 13 }, { "Id": 14, "Name": "Test 14", "Roll": 14 }, { "Id": 15, "Name": "Test 15", "Roll": 15 }, { "Id": 16, "Name": "Test 16", "Roll": 16 }, { "Id": 17, "Name": "Test 17", "Roll": 17 }, { "Id": 18, "Name": "Test 18", "Roll": 18 }, { "Id": 19, "Name": "Test 19", "Roll": 19 }, { "Id": 20, "Name": "Test 20", "Roll": 20 }];

$(document).ready(function () {
    LoadDatatable();
    
});
function LoadDatatable() {
    var jsonString = JSON.parse(localStorage.getItem("JsonData"));
    $('#TBL_Datatable').DataTable({
        "bDestroy": true,
        "data": jsonString,
        "columns": [
            { "data": "Id" },
            { "data": "Name" },
            { "data": "Roll" },
            {
                "data": "",
                "defaultContent": `<button type="button" class="btn btn-primary btn-sm" id="btnItemEdit">Edit</button>`
            }
        ]
    });

    var CurrentPageno = parseInt(localStorage.getItem("Currentpage"));

    var table = $('#TBL_Datatable').DataTable();
    table.page(CurrentPageno).draw(false); 
    $('#TBL_Datatable').on('page.dt', function () {
        var info = table.page.info();
        localStorage.setItem("Currentpage", info.page.toString());
    })
}

$(document).on('click', '#btn_JSONset', function () {
    localStorage.setItem("JsonData", JSON.stringify(jsondata));
});

$(document).on('click', '#btnItemEdit', function () {
    var $tr = $(this).closest('tr');
    var Id = $tr.find("td").eq(0).text();
    var Name = $tr.find("td").eq(1).text();
    var Roll = $tr.find("td").eq(2).text();

    $('#HiddenStdId').val(Id);
    $('#StdName').val(Name);
    $('#StdRoll').val(Roll);

    $('#StudentUpdateModal').modal('show');
});

$(document).on('click', '#btnSaveChanges', function () {
    var Id = $('#HiddenStdId').val();
    var Name = $('#StdName').val();
    var Roll = $('#StdRoll').val();

    var ParsedJson = JSON.parse(localStorage.getItem("JsonData"));

    let Json = ParsedJson.find(el => el.Id === parseInt(Id));

    Json.Name = Name;
    Json.Roll = Roll;

    localStorage.setItem("JsonData", JSON.stringify(ParsedJson));

    $('#StudentUpdateModal').modal('hide');

    LoadDatatable();
});