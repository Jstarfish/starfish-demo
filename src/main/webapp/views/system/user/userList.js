$(function () {
	initTable();
	$(window).resize(function(){
		$('#user-table').bootstrapTable('refresh'); 
	});
});

function doQuery(params){
	$('#user-table').bootstrapTable('refresh');  
}

function initTable(){
	var url = "user.do?method=listUsers&random="+Math.random();
	$('#user-table').bootstrapTable({
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
			field : 'userName',
			title : '登录名',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'realName',
			title : '姓名',
			align : 'center',
			valign : 'middle'
		},  {
			field : 'phone',
			title : '联系电话',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'address',
			title : '联系地址',
			align : 'center',
			valign : 'middle'
		},{
			field : 'status',
			title : '状态',
			align : 'center',
			valign : 'middle',
			sortable : true ,
			formatter : function (value, row, index){
				if(value == 1){
					return "可用";
				}else if(value == 2){
					return "删除";
				}else if(value == 3){
					return "禁用";
				}
			}
		},{
			field : 'createTime',
			title : '创建时间',
			align : 'center',
			valign : 'middle',
			sortable : true 
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
    },
    'click .resetPwd': function (e, value, row, index) {
    	swal({
	        title: "您确定要重置这个用户的密码吗？",
	        text: "",
	        type: "warning",
	        showCancelButton: true,
	        cancelButtonText:"取消",
	        confirmButtonColor: "#DD6B55",
	        confirmButtonText: "确定",
	        closeOnConfirm: true
	    }, function () {
	    	resetPwd(row.id);
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

function addUser(){
	layer.open({
		  type: 2,
		  title: '新增用户',
		  maxmin: true,
		  shadeClose: true, //点击遮罩关闭层
		  area : ['800px' , '520px'],
		  content: 'user.do?method=addUser',
		  end : doQuery
	  });
}
function deleteUser(userId){
	$.ajax({
	   type: "get",
	   url: "user.do?method=deleteUser&userId="+userId,
	   success: function(msg){
	     if(msg=='success'){
	    	 doQuery();
	     }else{
	    	 sweetAlert("删除失败", msg, "error");
	     }
	   }
	});
}

function enableUser(userId){
	$.ajax({
	   type: "get",
	   url: "user.do?method=enableUser&userId="+userId,
	   success: function(msg){
	     if(msg=='success'){
	    	 doQuery();
	     }else{
	    	 sweetAlert("启用失败", msg, "error");
	     }
	   }
	});
}

function disableUser(userId){
	$.ajax({
	   type: "get",
	   url: "user.do?method=disableUser&userId="+userId,
	   success: function(msg){
	     if(msg=='success'){
	    	 doQuery();
	     }else{
	    	 sweetAlert("禁用失败", msg, "error");
	     }
	   }
	});
}

function resetPwd(userId){
	$.ajax({
	   type: "get",
	   url: "user.do?method=resetPwd&userId="+userId,
	   success: function(msg){
	     if(msg=='success'){
	    	 doQuery();
	     }else{
	    	 sweetAlert("重置密码失败", msg, "error");
	     }
	   }
	});
}