window.onload=function(){
	$('.shabi').hover(function(){
		$(this).find('.xia').css({display:'block'})},
		function(){
		$(this).find('.xia').css({display:'none'})
	});

	$('.cao').hover(function(){
		$(this).find('.heik').show('fast','swing')},
		function(){
		$(this).find('.heik').hide('fast','swing')
	});

	$('.gdd').hover(function(){
		$(this).find('.sile').css({display:'block'})},
		function(){
		$(this).find('.sile').css({display:'none'})
	});

	$('.cheping').hover(function(){
		$('.cheping').stop().animate({marginRight: '20px'}, 'slow');
	},
	function(){
		$('.cheping').stop().animate({marginRight: '0px'}, 'slow')}
	)

	$('.zuo').hover(function(){
		$(this).stop().animate({marginRight: '2px'}, 100);
	},
	function(){
		$(this).animate({marginRight: '0px'}, 100)}
	)

	$('.sb img').hover(function(){
		$(this).animate({marginLeft: '5px'}, 100);
	},
	function(){
		$(this).animate({marginLeft: '0px'}, 100)}
	)

	$('.sp img').hover(function(){
		$(this).animate({marginLeft: '5px'}, 100);
	},
	function(){
		$(this).animate({marginLeft: '0px'}, 100)}
	)

		$('.youcee').click([1150,1602,2054,2620,3072,3524,4090,4542,4994,5570,6028],function(e){
			var i=$('.youcee').index(this);
			var j=e.data[i];
			$('body').stop().animate({scrollTop:j},'slow')
	})

    // $(window).scroll(function(){
    // var gaodu=$(window).scrollTop();
    // while(gaodu==1200){
    //   console.log(11)
    // }
    //   console.log(gaodu)
    //   // $('.youcee').on([1200,1652,2104,2670,3122,3574,4140,4592,5044,5620,6078],function(e){
    //   //     var i=$('.youcee').index(this);
    //   //     var j=e.data[i];
    //   //     console.log(j)
    //   //     while(gaodu==j){
    //   //       $($('.youcee')[i]).css({background:'red'})
    //   //     }
    //   // })
    
    // })

		$(".shi").click(function(){
   			$({top: $(window).scrollTop()}).animate(
     	 	{top: 0},
     	 	{
        		duration: 700,
				step: function() {
	  		$(window).scrollTop(this.top);
				}
     		 }
   	 		);
  		});

		var timerId=setInterval(function(){
			if(document.body.scrollTop>=538&&document.body.scrollTop<=6967){
				$('.youce').show('slow','swing');
			}else{
				$('.youce').hide('slow','swing')
			}
		},500)

		var i=0;
    var hasClass=$('uang:first');
		$('.uang').click(function(){
			var j=$('.uang').index(this);
			$($('.uang')[i]).removeClass('dapai');
			$(this).addClass('dapai');
			$($('.remen-tu3')[i]).hide();
			$($('.remen-tu3')[j]).show();
			i=j;
      hasClass=$(this);

		})
    $('.huan_huan').click(function(){

      var arr=[];
      var dict={};
      var ccc=0;
      var ran;
      var i=$('.uang').index(hasClass);
      console.log(i);
      if(i==-1){i=0}
      var need_change=$('.hrenmen-tu3 ul')[i];
    console.log(need_change);
      var need_src=$(need_change).find('.uang_img');
    console.log(need_src);

      for(i=0;i<need_src.length;i++){
        arr[i]=need_src[i].src;
      }
      while(ccc<24){
        ran=Math.floor(Math.random()*24);
        if(!dict[arr[ran]]){
            dict[arr[ran]]=true;
            ccc++;
        }else{
          ran=Math.floor(Math.random()*24);
        }
      }
      var cccc=0;
      for(var i in dict){
        need_src[cccc].src=i;
        cccc++;
      }
    })
		// var t=0;
		// var j=0;
		// $('.remen-w').click(function(){
		// 	j++;
		// 	$($('.remen-tu3')[t]).hide();
		// 	$($('.remen-tu3')[j]).show();
		// 	t=j;
		// 	if(j>=3){
		// 		j=-1;
		// 		t=3;
		// 	}
		// })

		// $('.dak').find('.xiaok:first').show();
		// var aa=$('.xiaok:first');
		// var m=0;
		// var timed=setInterval(function(){
		// 	m++;
		// 	aa.hide();
		// 	$($('.xiaok')[m]).show();
		// 	aa=$($('.xiaok')[m]);
		// 	if(m>4){m=-1};
		// 	console.log(m)
		// },2000)
		

	var index = 0;
	var arr=['#fb4463','#fcf3f8','#ff7E0f','#1271b3','#fecee8','#f94024'];
 	var lunbo  =  function(){
    $('.xiaok').hide();
    var el = $('.xiaok')[index];
    $(el).show();

    $('.yingcaa').hide();
    var el2=$('.yingcaa')[index];
    $(el2).show();

    $('.fenlei').css({background:arr[index]});
    
    $('.biaodian').removeClass('redd');
    $($('.biaodian')[index]).addClass('redd');

    index += 1;
    if( index === $('.xiaok').length ){
      index = 0;
    }
  }
  $('.biaodian').each(function(i){
    $(this).data('index',i)
  });

  $('.biaodian').hover(function(){
    clearInterval(timerId);
    $('.biaodian').removeClass('redd');
    $(this).addClass('redd');

    var i = $(this).data('index');
    $('.fenlei').css({background:arr[i]});
    $('.xiaok').hide();
    $( $('.xiaok')[i] ).show();

    $('.yingcaa').hide();
    $( $('.yingcaa')[i] ).show();

    index = i;
  },function(){
    clearInterval(timerId);
    timerId = setInterval(lunbo,1000);
  });
  var timerId = setInterval(lunbo,1000);



// -----------------------------小轮播------------------------
	var index_one = 0;
 	var lunbo_one  =  function(){
    $('.one').hide();
    var el = $('.one')[index_one];
    $(el).show();
    index_one += 1;
    if( index_one == $('.one').length ){
      index_one = 0;
    }
  }
// ----------------------箭头-------------------------------------
  $('.one').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.one').data('index');
  $('.jiantou_one').click(function(){
    clearInterval(timerId_one);
    $('.one').hide();
    $( $('.one')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_onel').click(function(){
    clearInterval(timerId_one);
    $('.one').hide();
    $( $('.one')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_one);
    timerId_one = setInterval(lunbo_one,1000);
  })
    var timerId_one = setInterval(lunbo_one,1000);

// -----------------------------二---------------------------
  var index_two = 0;
 	var lunbo_two  =  function(){
    $('.two').hide();
    var el = $('.two')[index_two];
     $(el).show();
    index_two += 1;
    if( index_two == $('.two').length ){
      index_two = 0;
    }
  }

  $('.two').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.two').data('index');
  $('.jiantou_two').click(function(){
    clearInterval(timerId_two);
    $('.two').hide();
    $( $('.two')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_twol').click(function(){
    clearInterval(timerId_two);
    $('.two').hide();
    $( $('.two')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_two);
    timerId_two = setInterval(lunbo_two,1000);
  })
    var timerId_two = setInterval(lunbo_two,1000);
// -----------三--------------------------------------------------

  var index_three = 0;
 	var lunbo_three  =  function(){
    $('.three').hide();
    var el = $('.three')[index_three];
     $(el).show();
    index_three += 1;
    if( index_three == $('.three').length ){
      index_three = 0;
    }
  }

  $('.three').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.three').data('index');
  $('.jiantou_three').click(function(){
    clearInterval(timerId_three);
    $('.three').hide();
    $( $('.three')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_threel').click(function(){
    clearInterval(timerId_three);
    $('.three').hide();
    $( $('.three')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_three);
    timerId_three = setInterval(lunbo_three,1000);
  })
    var timerId_three = setInterval(lunbo_three,1000);

// ----------------四-----------------------------------
  var index_four = 0;
 	var lunbo_four  =  function(){
    $('.four').hide();
    var el = $('.four')[index_four];
     $(el).show();
    index_four += 1;
    if( index_four == $('.four').length ){
      index_four = 0;
    }
  }

  $('.four').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.four').data('index');
  $('.jiantou_four').click(function(){
    clearInterval(timerId_four);
    $('.four').hide();
    $( $('.four')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_fourl').click(function(){
    clearInterval(timerId_four);
    $('.four').hide();
    $( $('.four')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_four);
    timerId_four = setInterval(lunbo_four,1000);
  })
    var timerId_four = setInterval(lunbo_four,1000);


// ---------------------------------五-------------------------------
  var index_five = 0;
 	var lunbo_five  =  function(){
    $('.five').hide();
    var el = $('.five')[index_five];
     $(el).show();
    index_five += 1;
    if( index_five == $('.five').length ){
      index_five = 0;
    }
  }

  $('.five').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.five').data('index');
  $('.jiantou_five').click(function(){
    clearInterval(timerId_five);
    $('.five').hide();
    $( $('.five')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_fivel').click(function(){
    clearInterval(timerId_five);
    $('.five').hide();
    $( $('.five')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_five);
    timerId_five = setInterval(lunbo_five,1000);
  })
    var timerId_five = setInterval(lunbo_five,1000);

// -------------------------------六-------------------------------------
  var index_six = 0;
 	var lunbo_six  =  function(){
    $('.six').hide();
    var el = $('.six')[index_six];
     $(el).show();
    index_six += 1;
    if( index_six == $('.six').length ){
      index_six = 0;
    }
  }
  $('.six').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.six').data('index');
  // console.log(i)
  $('.jiantou_six').click(function(){
    clearInterval(timerId_six);
    $('.six').hide();
    $( $('.six')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_sixl').click(function(){
    clearInterval(timerId_six);
    $('.six').hide();
    $( $('.six')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_six);
    timerId_six = setInterval(lunbo_six,1000);
  })
    var timerId_six = setInterval(lunbo_six,1000);
 

var ti;
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      clearTimeout(ti);
      ti = setTimeout(function(){
	$('.fixtop').show();
      },500);
    }else{
      clearTimeout(ti);
      $('.fixtop').hide();
    };
  });


$('.gdd').each(function(i){
    $(this).data('index',i)
  });
$('.gdd').hover(function(){
  var i = $(this).data('index');
  var arr=['#fecee8','#c1c1c1','#dfdfdf','#ffc0d3','#3288df','#ffa800','#d7ac82',
  '#dd2726','#24a6da','#ffc5d4','#29a6ff','#e4e2e3','#4a8cfc','#30c4ff','#d58668'];
  if(i==0){
    // $('.fenlei').css({background:''});
    $('.wanbiao').find('.hied').hide();
    $('.biaodian').show();
    $('.wanbiao').find('.dak').show();
    $('.yingcaa').show();
    clearInterval(timerId);
    lunbo();
    timerId = setInterval(lunbo,1000);
  return  }
  $('.fenlei').css({background:''});
  clearInterval(timerId); 
  $('.yingcaaa').hide();
  $('.wanbiao').find('.dak').hide();
  $('.biaodian').hide();
  $('.wanbiao').find('.hied').hide();
  $('.yingcaa').hide();
  $($('.yingcaaa')[i]).show();
  $('.wanbiao').find($('.hied')[i]).show();
  $('.fenlei').css({background:arr[i-1]});

},
function(){
  var i = $(this).data('index');
  if(i==0){return}
  clearInterval(timerId); 
 
}
  )


// $('.content.zhutibf').each(function(i){
//   $(this).data('index',i);
// });
// $(window).scroll(function(){
//   $('.content.zhutibf').hover(function(){
//     var i=$(this).data('index');
//     $($('.youcee')[i]).addClass(function(){
//       return 'p'+i;
//     })
//   },
//   function(){
//     var i=$(this).data('index');
//     $($('.youcee')[i]).removeClass(function(){
//       return 'p'+i;
//     })
//   }
//   )
// })



var arrr=[900,1402,1854,2420,2872,3324,3890,4342,4794,5370,5828,6228];
$(window).scroll(function(){
  var gaodu=$(window).scrollTop();
  $('.youcee').each(function(i){
   if(gaodu>=arrr[i]&&gaodu<arrr[i+1]){
    $($('.youcee')[i]).addClass('p'+i);
   }else{
    $($('.youcee')[i]).removeClass('p'+i);
   }
}) 
})
// $(window).scroll(function(){
//   var gaodu=$(window).scrollTop();
//   if(gaodu>=1150&&gaodu<1602){
//     $($('.youcee')[0]).addClass('p0')
//   }else{$($('.youcee')[0]).removeClass('p0')}

//   if(gaodu>=1620&&gaodu<2054){
//     $($('.youcee')[1]).addClass('p1')
//   }else{$($('.youcee')[1]).removeClass('p1')}

//   if(gaodu>=2054&&gaodu<2620){
//     $($('.youcee')[2]).addClass('p2')
//   }else{$($('.youcee')[2]).removeClass('p2')}

//   if(gaodu>=2620&&gaodu<3072){
//     $($('.youcee')[3]).addClass('p3')
//   }else{$($('.youcee')[3]).removeClass('p3')}

//   if(gaodu>=3072&&gaodu<3524){
//     $($('.youcee')[4]).addClass('p4')
//   }else{$($('.youcee')[4]).removeClass('p4')}

//   if(gaodu>=3524&&gaodu<4090){
//     $($('.youcee')[5]).addClass('p5')
//   }else{$($('.youcee')[5]).removeClass('p5')}

//   if(gaodu>=4090&&gaodu<4542){
//     $($('.youcee')[6]).addClass('p6')
//   }else{$($('.youcee')[6]).removeClass('p6')}

//   if(gaodu>=4542&&gaodu<4994){
//     $($('.youcee')[7]).addClass('p7')
//   }else{$($('.youcee')[7]).removeClass('p7')}

//   if(gaodu>=4994&&gaodu<5570){
//     $($('.youcee')[8]).addClass('p8')
//   }else{$($('.youcee')[8]).removeClass('p8')}

//   if(gaodu>=5570&&gaodu<6028){
//     $($('.youcee')[9]).addClass('p9')
//   }else{$($('.youcee')[9]).removeClass('p9')}

//   if(gaodu>=6028&&gaodu<6600){
//     $($('.youcee')[10]).addClass('p10')
//   }else{$($('.youcee')[10]).removeClass('p10')}
// })

document.onmousedown=function(e){
	e.preventDefault();
}
}
