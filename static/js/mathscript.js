

calculateBtn = document.querySelector('#button_calculate');

calculateBtn.addEventListener('click',function(e){

    txtRADIUS = document.querySelector('#value_radius');
    txtAREA = document.querySelector('#value_area');

    let radius;
     
    area = 3.14*parseFloat(txtRADIUS.value)*parseFloat(txtRADIUS.value);

    txtAREA.value = area;

});
