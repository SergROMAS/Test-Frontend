 $(document).on('ready', function() {

 	$(".regular").slick({
 		dots: true,
 		infinite: true,
 		slidesToShow: 3,
 		slidesToScroll: 3,
 		rows: 2,
 		responsive: [
 		{
 			breakpoint: 1157,
 			settings: {
 				
 				slidesToShow: 2,
 				slidesToScroll: 3,
 				rows: 2,
 				infinite: true
 			}
 		},
 		{
 			breakpoint: 927,
 			settings: {
 				arrows:false,
 				slidesToShow: 2,
 				slidesToScroll: 2,
 				rows: 2
 			}
 		},
 		{
 			breakpoint: 891,
 			settings: {
 				arrows:false,
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				rows: 1
 			}
 		},
 		{
 			breakpoint: 320,
 			settings: {
 				arrows:false,
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				rows: 1
 			}
 		}

 		]
 	});

 });