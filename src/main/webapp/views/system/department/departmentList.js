$(function () {
	initTable();
	$(window).resize(function(){
		$('#department-table').bootstrapTable('refresh');
	});
});

function doQuery(params){
	$('#department-table').bootstrapTable('refresh');
}

function initTable(){
	var url = "department.do?method=listDepartment&random="+Math.random();
	$('#department-table').bootstrapTable({
		method:'POST',
		dataType:'json',
		contentType: "application/x-www-form-urlencoded",
		cache: false,
		striped: true,                      //是否显示行间隔色
		sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
		url:url,
		height: $(window).height() - 85,
		width:$(window).width(),
		showColumns:true,
		pagination:true,
		queryParams : queryParams,
		minimumCountColumns:2,
		pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 20,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
		showExport: true,                    
        exportDataType: 'all',
        exportOptions:{
        	fileName: '用户信息'
        },
		columns: [
 		{
			field : 'departmentId',
			title : '部门ID',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'departmentName',
			title : '部门名',
			align : 'center',
			valign : 'middle'
		},  {
			field : 'common',
			title : '描述',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'operate',
			title : '操作',
			align : 'center',
			events : operateEvents,
			formatter : operateFormatter
		}]
	});
}

function operateFormatter(value, row, index) {
	var status = row.status;
	var iconStr = "";
	if(status == 1){//可用
		iconStr = [
		           '<a class="edit" href="javascript:void(0)" title="修改">',
		           '<i class="glyphicon glyphicon-pencil">&nbsp;</i>',
		           '</a>  ',
		           '<a class="remove" href="javascript:void(0)" title="删除">',
		           '<i class="glyphicon glyphicon-remove">&nbsp;</i>',
		           '</a>  ',
		           '<a class="disable" href="javascript:void(0)" title="禁用">',
		           '<i class="glyphicon glyphicon-pause">&nbsp;</i>',
		           '</a>  ',
		           '<a class="resetPwd" href="javascript:void(0)" title="重置密码">',
		           '<i class="glyphicon glyphicon-cog"></i>',
		           '</a>'
		       ].join('');
	} else if(status == 2){	//删除
		iconStr = [
		           '<a class="icon-disabled" href="javascript:void(0)" title="修改">',
		           '<i class="glyphicon glyphicon-pencil">&nbsp;</i>',
		           '</a>  ',
		           '<a class="icon-disabled" href="javascript:void(0)" title="删除">',
		           '<i class="glyphicon glyphicon-remove">&nbsp;</i>',
		           '</a>  ',
		           '<a class="icon-disabled" href="javascript:void(0)" title="禁用">',
		           '<i class="glyphicon glyphicon-pause">&nbsp;</i>',
		           '</a>  ',
		           '<a class="icon-disabled" href="javascript:void(0)" title="重置密码">',
		           '<i class="glyphicon glyphicon-cog"></i>',
		           '</a>'
		       ].join('');
	} else { //禁用
		iconStr = [
		           '<a class="icon-disabled" href="javascript:void(0)" title="修改">',
		           '<i class="glyphicon glyphicon-pencil">&nbsp;</i>',
		           '</a>  ',
		           '<a class="icon-disabled" href="javascript:void(0)" title="删除">',
		           '<i class="glyphicon glyphicon-remove">&nbsp;</i>',
		           '</a>  ',
		           '<a class="enable" href="javascript:void(0)" title="启用">',
		           '<i class="glyphicon glyphicon-play">&nbsp;</i>',
		           '</a>  ',
		           '<a class="icon-disabled" href="javascript:void(0)" title="重置密码">',
		           '<i class="glyphicon glyphicon-cog"></i>',
		           '</a>'
		       ].join('');
	}
	
    return iconStr;
}
window.operateEvents = {
    'click .edit': function (e, value, row, index) {
		  layer.open({
		    		  type: 2,
		    		  title: '编辑用户',
		    		  maxmin: true,
		    		  shadeClose: true, //点击遮罩关闭层
		    		  area : ['800px' , '520px'],
		    		  content: 'user.do?method=editUser&userId='+row.id,
		    		  end : doQuery
				  });
    },
    'click .remove': function (e, value, row, index) {
    	swal({
	        title: "您确定要删除这个用户吗",
	        text: "删除后将无法恢复，请谨慎操作！",
	        type: "warning",
	        showCancelButton: true,
	        cancelButtonText:"取消",
	        confirmButtonColor: "#DD6B55",
	        confirmButtonText: "删除",
	        closeOnConfirm: true
	    }, function () {
	    	deleteUser(row.id);
	    });
    },
    'click .enable': function (e, value, row, index) {
    	swal({
	        title: "您确定要启用这个用户吗？",
	        text: "",
	        type: "warning",
	        showCancelButton: true,
	        cancelButtonText:"取消",
	        confirmButtonColor: "#DD6B55",
	        confirmButtonText: "确定",
	        closeOnConfirm: true
	    }, function () {
	    	enableUser(row.id);
	    });
    },
    'click .disable': function (e, value, row, index) {
    	swal({
	        title: "您确定要禁用这个用户吗？",
	        text: "",
	        type: "warning",
	        showCancelButton: true,
	        cancelButtonText:"取消",
	        confirmButtonColor: "#DD6B55",
	        confirmButtonText: "确定",
	        closeOnConfirm: true
	    }, function () {
	    	disableUser(row.id);
	    });
    }
};

function queryParams(params) {
	var param = {
		orgCode : $("#orgCode").val(),
		loginId : $("#loginId").val(),
		status : $("#status").val(),
		limit : this.limit, // 页面大小
		offset : this.offset, // 页码
		pageindex : this.pageNumber,
		pageSize : this.pageSize
	}
	return param;
} 

