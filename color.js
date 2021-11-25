// a태그를 쓰는 모든 글씨를 setColor(색상명)으로 입력해주는 Links 객체를 이용한 함수
var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i <  alist.length){
        //     alist[i].style.color=color;
        //     i=i+1;
        // }
        $('a').css('color',color);//웹 페이지에 있는 모든 a태그를 jquery로 제어하겠다.
    }
}
var Body = {
    setColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    }, //객체는 property를 구분할 때 ,를 찍는다
    setBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }
}
function NightDayHandler(self){
    var target= document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black'); 
        Body.setColor('white'); 
        self.value = 'day';
        // // 배열과 반복문으로 버튼 클릭 시 a태그의 글씨 색 변경
        Links.setColor('powderblue');
        // 배열과 반복문으로 버튼 클릭 시 a태그의 글씨 색 변경
    }else{
        Body.setBackgroundColor('white'); 
        Body.setColor('black'); 
        self.value = 'night';
        Links.setColor('blue');
    }
}