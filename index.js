 
 
  
  
 
  
 
  document.getElementById('noakali-donate-btn').addEventListener("click",function(){
    const total = getTextFieldById("total-balance");
     const inputNoakali=getInputFieldValueById("n-input-donation");
     const giveNoakali = getTextFieldById("give-noakali");




     if(isNaN!==inputNoakali && inputNoakali <= total){
      // const donationNoakali=inputNoakali + giveNoakali;
      const donationNoakali=inputNoakali + giveNoakali;
    
      document.getElementById('give-noakali').innerText=donationNoakali;
      const newbalance = total - inputNoakali;
      document.getElementById('total-balance').innerText = newbalance;
      document.getElementById('n-input-donation').value='';

      const remove =document.getElementById('modal');
       remove.classList.remove('hidden');
     }else{
       alert('please type valid input')
       const remove =document.getElementById('modal');
       remove.classList.add('hidden');
       document.getElementById('n-input-donation').value='';

     }
  })

   
  document.getElementById('fani-donate-btn',).addEventListener("click",function(){
     const total = getTextFieldById("total-balance");
    const givefani = getTextFieldById("give-fani");
    const inputfani=getInputFieldValueById("f-input-donation" );
     let deduct = 0;
     if(isNaN!==inputfani && inputfani <= total){
       const donation=inputfani +givefani;
       document.getElementById('give-fani').innerText = donation;
       const newbalance =total -inputfani ;

       document.getElementById('total-balance').innerText = newbalance;

       document.getElementById('f-input-donation').value='';

       const remove =document.getElementById('modal');
       remove.classList.remove('hidden');
     }else {
      
      alert('invalid input')
      const remove =document.getElementById('modal');
      remove.classList.add('hidden');
      document.getElementById('f-input-donation').value='';
    }
  })

 
  document.getElementById('qouta-donate-btn').addEventListener('click',function (){
    const giveQuota = getTextFieldById("give-quota");
    const total = getTextFieldById("total-balance");
    const inputquota=getInputFieldValueById("q-input-donation");
    const newbalance = total - inputquota;
    if( isNaN !== inputquota && inputquota <= newbalance) {

      const givemoney= giveQuota +inputquota;
      document.getElementById('give-quota').innerText =givemoney;
      
      document.getElementById('total-balance').innerText =newbalance;
      document.getElementById('q-input-donation').value='';

      const remove =document.getElementById('modal');
       remove.classList.remove('hidden');

       document.getElementById('')

    }else {
      
      alert('invalid input')
      const remove =document.getElementById('modal');
      remove.classList.add('hidden');
      document.getElementById('q-input-donation').value='';
    }

  })

  const history=document.getElementById('history-id');
  history.addEventListener('click',function (){

    const main =document.getElementById('main-d');
    main.classList.add('hidden');

    const move =document.getElementById('history');
    move.classList.remove('hidden');
    
    const mov =document.getElementById('donationid');
    mov.classList.remove('color1');

    
    const ove =document.getElementById('history-id');
    ove.classList.add('color1');
  
  })


  const donation=document.getElementById('donationid');
  donation.addEventListener('click',function (){
    document.getElementById('main-d').classList.remove('hidden');

    document.getElementById('donationid').classList.add('color1');
    document.getElementById('history-id').classList.remove('color1');


    document.getElementById('history').classList.add('hidden');
    
    

  })


  
