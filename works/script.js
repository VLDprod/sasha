function my_funcs() {
    let one_jw =  document.getElementsByClassName("one_link");
    for(var i=0; i<one_jw.length; i++)one_jw[i].style.display='inline-block';
}
function my_funcs1() {
    let two_jw = document.getElementsByClassName("two_link");
    for(var i=0; i<two_jw.length; i++)two_jw[i].style.display='inline-block';
}
function my_funcs2() {
    let three_jw = document.getElementsByClassName('three_link');
    for(var i=0; i<three_jw.length; i++)three_jw[i].style.display='inline-block';
}
function back_l() {

        let one_jw =  document.getElementsByClassName("one_link");
        let two_jw = document.getElementsByClassName("two_link");
        let three_jw = document.getElementsByClassName('three_link');
        
        for(var i=0; i<one_jw.length; i++)one_jw[i].style.display='none';
        for(var i=0; i<two_jw.length; i++)two_jw[i].style.display='none';
        for(var i=0; i<three_jw.length; i++)three_jw[i].style.display='none';
    
}




