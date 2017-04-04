var Todo = React.createClass({
	render:function(){
		var content = this.props.children;
		var t = new Date();
		t = t.toLocaleString();
		var oi = content.indexOf(" ");
		var name = '';
		if(oi !== -1){
			name = content.slice(0,oi);
			content = content.slice(oi+1, content.length)
		}

	}
})