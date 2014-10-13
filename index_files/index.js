$( document ).ready(function(){
	$('#aboutLink').click( 
		function() {
			$('#mainContent').html('\
				<h4>我们的故事，Privafit的故事</h4>\
				<p><br></p>\
				<div class="innerContent">\
					<p>Privafit是由派微科技有限公司推出的一款专注女性健身和社交的软件。</p>\
					<p>Privafit致力于为广大年轻女性量身定制，以健康、美丽、自信为核心向导的社交分享平台。</p>\
					<p>项目于2014年由美国硅谷和北京创立。</p>\
					<p>创始人团队全部为来自美国著名高校和国内顶尖互联网公司的热爱生活的女生。</p>\
				</div>'); 
			return false;
		} );
	$('#functionLink').click(
		function () {
			$('#mainContent').html('Privafit\
				为你带来最贴心的使用经历\
				Online+Offline\
				让健康美丽\
				渗透你的生活\
				分享与学习\
				在Privafit，我们将和你一起追求自由健康的快乐生活。\
				在Privafit，你可以发布新鲜事，运动打卡，制定个性化健身计划，找到与你目标相同的伙伴，还可以参与和组织线上及线下活动，包括健康讲座、健身聚会、美容沙龙、社交聚会等。\
				在Privafit，我们致力于帮用户找到适合自己的健身方式，找到有共同爱好的朋友，找到生活方式相近的群体。\
				在Privafit，每一个你都是最美丽的潜力股。通过你我的共同努力，相信我们会把健康、美丽、自信的信念带到每一个女孩子的生活中，给更多的人带来幸福和快乐');
			return false;
		});
	$('#contactLink').click(
		function() {
			$('#mainContent').html('\
				<p>Have something brilliant to share with us?</p>\
				<p>发现我们有可以改进的地方？</p>\
				<p>有更好的想法想和我们一起实现或由我们帮你实现？</p>\
				<p>要想成为我们的一员并帮助其他妹子一起变美？</p>\
				<p><br></p>\
				<p>任何你想说的，我们都愿意倾听！欢迎联络！</p>\
				<div class="innerContent">\
					<form >\
							Name: <input type="text" name="name"><br>\
							Email: <input type="text" name="email"><br>\
							Subject: <input type="text" name="subject"><br>\
							Message: <input type="text" name="message"><br>\
							<input type="submit" value="Submit"><br>\
					</form>\
				</div>');
			return false;
		});

	$('#homeLink').click(
		function() {
			$('#mainContent').html('\
				<h4>在Privafit</h4>\
				<p></br></p>\
				<div class="innerContent">\
					<p>每个人都越来越美丽，越来越自信，越来越健康</p>\
					<p>给自己一个机会，找到和你一起进步的伙伴！</p>\
					<p>最不一样的美女app，你的私人健身闺蜜</p>\
					<p>Trust us－</p>\
					<p>We know what you want</p>\
					<p>We build what you need</p>\
				</div>');
			return false;
		});
})
