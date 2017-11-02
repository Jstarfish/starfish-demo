<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@ include file="/views/common/taglibs.jsp" %>
<%@ include file="/views/common/meta.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>用户列表</title>
<link rel="stylesheet" href="${basePath}/css/bootstrap.min.css?v=3.3.6">
<link rel="stylesheet" href="${basePath}/css/plugins/bootstrap-table/bootstrap-table.min.css">
<link rel="stylesheet" href="${basePath}/css/plugins/sweetalert/sweetalert.css">

<script src="${basePath}/js/jquery.min.js"></script>
<script src="${basePath}/js/bootstrap.min.js"></script>
<script src="${basePath}/js/plugins/bootstrap-table/bootstrap-table.min.js"></script>
<script src="${basePath}/js/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
<script src="${basePath}/js/plugins/bootstrap-table/bootstrap-table-export.js"></script>
<script src="${basePath}/js/plugins/bootstrap-table/tableExport.js"></script>
<script src="${basePath}/js/plugins/sweetalert/sweetalert.min.js"></script>
<script src="${basePath}/js/plugins/layer/layer.min.js"></script>
<script src="${basePath}/js/plugins/layer/laydate/laydate.js"></script>
<script src="${basePath}/views/system/department/departmentList.js"></script>
</head>
<body>
	<div class="row base-margin" id="query">
		<ol class="breadcrumb">
			<li><strong><span style="color: #27a0d7">部门列表</span></strong></li>
		</ol>
		<form class="form-inline" role="form" style="float: left; width: 100%" method="post" id="queryForm">
			<%--<div class="form-group">
				<label for="orgCode">部门:</label> 
				<select class="form-control" id="orgCode" name="orgCode">	
					<option value="">--全部--</option>
					<c:forEach var="data" items="${orgList}">
						<option value="${data.orgCode }">${data.orgName }</option>
					</c:forEach>
				</select>
			</div>--%>
			<div class="form-group">
				<label for="userName">登录名:</label> 
				<input type="text" class="form-control" name="userName" id="userName"  placeholder="请输入用户名">
			</div>
			<%--<div class="form-group">
				<label for="status">状态:</label>
				<select class="form-control" id="status" name="status">	
					<option value="">--全部--</option>
					<option value="1">可用</option>
					<option value="3">禁用</option>
					<option value="2">删除</option>
				</select>
			</div>--%>
			
			<div class="form-group">
				<button type="button" id="queryBtn" onclick="doQuery();" class="btn btn-primary">查询</button>
			</div>
			<div class="form-group btn-right">
				<button type="button" class="btn btn-primary" id="addBtn" onclick="addUser();">新增部门</button>
			</div>
		</form>
	</div>
	<div class="container" style="width: 100%">
	    <table id="department-table">
	    </table>
	</div>
</body>
</html>
