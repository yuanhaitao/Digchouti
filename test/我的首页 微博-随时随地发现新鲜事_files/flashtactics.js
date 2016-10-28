// flash js 执行模板
(function () {
   
	/**
	 * isFlashOn 这个方法确定用户是否会需要加载flash
	 * @param  {String}  uid 用户uid
	 * @return {Boolean} 是否用户会执行flash
	 */
	function isFlashOn (uid) {
		return false;
		var tmp_uid = parseInt((uid % 100)/10);
		if(tmp_uid == 4)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * 返回flash的html模版
	 * @return {String} flash的html模版
	 */

	function flashTemplate () {
		 return '<embed allowscriptaccess="always" height="500" pluginspage="http://get.adobe.com/cn/flashplayer/" flashvars="list=p2ptest" allowfullscreen="true" width="480" height="480" quality="high" src="http://js.t.sinajs.cn/t5/album/static/swf/video/dorking.swf?v4" type="application/x-shockwave-flash" wmode="transparent">';
	}

	window.__addFlashForP2P(isFlashOn(window.$CONFIG.uid), flashTemplate());

	}()
);



                         
