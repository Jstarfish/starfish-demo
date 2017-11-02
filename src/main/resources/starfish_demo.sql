SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `hibernate_sequence`
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
INSERT INTO `hibernate_sequence` VALUES ('1');

-- ----------------------------
-- Table structure for `starfish_department`
-- ----------------------------
DROP TABLE IF EXISTS `starfish_department`;
CREATE TABLE `starfish_department` (
  `departmentId` bigint(20) NOT NULL,
  `departmentName` varchar(255) DEFAULT NULL,
  `common` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`departmentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of starfish_department
-- ----------------------------
INSERT INTO `starfish_department` VALUES ('1', '人事部', '人力资源');
INSERT INTO `starfish_department` VALUES ('2', '技术部', '程序员');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userPassword` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone` bigint(15) DEFAULT NULL,
  `createTime` date DEFAULT NULL,
  `realName` varchar(50) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '1-可用，2-删除，3-禁用',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'super', '1da0b12114f5124c1152b74799e1696a', '回龙观', '132524', '2017-08-25', '张三', '1');
INSERT INTO `user` VALUES ('2', 'admin', '222222', '中关村', '3068652', '2017-08-25', '王五', '1');
