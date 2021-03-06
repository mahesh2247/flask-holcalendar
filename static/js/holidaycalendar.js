    $( ".flexdatalist" ).flexdatalist({
    	searchIn: 'Name',
        visibleProperties: ["Name","Location"],
        textProperty:'{Name}, {Location}',
    	data: './assets/companies.json',
        valueProperty : ["Name", "Location" ]
    });

    /*Goto next textbox onkeypress enter event*/
    $(function()
    {
        $('[data-toggle="popover"]').popover({
            trigger:'hover'
        });
        $(".flexdatalist").on("select:flexdatalist",function()
        {
            $("#submit_form").submit();
        });
        $('#name_box').keypress(function(event)
            {
                var keycode=event.which;
                if(keycode==13)
                {
                    $('#email_box').focus();
                }
            });
        
        $('#email_box').keypress(function(event)
        {
            var keycode=event.which;
            if(keycode==13)
            {
                $('#sub_box').focus();
            }
        });

        $('#sub_box').keypress(function(event)
        {
            var keycode=event.which;
            if(keycode==13)
            {
                $('#mes_box').focus();
            }
        });
   });

    