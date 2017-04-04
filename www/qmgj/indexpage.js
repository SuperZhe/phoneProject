var app = angular.module('qmgj',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		// 官网首页
		$urlRouterProvider.otherwise('/home');
		$urlRouterProvider.when('/personal-homepage/safe-set',
			'/personal-homepage/safe-set/safe-set1');
		$stateProvider
		    .state('home',{
			url:'/home',
			templateUrl:'view/home.html',
			controller:'homeController'
		})
		    .state('detail',{
		    	url:'/detail',
		    	templateUrl:'view/detail.html',
		    	controller:'detailController'
		    })
		    .state('login',{
		    	url:'/login',
		    	templateUrl:'view/login.html',
		    	
		    }) 
		    .state('zhuce',{
		    	url:'/zhuce',
		    	templateUrl:'view/zhuce.html',
		    	
		    })
		      .state('view-project',{
		    	url:'/view-project',
		    	templateUrl:'view/view-project.html',
		    	
		    })
		     .state('view-project.tab-2',{
		    	url:'/tab-2',
		    	templateUrl:'view/tab-2.html',
		    	
		    })
		     
		     .state('confirm-order',{
		    	url:'/confirm-order',
		    	templateUrl:'view/confirm-order.html',
		    	
		    })
		     .state('pay',{
		    	url:'/pay',
		    	templateUrl:'view/pay.html',
		    	
		    })
		     .state('pay-complete',{
		    	url:'/pay-complete',
		    	templateUrl:'view/pay-complete.html',
		    	
		    })
		    .state('personal-homepage',{
		    	url:'/personal-homepage',
		    	templateUrl:'view/personal-homepage.html',
		    	controller:'phController'
		    })
		    .state('personal-homepage.personal-information',{
		    	url:'/personal-information',
		    	templateUrl:'view/personal-information.html',
		    	
		    })

		    .state('personal-homepage.tab-5',{
		    	url:'/tab-5',
		    	templateUrl:'view/tab-5.html',
		    	
		    })
		     .state('personal-homepage.tab-4',{
		    	url:'/tab-4',
		    	templateUrl:'view/tab-4.html',
		    	
		    })
		      .state('personal-homepage.safe-set',{
		    	url:'/safe-set',
		    	templateUrl:'view/safe-set.html',
		    })
		      .state('personal-homepage.safe-set.a1',{
		      	url:'/safe-set1',
		      	templateUrl:'view/safe-set1.html'
		      })
		      .state('personal-homepage.safe-set.a2',{
		      	url:'/safe-set2',
		      	templateUrl:'view/safe-set2.html'
		      })
		      .state('personal-homepage.safe-set.a3',{
		      	url:'/safe-set3',
		      	templateUrl:'view/safe-set3.html'
		      })

		     
	}]);
// 轮播图
app.controller('homeController',['$scope','$interval',function($scope,$interval){
   $scope.arr1=[
       "images/img-show.png","images/show-img2.png"
   ]
   $scope.showIndex=0;
   $scope.next = function(index){
   	  if($scope.showIndex == 0 ){
   	  	$scope.showIndex =index+1;
   	  }
   }
   $scope.prev = function(index){
   	  if($scope.showIndex ==1){
   	  	$scope.showIndex = index-1;
   	  }
   }
   $interval(function(){
   if($scope.showIndex >= $scope.arr1.length-1){
   	   $scope.showIndex = 0;
		return;}
    else{$scope.showIndex++;}	 		
	},3000);		 	
	
	


   

  
   
}]);
app.controller('detailController',['$scope',function($scope){
   // alert('detail');
}])


app.controller('phController',['$scope',function($scope){
   	 $scope.arr2=[
   	    {name:'个人主页', view:'personal-homepage'},
   	    {name:'个人信息',  view:'personal-homepage.personal-information'},
   	    {name:'安全设置',  view:'personal-homepage.safe-set'},
   	    {name:'关注的圈子',view:'personal-homepage.tab-4'},
   	    {name:'购买记录',  view:'personal-homepage.tab-5'}];
   }])