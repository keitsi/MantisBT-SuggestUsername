$('#bug_monitor_list_user_to_add').tagsInput({
	'autocomplete_url': 'plugin.php?page=SuggestUsername/search',
	'height': 'auto',
    'width': '50%',
    'interactive': true,
	'defaultText':'',
	'minChars': '3',
});
$('#bug_monitor_list_user_to_add').css('visibility', 'hidden');
