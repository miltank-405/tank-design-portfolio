// menu
$(function () {
	var $menu = $(".menu");
	var $gNav = $(".g-nav");
	$menu.click(function() {
		$(this).toggleClass("open");
		$gNav.toggleClass("on");
	});
	$(document).on('click touchend', function(event) {
		// メニュー以外をクリックした場合
		if (!$menu.is(event.target) && !$menu.has(event.target).length &&
			!$gNav.is(event.target) && !$gNav.has(event.target).length) {
		// メニューを閉じる
		$gNav.removeClass('on');
		$menu.removeClass('open');
		}
	});
});

// contact
$(function() {
	var $menu = $(".contact");
	var $gNav = $(".contact-wrapper");
	$menu.click(function() {
		$(this).toggleClass("open");
		$gNav.toggleClass("contact-wrapper-on");
	});
	$(document).on('click touchend', function(event) {
		if (!$menu.is(event.target) && !$menu.has(event.target).length &&
			!$gNav.is(event.target) && !$gNav.has(event.target).length) {
		$gNav.removeClass('contact-wrapper-on');
		$menu.removeClass('open');
		}
	});
});

// 封筒パッカーん
(function (d) {
	var config = {
		kitId: 'dzg4qzb',
		scriptTimeout: 3000,
		async: true
	},
		h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);






