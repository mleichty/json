$.getJSON("data/data.json", function(data){
    console.log(data);
    // let head = $("<div class='head'></div>");
    // head.html(data.header);
    $('.head').html(data.header);

    $('.pic').each(function(idx){
        $(this).html("<img src='images/" + data.sections[idx].image + "'/>");
        if(data.sections[idx].image == "") {
            $(this).html("No image available");
        }
    });
    $('.name').each(function(idx){
        $(this).html(data.sections[idx].name);
    });
    $('.price').each(function(idx){
        $(this).html(data.sections[idx].price);
        if(data.sections[idx].price > 100) {
            $(this).css('color','orange');
        };
    });
    $('section').each(function(idx){
        if(data.sections[idx].stock == 0) {
            $(this).css('opacity', '0.4');
        };
    });
    $('.stock').each(function(idx){
        if(data.sections[idx].stock == 0) {
            $(this).html("Out of Stock");
            $(this).css('color', 'red');
            $(this).css('border', '2px solid red');
        } else if (data.sections[idx].stock < 10) {
            $(this).html("Low Stock");
            $(this).css('color', 'red');
            $(this).css('border', '2px solid red');
        } else {
            $(this).html ("In Stock");
            $(this).css('border', '2px solid green');
        };
    });
    // $('.text').each(function(idx){
    //    $(this).css('background-color', data.sections[idx].color);
    // });
});