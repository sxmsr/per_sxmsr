<script type="text/javascript">
		var msg="sxmsr'home    "
		var delay=500
	function scorllmsg(){

		window.document.title=msg
		msg=msg.substring(1,msg.length)+msg.substring(0,1)
		timeID=setTimeout("scorllmsg()",delay)
	}
</script>