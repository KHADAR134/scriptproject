

calculateBtn = document.querySelector('#button_calculate');

calculateBtn.addEventListener('click',function(e){

    txtRADIUS = document.querySelector('#value_radius');
    txtHEIGHT = document.querySelector('#value_height');
    txtVOLUME = document.querySelector('#value_volume');
    

    let volume;
     
    volume = 3.14*parseFloat(txtRADIUS.value)*parseFloat(txtRADIUS.value)*parseFloat(txtHEIGHT.value);

    txtVOLUME.value = volume;

});
