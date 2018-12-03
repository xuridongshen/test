<template>
	<div class="tujian">
		<div class="swiper-container">
			<div class="swiper-content">
				<div class="swiper-slide">
                    <img src="http://p1.music.126.net/Ha9hieHAHu-6_em7QyCd0Q==/109951163695821964.jpg" alt="">
                </div>
				<div class="swiper-slide"></div>
				<div class="swiper-slide"></div>
                <div></div>
			</div>
		</div>
        <div class="tujian-contanier">

        </div>
        <div class="footer">

        </div>
	</div>
</template>
<style lang="less" scoped>
	.tujian {
		.swiper-container {
            height: 336px;
            background:url('http://p1.music.126.net/r3WCXUJMyfvyAAKCCL0wxA==/109951163695828702.jpg');
			.swiper-content {
                width: 982px;
                height: inherit;
                margin: 0 auto;
                background: #0008;
				.swiper-slide {
                    img{
                        width: 730px;
                        height: 336px;
                        vertical-align: middle;
                    }
                }
			}
        }
        .tujian-contanier{
            width: 982px;
            height: 500px;
            border: 1px solid #ccc;
            border-top-width: 0;
            border-bottom-width: 0;
            margin: 0 auto;
        }
        .footer{
            height: 149px;
            background: #f2f2f2;
        }
	}
</style>