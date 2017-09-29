var app = angular.module('flapperNews',['ui.router']);
  app.factory('posts',[function(){
    var o ={
      posts:[]
    };
    return o;
  }]);
  app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

  $stateProvider
    .state('home',{
      url : '/home',
      templateUrl : 'home.html',
      controller : 'mainCtrl'
    })
    .state('posts',{
      url : '/posts/{id}',
      templateUrl: 'posts.html',
      controller : 'postsCtrl'
    });
    $urlRouterProvider.otherwise('home');

  }]);

  app.controller('mainCtrl',function($scope,posts){

      $scope.posts = posts.posts;
      $scope.posts =[
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
      ];
      $scope.message= "welcomeeeeeeeeeeee";
      $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') return;
        $scope.posts.push({
          title:$scope.title,
          link: $scope.link,
          upvotes: 1,
          comments : [
            {author:'cpk',body:'cool post',upvotes: 1},
            {author:'kiran',body:'famous',upvotes: 3}
          ]
        });
    //    alert(posts.posts);
          $scope.title ="";
          $scope.link ="";
      };
      $scope.upVote = function(post){
        post.upvotes +=1;
      };
  });
  app.controller('postsCtrl',['posts','$stateParams','$scope',function($scope,$stateParams,posts){
    $scope.post = posts.posts[$stateParams.id];
    console.log($scope.post);
    $scope.mes = "heeeeeeeeeellllllllllllo";
    $scope.addComment = function(){
    //  if($scope.body==='') return;
      alert('hi');
        $scope.comments.push({
          author: 'user',
          body: 'cool comment',
          upvotes : 9
        });
    };
    $scope.body='';

  }]);
