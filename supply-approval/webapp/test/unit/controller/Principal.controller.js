/*global QUnit*/

sap.ui.define([
	"peumadev/supply-approval/controller/Principal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Principal Controller");

	QUnit.test("I should test the Principal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
