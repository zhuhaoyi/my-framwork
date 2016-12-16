var move=function(timer){
	var idx=0;
	$('#adv1 li').eq(0).clone().appendTo('#adv1');//复制第一张图添加到后面
	var lis=$('#adv1 li');//lis.length==6;  console.log(lis);
	const WIDTH=parseInt($('#adv').css('width'));//获得轮播容器的宽度
	$('#adv1').css('width',lis.length*WIDTH);//设置adv1的宽度为lis.length*WIDTH
	var right = $(".right.length");
	/* 添加小按钮模块 */
	for(var i=0,btns=[];i<lis.length-1;i++){//创建5个小按钮存入数组btns
		btns.push('<li class="coordNum"></li>');
	}
	$('#adv').append($('<ul id="coord"></ul>').append(btns.join('')));
	$(".coordNum").eq(idx).addClass("hover");//给指定按钮添加样式
	/* 轮播功能 */
	var moveLeft=function(){
		idx++;
		if(idx<lis.length-1){
			$('#adv1').animate({left:-WIDTH*idx},500);


		}else{
			idx=0;
			$('#adv1').animate({
				left:-WIDTH*(lis.length-1)//显示clone出来的最后一张;
			},400,function(){
				$('#adv1').css('left',0);


			});
		}
		$(".coordNum").eq(idx).addClass("hover").siblings().removeClass("hover");//给指定按钮添加样式
	}
	var t=setInterval(moveLeft,timer);
	/* 点击切换到上一张按钮功能 */
	$('#prev').click(function(){
		if(idx>0){
			idx--;
			$('#adv1').animate({left:-WIDTH*idx},600);
		}else{
			//当idx=0,点击按钮时;
			idx=lis.length-2;//把角标切换到第五个元素(clone除外的最后一个元素)
			$('#adv1').css('left',-WIDTH*(lis.length-1));//设置adv1.left位置,(显示clone元素)
			$('#adv1').animate({//又进入正常循环中
				left:-WIDTH*(lis.length-2)
			},600)
		}
		$(".coordNum").eq(idx).addClass("hover").siblings().removeClass("hover");
	});


	/* 点击切换到下一张按钮功能 */
	$("#next").click(function(){
		moveLeft();
	});
	/* 鼠标进入adv暂停轮播功能 */
	$('#adv').hover(function(){
		clearInterval(t);
		t=null;
	},function(){
		t=setInterval(moveLeft,timer);
	})
	/* 手动查看图片功能 */
	$('.coordNum').mouseover(function(){//这里还不清楚的看前面的轮播案例
		idx=$('.coordNum').index(this);
		$('#adv1').animate({left:-WIDTH*idx},600);
		$(this).addClass("hover").siblings().removeClass("hover");
	})
}
/****/
 //单位毫秒
