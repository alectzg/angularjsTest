var routerApp=angular.module("routerApp",['ui.router']);

//routerApp配置

routerApp.config(function($stateProvider,$urlRouterProvider){

	  $urlRouterProvider.otherwise('/home'); //设置默认的锚点地址

	  //设置路由路径home
	  $stateProvider.state('home',{
	  	url:'/home',
	  	templateUrl:'home.html'
	  })

	  //设置子路由锚点 

	  .state('home.list',{
      url:'/list',
      templateUrl:'list.html'
	  })

	  .state('home.list.list-child',{
	  	url:'/list-child',
	  	templateUrl:'list-child.html'
	  })

	  //第一种书写格式设置路由路径about

	  .state('about',{
	  	url:'/about',
	  	templateUrl:'about.html'
	  })

	  //第二种书写格式
	  .state('info',{
	  	url:'/info',
	  	views:{
	  		'':{templateUrl:'info.html'},
	  		'colOne@info':{template:''},  //不设置就为空
	  		'colTwo@info':{
	  			templateUrl:'infoTable.html',
	  			controller:'Ctrl'
	  		}
	  	}
	  });

});


//设置控制器
routerApp.controller('Ctrl',function($scope){

	$scope.info=[
	  {name:'张三',age:20},
	  {name:'李四',age:21},
	  {name:'王五',age:22}
	]
});
