var Todo = React.createClass({
	render:function(){
		var content = this.props.children;
		var t = new Date();
		t = t.toLocaleString();
		var oi = content.indexOf(" ");
		var name = '';
		if(oi !== -1){
			name = content.slice(0,oi);
			content = content.slice(oi+1, content.length);
		}
		name = name || "Anonymous";
		return(
			<li>
				<div>
					<a href="#">
						<img src="http://tp3.sinaimg.cn/1820553510/50/40005020635/0" alt="placeholder+image">
					</a>
				</div>
				<div>
				   <div>
					   <strong><a href="#">{name}</a></strong>
				   </div>
				</div>
			</li>
			)

	}
})